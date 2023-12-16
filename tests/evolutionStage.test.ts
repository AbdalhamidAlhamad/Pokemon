import request from "supertest";
import app from "../app";
import { sequelize } from "../config/db";
import { setUpDatabase } from "./fixtures/db";
import { stageOne } from "./fixtures/db";
beforeAll(async () => {
  await setUpDatabase();
});

test("Create Stage", async () => {
  const response = await request(app)
    .post("/api/stages")
    .send({
      name: "Stage Jest",
    })
    .expect(201);

  expect(response.body).toMatchObject({
    id: expect.any(Number),
    name: "Stage Jest",
  });
});

test("Get Stages", async () => {
  const response = await request(app).get("/api/stages").send().expect(200);

  expect(response.body).toEqual(
    expect.arrayContaining([
      expect.objectContaining({
        id: expect.any(Number),
        name: expect.any(String),
      }),
    ])
  );
});

test("Get Stage by id", async () => {
  const response = await request(app)
    .get(`/api/stages/${stageOne.id}`)
    .send()
    .expect(200);

  expect(response.body).toEqual(
    expect.objectContaining({
      id: expect.any(Number),
      name: expect.any(String),
    })
  );
});

test("Delete stage by id", async () => {
  await request(app).delete(`/api/stages/${stageOne.id}`).send().expect(200);

  await request(app).get(`/api/stages/${stageOne.id}`).send().expect(404);
});

afterAll(async () => {

  await sequelize.close();
});
