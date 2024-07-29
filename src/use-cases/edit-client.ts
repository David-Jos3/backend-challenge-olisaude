import { UniqueEntityID } from "@/core/entities/unique-entity-id";
import { Client } from "@/entities/client";
import { ClientRepository } from "@/repositories/client-repository";

interface EditClientUseCaseRequest {
  id: UniqueEntityID;
  name?: string;
  birthDate?: Date;
  sex?: string;
}

type EditClientUseCaseResponse = {client: Client} | Error

export class EditClientUseCase {
  constructor(private clientRepository: ClientRepository) {}

  async execute({id , name, birthDate, sex}: EditClientUseCaseRequest) : Promise<EditClientUseCaseResponse> {
    
      const client = await this.clientRepository.findById(id.toString())
      console.log(`CASOS DE USO EditClientUseCase.execute - id: ${id}, name: ${name}, birthDate: ${birthDate}, sex: ${sex}`);
      if (!client) {
        throw new Error('Client not found')
      }
      client.name = name || client.name
      client.sex = sex || client.sex
      client.birthDate = birthDate || client.birthDate
      await this.clientRepository.update(client)
      return { client }
  }
  }
