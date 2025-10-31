import MatrixRain from './MatrixRain'

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-300 flex items-center justify-center p-8">
      <MatrixRain />
      <div className="max-w-2xl w-full relative z-10 bg-purple-950/40 backdrop-blur-md rounded-2xl p-8 border border-purple-900/50">
        {/* Profile Section */}
        <div className="flex items-center gap-6 mb-8">
          <img 
            src="/cat.jpeg" 
            alt="itarqos" 
            className="w-24 h-24 rounded-full object-cover border-2 border-gray-700"
          />
          <div>
            <h1 className="text-3xl font-bold text-white mb-1">itarqos</h1>
            <p className="text-gray-400">Developer</p>
          </div>
        </div>

        {/* Bio */}
        <div className="mb-8">
          <p className="text-lg leading-relaxed">
            Hi, I'm <span className="text-white font-semibold">itarqos</span> and I make Minecraft plugins and websites. 
            Welcome to my little corner on the internet.
          </p>
        </div>

        {/* Services */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-white mb-3">What I Do</h2>
          <ul className="space-y-2 text-gray-400">
            <li>Minecraft Plugin Development</li>
            <li>Website Development</li>
          </ul>
        </div>

        {/* Links */}
        <div className="space-y-2">
          <a 
            href="https://discord.gg/yfZtpTBCEG" 
            target="_blank"
            rel="noopener noreferrer"
            className="block text-purple-400 hover:text-purple-300 transition-colors underline decoration-dotted underline-offset-4"
          >
            commissions (discord server)
          </a>
          <a 
            href="https://discord.com/users/1184539864360816772" 
            target="_blank"
            rel="noopener noreferrer"
            className="block text-purple-400 hover:text-purple-300 transition-colors underline decoration-dotted underline-offset-4"
          >
            discord profile
          </a>
        </div>

        {/* Footer */}
        <div className="mt-12 pt-6 border-t border-gray-800">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} itarqos
          </p>
        </div>
      </div>
    </div>
  )
}

export default App
