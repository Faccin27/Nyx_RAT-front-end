"use client"

import Background from '@/components/background/background'
import Logo from '@/components/logo/logo-top'
import Footer from '@/components/footer/footer'
import { useRouter } from 'next/navigation'

export default function Plans() {
    const rota = useRouter()
    return (
        <Background>
            <Logo />
            <div className="text-center my-10">
                <h1 className="text-5xl font-bold text-purple-400 border-b-4 border-purple-600 inline-block pb-2 mb-8 transition-all duration-300 ease-in-out transform hover:scale-105">
                    Our Plans
                </h1>
                <p className="text-gray-300 text-lg mb-10">
                    Choose a plan that fits your needs and experience the best of Nyx Rat.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6 z-50">
                
                {/* Plan Starting */}
                <div className="border border-gray-700 rounded-lg p-6 text-center bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
                    <h3 className="text-3xl font-semibold mb-4 text-purple-400">Starting</h3>
                    <ul className="text-left text-sm">
                        <li>Display-Name: <span className="text-green-500">✓</span></li>
                        <li>Hostname: <span className="text-green-500">✓</span></li>
                        <li>Username: <span className="text-green-500">✓</span></li>
                        <li>System: <span className="text-red-500">X</span></li>
                        <li>Version: <span className="text-red-500">X</span></li>
                        <li>Architecture: <span className="text-red-500">X</span></li>
                        <li>CPU: <span className="text-green-500">✓</span></li>
                        <li>GPU: <span className="text-red-500">X</span></li>
                        <li>RAM: <span className="text-red-500">X</span></li>
                        <li>HWID: <span className="text-red-500">X</span></li>
                        <li>IP: <span className="text-green-500">✓</span></li>
                        <li>MAC: <span className="text-red-500">X</span></li>
                        <li>Country: <span className="text-green-500">✓</span></li>
                        <li>Region: <span className="text-green-500">✓</span></li>
                        <li>City: <span className="text-green-500">✓</span></li>
                        <li>CEP: <span className="text-red-500">X</span></li>
                        <li>ISP: <span className="text-red-500">X</span></li>
                        <li>Web-Cam: <span className="text-red-500">X</span></li>
                        <li>Print-screen: <span className="text-red-500">X</span></li>
                    </ul>
                </div>

                {/* Plan Basic */}
                <div className="border border-gray-700 rounded-lg p-6 text-center bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
                    <h3 className="text-3xl font-semibold mb-4 text-purple-400">Basic</h3>
                    <ul className="text-left text-sm">
                        <li>Display-Name: <span className="text-green-500">✓</span></li>
                        <li>Hostname: <span className="text-green-500">✓</span></li>
                        <li>Username: <span className="text-green-500">✓</span></li>
                        <li>System: <span className="text-green-500">✓</span></li>
                        <li>Version: <span className="text-green-500">✓</span></li>
                        <li>Architecture: <span className="text-green-500">✓</span></li>
                        <li>CPU: <span className="text-green-500">✓</span></li>
                        <li>GPU: <span className="text-red-500">X</span></li>
                        <li>RAM: <span className="text-green-500">✓</span></li>
                        <li>HWID: <span className="text-red-500">X</span></li>
                        <li>IP: <span className="text-green-500">✓</span></li>
                        <li>MAC: <span className="text-red-500">X</span></li>
                        <li>Country: <span className="text-green-500">✓</span></li>
                        <li>Region: <span className="text-green-500">✓</span></li>
                        <li>City: <span className="text-green-500">✓</span></li>
                        <li>CEP: <span className="text-red-500">X</span></li>
                        <li>ISP: <span className="text-red-500">X</span></li>
                        <li>Web-Cam: <span className="text-green-500">✓</span></li>
                        <li>Print-screen: <span className="text-red-500">X</span></li>
                    </ul>
                </div>

                {/* Plan Pro */}
                <div className="border border-gray-700 rounded-lg p-6 text-center bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
                    <h3 className="text-3xl font-semibold mb-4 text-purple-400">Pro</h3>
                    <ul className="text-left text-sm">
                        <li>Display-Name: <span className="text-green-500">✓</span></li>
                        <li>Hostname: <span className="text-green-500">✓</span></li>
                        <li>Username: <span className="text-green-500">✓</span></li>
                        <li>System: <span className="text-green-500">✓</span></li>
                        <li>Version: <span className="text-green-500">✓</span></li>
                        <li>Architecture: <span className="text-green-500">✓</span></li>
                        <li>CPU: <span className="text-green-500">✓</span></li>
                        <li>GPU: <span className="text-green-500">✓</span></li>
                        <li>RAM: <span className="text-green-500">✓</span></li>
                        <li>HWID: <span className="text-green-500">✓</span></li>
                        <li>IP: <span className="text-green-500">✓</span></li>
                        <li>MAC: <span className="text-green-500">✓</span></li>
                        <li>Country: <span className="text-green-500">✓</span></li>
                        <li>Region: <span className="text-green-500">✓</span></li>
                        <li>City: <span className="text-green-500">✓</span></li>
                        <li>CEP: <span className="text-green-500">✓</span></li>
                        <li>ISP: <span className="text-green-500">✓</span></li>
                        <li>Web-Cam: <span className="text-green-500">✓</span></li>
                        <li>Print-screen: <span className="text-green-500">✓</span></li>
                    </ul>
                </div>

                {/* Plan Ultra */}
                <div className="border border-gray-700 rounded-lg p-6 text-center bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
                    <h3 className="text-3xl font-semibold mb-4 text-purple-400">Ultra</h3>
                    <ul className="text-left text-sm">
                        <li>Display-Name: <span className="text-green-500">✓</span></li>
                        <li>Hostname: <span className="text-green-500">✓</span></li>
                        <li>Username: <span className="text-green-500">✓</span></li>
                        <li>System: <span className="text-green-500">✓</span></li>
                        <li>Version: <span className="text-green-500">✓</span></li>
                        <li>Architecture: <span className="text-green-500">✓</span></li>
                        <li>CPU: <span className="text-green-500">✓</span></li>
                        <li>GPU: <span className="text-green-500">✓</span></li>
                        <li>RAM: <span className="text-green-500">✓</span></li>
                        <li>HWID: <span className="text-green-500">✓</span></li>
                        <li>IP: <span className="text-green-500">✓</span></li>
                        <li>MAC: <span className="text-green-500">✓</span></li>
                        <li>Country: <span className="text-green-500">✓</span></li>
                        <li>Region: <span className="text-green-500">✓</span></li>
                        <li>City: <span className="text-green-500">✓</span></li>
                        <li>CEP: <span className="text-green-500">✓</span></li>
                        <li>ISP: <span className="text-green-500">✓</span></li>
                        <li>Web-Cam: <span className="text-green-500">✓</span></li>
                        <li>Print-screen: <span className="text-green-500">✓</span></li>
                        <li>Real Time Microphone: <span className="text-green-500">✓</span></li>
                    </ul>
                </div>
                <div>
                <button
            className="relative w-52 bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-md transition-all duration-300 ease-in-out transform hover:scale-105"
            onClick={() => rota.push("/")}
                >
                Back to main page
            </button>
                </div>
                <br />
                <br />
                <br />
                <br />
            </div>
            <Footer />
        </Background>
    )
}
