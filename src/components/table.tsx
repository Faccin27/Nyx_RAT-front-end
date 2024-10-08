export default function TablePrice() {
  return (
    <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 z-50">
            {/* Plan Starting */}
            <div className="border border-gray-700 rounded-lg p-6 text-center bg-transparent">
              <h3 className="text-2xl font-semibold mb-2">Starting</h3>

              <ul className="text-left text-sm">
                <li>Display-Name: ✓</li>
                <li>Hostname: ✓</li>
                <li>Username: ✓</li>
                <li>System: X</li>
                <li>Version: X</li>
                <li>Architecture: X</li>
                <li>CPU: ✓</li>
                <li>GPU: X</li>
                <li>RAM: X</li>
                <li>HWID: X</li>
                <li>IP: ✓</li>
                <li>MAC: X</li>
                <li>Country: ✓</li>
                <li>Region: ✓</li>
                <li>City: ✓</li>
                <li>CEP: X</li>
                <li>ISP: X</li>
                <li>Web-Cam: X</li>
                <li>Print-screen: X</li>
              </ul>
            </div>

            {/* Plan Basic */}
            <div className="border border-gray-700 rounded-lg p-6 text-center bg-transparent">
              <h3 className="text-2xl font-semibold mb-2">Basic</h3>

              <ul className="text-left text-sm">
                <li>Display-Name: ✓</li>
                <li>Hostname: ✓</li>
                <li>Username: ✓</li>
                <li>System: ✓</li>
                <li>Version: ✓</li>
                <li>Architecture: ✓</li>
                <li>CPU: ✓</li>
                <li>GPU: X</li>
                <li>RAM: ✓</li>
                <li>HWID: X</li>
                <li>IP: ✓</li>
                <li>MAC: X</li>
                <li>Country: ✓</li>
                <li>Region: ✓</li>
                <li>City: ✓</li>
                <li>CEP: X</li>
                <li>ISP: X</li>
                <li>Web-Cam: ✓</li>
                <li>Print-screen:: X</li>
              </ul>
            </div>

            {/* Plan Pro */}
            <div className="border border-gray-700 rounded-lg p-6 text-center bg-transparent">
              <h3 className="text-2xl font-semibold mb-2">Pro</h3>
  
  
              <ul className="text-left text-sm">
                <li>Display-Name: ✓</li>
                <li>Hostname: ✓</li>
                <li>Username: ✓</li>
                <li>System: ✓</li>
                <li>Version: ✓</li>
                <li>Architecture: ✓</li>
                <li>CPU: ✓</li>
                <li>GPU: ✓</li>
                <li>RAM: ✓</li>
                <li>HWID: ✓</li>
                <li>IP: ✓</li>
                <li>MAC: ✓</li>
                <li>Country: ✓</li>
                <li>Region: ✓</li>
                <li>City: ✓</li>
                <li>CEP: ✓</li>
                <li>ISP: ✓</li>
                <li>Web-Cam: ✓</li>
                <li>Print-screen:: ✓</li>
              </ul>
            </div>

            {/* Plan Ultra */}
            <div className="border border-gray-700 rounded-lg p-6 text-center bg-transparent">
              <h3 className="text-2xl font-semibold mb-2">Ultra</h3>
  
              <ul className="text-left text-sm">
                <li>Display-Name: ✓</li>
                <li>Hostname: ✓</li>
                <li>Username: ✓</li>
                <li>System: ✓</li>
                <li>Version:✓</li>
                <li>Architecture: ✓</li>
                <li>CPU: ✓</li>
                <li>GPU: ✓</li>
                <li>RAM: ✓</li>
                <li>HWID: ✓</li>
                <li>IP: ✓</li>
                <li>MAC: ✓</li>
                <li>Country: ✓</li>
                <li>Region: ✓</li>
                <li>City: ✓</li>
                <li>CEP: ✓</li>
                <li>ISP: ✓</li>
                <li>Web-Cam: ✓</li>
                <li>Print-screen:: ✓</li>
                <li>Real Time microphone: ✓</li>
              </ul>
            </div>
          </div>
    </>
  );
}
