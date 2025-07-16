import { Scalar } from "@scalar/hono-api-reference";
import { OpenAPIHono } from "@hono/zod-openapi";
import { logger } from "hono/logger";
import { cors } from "hono/cors";

const app = new OpenAPIHono().basePath("/api");

app.use(logger());

app.use(
  cors({
    origin: "*",
  })
);

app.get(
  "/docs",
  Scalar({
    pageTitle: "Terra Discover API Documentation",
    theme: "default",
    url: "/api/openapi.json",
  })
);

app.doc("/openapi.json", {
  openapi: "3.1.0",
  info: {
    version: "0.0.1",
    title: "Terra Discover API",
    description: "API for Terra Discover API",
  },
  servers: [
    {
      url: "https://honoapi-down.vercel.app",
      description: "API Server",
    },
  ],
});

app.get("/", (c) => {
  return c.json("Hello Hono!");
});

app.get("/trpc", (c) => {
  return c.json({ message: "connected!" });
});

export default app;
