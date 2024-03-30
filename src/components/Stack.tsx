const Stack = () => {
  return (
    <>
      <div id="my-stack" className="px-6 text-center h-min flex flex-col gap-6 md:px-28 lg:px-40 lg:h-screen xl:px-60">
          <h1 className="font-bold text-4xl text-center py-6">
            My Stack
          </h1>
          <hr className=""/>
          <p className="text-center">These are some tools I often work with</p>
          <div className="items-center h-full my-auto text-6xl flex flex-wrap justify-around gap-20 mx-auto p-6 md:text-8xl md:w-full lg:w-full xl:p-20">
            <i className=" fa-brands fa-html5 hover:text-orange-400 transition-colors ease-in" aria-hidden="true"></i>
            <i className=" fa-brands fa-css3 hover:text-blue-400 transition-colors ease-in" aria-hidden="true"></i>
            <i className=" fa-brands fa-js hover:text-yellow-400 transition-colors ease-in" aria-hidden="true"></i>
            <i className=" fa-brands fa-sass hover:text-pink-400 transition-colors ease-in" aria-hidden="true"></i>
            <i className=" fa-brands fa-bootstrap hover:text-purple-400 transition-colors ease-in" aria-hidden="true"></i>
            <i className=" fa-brands fa-react hover:text-cyan-400 transition-colors ease-in" aria-hidden="true"></i>
            <i className=" fa-brands fa-figma hover:text-slate-400 transition-colors ease-in" aria-hidden="true"></i>
            <i className=" fa-brands fa-node hover:text-green-400 transition-colors ease-in" aria-hidden="true"></i>
            <i className=" fa-brands fa-python hover:text-yellow-200 transition-colors ease-in" aria-hidden="true"></i>
          </div>
        </div>
    </>
  )
}

export default Stack;