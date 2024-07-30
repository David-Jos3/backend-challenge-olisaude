
import { PrismaClientRepository } from "@/repositories/prisma/prisma-client-repository";
import { IDeleteClientController } from "../ contracts/client-delete-interface";
import { IHttpContext } from "@/http/interfaces/http-context";
import { DeleteClientUseCase } from "@/use-cases/delete-client";
import { UniqueEntityID } from "@/core/entities/unique-entity-id";

export class DeleteClientController implements IDeleteClientController {
  
  async delete(ctx: IHttpContext): Promise<void> {
   try {
    const clientRepository = new PrismaClientRepository();
    const deleteClientUseCase = new DeleteClientUseCase(clientRepository);
    const { id } = ctx.getRequest().params;
    await deleteClientUseCase.execute({ id:  new UniqueEntityID(id) });
    ctx.send(204, {message: "Client deleted successfully"});

   } catch (error) {
     ctx.send(500, { error: 'An error occurred while deleting client.' });
   }
  }
 
}