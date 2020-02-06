const app = require('./src/index')
const PORT = process.env.PORT || 1337;

app.listen(PORT, () =>
console.log(`Server listening on port ${PORT}`)
);