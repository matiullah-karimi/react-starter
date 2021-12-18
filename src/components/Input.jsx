const Input = props => (
    <div className="flex flex-col w-full">
        {
            props.label && <label className={`text-gray-600 text-sm font-semibold mb-1 ${props.labelClassName}`}>{props.label}</label>
        }
        <input 
            className={`${props.className} py-3 px-4 border border-gray-200 rounded-md w-full outline-gray-300`}
            type={props.type}
            name={props.name}
            value={props.value}
            onChange={props.onChange}
            placeholder={props.placeholder} />
    </div>
);

export default Input;