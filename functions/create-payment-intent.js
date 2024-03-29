require("dotenv").config();
const stripe = require("stripe")(process.env.REACT_APP_STRIPE_SECRET_KEY);
exports.handler = async function (event, context) {
  console.log(event);
  const { cart, shippingFee, totalAmount } = JSON.parse(event.body);

  const calculateOrderAmount = () => {
    // Replace this constant with a calculation of the order's amount
    // Calculate the order total on the server to prevent
    // people from directly manipulating the amount on the client
    return (shippingFee + totalAmount) * 100;
  };

  try {
    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
      amount: calculateOrderAmount(),
      currency: "eur",
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ clientSecret: paymentIntent.client_secret }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
