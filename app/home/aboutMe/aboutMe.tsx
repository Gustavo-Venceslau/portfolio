import { Photo } from "./components/Photo";
import { TextContent } from "./components/TextContent";


export function AboutMe(){
    return(
        <div className="w-full flex flex-col-reverse lg:flex-row lg:px-20 p-7 lg:pt-12 lg:pb-20 items-center" id="AboutMe">
            <Photo />
            <TextContent />
        </div>
    )
}