

function Quote({type}: {type: "signin" | "signup"}) {
  return (
    <>
        <div className='h-screen bg-slate-200 flex flex-col justify-center'>
            <h1 className="font-bold text-3xl ml-[55px] mr-[40px]">{type === "signin" ? "BloGO's minimalist design empowered me to effortlessly express and share my thoughts with the world, fostering a seamless and enriching blogging experience." : "BloGO's intuitive layout has transformed my writing process, enabling seamless content creation and effortless publishing experiences."}</h1>
            <h1 className='font-semibold text-xl ml-[57px] mt-[25px]'>{type === "signin" ? "John Doe" : "Mathew"}</h1>
            <h1 className='text-md ml-[57px]'>{type === "signin" ? "CEO Aqua.Inc" : "CMO Flora.corp"}</h1>
        </div>
    </>
  )
}

export default Quote