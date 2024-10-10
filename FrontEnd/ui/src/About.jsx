import React from 'react';
import logo2 from '../src/about.PNG'

const About = () => {
  return (
    <div>
      <div class="gap-6 p-8  md:columns-2 columns-1">
 
 
 <div class="">
 
 <h3 className='text-7xl'>About <p className='text-red-700'>AUTO KAVEE</p></h3><br/><br/>
 
 
 <h3 className='text-3xl'>Undoubtedly, Island’s leader in automobile services</h3><br/>
Auto Kavee being Sri Lanka’s largest and the best auto service network; also has the most diverse service portfolio. Auto Miraj is your one stop station for all of your maintenance work, repairs, and services.

Auto Kavee’s updated state-of-the-art equipment present at all our sites, powered by our skilled personnel, has a proven track-record of delivering the finest preventive maintenance and care to all our clients—this includes expertise in servicing the very latest vehicle types as well. Leveraging our commitment to excellence, we have entered into strategic partnerships with many leading global brands of car products, like Toyota, Kia, 3M, and the Kobe Motor Company, contributing more to our goal of providing our clients with the very best services.
 </div><img   src={logo2} class="w-full  md:w-auto p-20"/>
    </div></div>
  );
};

export default About;
