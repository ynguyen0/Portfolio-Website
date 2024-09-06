import Link from "next/link";

const NavLink = ({ href, title }) => {
    return (
        <Link
            href={href}
            className="block py-2 pl-3 pr-4 text-[#3b3b3b] sm:text-xl rounded md:p-0 hover:text-[#8ba888]"
        >
            {title}
        </Link>
    );
};

export default NavLink;