import { UniqueEntityID } from "@/core/entities/unique-entity-id";
import { Client } from "@/entities/client";
import { ClientRepository } from "@/repositories/client-repository";

interface GetClientByIdUseCaseRequest {
  id: UniqueEntityID
}

interface GetClientByIdUseCaseResponse {
  client: Client
}

export class GetClientByIdUseCase {
  constructor(private clientRepository: ClientRepository) {}

  async execute({id}: GetClientByIdUseCaseRequest): Promise<GetClientByIdUseCaseResponse> {
     const client = await this.clientRepository.findById(id.toString())
    if (!client) {
      throw new Error('Client not found')
    }
    return { client }
  }
}