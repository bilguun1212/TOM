export const Contact = () => {
  return (
    <div className="w-full h-[560px] flex justify-center">
      <div className="w-7xl h-[368px] flex flex-col justify-center items-center pl-20 pr-20 pt-24 gap-12">
        <div className="w-full h-[100px] flex  flex-col gap-4 justify-center items-center  pl-16 pr-16">
          <button className="w-[122px] h-7  rounded-xl bg-gray-200   text-gray-700  hover:bg-black hover:text-white
       transition ease-in duration-300 delay-100">
            Get in touch
          </button>
          <div className="w-full flex flex-col justify-center items-center text-gray-700">
            <div className="w-[450px]  h-7 justify-center text-gray-700 opacity-80 text-shadow-lg font-normal text-center">
              What’s next? Feel free to reach out to me if you're looking for
            </div>
            <div className="w-[380px]  h-7 justify-center items-center text-gray-700 opacity-80 text-shadow-lg font-normal text-center">
             a developer, have a query, or simply want to connect
            </div>
          </div>
        </div>
        <div className="w-[436px] h-[104px] flex flex-col justfy-center items-center">
          <div className="w-full h-11 flex justify-between">
            <div>
              <img src="mailicon.png" alt="" />
            </div>
            <div className="text-4xl text-black font-bold">tom@pinecone.mn</div>
            <div>
              <img src="huulahicon.png" alt="" />
            </div>
          </div>
          <div className="w-[388px] h-11 flex justify-between">
            <div>
              <img src="utasicon.png" alt="" />
            </div>
            <div className="text-4xl text-black font-bold">+976 88112233</div>
            <div>
              <img src="huulahicon.png" alt="" />
            </div>
          </div>
        </div>
        <div className="w-[312px] h-[68px] flex flex-col justify-center items-center gap-2 text-gray-700">
          <div className="text-base">
            You may also find me on these platforms!
          </div>
          <div className="h-9 w-[116px] flex flex-row justify-between">
            <div>
              <img src="muuricon.png" alt="" />
            </div>
            <div>
              <img src="shuwuuicon.png" alt="" />
            </div>
            <div>
              <img src="inficon.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
 
 