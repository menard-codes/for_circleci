const server = require("./main.js");
const PORT = process.env.PORT || 3000;

server.listen(PORT, () => console.log(`Serving the API...`));
