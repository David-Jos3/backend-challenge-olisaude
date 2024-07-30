import { PrismaClientRepository } from "@/repositories/prisma/prisma-client-repository";
import { IGetClientController } from "../ contracts/client-get-interface";
import { IHttpContext } from "@/http/interfaces/http-context";
import { ListClientUseCase } from "@/use-cases/list-client";


export class  GetClientController  implements  IGetClientController {

 async findAll(ctx: IHttpContext ): Promise<void> {
    try {
      const clientRepository = new  PrismaClientRepository()
        const listClientUseCase = new ListClientUseCase(clientRepository)
        const clients = await listClientUseCase.execute()
        ctx.send(200, {clients} ) 

    } catch(error) {
    
        ctx.send(500, { error: 'An error occurred while fetching clients.' });
    }
  }


}