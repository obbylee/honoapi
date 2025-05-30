import { Hono } from "hono";

const app = new Hono().basePath("/api");

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

app.get("/trpc", (c) => {
  return c.json({ message: "connected!" });
});

export default app;
