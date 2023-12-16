import express from "express";
import dotenv from "dotenv";
import connectToDatabase from "./config/db";
import stageRouter from "./routes/evolutionStage.route";
import { ErrorMiddleware } from "./middlewares/error";
import familyRouter from "./routes/family.route";
import typeRouter from "./routes/type.route";
import weatherRouter from "./routes/weather.route";
import pokemonRouter from "./routes/pokemon.route";
import EvolutionStage from "./models/evolutionStage.model";
import Family from "./models/family.model";
import Pokemon from "./models/pokemon.model";
import Type from "./models/type.model";
import Weather from "./models/weather.model";

dotenv.config();

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use('/api/pokemons', pokemonRouter);

app.use("/api/stages", stageRouter);

app.use("/api/families", familyRouter);

app.use("/api/types", typeRouter);

app.use("/api/weather", weatherRouter);




connectToDatabase();


app.use(ErrorMiddleware);

export default app;
