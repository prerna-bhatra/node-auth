import express from 'express';
import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
dotenv.config();

// import authRoutes from './routes/authRoutes';
import { json } from 'body-parser';
import authRoutes from './routes/auth.routes';
import blogRoutes from './routes/blog.route';


const app = express();

app.use(json());

console.log({mongodb:process.env.MONGODB_URI});


// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || '', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useCreateIndex: true,
});

// Routes
// Use Auth Routes
app.use('/auth', authRoutes);
app.use('/blog', blogRoutes);

app.listen(3005, () => {
  console.log('Server is running on port 3005');
});