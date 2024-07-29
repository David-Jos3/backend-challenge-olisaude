import { HealthProblem } from "@/entities/health-problem"
import { HealthProblemRepository } from "@/repositories/health-problem-repository"

interface CreateHealthProblemUseCaseRequest {
  clientId: string;
  name: string
  severity: number
}

interface CreateHealthProblemUseCaseResponse {
  healthProblem: HealthProblem
}

export class CreateHealthProblemUseCase {

  constructor(private healthProblemRepository: HealthProblemRepository ) {}

  async execute({ clientId, name, severity}: CreateHealthProblemUseCaseRequest): Promise<CreateHealthProblemUseCaseResponse> {
    const healthProblem = new HealthProblem({ clientId, name, severity })
    await this.healthProblemRepository.create(healthProblem)
    return { healthProblem }
  }
} 