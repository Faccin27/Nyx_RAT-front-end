import { HereBackgroundGradientAnimation } from "../ui/background-gradient-animation";
import Image from 'next/image'
import logo from '@/assets/logo.png'
import { Fundao } from "@/utils/fundao";
export default function Background({children}: Fundao) {
    return(
        <>
        <HereBackgroundGradientAnimation>
        <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
                        <Image
                        src={logo}
                        alt="Nyx Logo"
                        width={800}
                        height={800}
                        />
                    </div>
        {children}
        </HereBackgroundGradientAnimation>
        
        </>
    )
}