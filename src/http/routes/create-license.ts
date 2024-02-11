import { FastifyInstance } from "fastify";
import { prisma } from "../../lib/prisma";
import { z } from "zod";

export async function createLicense(app: FastifyInstance) {
  app.post("/licenses", async (request, reply) => {
    const createLicenseBody = z.object({
      key: z.string(),
      softwareId: z.string(),
    });

    const { key, softwareId } = createLicenseBody.parse(request.body);

    const license = await prisma.license.create({
      data: {
        key,
        softwareId,
      },
    });

    reply.status(201).send({ licenseId: license.id });
  });
}
