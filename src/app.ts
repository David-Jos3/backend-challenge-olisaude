import fastify from 'fastify'
import { clientsRouters } from './http/modules/client/router/router'
import { healthProblemRoutes } from './http/modules/health-problem/router/router'

export const app = fastify()

app.register(clientsRouters)
app.register(healthProblemRoutes)
