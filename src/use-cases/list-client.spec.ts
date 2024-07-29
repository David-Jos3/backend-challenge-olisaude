
import { InMemoryClientRepository } from "test/repositories/in-memory-client"
import { describe, test, beforeEach, expect } from "vitest"
import { Client } from "@/entities/client"
import { ListClientUseCase } from "./list-client"

let  inMemoryClientRepository: InMemoryClientRepository
let listClientUseCase: ListClientUseCase

describe('List all clients',() => {
  beforeEach(() => {
    inMemoryClientRepository = new InMemoryClientRepository()
    listClientUseCase = new ListClientUseCase(inMemoryClientRepository)
  })

  test('should return all clients', async () => {
    let createClients;
    for(let i = 0; i < 10; i++) {
      createClients = await inMemoryClientRepository.create(new Client({
        name: `Customer ${i}`,
        sex: "Male",
        healthProblems: [],
        birthDate: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
      }))
    }
    const { clients } = await listClientUseCase.execute()
    expect(clients.length).toBe(10)
  })
})