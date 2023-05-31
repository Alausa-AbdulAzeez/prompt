import mongoose from 'mongoose'

let isConnectedToDB = false

export const connectToDB = async () => {
  // CHECK WHAT IT DOES
  mongoose.set('strictQuery', true)

  try {
    if (isConnectedToDB) {
      console.log('Mongo DB is already connected')
      return
    } else {
      try {
        await mongoose
          .connect(process.env.MONGO_URI, {
            dbName: 'share_prompt',
          })
          .then(() => {
            console.log('Connected to the DB')
            isConnectedToDB = true
          })
      } catch (error) {
        console.log(error)
      }
    }
  } catch (error) {
    console.log(error)
  }
}
