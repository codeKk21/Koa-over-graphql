const request = require("supertest");
const app = require("../index");

// get all the pricing-models from test database

test("/pricing-models get request", async () => {
	const response = await request(app.callback()).get("/pricing-models");
	const pricingModels = response.text;
	expect(response.status).toEqual(200);
	expect(pricingModels).toMatch(/Super Value Option/);
	expect(pricingModels).toMatch(/Default/);
	expect(pricingModels).toMatch(/test for delete/);
});

// post a new pricing model endpoint
test("/pricing-models post request", async () => {
	const variable = {
		pricingModels: [
			{
				id: "793593dc-44a8-4b53-a964-5cd0821612fa",
				name: "demo pricing model"
			}
		]
	};
	const response = await request(app.callback())
		.post("/pricing-models")
		.send(variable);
	const insertedPricingModel = response.text;
	expect(response.status).toEqual(200);

	expect(insertedPricingModel).toEqual(
		'{"insert_pricing_models":{"returning":[{"id":"793593dc-44a8-4b53-a964-5cd0821612fa"}]}}'
	);
});
