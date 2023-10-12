import { Photo } from "./components/Photo";
import { TextContent } from "./components/TextContent";


export function AboutMe(){
    return(
        <div className="w-full flex md:flex-row xs:flex-col-reverse md:px-20 xs:p-7 md:pt-12 md:pb-20 items-center" id="AboutMe">
            <Photo />
            <TextContent />
        </div>
    )
}