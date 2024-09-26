import express from "express";
import serveIndex from "serve-index";
import path from "path";
import { fileURLToPath } from "url";

// Get __filename and __dirname in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Serve static files and directory listing for /files route
// Directory to serve: public (this directory should exist)
app.use(
  "/files",
  express.static(path.join(__dirname, "public")),
  serveIndex(path.join(__dirname, "public"), { icons: true })
);

// Start the server
app.listen(3001, () => {
  console.log("Server running at http://localhost:3001");
});
