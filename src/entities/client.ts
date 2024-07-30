import { HealthProblem } from './health-problem'
import { Entity } from '@/core/entities/entity'

export interface ClientProps {
  name: string
  sex: string
  birthDate: Date
  healthProblems?: HealthProblem[]
  createdAt?: Date
  updatedAt?: Date
}

export class Client extends Entity<ClientProps> {
  get name() {
    return this.props.name
  }

  get sex() {
    return this.props.sex
  }

  get healthProblems() {
    return this.props.healthProblems || []
  }

  get birthDate() {
    return this.props.birthDate
  }

  get createdAt() {
    return this.props.createdAt
  }

  get updatedAt() {
    return this.props.updatedAt
  }

  set name(name: string) {
     this.props.name = name
  }

  set sex(sex: string) {
    this.props.sex = sex
  }

  set birthDate(birthDate) {
     this.props.birthDate = birthDate
  }

  set healthProblems(healthProblems: HealthProblem[]) {
    this.props.healthProblems = healthProblems
 }

}
