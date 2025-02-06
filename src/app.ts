import express from "express";
import articleRoutes from "./routes/articleRoutes";
import { connectDB } from "./config/database";
import cors from "cors";

const app = express();
app.use(cors());

app.use(express.json());

app.use("/api/article", articleRoutes);

const PORT = process.env.PORT || 5000;

connectDB().then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});

export default app;
