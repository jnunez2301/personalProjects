# Code Sharing App

This is a code sharing app built using various technologies such as **Monaco Editor**, **Tanstack Router**, **PrimeReact**, and **Tanstack Query** for handling code editing, path routing, styling buttons and toasts, and fetching data with cache.

The project encompasses both frontend and backend components. The backend is powered by **Node.js** and **Express**, utilizing **MongoDB** as the database to store objects. **dotenv** is used for managing environment variables on the backend, ensuring sensitive information is kept secure.

## Project Setup

To set up the project, follow these steps:

### Backend

1. Clone the `../codeSharingApp_backend` repository.
2. Run `npm install` to install dependencies.
3. Create a `.env` file and provide the MongoDB URI as `MONGODB_URI=<YourMongoDB_URI>`.
4. Run `npm run dev` to start the backend server.

### Frontend

1. Ensure you have `yarn` installed as the package manager.
2. Clone the frontend repository.
3. Run `yarn` to install dependencies.
4. Create a `.env` file and set `VITE_BASE_URL` to your frontend URL.
5. Start the frontend server.

## What I've Learned

Through this project, I've gained valuable experience in:

- Full-stack development, combining frontend and backend technologies to create a cohesive application.
- Utilizing modern tools and libraries such as Monaco Editor, Tanstack Router, PrimeReact, and Tanstack Query to enhance user experience and streamline development.
- Handling sensitive data securely by using environment variables and the dotenv package.
- Managing state effectively both on the client and server-side.
- Implementing CRUD operations with MongoDB as the database.
- Enhancing UI/UX design through intuitive interfaces and responsive layouts.
- Deploying and managing a full-stack application, including server setup and deployment.

## Credits

Special thanks to the following:

- [Table Icons](https://tabler.io/icons) for providing the page icon.
- [Tanstack](https://tanstack.com/) for its amazing features.
- [Monaco Editor](https://microsoft.github.io/monaco-editor/) for the intuitive code interface.

This project serves as a comprehensive full-stack project, offering insights into state management, backend development, and UI/UX design, and providing a solid foundation for future projects and learning endeavors.