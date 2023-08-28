import "./SignUpForm.css";

function SignUpForm() {
    return(
<div className="form-signup">
    <h1>Sign Up</h1>
    <form>
        <input type="text" placeholder="Username"/>
        <input type="text" placeholder="Email"/>
        <input type="password" placeholder="Password"/>
        <button>Submit</button>
    </form>
</div>
    )
}
export default SignUpForm
