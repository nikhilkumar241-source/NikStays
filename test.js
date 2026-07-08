require("dotenv").config();
const mongoose = require("mongoose");

(async () => {
  try {
    console.log(process.env.ATLASDB_URL);

    await mongoose.connect(process.env.ATLASDB_URL);

    console.log("✅ Connected successfully");
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();