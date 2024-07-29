import { InMemoryHealthProblem } from './../../test/repositories/in-memory-health-problem';
import {describe, test, expect, beforeEach} from 'vitest'
import { CreateHealthProblemUseCase } from './create-health-problem';


let inMemoryHealthProblem: InMemoryHealthProblem
let createHealthProblemUseCase: CreateHealthProblemUseCase


describe('Create Health Problem', () => {
  beforeEach(() => {
    inMemoryHealthProblem = new InMemoryHealthProblem()
    createHealthProblemUseCase = new CreateHealthProblemUseCase(inMemoryHealthProblem)
  })

  test('should be able to create health problem', async () => {
    const {healthProblem} = await createHealthProblemUseCase.execute({
      clientId: 'client',
      name: 'Hypertension',
      severity: 3,
    })

    expect(healthProblem.name).toEqual('Hypertension')
    expect(healthProblem.severity).toEqual(3)
  })
})