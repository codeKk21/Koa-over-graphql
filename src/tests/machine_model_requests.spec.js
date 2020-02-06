const request = require("supertest");
const app = require("../index");

// test for setting the pricing model for an individual machine to one from pmId
test(" sets the pricing model for an individual machine to one from pmId ", async () => {
	const response = await request(app.callback()).put(
		"/machines/c3dc6c19-1087-47c4-87ac-3d2f3fcf0e05/prices/3ba92095-3203-4888-a464-3c7d5d9acd7e"
	);
	const prices = response.text;
	expect(response.status).toEqual(200);
	expect(prices).toEqual(
		'{"update_machines":{"returning":[{"id":"c3dc6c19-1087-47c4-87ac-3d2f3fcf0e05","pricing_id":"3ba92095-3203-4888-a464-3c7d5d9acd7e"}]}}'
	);
});

// test for removes pricing model from machine
test("removes pricing model from machine", async () => {
	const response = await request(app.callback()).delete(
		"/machines/94415002-45fd-4a51-9ed7-827d1af502d9/prices/3ba92095-3203-4888-a464-3c7d5d9acd7e"
	);
	const prices = response.text;
	expect(response.status).toEqual(200);
	expect(prices).toEqual(
		'{"update_machines":{"returning":[{"id":"94415002-45fd-4a51-9ed7-827d1af502d9"}]}}'
	);
});

// test for getting list of machine id prices
test("get list machine id prices", async () => {
	const response = await request(app.callback()).get(
		"/machines/c2562290-200d-4274-8e91-9b53cf98c0a7/prices"
	);
	const pricingModels = response.text;
	expect(response.status).toEqual(200);
	expect(pricingModels).toEqual(
		'{"pricing_models":[{"name":"Default","pricing_model_prices":[{"price":{"name":"10 minutes","price":3,"value":10}},{"price":{"name":"20 minutes","price":5,"value":20}},{"price":{"name":"60 minutes","price":15,"value":60}}]}]}'
	);
});
