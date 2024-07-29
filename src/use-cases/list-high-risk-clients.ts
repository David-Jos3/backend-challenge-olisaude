import { ClientRepository } from "@/repositories/client-repository";

export class ListHighRiskClientUseCase {
  constructor(private clientRepository: ClientRepository) {}

  async execute() {
    const clients = await this.clientRepository.findAll() || []
    const clientsWithHighRisk = clients.map((client) => {
      const sd = client.healthProblems.reduce((acc, problems) => acc + problems.severity, 0 )
      const score = (1 / (1 + Math.exp(-(-2.8 + sd )))) * 100
      return {...client, riskScore: score }
    })

    const tenClientsWithHighRisk = clientsWithHighRisk
    .sort((a, b) => a.riskScore - b.riskScore)
    .slice(0, 10)

    return {clients: tenClientsWithHighRisk}
  }

}