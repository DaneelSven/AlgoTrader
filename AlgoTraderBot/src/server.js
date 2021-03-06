import { ApolloServer } from "apollo-server-express";
import express from "express";
const typeDefs = require("./graphQl/schema/index");
const resolvers = require("./graphQl/resolvers/index");
import mongoose from "mongoose";

const startServer = async () => {
  const app = express();

  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  server.applyMiddleware({
    app,
  });

  const dbString = "mongodb://localhost:27017/algotrader";
  const config = { useNewUrlParser: true };

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
