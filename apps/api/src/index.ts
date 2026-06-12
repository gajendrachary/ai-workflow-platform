import Fastify from "fastify";

const app = Fastify();

app.get("/health", async () => {
  return { status: "ok" };
});

const port = Number(process.env.PORT || 4000);

app
  .listen({ port, host: "0.0.0.0" })
  .then(() => {
    console.log(`API running on http://localhost:${port}`);
  })
  .catch((err) => {
    app.log.error(err);
    process.exit(1);
  });
