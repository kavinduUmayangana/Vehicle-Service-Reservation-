import React from 'react';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Contact = () => {
 
  return(
    <div className="p-8 bg-white rounded-md shadow-md">
    {/* Header */}
    <div className="text-center mb-8">
      <p className="text-gray-500 uppercase">Send us a message</p>
      <h1 className="text-4xl font-bold">
        Find <span className="text-red-500">Us</span>
      </h1>
    </div>

    {/* Contact Details */}
    <div className="space-y-6">
      {/* Hotline */}
      <div className="flex items-center space-x-4">
        <div className="p-4 border-2 border-red-500 rounded-md">
          <HeadsetMicIcon className="text-red-500" fontSize="large" />
        </div>
        <div>
          <p className="font-semibold text-red-500">HOTLINE</p>
          <p className="text-lg">011 2 640 640</p>
        </div>
      </div>

      {/* Sales */}
      <div className="flex items-center space-x-4">
        <div className="p-4 border-2 border-red-500 rounded-md">
          <PhoneIcon className="text-red-500" fontSize="large" />
        </div>
        <div>
          <p className="font-semibold text-red-500">SALES</p>
          <p className="text-lg">011 2 640 640</p>
        </div>
      </div>

      {/* Email */}
      <div className="flex items-center space-x-4">
        <div className="p-4 border-2 border-red-500 rounded-md">
          <EmailIcon className="text-red-500" fontSize="large" />
        </div>
        <div>
          <p className="font-semibold text-red-500">EMAIL</p>
          <p className="text-lg">info@automiraj.lk</p>
        </div>
      </div>

      {/* Address */}
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
  )
  
};

export default Contact;
