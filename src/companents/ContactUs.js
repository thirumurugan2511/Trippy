import "./ContactUs.css";

function ContactUs() {
    return(
<div className="form-container">
    <h1>Send a message to us!</h1>
    <form>
        <input type="text" placeholder="Name"/>
        <input type="text" placeholder="Email"/>
        <input type="text" placeholder="Suject"/>
        <textarea placeholder="Message" rows="4"></textarea>
        <button>Send Message</button>
    </form>
</div>
    )
}

export default ContactUs