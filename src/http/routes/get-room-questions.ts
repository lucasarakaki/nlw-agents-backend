import type { FastifyPluginCallbackZod } from "fastify-type-provider-zod";
import { db } from "../../db/connection.ts";
import { schema } from "../../db/schemas/index.ts";
import z4 from "zod/v4";
import { desc, eq } from "drizzle-orm";


export const getRoomsQuestions: FastifyPluginCallbackZod = (app) => {
    app.get(
        '/rooms/:roomId/questions', 
        {
            schema: {
                params: z4.object({
                    roomId: z4.string(),
                })
            },
        },

        async (request) => {
            const { roomId } = request.params

            const result = await db
                .select({
                    id: schema.questions.id,
                    question: schema.questions.question,
                    answer: schema.questions.answer,
                    createdAt: schema.questions.createdAt,
                })
                .from(schema.questions)
                .where(
                    eq(schema.questions.roomId, roomId)
                )
                .orderBy(
                    desc(schema.questions.createdAt)
                )

            return result
        },
    )
}