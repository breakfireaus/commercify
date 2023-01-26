import mongoose from 'mongoose'

const connectDb = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })

    console.log(`Mongo connect ${conn.connection.host}`.blue.underline)
  } catch (error) {
    console.error(`Error : ${error.message}`.red.underline.bold)
    process.exit(1)
  }
}

export default connectDb
