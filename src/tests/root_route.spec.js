const request = require("supertest");
const app = require("../index");

test("root route", async () => {
	const response = await request(app.callback()).get("/");
	expect(response.status).toEqual(200);
	expect(response.type).toEqual("text/plain");
	expect(response.text).toEqual("hello world");
});
