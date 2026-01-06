






// export const Hero = () => {
   
// return (
//     <section className="max-w-6xl mx-auto py-12 grid md:grid-cols-2 gap-12 items-center">
//     <div className="font-normal">
//         <h1 className="font-bold text-6xl justify flex mb-10">Hi, I`m Tom👋</h1>
//        <p className="mt-4 text-slate-600">
//         I specialize in full stack development, particularly with React.js and Node.js.
// My main goal is to create exceptional digital experiences that are fast, visually appealing, and accessible to everyone. With over 7 years of experience in web development, I continue to find joy in crafting innovative solutions and designs.
//        </p>
//        <ul className="mt-6 space-y-2 text-slate-600 ml-1">
//        <li>📍 Ulaanbaatar, Mongolia</li>
       
//        <li className="text-gray-700 opacity-90 ml-5.5"> Available for new projects</li>
//        <div className="w-12 h-12 relative bottom-7.5 right-1">
//         <img src="active.png" alt="" />
//        </div>
//        </ul>
//        <div className="flex mt-5">
//        <div>
//         <img src="muuricon.png" alt="muur zurag" />
//        </div>
//        <div className="relative left-5">
//         <img src="shuwuuicon.png" alt="shuwuu zurag" />
//        </div>
//        <div className="relative left-8 bottom-1.5">
//         <img src="inficon.png" alt="" />
//        </div>
//        </div>
//     </div>
//     <div className="flex justify-center md:justify-end">
//        <img className="w-90 h-110" src="tom.png" alt="" />
       
//     </div>
//     </section>
// )
// };
// export default Hero;















// responsive turshilt
export const Hero = () => {
    return(
        <section className="max-w-6xl mx-auto py-12 px-4 grid md:grid-cols-2 gap-12 items-center">
            <div className="font-normal text-center md:text-left">


                <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl mb-10">
                    Hi, I'm Tom👋
                </h1>



                <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                     I specialize in full stack development, particularly with React.js and Node.js.
           My main goal is to create exceptional digital experiences that are fast,
           visually appealing, and accessible to everyone. With over 7 years of experien
           in web development, I continue to find joy in crafting innovative solutions and designs.
                </p>


                <ul className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                     <li>📍 Ulaanbaatar, Mongolia</li>
                     <li className="text-gray-700 opacity-90 ml-1">
                         Available for new projects
                     </li>
                     <div className="w-4 h-4 absolute -right-5 top-1">
                        <img src="active.png" alt="" />
                     </div>
                </ul>


                <div className="flex justify-center md:justify-start gap-5 mt-6">
                    <img className="w-8 h-8" src="muuricon.png" alt="" />
                    <img className="w-8 h-8" src="shuwuuicon.png" alt="" />
                    <img className="w-8 h-8" src="inficon.png" alt="" />
                </div>
            </div>


            <div className="flex justify-center md:justify-end mt-10 md:mt-0">
                <img className="w-56 sm:w-72 md:w-90 h-auto" src="tom.png" alt="" />
            </div>
        </section>
    )
}

export default Hero;
