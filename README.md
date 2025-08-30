# Onchain Blog

Onchain Blog is a full-stack blogging platform that allows users to view onchain posts. It features user authentication, dynamic routing, and a responsive design. The project is built using React, Redux, Tailwind CSS, Node.js, and MongoDB.

---

## Features

### Frontend:

- **Responsive Design**: Fully responsive UI built with Tailwind CSS.
- **Dynamic Routing**: View full posts dynamically using React Router.
- **Search Functionality**: Search for posts dynamically without page reloads.
- **Authentication**: Sign up, sign in, and Google OAuth integration.
- **State Management**: Redux Toolkit for managing user authentication state.

### Backend:

- **RESTful API**: Built with Express.js to handle user authentication and post management.
- **MongoDB**: Database for storing user and post data.
- **JWT Authentication**: Secure user authentication using JSON Web Tokens.
- **Error Handling**: Centralized error handling for API requests.

---

## Tech Stack

### Frontend:

- **React**: For building the user interface.
- **Redux Toolkit**: For state management.
- **React Router**: For routing.
- **Tailwind CSS**: For styling.
- **Vite**: For fast development and build tooling.

### Backend:

- **Node.js**: For the server-side runtime.
- **Express.js**: For building the RESTful API.
- **MongoDB**: For the database.
- **Mongoose**: For MongoDB object modeling.
- **JWT**: For secure authentication.

---

## Installation

### Prerequisites:

- Node.js (v16 or higher)
- MongoDB (local or cloud instance)

### Clone the Repository:

```bash
git clone https://github.com/your-username/onchain-blog.git
cd onchain-blog
```

### Install Dependencies:

#### Client:

```bash
cd client
npm install
```

#### API:

```bash
cd ../api
npm install
```

---

## Environment Variables

### Client:

Create a `.env` file in the `client` directory and add the following:

```env
VITE_FIREBASE_API=your_firebase_api_key
```

### API:

Create a `.env` file in the `api` directory and add the following:

```env
DATABASE=your_mongodb_connection_string
JWT=your_jwt_secret
PORT=3000
```

---

## Usage

### Start the Development Server:

#### Client:

```bash
cd client
npm run dev
```

#### API:

```bash
cd api
npm run dev
```

### Access the Application:

- Open your browser and navigate to: `http://localhost:5173`

---

## Folder Structure

```
onchain-blog/
├── client/                     # Frontend code
│   ├── public/                 # Static assets
│   ├── src/                    # Source code
│   │   ├── components/         # Reusable components
│   │   ├── pages/              # Page components
│   │   ├── redux/              # Redux store and slices
│   │   ├── App.jsx             # Main app component
│   │   ├── main.jsx            # Entry point
│   │   └── index.css           # Global styles
│   ├── vite.config.js          # Vite configuration
│   └── package.json            # Client dependencies
├── api/                        # Backend code
│   ├── config/                 # Database configuration
│   ├── controllers/            # API controllers
│   ├── models/                 # Mongoose models
│   ├── routes/                 # API routes
│   ├── server.js               # Entry point
│   └── package.json            # API dependencies
└── README.md                   # Project documentation
```

---

## API Endpoints

### Authentication:

- **POST** `/api/auth/sign-up`: Register a new user.
- **POST** `/api/auth/sign-in`: Log in an existing user.
- **POST** `/api/auth/google-auth`: Log in with Google OAuth.
- **POST** `/api/auth/sign-out`: Log out the current user.

### Posts:

- **GET** `/api/news/onchain-news`: Fetch all posts.
- **POST** `/api/post/new-post`: Create a new post.

---

## Scripts

### Client:

- `npm run dev`: Start the development server.
- `npm run build`: Build the app for production.
- `npm run preview`: Preview the production build.

### API:

- `npm run dev`: Start the development server with `nodemon`.
- `npm start`: Start the production server.

---

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature-name`.
3. Commit your changes: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin feature-name`.
5. Open a pull request.

---

## License

This project is licensed under the MIT License. See the LICENSE file for details.

---

## Acknowledgments

- [React](https://reactjs.org/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)
