// In index.js
import express from 'express';
import { routes } from './routes/route.js'; // Ensure the correct path

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/', routes); // Use the imported routes

import connectDB from "./db/conn.js";
connectDB()
    .then(() => {
        app.listen(process.env.PORT || 4000, () => {
            console.log(`server is running at port: 4000`);
        });
    })
    .catch((err) => {
        console.log("Mongo db connection failed!!", err);
    });

// app.listen(port, () => {
//   console.log('Your app is listening on port ' + port);
// });
