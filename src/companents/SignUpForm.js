import "./SignUpForm.css";
import SignUpResult from "./SignUpResult";

function SignUpForm() {
    return(
<div className="form-signup">
    <h1>Sign Up</h1>
    <form>
        <input type="text" placeholder="Username"/>
        <input type="email" placeholder="Email"/>
        <input type="password" placeholder="Password"/>
        <button> <a href="/signupresult">Submit </a></button>
    </form>
</div>
    )
}
export default SignUpForm
