import razorpay from "razorpay"


const rzp = new razorpay({
    key_id: 'd6wdd6ed6d6wsx6sdw6dw6w6xsw6x',
    key_secret: 'xsxsx7sxa47xa5xa8xa5xax8ax5a7a6'
});


export const getOrder = async (req, res) => {
    res.send("RazorPay payment Gateway")
}


export const paymentOrder = async (req, res) => {

    const payment_capture = 1;
    const amount = 1000;
    const currency = 'INR';

    const options = {
        amount: amount * 100,
        currency,
        receipt: 'receipt_order_1',
        payment_capture
    };

    try {
        const response = await rzp.orders.create(options);
        res.status(200).json({
          id: response.id,
          currency: response.currency,
          amount: response.amount
        });
      } catch (error) {
        console.log(error);
      }
}