# Simple React Todo List

A basic and interactive to-do list application built with React class components. This project allows users to manage their daily tasks by adding new items and removing existing ones. The interface is styled to resemble a clean, paper-like an organized planner.

## Screenshot


*![Todo List Screenshot](https://github.com/alrifqidarmawan/todolist-react-css/blob/main/src/assets/simple-todolist-react.png)*

## Features

*   **Add New Todos:** Easily add new tasks to your list via an input field.
*   **View Todos:** All current tasks are displayed in a clear, scrollable list.
*   **Remove Todos:** Delete tasks individually by clicking the "×" button next to each item.
*   **Clean Interface:** Styled to look like a sheet of paper or a digital planner.
*   **Scrollable List:** The list area will scroll if the number of tasks exceeds the visible height.
*   **Input Validation:** Prevents adding empty tasks.

## Technologies Used

*   **React:** (v17/v18)
    *   Class Components
    *   State Management (`this.state`, `this.setState`)
    *   JSX for UI rendering
    *   Inline Styling for component-specific styles
*   **JavaScript (ES6+):** For application logic.
*   **CSS:** Basic styling via `todolist.css` (jika ada) dan inline styles.

## Project Structure

*   `TodoLists.js`: The main React component containing all the logic and JSX for the to-do list.

## Prerequisites

Before you begin, ensure you have met the following requirements:
*   Node.js (LTS version recommended: [https://nodejs.org/](https://nodejs.org/))
*   npm (comes with Node.js) or yarn

## Installation & Setup

To get a local copy up and running, follow these simple steps:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/alrifqidarmawan/todolist-react-css/blob/main/src/assets/simple-todolist-react.png
    cd simple-todolist-react
    ```
    Jika belum ada di Git, cukup pastikan file `TodoLists.jsx` dan `todolist.css` berada dalam satu folder proyek.

2.  **Navigate to your project directory:**
    ```bash
    cd path/to/your/project-folder
    ```

3.  **Install dependencies:** 
    *   Using npm:
        ```bash
        npm install
        ```
    *   Using yarn:
        ```bash
        yarn install
        ```

4.  **Start the development server:**
    *   Using npm:
        ```bash
        npm start
        ```
    *   Using yarn:
        ```bash
        yarn start
        ```
    This will typically open the application in your default web browser at `[http://localhost:5173/]`.

    Jika kamu hanya memiliki file komponen ini dan ingin menjalankannya, kamu perlu mengintegrasikannya ke dalam aplikasi React yang sudah ada (misalnya, import dan render `<TodoLists />` di dalam `App.js`).

## How to Use

1.  **Adding a Todo:**
    *   Type your task into the input field (placeholder: "you can type it here... and saved it").
    *   Click the "+" button to add the task to the list. Empty tasks will not be added.

2.  **Viewing Todos:**
    *   All added todos are displayed in a list format below the input field.
    *   If the list becomes too long, a scrollbar will appear for the list area.

3.  **Removing a Todo:**
    *   Click the "×" button located to the right of the todo item you wish to remove. The item will be instantly deleted from the list.

## Future Enhancements 

*   Mark todos as complete (toggle functionality).
*   Edit existing todos.
*   Persist todos to local storage so they are not lost on page refresh.
*   Filter todos (e.g., all, active, completed).

---
