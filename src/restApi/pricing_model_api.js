import graphQlClient from "../helpers/graphQlClient";
import {
	pricingModelList,
	insertPricingModel,
	getPricingModelById,
	editPriceModelById,
	getPricesByModelId,
	addNewPriceConfigById,
	deletePriceConfigFromModel,
	deletePricingModelByid,
	deletePricingModelPriceByPriceid,
	getPricesByModelName
} from "../queries/pricing_model_queries";

export function getPriceModelListQuery() {
	console.log("client ", graphQlClient);
	return graphQlClient.request(pricingModelList);
}

export function insertPricingModelQuery(variables) {
	console.log("variables", variables);
	return graphQlClient.request(insertPricingModel, variables);
}

export function getPricingModelByIdQuery(variables) {
	return graphQlClient.request(getPricingModelById, variables);
}

export function editPriceModelByIdQuery(variables) {
	return graphQlClient.request(editPriceModelById, variables);
}

export function getPricesByModelIdQuery(variables) {
	return graphQlClient.request(getPricesByModelId, variables);
}

export function addNewPriceConfigByIdQUery(variables) {
	return graphQlClient.request(addNewPriceConfigById, variables);
}

export function getPricesByModelNameQuery(variables) {
	return graphQlClient.request(getPricesByModelName, variables);
}
export function deletePriceConfigFromModelQuery(variables) {
	return graphQlClient.request(deletePriceConfigFromModel, variables);
}

// delete pricingModelsById to be only used in scripts for testing database
export function deletePricingModelByidQuery(variables) {
	return graphQlClient.request(deletePricingModelByid, variables);
}

// deletePricingModelPriceByPriceid to be only used in scripts for testing database
export function deletePricingModelPriceByPriceidQuery(variables) {
	return graphQlClient.request(deletePricingModelPriceByPriceid, variables);
}
