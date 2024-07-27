<<<<<<< HEAD
import { env } from './env/index'
import { app } from './app'

app
  .listen({
    host: '0.0.0.0', 
    port: env.PORT,
  })
  .then(() => console.log(`🥶 HTTP Server Running on PORT:${env.PORT} `))
=======
import {env} from './env/index'
import {app} from './app'

app.listen({
  host: '0.0.0.0',  // Change to 'localhost' if running locally
  port: env.PORT
}).then(() => console.log(`🥶 HTTP Server Running on PORT:${env.PORT} `))
>>>>>>> 76a7da8aac4d275ae09809729353f1fca9e9fef2
