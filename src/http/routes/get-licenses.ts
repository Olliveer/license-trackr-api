import { FastifyInstance } from "fastify";
import { prisma } from "../../lib/prisma";

export async function getLicenses(app: FastifyInstance) {
  app.get("/licenses", async (request, reply) => {
    const licenses = await prisma.license.findMany();

    reply.send(licenses);
  });
}
