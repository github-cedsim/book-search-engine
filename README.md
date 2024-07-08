# Book Search Engine

## Description

Book Search Engine is a full-stack web application that allows users to search for books using the Google Books API and save their favorite books to a personal reading list. The application is built with a React frontend and an Express.js backend, using Apollo Server for GraphQL API and MongoDB for the database.

## Features

- **Search Books**: Search for books by title, author, or keywords.
- **Save Books**: Save your favorite books to your personal reading list.
- **View Saved Books**: View and manage the books you have saved.

## Screenshot

![Book Search Engine Screenshot](![image](https://github.com/github-cedsim/book-search-engine/assets/126218396/7a7aa366-2736-4c45-a870-6f308caedc02)
)

## Link to Deployed Application

[Book Search Engine on Render]([https://book-search-engine-g6fq.onrender.com](https://book-search-engine-g6fq.onrender.com))

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/github-cedsim/book-search-engine.git
   cd book-search-engine
   ```

2. Install server dependencies:
   ```bash
   cd server
   npm install
   ```

3. Install client dependencies:
   ```bash
   cd ../client
   npm install
   ```

## Usage

1. Build the client:
   ```bash
   npm run build --prefix client
   ```

2. Start the server:
   ```bash
   npm start --prefix server
   ```

3. Open your browser and navigate to `http://localhost:3001`.

## Environment Variables

Create a `.env` file in the root directory and add the following environment variables:

```env
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/<dbname>?retryWrites=true&w=majority
NODE_ENV=production
PORT=3001
```

## Technologies Used

- **Frontend**: React, Vite
- **Backend**: Node.js, Express.js
- **Database**: MongoDB, Mongoose
- **API**: Apollo Server, GraphQL
- **Deployment**: Render

