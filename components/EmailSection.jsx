import React from 'react'
import { FaGithub, FaEnvelope, FaLinkedin } from 'react-icons/fa';


const EmailSection = () => {
    return (
        <section id="contact" className="flex flex-col items-center my-12 py-24">
            <div className="text-center mb-8">
                <h5 className="text-2xl font-bold text-[#3b3b3b] mb-4">Let's Connect!</h5>
                <p className="text-lg">My inbox is always open for new connections and opportunities.</p>
                <p className="text-lg">Please send me a message if you'd like to chat! (˶ᵔ ᵕ ᵔ˶)</p>
            </div>
            <div id="links" className="flex space-x-8">
                <a href="mailto:ynhapnguyen@gmail.com" className="hover:opacity-85 transition-opacity"><FaEnvelope size="4em" color="#8ba888" /></a>
                <a href="https://github.com/ynguyen0" className="hover:opacity-85 transition-opacity"><FaGithub size="4em" color="#8ba888" /></a>
                <a href="https://www.linkedin.com/in/pauline-nguyen-113389260" className="hover:opacity-85 transition-opacity"><FaLinkedin size="4em" color="#8ba888" /></a>
            </div>

        </section>
    );
}



export default EmailSection;