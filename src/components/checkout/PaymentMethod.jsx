import Input from "../Input";

const PaymentMethod = () => {
    return (
        <div className="mt-4">
            <span className="text-gray-800 font-semibold">Payment</span>
            <div className="flex mt-4">
                <div className="mr-4 flex items-center justify-center gap-2">
                    <input type="radio" name="method" checked/> Credit Card
                </div>
                <div className="mx-4 flex items-center justify-center gap-2">
                    <input type="radio" name="method"/> PayPal
                </div>
                <div className="mx-4 flex items-center justify-center gap-2">
                    <input type="radio" name="method"/> eTransfer
                </div>
            </div>

            <div className="flex flex-col">
                <div className="mt-4">
                    <Input label="Card number"/>
                </div>
                <div className="mt-4">
                    <Input label="Name on card"/>
                </div>
                <div className="grid grid-cols-6 gap-4 w-full mt-4">
                    <div className="col-span-4">
                        <Input type="date" label="Expiration date"/>
                    </div>
                    <div className="col-span-2">
                        <Input type="number" label="CVC" className="col-span-2"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PaymentMethod;