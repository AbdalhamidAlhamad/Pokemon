import express from "express";
import dotenv from "dotenv";
import stageRouter from "./routes/evolutionStage.route";
import { ErrorMiddleware } from "./middlewares/error";
import familyRouter from "./routes/family.route";
import typeRouter from "./routes/type.route";
import weatherRouter from "./routes/weather.route";
import pokemonRouter from "./routes/pokemon.route";
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./swagger";
import xss from "xss-clean";
import cors from "cors";
import { rateLimit } from "express-rate-limit";
import { notFound } from "./middlewares/not-found";

dotenv.config();

const app = express();

// cors
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.use(xss());

app.use(
  rateLimit({
    windowMs: 5 * 60 * 1000,
    max: 100,
  })
);

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use("/api/pokemons", pokemonRouter);

app.use("/api/stages", stageRouter);

app.use("/api/families", familyRouter);

app.use("/api/types", typeRouter);

app.use("/api/weather", weatherRouter);

app.use(notFound);

app.use(ErrorMiddleware);

export default app;
