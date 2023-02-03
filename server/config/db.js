import mongoose from 'mongoose'

const connectDB = async () => {
  try {
    mongoose.set('strictQuery', false)
    const conn = await mongoose.connect(
      process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/commercify',
      {
        useUnifiedTopology: true,
        useNewUrlParser: true,
      }
    )

    console.log(`MongoDB connect ${conn.connection.host}`.blue.underline)
  } catch (error) {
    console.error(`Error : ${error.message}`.red.underline.bold)
    process.exit(1)
  }
}

export default connectDB
