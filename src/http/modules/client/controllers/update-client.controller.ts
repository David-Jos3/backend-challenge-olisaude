import { IHttpContext } from "@/http/interfaces/http-context";
import { IUpdateClientController } from "../ contracts/client-update-interface";
import { PrismaClientRepository } from "@/repositories/prisma/prisma-client-repository";
import { EditClientUseCase } from "@/use-cases/edit-client";
import { UniqueEntityID } from "@/core/entities/unique-entity-id";


export class UpdateClientController implements IUpdateClientController {
  async update(ctx: IHttpContext) {
    const {name, sex, birthDate} = ctx.getRequest().body
    const {id} = ctx.getRequest().params
    try {
      const clientRepository = new PrismaClientRepository();
      const updateClientUseCase = new EditClientUseCase(clientRepository)
      console.log(`UpdateClientController.update - id: ${id}, name: ${name}, sex: ${sex}, birthDate: ${birthDate}`);
      await updateClientUseCase.execute({ id: new UniqueEntityID(id),name, sex, birthDate,});
      ctx.send(200, { message: 'Client updated successfully' });
    } catch (error) {
      console.log(error)
      ctx.send(500, { message: 'An error occurred while updating the client' });
    }
  }
}