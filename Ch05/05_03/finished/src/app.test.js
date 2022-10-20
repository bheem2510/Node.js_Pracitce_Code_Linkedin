import request from "supertest";
import app from "./app";

describe("API Tests", () => {
  it("GET - /dictionary", async () => {
    const { body } = await request(app).get("/dictionary");
  });
});
