import { UniqueEntityID } from "@/core/entities/unique-entity-id";
import { ClientRepository } from "@/repositories/client-repository";

interface DeleteClientUseCaseRequest {
  id: UniqueEntityID
}

type DeleteClientUseCaseResponse = object | Error

export class DeleteClientUseCase {
  constructor(private clientRepository: ClientRepository) {}

  async execute({id}: DeleteClientUseCaseRequest):Promise<DeleteClientUseCaseResponse> {
    const clientExists = await this.clientRepository.findById(id.toString())

    if(!clientExists) {
      throw new Error('Client not found')
    }

    await this.clientRepository.delete(clientExists.id.toString())

      return {}
  }
}