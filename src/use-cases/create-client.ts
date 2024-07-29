import { Client } from '@/entities/client'
import { HealthProblem } from '@/entities/health-problem'
import { ClientRepository } from '@/repositories/client-repository'

interface CreateClietUseCaseRequest {
  name: string
  sex: string
  healthProblems?: HealthProblem[]
  birthDate: Date
  createdAt: Date
  updatedAt?: Date
}

interface CreateClietUseCaseResponse {
  client: Client
}

export class CreateClientUseCase {
  constructor(private clientRepository: ClientRepository) {}

  public async execute({
    name,
    sex,
    healthProblems,
    birthDate,
  }: CreateClietUseCaseRequest): Promise<CreateClietUseCaseResponse> {
    const client = new Client({
      name,
      sex,
      birthDate,
      healthProblems,
      createdAt: new Date(),
    })

   await this.clientRepository.create(client)

    return { client }
  }
}
