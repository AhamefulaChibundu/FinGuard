require("dotenv").config();
require("./src/config/envValidation");

const app = require("./src/app.js");
const connectDB = require("./src/config/connectDB.js");

const PORT = process.env.PORT || 3050;

// Start the application
const startServer = async () => {
  try {
    // Connect to MongoDB first
    await connectDB();

    // Start Express only after a successful connection
    app.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}`);
    });
  } catch (error) {
    console.error("Application startup failed:", error.message);
    process.exit(1);
  }
};

startServer();
