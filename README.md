---

# File Directory Server with Express

This project is a simple Node.js server that uses `express` to serve static files and `serve-index` to provide a directory listing. It is built with ES modules and demonstrates how to set up a basic server to browse files in a directory via a web interface.

## Features
- Serve static files from a directory.
- List directory contents with icons.
- Compatible with ES modules.
  
## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/tejas2292/Display-Directory-Nodejs.git
cd Display-Directory-Nodejs
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Create the Directory Structure

Make sure you have a `public` directory inside the project root. This is where the static files will be served from.

```bash
mkdir public
echo "Hello World" > public/hello.txt
```

### 4. Run the Application

```bash
npm start
```

By default, the server will start at `http://localhost:3001`.

### 5. Accessing the Files

- You can browse the files and directories served under the `/public` folder by visiting: 
  - `http://localhost:3001/files`
  
- You can also access specific files, for example:
  - `http://localhost:3001/files/hello.txt`

## Project Structure

```
/your-project
  ├── public/              # Directory to serve static files
  │   └── hello.txt        # Example file
  ├── index.js             # Main server file
  ├── package.json         # Project config and dependencies
  └── README.md            # Project documentation
```

## How It Works

- **Express**: Handles routing and serving of static files.
- **Serve-Index**: Provides directory listing for the `/public` folder.
- **ES Modules**: Uses ES module imports (`import` instead of `require`), compatible with modern JavaScript.

---
