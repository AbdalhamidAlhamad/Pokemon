import request from "supertest";
import app from "../app";
import { sequelize } from "../config/db";
import { setUpDatabase } from "./fixtures/db";
import { weatherOne } from "./fixtures/db";
beforeAll(async () => {
  await setUpDatabase();
});

test("Create Weather", async () => {
  const response = await request(app)
    .post("/api/weather")
    .send({
      name: "Weather Jest",
    })
    .expect(201);

  expect(response.body).toMatchObject({
    id: expect.any(Number),
    name: "Weather Jest",
  });
});

test("Get Weather", async () => {
  const response = await request(app).get("/api/weather").send().expect(200);

  expect(response.body).toEqual(
    expect.arrayContaining([
      expect.objectContaining({
        id: expect.any(Number),
        name: expect.any(String),
      }),
    ])
  );
});

test("Get Weather by id", async () => {
  const response = await request(app)
    .get(`/api/weather/${weatherOne.id}`)
    .send()
    .expect(200);

  expect(response.body).toEqual(
    expect.objectContaining({
      id: expect.any(Number),
      name: expect.any(String),
    })
  );
});

test("Delete Weather by id", async () => {
  await request(app).delete(`/api/weather/${weatherOne.id}`).send().expect(200);

  await request(app).get(`/api/weather/${weatherOne.id}`).send().expect(404);
});

afterAll(async () => {
  await sequelize.close();
});
