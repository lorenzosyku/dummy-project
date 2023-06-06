import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-gray-800">
      <ul className="flex items-center justify-between p-4">
        <li>
          <Link href="/">
            <h3 className="text-white font-bold">Home</h3>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <h3 className="text-white">About</h3>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <h3 className="text-white">Contact</h3>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
