import request from "supertest";
import app from "../app";
import { sequelize } from "../config/db";
import { setUpDatabase } from "./fixtures/db";
import { familyOne } from "./fixtures/db";
beforeAll(async () => {
  await setUpDatabase();
});

test("Create Family", async () => {
  const response = await request(app)
    .post("/api/families")
    .send({
      name: "Family Jest",
    })
    .expect(201);

  expect(response.body).toMatchObject({
    id: expect.any(Number),
    name: "Family Jest",
  });
});

test("Get Families", async () => {
  const response = await request(app).get("/api/families").send().expect(200);

  expect(response.body).toEqual(
    expect.arrayContaining([
      expect.objectContaining({
        id: expect.any(Number),
        name: expect.any(String),
      }),
    ])
  );
});

test("Get Family by id", async () => {
  const response = await request(app)
    .get(`/api/families/${familyOne.id}`)
    .send()
    .expect(200);

  expect(response.body).toEqual(
    expect.objectContaining({
      id: expect.any(Number),
      name: expect.any(String),
    })
  );
});

test("Delete Family by id", async () => {
  await request(app).delete(`/api/families/${familyOne.id}`).send().expect(200);

  await request(app).get(`/api/families/${familyOne.id}`).send().expect(404);
});

afterAll(async () => {

  await sequelize.close();
});
