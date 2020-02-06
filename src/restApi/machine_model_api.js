import graphQlClient from "../helpers/graphQlClient";

import {
	removePricingModelFromMachine,
	updatePricingModelOfMachine,
	getPriceConfigForMachine,
	removePricingModelFromMachineTest
} from "../queries/machine_model_queries";

export function removePricingModelFromMachineQuery(variables) {
	return graphQlClient.request(removePricingModelFromMachine, variables);
}

export function updatePricingModelOfMachineQuery(variables) {
	return graphQlClient.request(updatePricingModelOfMachine, variables);
}

export function getPriceConfigForMachineQuery(variables) {
	return graphQlClient.request(getPriceConfigForMachine, variables);
}

// removePricingModelFromMachineTest permanently removes the pricing model, should be used only in tests
export function removePricingModelFromMachineTestQuery(variables) {
	return graphQlClient.request(removePricingModelFromMachineTest, variables);
}
