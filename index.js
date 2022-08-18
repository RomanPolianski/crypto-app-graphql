const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const cors = require("cors");
const PORT = process.env.PORT || 5000;
const schema = require("./schema");
const resolver = require("./resolver");

const app = express();
app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({ graphiql: true, schema, rootValue: resolver })
);

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
