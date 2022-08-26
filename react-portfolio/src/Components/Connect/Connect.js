import "./Connect.scss";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Connect = () => {
    const form = useRef()

    const sendEmail = (event) => {
        event.preventDefault()
        emailjs.sendForm('service_a82t4yf', 'template_al3gshd', form.current, 'edwpgf5hqEFOr_VTh')
            .then((result) => {
                alert('Message successfully sent!')
                window.location.reload(false)
            }, (error) => {
                alert('Failed to send email, please try again.')
                console.log(error.text)
            })
    }

    return ( 
        <div className="contact-container">
            <div className="contact-greeting">
                <h2>Think we're a good fit? I'm currently open to work and seeking future opportunities. Send me a message to my email below to get in touch.</h2>
            </div>
            <div className="contact-form">
                <form ref={form} onSubmit={sendEmail}>
                    <ul>
                        <li className="half">
                            <input type="text" name="name" placeholder="Name" required />
                        </li>
                        <li className="half">
                            <input type="email" name="email" placeholder="Email" required />
                        </li>
                        <li>
                            <input placeholder="Subject" type="text" name="subject" required />
                        </li>
                        <li>
                           <textarea placeholder="Message" name="message" required></textarea>
                        </li>
                        <li className="send-button">
                            <input type="submit" className="flat-button" value="SEND" />
                        </li>
                    </ul>
                </form>
            </div>
            <div className="ending-connect-message">
                <h2>Thank you for taking the time to visit my portfolio. Have a great day.</h2>
            </div>
        </div>
     );
}

export default Connect;