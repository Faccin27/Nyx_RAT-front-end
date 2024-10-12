"use client"

import ImagemNotFound from '@/assets/404 error lost in space.png'
import Image from 'next/image'
import Backgound from '@/components/background/background'
import { useRouter } from 'next/navigation'


export default function NotFound(){
    const rota = useRouter()
    const handleNavegar = () => {
        rota.push('/')
    }

    return(
        <Backgound>
            <div className="text-center align-baseline">
                <div className="max-w-fit ml-auto mr-auto">
                    <Image
                    src={ImagemNotFound}
                    alt="Imagem de not found"
                    width={700}
                    />
                </div>
                <div>
                    <button
                    className='className="relative w-2/6 bg-white hover:bg-purple-700 text-black py-2 rounded-md transition-all duration-300 ease-in-out transform hover:scale-105"'
                    onClick={handleNavegar}
                    >
                        Back to the main
                    </button>
                </div>
            </div>
        </Backgound>
    )
}