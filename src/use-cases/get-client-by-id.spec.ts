import { describe, beforeEach, test, expect } from "vitest";
import { GetClientByIdUseCase } from "./get-client-by-id";
import { InMemoryClientRepository } from "test/repositories/in-memory-client";
import { Client } from "@/entities/client";
import { UniqueEntityID } from "@/core/entities/unique-entity-id";

let  inMemoryClientRepository: InMemoryClientRepository
let getClientByIdUseCase: GetClientByIdUseCase


describe('Get Client by id', () => {
  beforeEach(() => {
    inMemoryClientRepository = new  InMemoryClientRepository()
    getClientByIdUseCase = new GetClientByIdUseCase(inMemoryClientRepository)
  })

  test(" should be able to get a customer by id", async () => {
      const createClient = await inMemoryClientRepository.create(new Client({
        name: "Customer",
        sex: "Male",
        healthProblems:[],
        birthDate: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
      }))

      const { client } = await getClientByIdUseCase.execute({ id: createClient.id })
      expect(client?.name).toEqual("Customer")
  })

  test('should not be able to get client with wrong id', async () => {
    await expect(() =>
      getClientByIdUseCase.execute({
        id: new UniqueEntityID('non-existing-id'),
      }),
    ).rejects.toBeInstanceOf(Error)
  })
})