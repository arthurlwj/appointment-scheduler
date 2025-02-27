import "dotenv/config";
import app from "./src/app.js";
import connectDataBase from "./src/config/dbConnect.js";

const PORT = process.env.PORT || 8000;

const startServer = async () => {
  try {
    await connectDataBase();
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error.message);
    process.exit(1);
  }
};

startServer();