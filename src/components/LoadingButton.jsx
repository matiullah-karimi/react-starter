import Loading from './Loading';

const LoadingButton = ({ loading, onClick, children }) => {
    return (
        <button disabled={loading} className="btn btn-primary w-full flex justify-center items-center disabled:opacity-80" onClick={onClick}>
            {loading && <Loading />} { children }
        </button>
    );
}

export default LoadingButton;