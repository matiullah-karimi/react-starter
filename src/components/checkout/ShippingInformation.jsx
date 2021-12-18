import Input from "../Input";

const ShippingInformation = () => {
    return (
        <div>
            <span className="text-gray-800 font-semibold">Shipping Information</span>

            <div className="grid grid-cols-2 gap-4 pt-3">
                <Input label="First Name"/>
                <Input label="Last Name"/>
            </div>

            <div className="pt-3">
             <Input label="Address"/>
            </div>

            <div className="pt-3">
             <Input label="Appartment, Suite, etc"/>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-3">
                <Input label="Country"/>
                <Input label="City"/>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-3">
                <Input label="State"/>
                <Input label="Postal code"/>
            </div>

            <div className="pt-3">
             <Input label="Phone"/>
            </div>
        </div>
    );
}

export default ShippingInformation;