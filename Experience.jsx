


export const Experience = () => {
   const experiencens =[
    {
        company: "UpWork",
        role: "Sr.Frontend Developer",
        date: "Nov 2021 - Present",
        points: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "Ut pretium arcu et massa semper, id fringilla leo semper.",
            "Sed quis justo ac magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            
        ]
    },
    {
        company: "UpWork",
        role: "Team Lead",
        date: "Jul 2017 - Oct 2021",
        points: [
            "Sed quis justo ac magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "Sed quis justo ac magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        ]
    },
    {
        company: "UpWork",
        role: "Full Stack Developer",
        date: "Dec 2015 - May 2017",
        points: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            
            
        ]
    }
   

   ];
    const goToMedia = () => {
        window.open("https://share.google/images/9fjRCZwcDed18CmAV", "_blank");
    }
   return (
    <section className="w-full py-30 bg-gray-50">
       <button
       className="mx-auto mb-14 block px-6 py-2 text-gray-700 bg-gray-200 rounded-full text-sm font-semibold hover:bg-black hover:text-white
       transition ease-in duration-300 delay-100"
       onClick={goToMedia}
       >
        Experience
       </button>
        <div className="max-w-5xl mx-auto flex flex-col gap-10 px-4">
            {experiencens.map((exp, index) => (
            <div
            key={index}
            className="bg-white rounded-xl shadow-md p-8"
            >
                <div className="flex justify-between items-center">
                    <img src="upwork.png" alt="UpWork" className="w-24 object-contain"/>
                    <p className="text-gray-500 text-sm ">{exp.date}</p>
                </div>
                <h3 className="text-xl font-semibold mb-2 ml-64 relative bottom-7">{exp.role}</h3>
                <ul className="text-gray-600 leading-7 list-disc ml-66 gap-4 relative bottom-6 mr-80 opacity-80">
                   {Array.isArray(exp.points) && 
                   exp.points.map((point, i) => <li key={i}>{point}</li>
                   )}
                </ul>
            </div>
            ))}
        </div>
    </section>
   );
};