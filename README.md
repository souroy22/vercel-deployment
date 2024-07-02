# Express Backend with TypeScript Setup and Vercel Deployment

This repository provides a guide and setup for creating an Express backend using TypeScript, along with deployment to Vercel.

## Prerequisites

Before you begin, make sure you have Node.js and npm installed on your machine.

## Installation

1. **Initialize a new npm project:**

    ```bash
    npm init -y
    ```

2. **Install required dependencies:**

    ```bash
    npm install typescript ts-node @types/node @types/express --save-dev
    ```

3. **Create a `tsconfig.json` in the root directory and add the following configuration:**

    ```json
    {
      "compilerOptions": {
        "module": "commonjs",
        "esModuleInterop": true,
        "allowSyntheticDefaultImports": true,
        "target": "es6",
        "noImplicitAny": true,
        "moduleResolution": "node",
        "sourceMap": true,
        "outDir": "dist",
        "baseUrl": ".",
        "paths": {
          "_": ["node_modules/_", "src/types/_"]
        }
      },
      "include": ["./src/**/*"]
    }
    ```

4. **Create a `vercel.json` file in the root directory and add the following configuration:**

    ```json
    {
      "version": 2,
      "builds": [
        {
          "src": "dist/index.js",
          "use": "@vercel/node",
          "config": { "includeFiles": ["dist/**"] }
        }
      ],
      "routes": [
        {
          "src": "/(.*)",
          "dest": "dist/index.js"
        }
      ]
    }
    ```

5. **Install pre-commit and rimraf:**

    ```bash
    npm i -D pre-commit rimraf
    ```

6. **Update the scripts in `package.json`:**

    ```json
    "scripts": {
      "start": "nodemon src/index.ts",
      "build": "rimraf dist && tsc",
      "ts.check": "tsc --project tsconfig.json",
      "add-build": "git add dist",
      "test": "echo \"Error: no test specified\" && exit 1"
    }
    ```

7. **Add pre-commit hooks in `package.json`:**

    ```json
    "pre-commit": [
      "ts.check",
      "build",
      "add-build"
    ]
    ```

## Usage

- **Run the development server:**

    ```bash
    npm start
    ```

- **Build the project:**

    ```bash
    npm run build
    ```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
