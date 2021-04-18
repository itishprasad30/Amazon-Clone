const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51IY0CNSGBFuQXTAc4QFk4fL87EwttnOuPU0CXhyJMpgEEFCyPRjWbbqBtluFkitoQ1yrwqt9IPFCgcb8mzbgjuLN00bLjM0KUY"
);

// API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("hello world"));
app.get("/pintu", (request, response) =>
  response.status(200).send("hello pintu sahoo")
);

app.post("/payment/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Recieved BOOM!!!  >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "INR",
  });

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen command
exports.api = functions.https.onRequest(app);

// example end point
// http://localhost:5001/clone-ca929/us-central1/api
