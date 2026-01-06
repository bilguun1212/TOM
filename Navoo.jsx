


export const Navoo = () => {
    const goToMedia = () => {
         window.open("https://share.google/images/KrsPPXBl9Br7NQDEH", "_blank");
    }
    return(
      <section className="w-full py-50 flex justify-center">
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10">

            <div className="flex justify-center xl:w-90 sm:w-90 h-auto xl:text-5xl md:text-6xl object-cover">

                <img src="./Column.png" alt="about" className="w-150 h-140 object-cover rounded-xl xl:w-90 sm:w-90 xl:text-5xl md:text-6xl"
                
                />
            </div>
            
            <div className="flex flex-col justify-center">
                <button className="px-8 py-1 rounded-full md:bg-gray-200 text-sm w-max mb-4 justify-center items-center relative bottom-25 right-22.5 text-gray-700 hover:bg-black hover:text-white
       transition ease-in duration-300 delay-100" onClick={goToMedia}>
                    About me
                </button>
           

            <h2 className="text-3xl md:text-3xl font-semibold mb-6 relative bottom-12 md:align-middle">
                Curious about me? Here you have it:
            </h2>
            <p className="text-gray-600 leading-7 mb-4 relative bottom-12">
                I'm a designer turned full stack developer, passionate about React.js and Node.js. I excel in blending technical and visual aspects to craft exceptional digital products, prioritizing user experience, precise design, and optimized code.
            </p>
            <p className="text-gray-600 leading-7 mb-4 relative bottom-12">
                Since starting my web development journey in 2015, I've embraced challenges and kept up with the latest tech trends. Now in my early thirties, seven years in, I'm building cutting-edge web apps using Next.js, TypeScript, Nestjs, Tailwindcss, Supabase, and more.
            </p>
            <p className="text-gray-600 leading-7 mb-4 relative bottom-12">
                With a progressive mindset, I enjoy the entire product development process, from ideation to execution. Off duty, you'll find me on Twitter, tracking startup journeys, or unwinding. Follow me for tech insights and public project updates on Twitter or GitHub.
            </p>
            <p className="text-gray-600 leading-7 mb-2 relative bottom-12">
                Finally, some quick bits about me.
            </p>
            <ul className="text-gray-700 leading-7 mb-6 space-y-1 relative bottom-12">
                <li>ᐧ B.E. in Computer Engineering</li>
                <li>ᐧ Full time freelancer</li>
                <div className="text-gray-700 leading-7 mb-6 space-y-1 relative bottom-16 left-75">
                <li>ᐧ Avid learner</li>
                </div>
            </ul>
            <p className="text-gray-600 leading-7 relative bottom-28">
                One last thing, I'm available for freelance work, so feel free to reach out and say hello! I promise I don't bite 😉
            </p>
            </div>
            </div>
      </section>
    )
} ;