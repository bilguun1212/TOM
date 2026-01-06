


export const Header = () => {
    const goToMedia = () => {
        window.open("https://share.google/images/z2a7CBk2BRBRpVOGK", "_blank");
    }
    return (

         <div className="flex justify-center pl-24 pt-8 pr-24 p-10 sm:text-5xl md:text-6xl mb-10">
            <div className="w-7xl h-36 flex justify-between pr-32 pl-32">
            <div className="text-black text-5xl font-black mt-12">TOM</div>
            <div className="text-base font-medium flex gap-12 justify-center items-center">
               
         <div className="text-gray-600 md:shrink-0">About</div>
         <div className="text-gray-600">Work</div>
         <div className="text-gray-600">Testimonials</div>
         <div className="text-gray-600">Contact</div>
         <div>
            <img src="nar.png" alt="zip zurag" />
         </div>
         
         <button className="flex w-37 h-1 p-6 16 6 16 text-center gap-8 justify-center items-center rounded-xl bg-black text-white hover:bg-pink-500 hover:text-black
       transition ease-in duration-300 delay-100"
       onClick={goToMedia}
       >
          
         Download CV</button>
         </div>
         </div>
        </div>

       
    )       
};

