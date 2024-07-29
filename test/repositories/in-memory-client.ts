import { Client } from '@/entities/client'
import { ClientRepository } from '@/repositories/client-repository'

export class InMemoryClientRepository implements ClientRepository {
  private client: Client[] = []

  async create(client: Client) {
    this.client.push(client)
    return client
  }

  async findById(id: string) {
    const client = this.client.find((client) => client.id.toString() === id)
    if(!client) {
      return null
    }
    return client
  }

  async findAll() {
    return this.client
  }

  async delete(id:string) {
    this.client = this.client.filter((client) => client.id.toString() !== id)
  }

  async update(client: Client) {
    const index = this.client.findIndex((c) => c.id.toString() === client.id.toString())
    if(index !== -1) {
      this.client[index] = client
    }
  }
}
