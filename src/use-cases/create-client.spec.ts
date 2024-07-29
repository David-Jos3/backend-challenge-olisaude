import { InMemoryClientRepository } from './../../test/repositories/in-memory-client'
import { describe, test, beforeEach, expect } from 'vitest'
import { CreateClientUseCase } from './create-client'

let inMemoryClientRepository: InMemoryClientRepository
let createClientUseCase: CreateClientUseCase

describe('Create Client', () => {
  beforeEach(() => {
    inMemoryClientRepository = new InMemoryClientRepository()
    createClientUseCase = new CreateClientUseCase(inMemoryClientRepository)
  })

  test('should be able to create a client', async () => {
    const {client} = await createClientUseCase.execute({
      name: 'John Doe',
      sex: 'Male',
      healthProblems: [],
      birthDate: new Date(),
      createdAt: new Date(),
    })

    await inMemoryClientRepository.findById(client.id.toString())
    expect(client?.name).toEqual('John Doe')
      
  })
})
