import React, { useState } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Payment from './Payment';
import './styles/payment.css';
import { Navbar } from './Navbar';

const stripePromise = loadStripe("pk_test_51LHPxYSJI4bD5FAIL1t2GOKjx5oJd2nALQ3tiCDUI7hKMv4lbt6aMDyXUFvKYAqtb74LL8BVk8ZQgPiS6bmIiTqM00Tz9tkYNF");

const successMessage = () => {
    return (
        <>
            <Navbar />
            <div className="success-msg">
                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-check2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                </svg>
                <div className="title">Payment <br/>Successful</div>
            </div>
        </>
    )
}

function PaymentDone() {
    const [paymentCompleted, setPaymentCompleted] = useState(false);

    return (
        <div className="container">


            <div className="row s-box">
                {paymentCompleted ? successMessage() : <React.Fragment>
                    <div className="pay-form col-md-7 order-md-1">
                        <div className="py-5 text-center">
                            <h4>Payment</h4>
                        </div>
                        <Elements stripe={stripePromise}>
                            <Payment amount={2000} setPaymentCompleted={setPaymentCompleted} />
                        </Elements>
                    </div>
                </React.Fragment>}
            </div>

        </div>
    );
}

export default PaymentDone;