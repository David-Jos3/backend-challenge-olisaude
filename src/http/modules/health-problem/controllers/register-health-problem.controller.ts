import { PrismaHealthProblemRepository } from './../../../../repositories/prisma/prisma-health-problem-repository';
import { IHttpContext } from "@/http/interfaces/http-context";
import { IRegisterHealthProblemController } from "../contracts/get-health-problem-interface";
import { CreateHealthProblemUseCase } from '@/use-cases/create-health-problem';


export class RegisterHealthProblemController implements IRegisterHealthProblemController  {

  async register(ctx: IHttpContext) {
    const { clientId, name, severity } = ctx.getRequest().body
    try {
      const  prismaHealthProblemRepository = new  PrismaHealthProblemRepository()
      const createHealthProblemUseCase = new CreateHealthProblemUseCase(prismaHealthProblemRepository)
      await createHealthProblemUseCase.execute({ clientId, name, severity })
      ctx.send(201, { message: 'Health problem registered successfully' });
    } catch(error) {
      ctx.send(500, { error: 'An error occurred while registering health problem.' });
    }
  }
}