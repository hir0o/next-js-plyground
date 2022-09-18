import { z } from 'zod'

export const UserModel = z.object({
  id: z.number(),
  name: z.string(),
  email: z.string(),
})

export type User = z.infer<typeof UserModel>
