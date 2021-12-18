import DeliveryMethod from "../components/checkout/DeliveryMethod";
import OrderSummary from "../components/checkout/OrderSummary";
import PaymentMethod from "../components/checkout/PaymentMethod";
import ShippingInformation from "../components/checkout/ShippingInformation";

const Checkout = () => {
    return (
        <div className="grid grid-cols-2 p-4 gap-16">
            <div>
                <ShippingInformation />

                <div className="my-8 border-t border-gray-300"></div>

                <DeliveryMethod />

                <div className="my-8 border-t border-gray-300"></div>

                <PaymentMethod />
            </div>
            <div>
               <OrderSummary /> 
            </div>
        </div>
    );
}

export default Checkout;