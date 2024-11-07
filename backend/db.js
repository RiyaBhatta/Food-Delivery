
const mongoose = require('mongoose');
const url = 'mongodb+srv://food:lakhipriya12345@cluster0.4e80m.mongodb.net/foodmern'




async function mongoDB() {
  try {
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to the database');

    const db = mongoose.connection.db;
    const fetched_data = await db.collection('food_items').find({}).toArray();
    const foodCat = await db.collection('foodcat').find({}).toArray();
    global.food_items = fetched_data;
    global.foodcat = foodCat;

  } catch (error) {
    console.error('Database connection error:', error);
  }
}





module.exports = mongoDB;