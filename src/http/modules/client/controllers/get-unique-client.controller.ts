
import { PrismaClientRepository } from "@/repositories/prisma/prisma-client-repository";
import { IHttpContext } from "@/http/interfaces/http-context";
import { IGetUniqueClientController } from "../ contracts/client-get-unique-interface";
import { GetClientByIdUseCase } from "@/use-cases/get-client-by-id";
import { UniqueEntityID } from "@/core/entities/unique-entity-id";



export class  GetUniqueClientController  implements  IGetUniqueClientController{

 async findUnique(ctx: IHttpContext ): Promise<void> {
    try {
      const {id} = ctx.getRequest().params
      const clientRepository = new  PrismaClientRepository()
        const getClientByIdClientUseCase = new  GetClientByIdUseCase(clientRepository)
        const clients = await getClientByIdClientUseCase.execute({id: new UniqueEntityID(id)})
        ctx.send(200, {clients} ) 

    } catch(error) {
    
        ctx.send(500, { error: 'An error occurred while fetching clients.' });
    }
  }


}