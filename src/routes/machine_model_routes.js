var Router = require("koa-router");
import bodyParser from "koa-bodyparser";
//importing GraphQL client
import client from "../helpers/graphQlClient";

import {
	getPricesByModelNameQuery,
	getPricingModelByIdQuery
} from "../restApi/pricing_model_api";

import {
	removePricingModelFromMachineQuery,
	updatePricingModelOfMachineQuery,
	getPriceConfigForMachineQuery
} from "../restApi/machine_model_api";
function register(app) {
	let router = new Router();
	router
		.use(bodyParser())
		.put("/machines/:machineId/prices/:pmId", (ctx, next) => {
			ctx.body = "prices to be shown soon";
			return getPricingModelByIdQuery({ id: ctx.params["pmId"] }).then(
				(data, err) => {
					ctx.body = data;
					if (data.pricing_models.length > 0) {
						return updatePricingModelOfMachineQuery({
							priceId: ctx.params["pmId"],
							modelId: ctx.params["machineId"]
						}).then(data => {
							ctx.body = data;
							return data;
						});
					} else {
						console.log("error");
						return err;
					}
				}
			);
		})

		.delete("/machines/:machineId/prices/:pmId", async (ctx, next) => {
			let req = await removePricingModelFromMachineQuery({
				modelId: ctx.params["machineId"],
				priceId: ctx.params["pmId"]
			});
			ctx.body =
				req.update_machines.returning.length > 0 ? req : "Not found";
			return req;
		})

		.get("/machines/:machineId/prices", async (ctx, next) => {
			ctx.body = "prices to be shown soon";
			const req = await getPriceConfigForMachineQuery({
				modelId: ctx.params["machineId"]
			}).then(data => {
				ctx.body = data;
				if (data.machines.length == 0) {
					return getPricesByModelNameQuery({
						name: "Default"
					}).then(data => {
						ctx.body = data;
						return data;
					});
				}
			});

			return req;
		});
	app.use(router.routes());
	app.use(router.allowedMethods());
}

module.exports = register;
