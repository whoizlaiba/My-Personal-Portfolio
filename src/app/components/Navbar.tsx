// components/Navbar.tsx
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white p-5 fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-semibold">
          <Link href="/">Laiba Parvez</Link>
        </div>
        <ul className="flex space-x-8">
          <li><Link href="#about" className="hover:text-gray-400">About</Link></li>
          <li><Link href="#skills" className="hover:text-gray-400">Skills</Link></li>
          <li><Link href="#contact" className="hover:text-gray-400">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
