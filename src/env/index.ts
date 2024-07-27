<<<<<<< HEAD
import { z } from 'zod'
=======
import {z} from 'zod'
>>>>>>> 76a7da8aac4d275ae09809729353f1fca9e9fef2
import 'dotenv/config'

const envSchema = z.object({
  NODE_ENV: z.enum(['dev', 'test', 'production']).default('dev'),
<<<<<<< HEAD
  PORT: z.coerce.number().default(8080),
=======
  PORT: z.coerce.number().default(8080)
>>>>>>> 76a7da8aac4d275ae09809729353f1fca9e9fef2
})

const _env = envSchema.safeParse(process.env)

<<<<<<< HEAD
if (_env.success === false) {
=======
if(_env.success === false) {
>>>>>>> 76a7da8aac4d275ae09809729353f1fca9e9fef2
  console.error('Invalid environment variables:', _env.error)
  throw new Error('Invalid environment variables')
}

<<<<<<< HEAD
export const env = _env.data
=======
export const env = _env.data
>>>>>>> 76a7da8aac4d275ae09809729353f1fca9e9fef2
