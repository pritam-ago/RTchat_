# Real-Time Chat Application

A modern real-time chat application built with TypeScript, React, Node.js, MongoDB, and Firebase Authentication.

## Features

- Real-time messaging using Socket.io
- User authentication with Firebase
- MongoDB for message storage
- Support for 1-on-1 and group chats
- Online/offline status tracking
- File sharing capabilities
- Modern UI with Chakra UI

## Tech Stack

### Backend

- Node.js with TypeScript
- Express.js
- Socket.io
- MongoDB with Mongoose
- Firebase Admin SDK

### Frontend

- React with TypeScript
- Vite
- Chakra UI
- Socket.io Client
- Firebase Client SDK
- Zustand for state management

## Prerequisites

- Node.js (v16 or higher)
- MongoDB
- Firebase account
- npm or yarn

## Setup

1. Clone the repository:

```bash
git clone <repository-url>
cd rtchat
```

2. Install dependencies:

```bash
npm run install:all
```

3. Set up environment variables:

Create `.env` files in both `server` and `client` directories:

Server (.env):

```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/rtchat
FIREBASE_PROJECT_ID=your-project-id
FIREBASE_CLIENT_EMAIL=your-client-email
FIREBASE_PRIVATE_KEY=your-private-key
CLIENT_URL=http://localhost:3000
```

Client (.env):

```
VITE_FIREBASE_API_KEY=your-api-key
VITE_FIREBASE_AUTH_DOMAIN=your-auth-domain
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-storage-bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
VITE_FIREBASE_APP_ID=your-app-id
```

4. Start the development servers:

```bash
# Terminal 1 - Start backend
npm run dev:server

# Terminal 2 - Start frontend
npm run dev:client
```

The application will be available at:

- Frontend: http://localhost:3000
- Backend: http://localhost:5000

## Project Structure

```
rtchat/
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── config/       # Configuration files
│   │   ├── hooks/        # Custom React hooks
│   │   ├── pages/        # Page components
│   │   ├── store/        # Zustand store
│   │   └── types/        # TypeScript types
│   └── public/           # Static files
│
└── server/                # Backend Node.js application
    ├── src/
    │   ├── models/       # MongoDB models
    │   ├── routes/       # API routes
    │   ├── middleware/   # Custom middleware
    │   └── utils/        # Utility functions
    └── dist/             # Compiled TypeScript files
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
