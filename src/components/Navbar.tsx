import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="border-b-2 flex flex-row justify-between">
      <ul className="flex flex-row gap-4 p-4 text-lg">
        <li>
            <Link href="/">
                <a>Home</a>
            </Link>
        </li>
        <li>
            <Link href="/about">
                <a>Api</a>
            </Link>
        </li>
        <li>
            <Link href="/about">
                <a>Tools</a>
            </Link>
        </li>
        <li>
            <Link href="/about">
                <a>FAQ</a>
            </Link>
        </li>
        <li>
            <Link href="/about">
                <a>PASTE</a>
            </Link>
        </li>
      </ul>
      <ul className="flex flex-row gap-2 text-lg p-4">
        <li>
            <Link href="Login">
                <a>Login</a>
            </Link>
        </li>
        <li>
            <Link href="SignUp">
                <a>Sign Up</a>
            </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
