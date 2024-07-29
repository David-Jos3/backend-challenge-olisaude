import { InMemoryClientRepository } from 'test/repositories/in-memory-client';
import { describe, test, expect, beforeEach } from "vitest";
import { DeleteClientUseCase } from './delete-client';
import { Client } from '@/entities/client';

let inMemoryClientRepository: InMemoryClientRepository
let deleteClientUseCase: DeleteClientUseCase

describe("Delete Client ", () => {
  beforeEach(() => {
    inMemoryClientRepository = new InMemoryClientRepository()
    deleteClientUseCase = new DeleteClientUseCase(inMemoryClientRepository)
  })

  test('should be able to delete client by id', async () => {
    const createClient = await inMemoryClientRepository.create(new Client({
      name: "Customer",
      sex: "Male",
      healthProblems:[],
      birthDate: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    }))

   await deleteClientUseCase.execute({ id: createClient.id.toString() })
   const allClients = await inMemoryClientRepository.findAll()
   expect(allClients).toHaveLength(0)
 
  })
})


