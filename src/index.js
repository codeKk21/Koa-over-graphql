const Koa = require("koa");
const app = new Koa();

require("../src/routes/machine_model_routes")(app);
require("../src/routes/pricing_model_routes")(app);

module.exports = app;
