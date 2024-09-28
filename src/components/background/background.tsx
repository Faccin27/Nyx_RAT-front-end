import { HereBackgroundGradientAnimation } from "../ui/background-gradient-animation";

import { Fundao } from "@/utils/fundao";
export default function Background({children}: Fundao) {
    return(
        <>
        <HereBackgroundGradientAnimation>
        {children}
        </HereBackgroundGradientAnimation>
        
        </>
    )
}