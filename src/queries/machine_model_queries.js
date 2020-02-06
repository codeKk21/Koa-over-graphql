export const removePricingModelFromMachine = `mutation removePricingModelFromMachine($modelId: uuid!, $priceId: uuid!) {
  update_machines(where: {pricing_id: {_eq: $priceId}, id: {_eq: $modelId}}
  _set:{
      deleted_at: "now()"
    }
  ) 
  {
    returning {
      id
    }
  }
}

`;

export const updatePricingModelOfMachine = `mutation updatePricingModelOfMachine($modelId: uuid!, $priceId: uuid!) {
  update_machines(where: { id: {_eq: $modelId}}
  _set:{
      pricing_id: $priceId
    }
  ) 
  {
    returning {
      id
      pricing_id
    }
  }
}`;

export const getPriceConfigForMachine = `query getPricingConfig($modelId: uuid) {
  machines(where: {id: {_eq: $modelId}}) {
    pricing_model {
      pricing_model_prices(where: {deleted_at: {_eq: null}}) {
        price {
          name
        }
      }
    }
  }
}
`;

// removePricingModelFromMachineTest permanently removes the pricing model, should be used only in tests
export const removePricingModelFromMachineTest = `mutation removePricingModelFromMachine($machineId: uuid, $pricingId: uuid) {
  update_machines(where: {id: {_eq: $machineId}, pricing_id: {_eq: $pricingId}}, _set: {pricing_id: null}) {
    returning {
      id
    }
  }
}
`;
