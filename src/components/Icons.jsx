import React from 'react' 

import {FaCarrot,FaAppleAlt} from "react-icons/fa";
function Icons() {
  return (
    
      <div>
        <div className='carrot' id="iconlar" >
            <FaCarrot size= "40" color="#A52A2A"/>
            <FaCarrot size= "40" color="#A52A2A"/>
            <FaCarrot size= "40" color="#A52A2A"/>
        </div>
        
        <div className='apple' id="apple">
            <FaAppleAlt size= "40" color="#A52A2A"/>
            <FaAppleAlt size= "40" color="#A52A2A"/>
            <FaAppleAlt size= "40" color="#A52A2A"/>
        </div>
      </div>
   
    
  )
}

export default Icons