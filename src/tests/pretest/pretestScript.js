import {
	editPriceModelByIdQuery,
	deletePricingModelByidQuery,
	deletePricingModelPriceByPriceidQuery
} from "../../restApi/pricing_model_api";

import { removePricingModelFromMachineTestQuery } from "../../restApi/machine_model_api";
// for renaming back to Long Play from demo models1
editPriceModelByIdQuery({
	id: "48e7d94d-a9ea-4fb2-a458-b2e2be6d3a6e",
	pricingModels: {
		name: "Long Play"
	}
});

// for removing demo model in prices model
deletePricingModelPriceByPriceidQuery({
	id: "793593dc-44a8-4b53-a964-5cd0821612fa"
}).then(() => {
	deletePricingModelByidQuery({
		id: "793593dc-44a8-4b53-a964-5cd0821612fa"
	});
});

deletePricingModelPriceByPriceidQuery({
	id: "3ba92095-3203-4888-a464-3c7d5d9acd7e",
	priceId: "b6f03e50-59b0-4f1f-bc2d-8f4848ed8e02"
});

removePricingModelFromMachineTestQuery({
	machineId: "c3dc6c19-1087-47c4-87ac-3d2f3fcf0e05",
	pricingId: "3ba92095-3203-4888-a464-3c7d5d9acd7e"
});
