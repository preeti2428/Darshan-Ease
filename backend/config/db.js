const mongoose = require('mongoose');

const mongoURL = process.env.MONGO_URL || "mongodb://127.0.0.1:27017/darshanease_db";

mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log("✅ Database connected successfully");
    console.log("📊 Database URL:", mongoURL);
})
.catch((err) => {
    console.error("❌ DB Connection Failed:", err.message);
    console.error("⚠️  Make sure MongoDB is running on localhost:27017");
    process.exit(1);
});
