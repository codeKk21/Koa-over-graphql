const request = require("supertest");
const app = require("../index");

// get prices of model
test("/pricing-models/:pmId/prices testing get prices of a model", async () => {
	const response = await request(app.callback()).get(
		"/pricing-models/48e7d94d-a9ea-4fb2-a458-b2e2be6d3a6e/prices"
	);

	const prices = response.text;
	expect(response.status).toEqual(200);
	expect(prices).toEqual(
		'{"pricing_models":[{"pricing_model_prices":[{"price":{"name":"60 minutes","price":15,"value":60}}]}]}'
	);
});

// post a new price config for model
test("/pricing-models/:pmId/prices add new price config for model", async () => {
	const variable = {
		price: {
			name: "100 minutes demo",
			price: 30,
			value: 100,
			deleted_at: null,
			pricing_model_prices: {
				data: {
					pricing_model_id: "3ba92095-3203-4888-a464-3c7d5d9acd7e",
					deleted_at: null
				}
			}
		}
	};
	const response = await request(app.callback())
		.post("/pricing-models/3ba92095-3203-4888-a464-3c7d5d9acd7e/prices")
		.send(variable);
	const insertedPricingModel = response.text;
	expect(response.status).toEqual(200);
	console.log(response.text);
	expect(insertedPricingModel).toEqual(
		'{"insert_prices":{"returning":[{"name":"100 minutes demo","id":"b6f03e50-59b0-4f1f-bc2d-8f4848ed8e02","pricing_model_prices":[{"pricing_model":{"name":"Super Value Option"}}]}]}}'
	);
});
