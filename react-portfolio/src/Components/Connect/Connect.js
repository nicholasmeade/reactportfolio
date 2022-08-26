import "./Connect.scss";

const Connect = () => {
    return ( 
        <div>
            <div className="contact-greeting">
                <h2>Think we're a good fit? I'm currently open to work and seeking future opportunities. Send me a message to my email below to get in touch.</h2>
            </div>
            <div className="contact-form">
                <form>
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
        </div>
     );
}

export default Connect;