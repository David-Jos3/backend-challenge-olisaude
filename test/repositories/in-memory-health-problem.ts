import { HealthProblem } from "@/entities/health-problem";
import { HealthProblemRepository } from "@/repositories/health-problem-repository";


export class InMemoryHealthProblem implements HealthProblemRepository {
   private healthProblem: HealthProblem[] = []

  async create(healthProblem: HealthProblem) {
    this.healthProblem.push(healthProblem)
    return healthProblem
  }
}