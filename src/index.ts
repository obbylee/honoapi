import { Hono } from "hono";

const app = new Hono().basePath("/api");

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

app.get("/greet", (c) => {
  return c.json({ message: "connected!" });
});

export default app;
