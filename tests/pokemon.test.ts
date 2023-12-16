import request from "supertest";
import app from "../app";
import { sequelize } from "../config/db";
import { pokemonOne, setUpDatabase } from "./fixtures/db";
beforeAll(async () => {
  await setUpDatabase();
});

test("Create Pokemon", async () => {
  const response = await request(app)
    .post("/api/pokemons")
    .send({
      name: "Pikamon Jest",
      pokedexNumber: 243,
      imgName: "pikamon.png",
      generation: 7,
      evolved: false,
      crossGen: false,
      evolutionStageId: 1,
      familyId: 1,
      typeIds: [1],
      weatherIds: [1],
      atk: 149,
      def: 108,
      sta: 124,
      legendeary: true,
      aquireable: false,
      spawns: 91,
      regional: false,
      raidable: false,
      hatchable: false,
      shiny: true,
      nest: true,
      new: false,
      notGettable: false,
      futureEvolve: true,
      cp40: 1439,
      cp39: 1410,
    })
    .expect(201);

  expect(response.body).toEqual(
    expect.objectContaining({
      name: "Pikamon Jest",
      pokedexNumber: 243,
      imgName: "pikamon.png",
    })
  );
});

test("Get Pokemons", async () => {
  const response = await request(app).get("/api/pokemons").send().expect(200);

  expect(response.body.pokemons).toEqual(
    expect.arrayContaining([
      expect.objectContaining({
        imgName: "pikamon.png",
        name: "Pikamon Jest",
        pokedexNumber: 243,
      }),
    ])
  );
});

test("Get Pokemon by id", async () => {
  const response = await request(app)
    .get(`/api/pokemons/${pokemonOne.id}`)
    .send()
    .expect(200);

  expect(response.body).toEqual(
    expect.objectContaining({
      name: "Pikamon Jest",
      pokedexNumber: 243,
      imgName: "pikamon.png",
    })
  );
});

test("Delete Pokemon by id", async () => {
  await request(app)
    .delete(`/api/pokemons/${pokemonOne.id}`)
    .send()
    .expect(200);

  await request(app).get(`/api/pokemons/${pokemonOne.id}`).send().expect(404);
});

afterAll(async () => {
  await sequelize.close();
});
