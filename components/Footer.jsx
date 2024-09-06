import React from "react";

const Footer = () => {
    return (
        <footer className="text-[#3b3b3b] py-4 flex justify-center items-center">
            <div className="text-center">
                <p className="text-sm">&copy; {new Date().getFullYear()} Pauline Nguyen. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
