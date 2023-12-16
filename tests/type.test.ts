import request from "supertest";
import app from "../app";
import { sequelize } from "../config/db";
import { setUpDatabase } from "./fixtures/db";
import { typeOne } from "./fixtures/db";
beforeAll(async () => {
  await setUpDatabase();
});

test("Create type", async () => {
  const response = await request(app)
    .post("/api/types")
    .send({
      name: "Type Jest",
    })
    .expect(201);

  expect(response.body).toMatchObject({
    id: expect.any(Number),
    name: "Type Jest",
  });
});

test("Get Types", async () => {
  const response = await request(app).get("/api/types").send().expect(200);

  expect(response.body).toEqual(
    expect.arrayContaining([
      expect.objectContaining({
        id: expect.any(Number),
        name: expect.any(String),
      }),
    ])
  );
});

test("Get Type by id", async () => {
  const response = await request(app)
    .get(`/api/types/${typeOne.id}`)
    .send()
    .expect(200);

  expect(response.body).toEqual(
    expect.objectContaining({
      id: expect.any(Number),
      name: expect.any(String),
    })
  );
});

test("Delete Type by id", async () => {
  await request(app).delete(`/api/types/${typeOne.id}`).send().expect(200);

  await request(app).get(`/api/types/${typeOne.id}`).send().expect(404);
});

afterAll(async () => {

  await sequelize.close();
});
