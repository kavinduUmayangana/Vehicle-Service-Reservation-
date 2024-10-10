import React from 'react';
import logo from '../src/home.jpg'
import { VerticalTimeline,VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css';
import LocalTaxiIcon from '@mui/icons-material/LocalTaxi';

const Home = () => {
  const Education=[
    {   bgColor:"#000",
        date:"",
        header:"GUARANTEED",
        institution:"100%",
        detail:"SATISFACTION",
        
    },
    {bgColor:"#000",
        date:"",
        header:"UNMATCHED EXCELLENCE OF ",
        institution:"28 YEARS",
        detail:"SINCE 1994",
        
    },
    {bgColor:"#000",

        date:"",
        header:"ISLAND WIDE",
        institution:"40 CENTRES",
        detail:"IN SRI LANKA",
      
    },

    
]
  return (
    <div>
      <h1>Home Page</h1>
     
       
       <div class="gap-6 p-8  md:columns-2 columns-1">
 
  <img   src={logo} class="w-full  md:w-auto p-20"/>
  <div class="">  <section>
        

        <div className='text-center'>
            <h3 className='text-6xl font-semibold text-white '>My
                <span className='text-cyan-700'> Our Service is The BEST</span>
            </h3>
            <br/><br/>
        </div>
       
        <div>
            <VerticalTimeline>
                {
                    Education.map((Education,i)=>(
                        <VerticalTimelineElement key={i}
                    
              contentStyle={{ background: Education.bgColor, color:"#FF0000" }}
              contentArrowStyle={{ borderRight: `7px solid ${Education.bgColor}` }}
              iconStyle={{ background: 'white', color: 'black' }}
              icon={<LocalTaxiIcon/>}
                            date={Education.date}
                            dateClassName='text-white text-3xl font-semibold'>
                                <h3 className='text-1xl  font-semibold '>
                                {Education.header}</h3>
                                <h3 className='text-3xl font-semibold'>{Education.institution}</h3>
                                <h3>{Education.detail}</h3>
                        </VerticalTimelineElement>
                    ))
                }
            </VerticalTimeline>
        </div>
    </section></div>
</div>
         </div>
  );
};

export default Home;
