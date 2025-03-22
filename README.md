# MERN Stack Tutorial Application

This project is an implementation of PedroTech's tutorial ["MERN Tutorial For Beginners | Learn MERN In 60 Minutes"](https://www.youtube.com/watch?v=I7EDAR2GRVo).

## Description

A simple application that demonstrates the use of the MERN stack (MongoDB, Express, React, Node.js) to create a complete web application with basic CRUD operations. The application allows users to create and view users from a MongoDB database.

## Technologies Used

- **MongoDB**: NoSQL database for storing user data
- **Express.js**: Server framework for handling HTTP routes and responses
- **React**: Frontend library for creating the user interface
- **Node.js**: JavaScript runtime environment for the server

## Project Structure

```
├── client/                 # React application
│   ├── public/             # Static files
│   └── src/                # React source code
│       ├── App.js          # Main component
│       └── App.css         # CSS styles
├── server/                 # Node.js/Express server
│   ├── models/             # Mongoose models
│   │   └── Users.js        # User model
│   ├── .env                # Environment variables (not included in the repository)
│   └── index.js            # Server entry point
├── .gitignore              # Files ignored by Git
└── README.md               # This file
```

## Features

- Get all users from the database
- Create new users
- Simple and functional interface

## Installation

1. Clone this repository:
```bash
git clone <repository-url>
cd <repository-name>
```

2. Install server dependencies:
```bash
npm install
```

3. Install client dependencies:
```bash
cd client
npm install
```

4. Create a `.env` file in the `server` folder with the following variables:
```
CONNECTION_STRING=your_mongodb_connection_string
```

## Running the Application

1. Start the server (from the project root):
```bash
npm start
```

2. In another terminal, start the client:
```bash
cd client
npm start
```

3. Open your browser at `http://localhost:3000`

## Credits

This project is based on [PedroTech's tutorial on YouTube](https://www.youtube.com/watch?v=I7EDAR2GRVo).

## License

This project is under the MIT license.
