import { useState } from "react";
import CheckIcon from "../icons/CheckIcon";

const DeliveryMethod = () => {
    const [deliveryMethods, setDeliveryMethods] = useState([
        {name: 'Standard', deliveryTime: '4-10 business days', price: '$10', checked: true},
        {name: 'Express', deliveryTime: '2-5 business days', price: '$40', checked: false}
    ]);

    const selectMethod = method => {
        const mapped = deliveryMethods.map(m => m.name == method.name ? {...m, checked: true} : {...m, checked: false});
       setDeliveryMethods(mapped);
    }

    return (
        <div>
            <span className="text-gray-800 font-semibold">Deliver Method</span>

            <div className="grid grid-cols-2 gap-4 mt-4">
                {
                    deliveryMethods.map(dm => <DeliveryMethodItem method={dm} selectMethod={selectMethod} key={dm.name}/>)
                }
            </div>
        </div>
    );
}

const DeliveryMethodItem = ({ method, selectMethod }) => {
    return(
        <div className={`flex flex-col bg-white shadow rounded-lg p-4 text-sm border-gray-600 transition duration-300 all cursor-pointer ${method.checked && 'border-2'}`} onClick={() => selectMethod(method)}>
            <div className="flex justify-between items-start">
                <span className="font-semibold text-gray-800"> { method.name } </span>
                    <div className={`p-1 rounded-full bg-gray-700 opacity-0 ${method.checked && 'opacity-100'}`}>
                        <CheckIcon className="fill-gray-100 w-3 h-3"/>
                    </div>
            </div>

            <span className="text-gray-500 mt-1"> { method.deliveryTime }</span>

            <span className="mt-4 font-semibold"> { method.price } </span>
        </div>
    );
}

export default DeliveryMethod;