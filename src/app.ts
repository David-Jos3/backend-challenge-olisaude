<<<<<<< HEAD
import fastify from 'fastify'
import { clientsRouters } from './http/modules/client/router/router'
import { healthProblemRoutes } from './http/modules/health-problem/router/router'

export const app = fastify()

app.register(clientsRouters)
app.register(healthProblemRoutes)
=======
import fastify from "fastify";

export const app = fastify();
>>>>>>> 76a7da8aac4d275ae09809729353f1fca9e9fef2
