import { FastifyInstance } from "fastify";
import { prisma } from "../../lib/prisma";

export async function getSoftwares(app: FastifyInstance) {
  app.get("/softwares", async (request, reply) => {
    const softwares = await prisma.software.findMany();

    reply.status(200).send(softwares);
  });
}
