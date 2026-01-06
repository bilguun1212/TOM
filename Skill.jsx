




export const Skill = () => {
    const goToMedia = () => {
        window.open("https://share.google/BckfEqm2zDOdd3G3G", "_blank");
    }
    return (
       <section className="w-full  flex justify-center pb-35">
        <div className="w-max-xl w-full flex flex-col items-center">

            <button className="text-gray-700 bg-gray-100 w-25 rounded-full h-8 mb-6 opacity-90 hover:bg-black hover:text-white
       transition ease-in duration-300 delay-100" onClick={goToMedia}>
                Skills
                </button>
            <h2 className="text-gray-700 text-2xl font-normal mb-15 text-center">The skills, tools and technologies I am really good at:</h2>
            <div className="grid grid-cols-8 sm:grid-cols-8 md:grid-cols-8 lg:grid-cols-8 gap-22 justify-between">
                <div className="flex flex-col items-center">
                    <img src="Tech.png" alt="JavaScript" />
                </div>
            
                <div className="flex flex-col items-center ">
                    <img src="ts.png" alt="typescript" />
                </div>
                <div className="flex flex-col items-center">
                    <img src="react.png" alt="react" />
                </div>
                <div className="flex flex-col items-center">
                    <img src="nextjs.png" alt="next js" />
                </div>
                <div className="flex flex-col items-center">
                    <img src="nodejs.png" alt="node js" />
                </div>
                <div className="flex flex-col items-center">
                    <img src="expressjs.png" alt="express" />
                </div>
                <div className="flex flex-col items-center">
                    <img src="nestjs.png" alt="nest" />
                </div>
                <div className="flex flex-col items-center">
                    <img src="socket.png" alt="spcket io" />
                </div>
                <div className="flex flex-col items-center">
                    <img src="socketio.png" alt="" />
                </div>
                <div className="flex flex-col items-center">
                    <img src="mongodb.png" alt="mongo db" />
                </div>
                <div className="flex flex-col items-center">
                    <img src="sass.png" alt="sass" />
                </div>
                <div className="flex flex-col items-center">
                    <img src="tailwind.png" alt="tailwind css" />
                </div>
                <div className="flex flex-col items-center">
                    <img src="figma.png" alt="figma.png" />
                </div>
                <div className="flex flex-col items-center">
                    <img src="cypress.png" alt="cypress" />
                </div>
                <div className="flex flex-col items-center">
                    <img src="storybook.png" alt="book" />
                </div>
                <div className="flex flex-row items-center">
                    <img src="git.png" alt="git" />
                </div>
               
            </div>
        </div>
       </section>
    )
};





// export const Skill = () => {
// return (
//     <section className="grid
//     justify-center
//     grid-cols-3
//     sm:grid-cols-4
//     md:grid-cols-6
//     xl:grid-cols-6
//     place-items-center
//     py-10 
//     flex-col
//     items-center"
//     >
//        <img src="ts.png" alt="" />
//        <img src="react.png" alt="" />
//        <img src="nextjs.png" alt="" />
//        <img src="nodejs.png" alt="" />
//        <img src="expressjs.png" alt="" />
//        <img src="socket.png" alt="" />
//        <img src="mongo.png" alt="" />
//        <img src="sass.png" alt="" />
//        <img src="tailwind.png" alt="" />
//        <img src="figma.png" alt="" />
//        <img src="cypress.png" alt="" />
//        <img src="storybook.png" alt="" />
//        <img src="git.png" alt="" />
//     </section>
// );
// };