import Image from "next/image";
import Logo from '@/assets/logo.png'
export default function LogaritomoLogo() {
    return(
      <nav className="p-6 flex justify-between items-center fixed z-50">
        <div className="flex items-center space-x-2">
              <Image
                src={Logo}
                alt="Nyx rat logo"
                className="rounded-full w-12 h-12"
                width={0}
                height={0}
              />
              <span className="text-white text-xl font-bold">NYX  RAT</span>
            </div>
            </nav>
    );
}