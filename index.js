const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const cors = require("cors");
const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use("/graphql", graphqlHTTP({ graphiql: true }));

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});