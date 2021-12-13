const Input = props => (
    <input 
        className={`${props.className} py-3 px-4 border border-gray-200 m-2 rounded-md w-full outline-gray-300`}
        type={props.type}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        placeholder={props.placeholder} />
);

export default Input;