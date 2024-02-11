import Fastify from "fastify";
import cors from "@fastify/cors";
import { getLicenses } from "./routes/get-licenses";
import { createLicense } from "./routes/create-license";
import { getSoftwares } from "./routes/get-softwares";

const app = Fastify({ logger: true });
await app.register(cors, {
  origin: "*",
});

app.register(getLicenses);
app.register(createLicense);
app.register(getSoftwares);

app.listen({ port: 3001, host: "0.0.0.0" }, function (err, address) {
  if (err) {
    app.log.error(err);
    process.exit(1);
  }
  app.log.info(`server listening on ${address}`);
});
