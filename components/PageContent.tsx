export function PageContent(){
    return(
        <div className="px-20 w-full h-[90vh] flex flex-row">
            <section className="w-1/2 h-full flex flex-col pt-16">
                <h1 className="text-[#567ebb] text-8xl font-semibold mb-4">
                    Gustavo 
                    <br />
                    de Almeida
                </h1>
                <h1 className="text-white text-6xl">
                    Hi, I'm Software Developer
                </h1>
                <p className="mt-4 text-[#606d80]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam blandit, justo vitae efficitur porttitor, orci libero rhoncus erat, at molestie tellus tellus venenatis lectus.
                </p>
                <button className=" w-60 h-16 bg-[#2b4c7e] mt-8 rounded-full text-white font-semibold text-xl">
                    Hire me!
                </button>
            </section>
            <section className="w-1/2">

            </section>
        </div>
    )
}