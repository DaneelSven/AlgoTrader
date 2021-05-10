import { ApolloServer } from "apollo-server-express";
import express from "express";
//import typeDefs from './src/graphql/schema/typeDefs/index.js'
const typeDefs = require("../src/graphQl/schema/index");
const resovlers = require("../src/graphQl/resolvers/index");

const mongoose = require("mongoose");

const startServer = async () => {
  const app = express();

  const server = new ApolloServer({
    typeDefs,
    resovlers,
  });

  server.applyMiddleware({
    app,
  });

  const dbString = "mongodb://localhost:27017/coin";
  const config = { useNewUrlParser: true, useUnifiedTopology: true };

  console.log(`Connecting to ${dbString}`);
  await mongoose
    .connect(dbString, config)
    .then(() => console.log("Connected!"))
    .catch(console.error);

  app.listen(
    {
      port: 4000,
    },
    () => {
      console.log(`Server ready at http://localhost:4000${server.graphqlPath}`);
    }
  );
};

startServer();
