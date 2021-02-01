import React from 'react';

import Fade from "react-reveal/Fade"

const S2BizDetailsCard = () => {
return(
    <>
<div className="container w-full h-full px-4 mx-auto my-20">
  <Fade bottom>
  <div className="container flex flex-col text-gray-800 bg-white border border-gray-200 rounded-lg shadow-xl md:flex-row rounded-xl">
    {/*	
      	<img class="mb-8 h-66 w-full object-cover object-center rounded-t-xl" src="https://source.unsplash.com/900x600" alt="" />
  */}
    <div className="w-full mx-auto">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106912.80240572542!2d-117.14001754748739!3d33.134705805055646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dbf35e81c2437b%3A0x1d1c80f7796c5df!2sEscondido%2C%20CA!5e0!3m2!1sen!2sus!4v1611300785705!5m2!1sen!2sus" width="100%" height="100%" className="w-full h-64 mb-8 rounded-t-xl md:rounded-tl-xl md:rounded-bl-xl md:rounded-r-none md:h-full" frameBorder={0} style={{border: 0}} allowFullScreen aria-hidden="false" tabIndex={0} />
    </div>
    <div id="hours" className="w-full">
      <h2 className="mb-8 text-2xl font-bold text-center sm:text-xl md:text-2xl md:mt-5">Hours</h2>
      <div className="justify-center table w-full ">
        <table className="w-full mx-auto mb-16 table-auto">
          <tbody className="text-center">
            <tr className="relative py-1 text-xs transform scale-100 cursor-default">
              <td className="h-10 pl-8 whitespace-no-wrap">
                <span className="text-xl text-blue-500">  Sunday :</span>  
              </td>
              <td className="pr-8 whitespace-no-wrap">
                <span className="text-xl"> 10:00am - 6:00pm </span>  
              </td>
            </tr>
          </tbody>     
          <tbody className="text-center">
            <tr className="relative py-1 text-xs transform scale-100 cursor-default">
              <td className="h-10 pl-8 whitespace-no-wrap">
                <span className="text-xl text-blue-500">  Monday :</span>  
              </td>
              <td className="pr-8 whitespace-no-wrap">
                <span className="text-xl"> 10:00am - 6:00pm </span>  
              </td>
            </tr>
          </tbody>     
          <tbody className="text-center">
            <tr className="relative py-1 text-xs transform scale-100 cursor-default">
              <td className="h-10 pl-8 whitespace-no-wrap">
                <span className="text-xl text-blue-500">  Tuesday :</span>  
              </td>
              <td className="pr-8 whitespace-no-wrap">
                <span className="text-xl"> 10:00am - 6:00pm </span>  
              </td>
            </tr>
          </tbody>     
          <tbody className="text-center">
            <tr className="relative py-1 text-xs transform scale-100 cursor-default">
              <td className="h-10 pl-8 whitespace-no-wrap">
                <span className="text-xl text-blue-500">  Wednesday :</span>  
              </td>
              <td className="pr-8 whitespace-no-wrap">
                <span className="text-xl"> 10:00am - 6:00pm </span>  
              </td>
            </tr>
          </tbody>     
          <tbody className="text-center">
            <tr className="relative py-1 text-xs transform scale-100 cursor-default">
              <td className="h-10 pl-8 whitespace-no-wrap">
                <span className="text-xl text-blue-500">  Thursday :</span>  
              </td>
              <td className="pr-8 whitespace-no-wrap">
                <span className="text-xl"> 10:00am - 6:00pm </span>  
              </td>
            </tr>
          </tbody>     
          <tbody className="text-center">
            <tr className="relative py-1 text-xs transform scale-100 cursor-default">
              <td className="h-10 pl-8 whitespace-no-wrap">
                <span className="text-xl text-blue-500">  Friday :</span>  
              </td>
              <td className="pr-8 whitespace-no-wrap">
                <span className="text-xl"> 10:00am - 6:00pm </span>  
              </td>
            </tr>
          </tbody>     
          <tbody className="text-center">
            <tr className="relative py-1 text-xs transform scale-100 cursor-default">
              <td className="h-10 pl-8 whitespace-no-wrap">
                <span className="text-xl text-blue-500">  Saturday :</span>  
              </td>
              <td className="pr-8 whitespace-no-wrap">
                <span className="text-xl"> 10:00am - 6:00pm </span>  
              </td>
            </tr>
          </tbody>     
        </table>
      </div>
      <div id="location"></div>
      <div className="px-5 mx-auto mb-10 text-2xl text-center">
        <span className="block pb-5 mx-auto text-4xl text-center">Location</span>
        <a href="https://goo.gl/maps/KmSBW3T43tCG1gaZ9" className="text-center text-blue-500 lg:px-5"> 1234 Broadway Ave Escondido CA 92025 </a>
      </div>
    </div>
  </div>
  </Fade>
</div>


    </>
)
}

export default S2BizDetailsCard;
