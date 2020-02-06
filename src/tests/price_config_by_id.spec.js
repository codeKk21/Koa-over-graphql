const request = require("supertest");
const app = require("../index");

// removes price config from model by priceId
test("/pricing-models/:pmId/prices/:priceId removes price config from model", async () => {
	const response = await request(app.callback()).delete(
		"/pricing-models/3f5ac0ce-4514-4edc-a926-a55dcbeee9ab/prices/53ba3705-43bc-4bc6-9e5b-15f129d2a241"
	);

	const prices = response.text;
	expect(response.status).toEqual(200);
	expect(prices).toEqual(
		'{"update_pricing_model_price":{"returning":[{"id":"f34822cc-859a-4e88-a9f8-3a2ebab66167"}]}}'
	);
});

// when pmId is not found,
test("/pricing-models/:pmId/prices/:priceId removes price config from model when pmId is not found", async () => {
	const response = await request(app.callback()).delete(
		"/pricing-models/3f5ac0ce-4514-4edc-a926-a65dcbeee9ab/prices/53ba3705-43bc-4bc6-9e5b-15f129d2a241"
	);

	const prices = response.text;
	expect(response.status).toEqual(200);
	expect(prices).toEqual("Not Found");
});
