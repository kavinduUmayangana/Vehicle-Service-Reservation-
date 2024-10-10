import React, { useState } from 'react';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import logo from '../src/logo2.jpg';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted', formData);
  };

  return (
    <div className="flex flex-col md:flex-row gap-2 p-8">
    
      <div className="p-8 bg-white rounded-md shadow-md md:w-1/2">
        
        <div className="text-center mb-8">
          <p className="text-gray-500 uppercase">Send us a message</p>
          <h1 className="text-4xl font-bold">
            Find <span className="text-red-500">Us</span>
          </h1>
        </div>

        
        <div className="space-y-6">
        
          <div className="flex items-center space-x-4">
            <div className="p-4 border-2 border-red-500 rounded-md">
              <HeadsetMicIcon className="text-red-500" fontSize="large" />
            </div>
            <div>
              <p className="font-semibold text-red-500">HOTLINE</p>
              <p className="text-lg">011 2 640 640</p>
            </div>
          </div>

      
          <div className="flex items-center space-x-4">
            <div className="p-4 border-2 border-red-500 rounded-md">
              <PhoneIcon className="text-red-500" fontSize="large" />
            </div>
            <div>
              <p className="font-semibold text-red-500">SALES</p>
              <p className="text-lg">011 2 640 640</p>
            </div>
          </div>

        
          <div className="flex items-center space-x-4">
            <div className="p-4 border-2 border-red-500 rounded-md">
              <EmailIcon className="text-red-500" fontSize="large" />
            </div>
            <div>
              <p className="font-semibold text-red-500">EMAIL</p>
              <p className="text-lg">info@automiraj.lk</p>
            </div>
          </div>

  
          <div className="flex items-center space-x-4">
            <div className="p-4 border-2 border-red-500 rounded-md">
              <LocationOnIcon className="text-red-500" fontSize="large" />
            </div>
            <div>
              <p className="font-semibold text-red-500">ADDRESS</p>
              <p className="text-lg">66, Attidiya Road, Rathmalana, Sri Lanka 10390</p>
            </div>
          </div>
        </div>
      </div>

      
      <div className="w-full md:w-1/2 flex justify-center"> <div className="max-w-md mx-auto p-8 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
      
    
      <form onSubmit={handleSubmit} className="space-y-4">
        
    
        <div className="flex flex-col">
          <label className="font-semibold">
            Name <span className="text-red-500">*</span>
          </label>
          <div className="flex space-x-4">
            <input
              type="text"
              name="firstName"
              placeholder="First"
              value={formData.firstName}
              onChange={handleChange}
              className="p-2 border border-gray-300 rounded-md flex-1"
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last"
              value={formData.lastName}
              onChange={handleChange}
              className="p-2 border border-gray-300 rounded-md flex-1"
            />
          </div>
        </div>
        
        
        <div className="flex flex-col">
          <label className="font-semibold">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

      
        <div className="flex flex-col">
          <label className="font-semibold">Comment or Message</label>
          <textarea
            name="message"
            placeholder="Your message here"
            value={formData.message}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded-md h-32"
          />
        </div>

        
        <button
          type="submit"
          className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
       
      </div> 
    </div>
  );
};

export default Contact;
