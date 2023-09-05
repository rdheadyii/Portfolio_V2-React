export default function Home({name, type, label, placeholder, event}) {
    return (
        <>
        <div>
            <label htmlFor="first-name">
                {label}
            </label>
            <div>
                <input 
                type={type}
                name={name}
                id={name}
                placeholder={placeholder}
                onChange={event}
                required
                />
            </div>
        </div>
        </>
    );
}