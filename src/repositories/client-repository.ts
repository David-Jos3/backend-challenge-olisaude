import { Client } from '@/entities/client'

export interface ClientRepository {
  create(client: Client): Promise<Client >
  findById(id: string): Promise<Client | null>
  findAll(): Promise<Client[] | null >
  delete(id: string): Promise<void>
  update(client: Client): Promise<void>
}
