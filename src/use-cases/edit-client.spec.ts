import { InMemoryClientRepository } from './../../test/repositories/in-memory-client';
import {beforeEach, describe, expect, test} from "vitest"
import { EditClientUseCase } from './edit-client';
import { Client } from '@/entities/client';

let inMemoryClientRespository: InMemoryClientRepository
let editClientUseCase: EditClientUseCase

describe('Edit  Client Data', () => {
  beforeEach(() => {
    inMemoryClientRespository = new InMemoryClientRepository()
    editClientUseCase = new EditClientUseCase(inMemoryClientRespository)
  })

  test('should be able to edit client data', async () => {
    const client = await inMemoryClientRespository.create(new Client({
      name: "Customer",
      sex: "Male",
      healthProblems:[],
      birthDate: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    }))
    
    await editClientUseCase.execute({
      id: client.id.toString(),
      name: 'Customer edited',
      sex: 'Men',
    })

    expect(client.name).toBe('Customer edited')
    expect(client.sex).toBe('Men')
  })

  test('should be able to id existing', async () => {

    expect( async () => await editClientUseCase.execute({
      id: 'id-client',
      name: 'Customer edited',
      sex: 'Men',
    })).rejects.toBeInstanceOf(Error)
  })
})