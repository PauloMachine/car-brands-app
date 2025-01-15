# Car Brands App

A React Native application for exploring car brands and their models, with user authentication, built using Expo, TypeScript, and a clean project architecture.

---

## Features

- **User Authentication**: Users can log in to access the app.
- **Car Brands List**: Displays a list of car brands fetched from a public API.
- **Car Models**: Displays models of a selected brand.
- **Protected Routes**: Ensures that certain screens are only accessible to authenticated users.
- **Form Validation**: Handles form validation using `react-hook-form`.
- **Error Handling**: Utilizes toast notifications for errors using `react-native-toast-message`.

---

## Technologies Used

### Frontend

- **React Native**: Framework for building cross-platform mobile applications.
- **Expo**: Framework and platform for universal React applications.
- **TypeScript**: For static type checking.
- **react-hook-form**: To handle form state and validation.
- **react-native-flash-message**: Alternative for error and status messages.
- **@react-navigation/native**: For navigation.
- **styled-components**: For styling components.

### Backend (API Used)

- **User Authentication API**:
  - Endpoint: `https://test-api-y04b.onrender.com/signIn`
  - Method: `POST`
  - Request Body: `{ user: "username", password: "password" }`
  - Response: `{ token: "JWT", userId: "id" }`
- **Car Brands API**:
  - Endpoint: `https://parallelum.com.br/fipe/api/v1/carros/marcas`
  - Method: `GET`
  - Response: List of car brands.
- **Car Models API**:
  - Endpoint: `https://parallelum.com.br/fipe/api/v1/carros/marcas/{brandCode}/modelos`
  - Method: `GET`
  - Response: List of car models for the given brand.

---

## Project Setup

### Prerequisites

1. **Node.js** installed on your machine.
2. **Yarn** for dependency management.
3. **Expo CLI** installed globally:
   ```bash
   npm install -g expo-cli
   ```

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/PauloMachine/car-brands-app.git
   ```
2. Navigate to the project directory:
   ```bash
   cd car-brands-app
   ```
3. Install dependencies:
   ```bash
   yarn install
   ```
4. Start the project:
   ```bash
   expo start
   ```

---

## Project Structure

```
car-brands-app/
├── src/
│   ├── components/      # Reusable UI components
│   ├── contexts/        # Contexts for state management
│   ├── hooks/           # Custom React hooks
│   ├── routes/      # Navigation setup
│   ├── screens/         # Screen components (SignIn, Home, Models)
│   ├── services/        # API service functions
│   ├── types/           # TypeScript type definitions
├── App.tsx              # Application entry point
├── package.json         # Project metadata and dependencies
├── README.md            # Project documentation
└── ...
```

---

## Usage

### Authentication

1. Enter the username and password on the login screen.
2. Upon successful login, you will be navigated to the home screen.

### View Car Brands

1. On the home screen, you can view a list of car brands.
2. Select a brand to navigate to the models screen.

### View Car Models

1. The models screen will display the car models associated with the selected brand.

---

## Important Commands

### Start the Project

```bash
expo start
```

### Build the Project

```bash
expo build
```

---
