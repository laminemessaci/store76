import mongoose from 'mongoose';

/**
 * Connects to the MongoDB database.
 *
 * @return {Promise<void>} This function doesn't return anything.
 */
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log(`MongoDB Connected to ${conn.connection.host}`.cyan);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
