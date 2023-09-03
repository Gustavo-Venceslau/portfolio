import { Photo } from "./components/Photo";
import { TextContent } from "./components/TextContent";


export function AboutMe(){
    return(
        <div className="w-full h-[600px] flex flex-row p-4 items-center" id="AboutMe">
            <Photo />
            <TextContent />
        </div>
    )
}