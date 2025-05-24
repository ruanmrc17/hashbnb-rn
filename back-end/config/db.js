import 'dotenv/config'
import mongoose from 'mongoose'


const { MONGO_URL } = process.env
export const connectDb = async () => {
    try {
        await mongoose.connect(MONGO_URL)
        console.log('Conectou no MONGO')
    } catch (error) {
        console.log('ish...', error)
    }

}





































