const API_ENDPOINT = 'https://srill-storm-64724.herokuapp.com/pay';

export const stripePaymentMethodHandler = async (data, cback) => {
    const { amount, result } = data;
    if (result.error) {
        cback(result);
    } else {
        const paymentResponse = await stripePayment({
            payment_method_id: result.paymentMethod.id,
            name: result.paymentMethod.billing_details.name,
            email: result.paymentMethod.billing_details.email,
            amount: amount
        });
        console.log(paymentResponse);
        cback(paymentResponse);
    }
}

const stripePayment = async data => {
    const res = await fetch(`${API_ENDPOINT}/pay`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    })
    return await res.json();
}