import {z} from 'zod'

export const RegisterClientDTO = z.object({
  name: z.string().min(3).max(50),
  sex: z.enum(['male', 'female', 'other']),
  birthDate: z.date(),
  createdAt: z.date(),
  updatedAt: z.optional(z.date()),
  healthProblems: z.optional(z.array(z.object({
    name: z.string(),
    severity: z.number().min(1).max(10),
  }))),
}) 


export type RegisterClientDTO = z.infer<typeof  RegisterClientDTO>