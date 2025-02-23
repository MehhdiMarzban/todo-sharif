# Todo Sharif

The online address for this application is [http://todo-sharif.mehdi-marzban.ir](http://todo-sharif.mehdi-marzban.ir).

## Introduction

To access the dashboard, you need to create a user with the default username and password.

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/your-repo/todo-sharif.git
    ```
2. Navigate to the project directory:
    ```sh
    cd todo-sharif
    ```
3. Install dependencies:
    ```sh
    npm install
    ```
4. Build app:
    ```sh
    npm run build
    ```
5. Start the application:
    ```sh
    npm start
    ```

## Features

-   Fully responsive design
-   Utilizes semantic tags
-   Follows semantic commit messages
-   Uses Semantic UI for styling

## Packages Used

-   Next
-   React
-   TailwindCss
-   Zustand
-   Motion

## Project Structure

```
todo-sharif/
├── public/
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   ├── header/
│   │   │   ├── Footer.tsx
│   │   │   ├── AdminLayout.tsx
│   │   │   ├── ThemeToggler.tsx
│   │   │   ├── Icons.tsx
│   │   ├── features/
│   │   │   ├── auth/
│   │   │   ├── todo/
│   │   │   ├── intro/
│   │   │   ├── dashboard/
│   │   ├── providers/
│   ├── configs/
│   ├── constants/
│   ├── lib/
│   ├── types/
│   ├── validations/
│   ├── stores/
│   ├── app/
│   ├── hooks/
│   └── styles/
└── package.json
```

## Usage

1. Open your browser and go to [http://localhost:3000](http://localhost:3000).
2. Log in with the default username and password.
3. Navigate through the dashboard to manage your tasks.

## Code Structure

-   **Components**: Contains UI components.
-   **Pages**: Contains different pages of the application.
-   **Stores**: Manages the application state.
-   **Styles**: Contains CSS and styling files.

## Conclusion

This project is designed with a focus on responsiveness and semantic code practices, ensuring a smooth user experience and maintainable codebase.
