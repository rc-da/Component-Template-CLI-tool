# Component Template CLI Tool

This is a custom Command Line Interface tool designed to quickly scaffold component file structures in any project. It automates the creation of a component file (.jsx) and its associated styles file (.css), ensuring consistent project setup.

## Installation

1.  **Navigate to the tool's root directory.**
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Link the command:** Register the tool globally on your system.
    ```bash
    npm link
    ```

## Usage

Run the `mycomp` command followed by the `component` subcommand and the desired name.

```bash
mycomp component <ComponentName>
```
## Example:

Bash

```bash
mycomp component UserProfile
```

Output: The command creates the following files, ensuring the necessary parent directories (./src/components and ./src/styles) exist:

```./src/components/UserProfile.jsx```

```./src/styles/UserProfile.css```
