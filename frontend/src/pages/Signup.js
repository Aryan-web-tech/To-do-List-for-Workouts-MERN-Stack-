import { useState } from "react";
import { useSignup } from "../hooks/useSignup";

const Signup = () => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const {signup,error,isLoading} = useSignup()

    const handleSubmit = (e) => {
        e.preventDefault()

        signup(email,password)
    }

    return (
        <form className="signup" onSubmit={handleSubmit}>
            <h3>Sign Up</h3>
            
            <label>Email : </label>
            <input
             type="text"
             onChange= {(e)=> setEmail(e.target.value)}
             value={email}
            /> 

            <label>Password : </label>
            <input
             type="text"
             onChange= {(e)=> setPassword(e.target.value)}
             value={password}
            /> 

            <button disabled={isLoading}>Sign up</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}

export default Signup