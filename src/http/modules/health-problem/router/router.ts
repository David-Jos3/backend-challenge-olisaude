import { FastifyAdapter } from "@/ adapters/fastfy/fastify-adapter";
import { app } from "@/app";
import { RegisterHealthProblemController } from "../controllers/register-health-problem.controller";

export async function healthProblemRoutes() {

  const registerHealthProblemController = new RegisterHealthProblemController()

  app.post('/healthProbem', async (request, reply) => {
    const adapter = new FastifyAdapter(request, reply);
    await registerHealthProblemController.register(adapter);
  })

}