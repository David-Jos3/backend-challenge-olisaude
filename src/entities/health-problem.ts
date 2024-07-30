import { Entity } from '@/core/entities/entity'

export interface HealthProblemProps {
  clientId: string
  name: string
  severity: number
}

export class HealthProblem extends Entity<HealthProblemProps> {
  get name() {
    return this.props.name
  }

  get severity() {
    return this.props.severity
  }

  get clientId() {
    return this.props.clientId
  }

  set name(name: string) {
    this.props.name = name
  }

  set severity(severity: number) {
    this.props.severity = severity
  }
}
