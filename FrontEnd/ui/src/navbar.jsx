import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import CloseIcon from '@mui/icons-material/Close';

const Header = () => {
  const Links = [
    { name: "Home", link: "Home" },
    { name: "About", link: "About" },
    { name: "Contact", link: "Contact" },
  ];

  const [open, setOpen] = useState(false);
  const [showBookingForm, setShowBookingForm] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  const toggleBookingForm = () => {
    setShowBookingForm(!showBookingForm);
  };

  return (
    <header className='fixed top-0 left-0 z-10 w-full shadow-md bg-red-900'>
      <nav className='items-center justify-between py-4 md:flex md:px-10 px-7'>
        <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-white'>
          AUTO KAVEE
        </div>
        <div onClick={toggleMenu} className='absolute text-2xl cursor-pointer right-8 top-3 md:hidden'>
          {open ? <CloseIcon /> : <DensityMediumIcon />}
        </div>
        <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-red-900 text-white 
          md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in 
          ${open ? 'top-15 opacity-100' : 'top-[-490px]'} md:opacity-100 opacity-0`}>
          {Links.map((link) => (
            <li key={link.name} className='text-xl md:ml-8 md:my-0 my-7'>
              <ScrollLink to={link.link}
                smooth={true}
                duration={500}
                onClick={() => setOpen(false)}
              >
                {link.name}
              </ScrollLink>
            </li>
          ))}
          {/* Booking Button */}
          <li className='md:ml-8 md:my-0 my-7'>
            <button
              onClick={toggleBookingForm}
              className="bg-white text-red-900 px-4 py-2 rounded-md hover:bg-gray-300 transition"
            >
              Booking
            </button>
          </li>
        </ul>
      </nav>

      {/* Booking Form - Conditional Rendering */}
      {showBookingForm && (
        <div className="p-4 mt-5 mx-auto max-w-md bg-white shadow-lg rounded-md">
          <h3 className="text-xl font-semibold mb-4">Booking Form</h3>
          <form className="space-y-4">
            {/* Name Input */}
            <div className="flex flex-col">
              <label className="font-semibold">UserName</label>
              <input
                type="text"
                placeholder="Your Name"
                className="p-2 border border-gray-300 rounded-md"
              />
            </div>

            <div className="flex flex-col">
              <label className="font-semibold">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="flex flex-col">
              <label className="font-semibold">Email</label>
              <input
                type="text"
                placeholder="Your Name"
                className="p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="flex flex-col">
              <label className="font-semibold">Contact Number</label>
              <input
                type="text"
                placeholder="Your Name"
                className="p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="flex flex-col">
              <label className="font-semibold">Country</label>
              <input
                type="text"
                placeholder="Your Name"
                className="p-2 border border-gray-300 rounded-md"
              />
            </div>













            {/* Age Input */}
            <div className="flex flex-col">
              <label className="font-semibold">Age</label>
              <input
                type="number"
                placeholder="Your Age"
                className="p-2 border border-gray-300 rounded-md"
              />
            </div>
            {/* Submit Button */}
            <button
              type="submit"
              className="bg-red-900 text-white px-4 py-2 rounded-md hover:bg-red-700 transition"
            >
              Submit
            </button>
          </form>
        </div>
      )}
    </header>
  );
};

export default Header;
