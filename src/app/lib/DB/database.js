
import mongoose from 'mongoose';

const uri = `mongodb+srv://${process.env.NEXT_PUBLIC_UserName_Key}:${NEXT_PUBLIC_Pass}@cluster0.u87dt.mongodb.net/?appName=Cluster0`;

const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

async function run() {
  try {
    // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
    await mongoose.connect(uri, clientOptions);
    await mongoose.connection.db.admin().command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await mongoose.disconnect();
  }
}
run().catch(console.dir);

const userTable = new mongoose.Schema({
  name: String,
  email:String,
  pass:Number,
});
export const userCollection = mongoose.model('userTable', userTable);
