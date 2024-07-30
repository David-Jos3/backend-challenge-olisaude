import { CreateClientUseCase } from "@/use-cases/create-client";
import { PrismaClientRepository } from "@/repositories/prisma/prisma-client-repository";
import { RegisterClientDTO } from "@/dtos/client-dto";
import { IHttpContext } from "@/http/interfaces/http-context";
import { IRegisterClientController } from "../ contracts/client-register-interface";


export class RegisterClientController implements IRegisterClientController {
  async register(ctx: IHttpContext) {
    const { name, sex, birthDate, healthProblems  ,createdAt }:RegisterClientDTO = ctx.getRequest().body
      try {
        const clientRepository = new  PrismaClientRepository()
        const createClientUseCase = new CreateClientUseCase(clientRepository)
        await createClientUseCase.execute(
          {
            name, 
            sex, 
            birthDate,
            healthProblems: [], 
            createdAt
          })
     
        ctx.send(201,{message: 'client created with succesfuly' })

      }catch(error) {
        console.log(error)
        ctx.send(500, { error: 'An error occurred while creating the client.' })
      }
      }
  } 
