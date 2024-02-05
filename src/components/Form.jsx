import { useState } from "react"

export default function Form() {
    const [error, setError] = useState(null);
    const [value, setValue] = useState('');
    const onSubmit = () => {
        setError(null);
        console.log(value.split('@'));
        if (value == "") {
            setError({ message: "Please enter your email." });
        }
        else if (!value.includes('@') || !value.split('@')[1]) {
            setError({ message: "Please enter a valid email." });
        }
        else {
            setValue("");
        }
    }
    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            onSubmit()
        }}>
            <div className="flex space-x-3">
                <input type="text" id="email-box" placeholder="Update in your inbox..." className="flex-1 px-4 rounded-full focus:outline-none text-sm"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    aria-describedby="email-error"
                />
                <button className="px-6 py-2 rounded-full text-white bg-brightRed hover:bg-brightRedLight focus:outline-none">Go</button>
            </div>
            {error && (
                <div id="email-error" aria-live="polite" aria-atomic="true">
                    <div className="text-sm text-red-500 mt-2 ml-6">
                        {error.message}
                    </div>
                </div>
            )}
        </form>
    )
}
