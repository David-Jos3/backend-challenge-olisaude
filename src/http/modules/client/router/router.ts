import { UpdateClientController} from './../controllers/update-client.controller';
import { FastifyAdapter } from "@/ adapters/fastfy/fastify-adapter";
import { app } from "@/app";
import { RegisterClientController } from "../controllers/register-client.controller";
import { DeleteClientController } from "../controllers/delete-client.controller";
import { GetClientController } from "../controllers/get-client.controller";
import { GetUniqueClientController } from '../controllers/get-unique-client.controller';
import { GetHighRiskClientsController } from '../controllers/get-high-risk-clients.controller';

export async function clientsRouters() {
  const registerClientController = new RegisterClientController()
  const deleteClientController = new DeleteClientController()
  const getClientController = new GetClientController()
  const updateClientController = new UpdateClientController()
  const getUniqueClientController = new  GetUniqueClientController()
  const getHighRiskClientsController = new GetHighRiskClientsController()

  app.post('/clients', async (request, reply) => {
    const adapter = new FastifyAdapter(request, reply);
     await registerClientController.register(adapter);
  })

  app.get('/clients/high-risk', async (request, reply) => {
    const adapter = new FastifyAdapter(request, reply);
    await  getHighRiskClientsController.findHighRisk(adapter);
  })

  app.get('/clients', async (request, reply) => {
    const adapter = new FastifyAdapter(request, reply);
    await  getClientController.findAll(adapter);
  })

  app.get('/clients/:id', async (request, reply) => {
    const adapter = new FastifyAdapter(request, reply);
    await  getUniqueClientController.findUnique(adapter);
  })


  app.put('/clients/:id', async (request, reply) => {
    const adapter = new FastifyAdapter(request, reply);
    await updateClientController.update(adapter)
  } )

  app.delete('/clients/:id', async (request, reply) => {
    const adapter = new FastifyAdapter(request, reply);
    await deleteClientController.delete(adapter);
  })

}