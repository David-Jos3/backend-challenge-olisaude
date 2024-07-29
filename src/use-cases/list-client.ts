import { Client } from "@/entities/client";
import { ClientRepository } from "@/repositories/client-repository";


interface ListClientUseCaseResponse {
  clients: Client[]
}


export class ListClientUseCase {
  constructor(private clientRepository: ClientRepository) {}

  async execute(): Promise<ListClientUseCaseResponse> {
    const clients = await this.clientRepository.findAll() || []
    
    return { clients }
  }
}