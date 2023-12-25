import React from "react";


function Card({h1,p,btn,p2,img}) {
  return (
    <div className="sm:flex sm:mt-[150px]">
        <div className="text-center font-medium text-white text-[15px] p-[10px] ml-[4px] dark:text-orange-500 sm:text-left sm:w-[780px] sm:ml-[150px]">
            <h1 className="font-black text-[20px] mb-[10px] sm:text-[40px]">{h1}</h1>
            <p className="text-gray-300 mb-[10px] dark:text-purple-500 sm:w-[500px] sm:mb-5">{p}</p>
            <div>
                <button className="bg-pink-600 rounded-[5px] p-[5px] pl-[30px] pr-[30px]  dark:text-white dark:bg-orange-600 sm:text-[20px] sm:mb-5">{btn}</button>
                <p className="text-gray-300 dark:text-purple-500"> {p2} </p>
            </div>
        </div>
        <div className="w-[170px] m-auto sm:w-[300px] sm:mt-[-100px]">
            <img src={img} alt="error" />
        </div>
    </div>
  )
}

export default Card


function Card2 ( {h1 , img1 , p1 , img2 , p2 , img3 , p3 , image } ){
    return (
    <div className="sm:flex">
        <div className=" mt-[50px] text-center">
            
            <h1 className="font-black text-center text-[30px] sm:text-[50px] sm:w-[720px] sm:text-left sm:m-auto sm:ml-[170px] dark:text-orange-500"> 
                { h1 }
            </h1>

            <div className="mt-[30px] sm:flex">
                <img src={img1} alt="error" className="ml-[160px] mb-[10px]" />
                <p className="font-mono text-gray-600 sm:w-[550px] sm:text-left sm:ml-[20px] sm:mt-[17px] dark:text-purple-700"> {p1} </p>
            </div>
            <div className="mt-[30px] sm:flex">
                <img src={img2} alt="error" className="ml-[160px] mb-[10px]" />
                <p className="font-mono text-gray-600 sm:w-[350px] sm:text-left sm:ml-[20px] sm:mt-[17px] dark:text-purple-700"> {p2} </p>
            </div>
            <div className="mt-[30px] mb-[30px] sm:flex">
                <img src={img3} alt="error" className="ml-[160px] mb-[10px]" />
                <p className="font-mono text-gray-600 sm:w-[550px] sm:text-left sm:ml-[20px] sm:mt-[17px] dark:text-purple-700"> {p3} </p>
            </div>
        </div>

        <div className="sm:ml-[10px] sm:mt-[50px]">
            <img src={image} alt="error" />
        </div>
    </div>
    )
}

export { Card2 }


function Card3 ( { h1 , p , image } ){
    return (
    <div className="sm:flex">
        <div className=" mt-[50px] text-center sm:mt-[190px]">
            
            <h1 className="font-black text-center text-[30px] sm:text-[50px] sm:w-[720px] sm:text-left sm:m-auto sm:ml-[160px] dark:text-purple-700"> 
                { h1 }
            </h1>
            <p className="font-mono mt-[10px] mb-[30px] sm:w-[550px] sm:text-left sm:m-auto sm:mt-[15px] dark:text-orange-500">
                {p}
            </p>
        </div>

        <div className="w-[300px] m-auto sm:ml-[10px] sm:mt-[50px] sm:w-[350px]">
            <img src={image} alt="error" />
        </div>
    </div>
    )
}

export { Card3 }

function Card4 ( { img1 , p1 , img2 , p2 , img3 , p3 }) {
    return (
        <div className="sm:flex sm:justify-around sm:mt-[50px]">
            <div>
                <img src={img1} alt="error" className="w-[350px] m-auto"  />
                <p className="font-bold ml-[80px] sm:ml-[50px] dark:text-orange-600"> {p1} </p>
            </div>
            
            <div>
                <img src={img2} alt="error" className="w-[310px] m-auto" />
                <p className="font-bold ml-[130px] sm:ml-[100px] sm:mt-[40px] dark:text-orange-600"> {p2} </p>
            </div>
            
            <div>
                <img src={img3} alt="error" className="w-[310px] m-auto " />
                <p className="font-bold ml-[50px] sm:mt-[40px] sm:ml-[3px] dark:text-orange-600"> {p3} </p>
            </div>
        </div>
    )
}
export { Card4 }



function Card5({h1,p,btn,p2}) {
    return (
      <div>
          <div className="text-center font-medium text-white text-[15px] p-[10px] ml-[4px] dark:text-black sm:text-left sm:w-[980px] sm:ml-[150px] rounded-[5px]">
              <h1 className="font-black text-[20px] mb-[10px] mt-[40px] sm:text-[40px]">{h1}</h1>
              <p className="text-gray-300 mb-[10px] dark:text-purple-500 sm:w-[500px] sm:mb-5">{p}</p>
              <div>
                  <button className="bg-pink-600 rounded-[5px] p-[5px] pl-[30px] pr-[30px]  mt-[10px] dark:text-black dark:bg-orange-600 sm:text-[20px] sm:mb-5">{btn}</button>
                  <p className="text-gray-300 dark:text-black mt-[20px] sm:text-[20px]"> {p2} </p>
              </div>
          </div>
      </div>
    )
  }
  
export { Card5 }