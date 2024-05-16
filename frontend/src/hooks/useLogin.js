import { useState } from "react"
import { toast } from 'react-hot-toast';
import { useAuthContext } from "../context/AuthContext";

const useLogin = () => {
    const [loading, setLoading] = useState(false)
    const { setAuthUser } = useAuthContext()

    const login = async (username, password) => {

        const success = handelInputErrors(username, password)
        if (!success) return;

        setLoading(true)

        try {
            const res = await fetch("/api/auth/login", {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify({ username, password })
            })
            const data = await res.json();

            if (res.ok) {
                toast.success('Signup successful');
            }

            if (data.error) {
                throw new Error(data.error)
            }

            localStorage.setItem("chat-user", JSON.stringify(data))

            setAuthUser(data)
        }
        catch (error) {
            toast.error(error.message)
        }
        finally {
            setLoading(false)
        }
    };

    return { loading, login }
};

export default useLogin

function handelInputErrors(username, password) {

    if (!username || !password) {
        toast.error('Please fill the username and password')
        return false;
    }
    return true;
}
