import { useState } from 'react';
import Razorpay from 'razorpay';

const rzp = new Razorpay({
    key_id: 'd6wdd6ed6d6wsx6sdw6dw6w6xsw6x',
    key_secret: 'xsxsx7sxa47xa5xa8xa5xax8ax5a7a6'
});

const RazorpayPayment = () => {
    const [orderId, setOrderId] = useState('');

    const handlePayment = async () => {
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
            setOrderId(response.id);
          } catch (error) {
            console.log(error);
          }
    };

    return (
        <div>
            <button onClick={handlePayment}>Pay Now</button>
            {orderId && <p>Order ID: {orderId}</p>}
        </div>
    );
};

export default RazorpayPayment;
