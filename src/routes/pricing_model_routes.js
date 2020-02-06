var Router = require("koa-router");
import bodyParser from "koa-bodyparser";
//importing GraphQL client
import client from "../helpers/graphQlClient";
import {
	getPriceModelListQuery,
	insertPricingModelQuery,
	getPricingModelByIdQuery,
	editPriceModelByIdQuery,
	getPricesByModelIdQuery,
	addNewPriceConfigByIdQUery,
	deletePriceConfigFromModelQuery,
	getPricesByModelNameQuery
} from "../restApi/pricing_model_api";

function register(app) {
	let router = new Router();
	router
		.use(bodyParser())
		.get("/", (ctx, next) => {
			ctx.body = "hello world";
		})
		.get("/pricing-models", async (ctx, next) => {
			let req = await getPriceModelListQuery();
			ctx.body = req;
			return req;
		})

		.post("/pricing-models", async (ctx, next) => {
			let req = await insertPricingModelQuery({
				pricingModels: ctx.request.body.pricingModels
			});
			ctx.body = req;
			return req;
		})

		.get("/pricing-models/:pmId", async (ctx, next) => {
			let req = await getPricingModelByIdQuery({
				id: ctx.params["pmId"]
			});
			ctx.body = req.pricing_models.length > 0 ? req : "Not Found";
			return req;
		})

		.put("/pricing-models/:pmId", async (ctx, next) => {
			let req = await editPriceModelByIdQuery({
				id: ctx.params["pmId"],
				pricingModels: ctx.request.body.pricingModels
			});
			ctx.body = req;
			return req;
		})

		.get("/pricing-models/:pmId/prices", async (ctx, next) => {
			let req = await getPricesByModelIdQuery({
				id: ctx.params["pmId"]
			});
			ctx.body = req;
			return req;
		})

		.post("/pricing-models/:pmId/prices", async (ctx, next) => {
			let pmId = ctx.params["pmId"];
			let priceObjUpdated = {
				...ctx.request.body.price,
				deleted_at: null,
				pricing_model_prices: {
					data: {
						pricing_model_id: pmId,
						deleted_at: null
					}
				}
			};

			let req = await addNewPriceConfigByIdQUery({
				price: priceObjUpdated
			});
			ctx.body = req;
			return req;
		})

		.delete("/pricing-models/:pmId/prices/:priceId", async (ctx, next) => {
			let req = await deletePriceConfigFromModelQuery({
				modelId: ctx.params["pmId"],
				priceId: ctx.params["priceId"]
			});
			ctx.body =
				req.update_pricing_model_price.returning.length > 0
					? req
					: "Not Found";
			return req;
		});
	app.use(router.routes());
	app.use(router.allowedMethods());
}

module.exports = register;
