import {z} from 'zod';

export const createUnitSchema = z.object({
    name: z.string(),
})

export type CreateUnitInput = z.infer<typeof createUnitSchema> & {
    userId: number
}

export const updateUnitSchema = z.object({
    name: z.string().optional()
})

export type UpdateUnitInput = z.infer<typeof updateUnitSchema> 