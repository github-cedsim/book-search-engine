const express = require('express');
const path = require('path');
const fs = require('fs');
const { ApolloServer } = require('apollo-server-express');
const db = require('./config/connection');
const { typeDefs, resolvers } = require('./schemas');
const { authMiddleware } = require('./utils/auth');
require('dotenv').config();

const PORT = process.env.PORT || 3001;
const app = express();

async function startServer() {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: authMiddleware,
  });

  await server.start();
  server.applyMiddleware({ app });

  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());

  if (process.env.NODE_ENV === 'production') {
    const staticPath = path.join(process.cwd(), 'client', 'dist');
    const indexPath = path.join(staticPath, 'index.html');

    app.use(express.static(staticPath));

    app.get('*', (req, res) => {
      fs.access(indexPath, fs.constants.F_OK, (err) => {
        if (err) {
          console.error('Index file does not exist', err);
          res.status(404).send('Index file not found');
        } else {
          res.sendFile(indexPath);
        }
      });
    });
  }

  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`🌍 Now listening on localhost:${PORT}`);
      console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    });
  });
}

startServer();