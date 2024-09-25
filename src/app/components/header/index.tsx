import Logo from '../../assets/Logo.png';
import Image from 'next/image';

const palavras = ["ABOUT", "PRICING", "DOWNLOAD", "CONTACT"];

export default function Header() {
  return (
    <>
      <div className="flex justify-end space-x-8 p-4">
        <ul className="flex space-x-8">
          {palavras.map((palavra, index) => (
            <li key={index}>
              <p className="text-white font-bold cursor-pointer hover:text-gray-300 cursor-">
                {palavra}
              </p>
            </li>
          ))}
          <li>
          </li>
        </ul>
      </div>
      <div className="flex items-center space-x-4">
        <Image
          src={Logo}
          width={120}
          alt="Logo do site"
        />
        <div className="text-white font-bold text-2xl width32">
          <p>NYX</p>
          <p>RAT</p>
        </div>
      </div>
    </>
  );
}
