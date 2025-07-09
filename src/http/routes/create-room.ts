import type { FastifyPluginCallbackZod } from "fastify-type-provider-zod";
import z4 from "zod/v4";
import { schema } from "../../db/schemas/index.ts";
import { db } from "../../db/connection.ts";

export const createRoomRoute: FastifyPluginCallbackZod = (app) => {
    app.post(
        '/rooms', 
        {
            schema: {
                body: z4.object({
                    name: z4.string().min(1),
                    description: z4.string().optional(),
                }),
            },
        },  
        async ( request, reply ) => {
            const { name, description } = request.body

            const result = await db.insert(schema.rooms).values({
                name, 
                description,
            }).returning()

            const insertedRoom = result[0]

            if (!insertedRoom) {
                throw new Error('Failed to create new room!')
            }

            return reply.status(201).send({ roomId: insertedRoom.id })
        }   
    )
}