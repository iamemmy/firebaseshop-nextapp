// Navbar.js or Navbar.tsx
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/createShop">Create Shop</Link>
        </li>
        <li>
          <Link href="/viewShops">View Shops</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;