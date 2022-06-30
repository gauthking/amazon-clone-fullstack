const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { application, response } = require("express");
const stripe = require("stripe")("sk_test_51LFf9XSBnmpf0FnbWcmoPf0W71J65UiMR4F8ZUs321lwRjotaolC96PlRJZUphVdIQ5WjQqkuQIBxootGbxxVl7f00DguXFOnN")

// SETUP AN API

// App config
const app = express();


// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());


// API routes
app.get('/', (request, response) => response.status(200).send("Hello World"))

// trying out a different endpoint
// app.get('/gauthking', (request, response) => response.status(200).send("This is the gauthking endpoint"))

//post request
app.post('/payments/create', async (request, response) => {
    const total = request.query.total;
    console.log("Payment Request Recieved ", total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "inr", // always use the regional currency as stripe syncs with that

    });
    // 201 is the status for OK and created something
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    }) // here we created the payment intent
})





//RUN COMMAND
// Listen Command
exports.api = functions.https.onRequest(app);

//example api endpoint http://localhost:5001/clone-react-63f94/us-central1/api
// use the above api endpoint for the base url inside of the axios.js