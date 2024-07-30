import { IHttpContext } from "@/http/interfaces/http-context";
import { IGetHighRiskClientController } from "../ contracts/client-get-high-risk-interface";
import { PrismaClientRepository } from "@/repositories/prisma/prisma-client-repository";
import { ListHighRiskClientUseCase } from "@/use-cases/list-high-risk-clients";


export class GetHighRiskClientsController implements IGetHighRiskClientController {
 async findHighRisk(ctx: IHttpContext) {
    try {
      const clientRepository = new  PrismaClientRepository()
      const getClientsByHighRiskUseCase = new ListHighRiskClientUseCase(clientRepository)
    const clientByHighRisk =  await getClientsByHighRiskUseCase.execute()
      ctx.send(200,{clientByHighRisk} );
    } catch (error) {
      ctx.send(500, 'Internal Server Error');
    }
  }
  
}