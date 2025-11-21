import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="p-4">
      <div className="flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">Valencia</Link>
        <div className="space-x-4">
          <Link to="/" className="hover:text-blue-500">Home</Link>
          <Link to="/collection" className="hover:text-blue-500">Collection</Link>
          <Link to="/about" className="hover:text-blue-500">About</Link>
          <Link to="/contact" className="hover:text-blue-500">Contact</Link>
          <Link to="/cart" className="hover:text-blue-500">Cart</Link>
          <Link to="/profile" className="hover:text-blue-500">Profile</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;