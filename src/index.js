import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import authRoutes from "./routes/authRoutes.js";
import urlsRoutes from "./routes/urlsRoutes.js";
import usersRoutes from "./routes/usersRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use(authRoutes, urlsRoutes, usersRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log("Server running on port " + process.env.PORT));