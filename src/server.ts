import {env} from './env/index'
import {app} from './app'

app.listen({
  host: '0.0.0.0',  // Change to 'localhost' if running locally
  port: env.PORT
}).then(() => console.log(`🥶 HTTP Server Running on PORT:${env.PORT} `))