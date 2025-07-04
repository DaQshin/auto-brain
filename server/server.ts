import dotenv from "dotenv";
import app from "./app";
import path from "path";
dotenv.config({ path: path.join(__dirname, "config.env") });

const port: number = parseInt(process.env.PORT || "5000");

app.listen(port, () => {
  console.log(`server running at http://localhost:${port}`);
});
