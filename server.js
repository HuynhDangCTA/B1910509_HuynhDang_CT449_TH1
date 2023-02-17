const app = require("./app");
const config = require("./app/config");

// start server
const PORT = config.app.PORT || 8080

app.listen(PORT, () => {
    console.log(`Sever is running on http://localhost:${PORT}.`);
});