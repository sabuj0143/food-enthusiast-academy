import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "./CheckOutForm";
import useSelected from "../../../Hooks/useSelected";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Payment = () => {

    const [selects] = useSelected();
    const total = selects.reduce((sum, item) => sum + item.price, 0);
    const price = parseFloat(total.toFixed(2));

    return (
        <div>
            <Elements stripe={stripePromise}>
                <CheckOutForm cart={selects} price={price}></CheckOutForm>
            </Elements>
        </div>
    );
};

export default Payment;