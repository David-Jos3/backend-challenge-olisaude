import { InMemoryClientRepository } from 'test/repositories/in-memory-client';
import { describe, test, beforeEach, expect } from "vitest";
import { ListHighRiskClientUseCase } from './list-high-risk-clients';
import { Client } from '@/entities/client';
import { HealthProblem } from '@/entities/health-problem';

let  inMemoryClientRepository: InMemoryClientRepository
let  listHighRiskClientUseCase: ListHighRiskClientUseCase

describe('List High risk clients', () => {
  beforeEach(() => {
    inMemoryClientRepository = new InMemoryClientRepository()
    listHighRiskClientUseCase = new ListHighRiskClientUseCase(inMemoryClientRepository)
  })
  test('should be able to list 10 clients at highest health risk', async () => {
    for(let i = 0; i < 10; i++) {

      const client = new Client({
        name: `Customer ${i}`,
        sex: "Male",
        healthProblems: [],
        birthDate: new Date(),
      })
      await inMemoryClientRepository.create(client)
      
      const healthProblem = new HealthProblem({
        name: `Health Problem ${i}`,
        severity: i,
        clientId: client.id.toString(),
      })

      client.healthProblems.push(healthProblem)
    }
    const { clients } = await listHighRiskClientUseCase.execute()
    expect(clients.length).toBe(10)
  })
})

