import { HealthProblem } from "@/entities/health-problem";

export interface HealthProblemRepository {
  create(healthProblem: HealthProblem): Promise<HealthProblem>
}