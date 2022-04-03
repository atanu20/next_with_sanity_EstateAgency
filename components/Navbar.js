import React from 'react';
import Link from 'next/link';
const Navbar = () => {
  return (
    <div className="navb p-2">
      <Link href="/">
        <div>
          <h2 className="logotext hh">
            <span>Estate</span>Agency
          </h2>
        </div>
      </Link>

      <button className="btn btn-success">Book Now</button>
    </div>
  );
};

export default Navbar;
