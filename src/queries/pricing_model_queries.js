export const pricingModelList = `
	query {
		pricing_models(where: { deleted_at: { _eq: null } }) {
			name
			pricing_model_prices(where: { deleted_at: { _eq: null } }) {
				price {
					name
					value
					price
				}
			}
		}
	}
`;

export const insertPricingModel = `mutation addPricingModels($pricingModels: [pricing_models_insert_input!]!) {
  insert_pricing_models(objects: $pricingModels) {
    returning {
      id
    }
  }
}`;

export const getPricingModelById = `query getPricingModelsById($id: uuid){
  pricing_models(where: {id:{_eq: $id}}){
    id
    name
    pricing_model_prices{
      price{
        name
        price
        value
      }
    }
  }
}`;

export const editPriceModelById = `mutation updatePricingModels($id: uuid, $pricingModels: pricing_models_set_input) {
  update_pricing_models(
    where: {
      id: {
        _eq: $id
      }
    },
    _set: $pricingModels
  ) {
    returning {
      id
      name
    }
  }
}`;

export const getPricesByModelId = `query getPricingModelsById($id: uuid){
  pricing_models(where: {id:{_eq: $id}}){
   
    pricing_model_prices{
      price{
        name
        price
        value
      }
    }
  }
}`;

export const addNewPriceConfigById = `mutation addPriceToModel($price: [prices_insert_input!]!) {
  insert_prices(
    objects: $price
    on_conflict: {
      constraint: prices_name_key,
      update_columns: [value, price, deleted_at]
    }
  ) {
    returning {
      id,
      name
      pricing_model_prices{
        pricing_model{
          name
        }
      }
    }
  }
}
`;

export const deletePriceConfigFromModel = `
mutation removePricingConfiguration($modelId: uuid, $priceId: uuid){
  update_pricing_model_price(
    where: {
      pricing_model_id: {
        _eq: $modelId
      }
      price_id: {
        _eq: $priceId
      
      }
    }
    _set:{
      deleted_at: "now()"
    }
  ){
    returning {
    id
  }
  }
}
`;

export const getPricesByModelName = `query getPrice($name: String) { 
  pricing_models(where: {name: {_eq: $name}}){
    name
    pricing_model_prices{
      price{
        name
        price
        value
      }
    }
  }
}
`;
// delete pricingModelsById to be only used in scripts for testing database

export const deletePricingModelByid = `mutation deletePricingModelByid($id: uuid) {
  delete_pricing_models(where: {id: {_eq: $id}}) {
    returning {
      id
    }
  }
}
`;

// deletePricingModelPriceByPriceid to be only used in scripts for testing database

export const deletePricingModelPriceByPriceid = ` mutation deletePricingModelPriceById($id: uuid, $priceId: uuid) {
  delete_pricing_model_price(where: {pricing_model_id: {_eq: $id}, price_id: {_eq: $priceId}}) {
    returning {
      id
    }
  }
}
`;
