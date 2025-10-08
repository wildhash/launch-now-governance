export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-slate-50 dark:to-slate-900">
      {/* Hero Section */}
      <main className="container mx-auto px-6 py-16">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
            Launch Now
          </h1>
          <p className="text-xl md:text-2xl mb-4 text-slate-700 dark:text-slate-300 font-semibold">
            Wallet-native governance rewarding integration
          </p>
          <p className="text-lg mb-12 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A governance protocol that encodes Convergent Facilitation on-chain — transforming dissent into consensus and rewarding the integration of all human needs.
          </p>
          
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-all transform hover:scale-105 shadow-lg">
            Launch Now
          </button>
        </div>

        {/* Governance Process */}
        <div className="mt-24 mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-800 dark:text-slate-200">
            Convergent Facilitation Process
          </h2>
          <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md border-t-4 border-blue-500">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold mb-2 text-slate-800 dark:text-slate-200">Phase 1: Criteria</h3>
              <p className="text-slate-600 dark:text-slate-400">Define what matters - establish clear criteria that represent community needs</p>
            </div>
            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md border-t-4 border-purple-500">
              <div className="text-4xl mb-4">📝</div>
              <h3 className="text-xl font-bold mb-2 text-slate-800 dark:text-slate-200">Phase 2: Proposal</h3>
              <p className="text-slate-600 dark:text-slate-400">Create solutions that integrate diverse perspectives and meet criteria</p>
            </div>
            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md border-t-4 border-green-500">
              <div className="text-4xl mb-4">🗳️</div>
              <h3 className="text-xl font-bold mb-2 text-slate-800 dark:text-slate-200">Phase 3: Decision</h3>
              <p className="text-slate-600 dark:text-slate-400">Community votes with attestation-boosted voting power</p>
            </div>
            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md border-t-4 border-indigo-500">
              <div className="text-4xl mb-4">⛓️</div>
              <h3 className="text-xl font-bold mb-2 text-slate-800 dark:text-slate-200">Phase 4: Record</h3>
              <p className="text-slate-600 dark:text-slate-400">Immutable on-chain records via Ethereum Attestation Service</p>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="mt-16 max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-800 dark:text-slate-200">
            Key Features
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">🪙</div>
              <h3 className="text-xl font-bold mb-2 text-slate-800 dark:text-slate-200">LN-GOV Token</h3>
              <p className="text-slate-600 dark:text-slate-400">ERC-20 governance token with attestation integration for reputation-based voting</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-xl font-bold mb-2 text-slate-800 dark:text-slate-200">Integration Rewards</h3>
              <p className="text-slate-600 dark:text-slate-400">Incentivizes consensus-building and facilitation work</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">💼</div>
              <h3 className="text-xl font-bold mb-2 text-slate-800 dark:text-slate-200">Wallet-Native</h3>
              <p className="text-slate-600 dark:text-slate-400">Seamless integration with Web3 wallets for secure participation</p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 dark:border-slate-800 mt-24 py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-slate-600 dark:text-slate-400">
              <p className="font-semibold">Launch Now Governance</p>
              <p className="text-sm">Transforming dissent into consensus</p>
            </div>
            <div className="flex gap-6 flex-wrap justify-center">
              <a
                href="https://github.com/wildhash/launch-now-governance"
                className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a
                href="/docs/governance.md"
                className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Documentation
              </a>
              <a
                href="https://convergentfacilitation.org"
                className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Convergent Facilitation
              </a>
              <a
                href="https://attest.sh"
                className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                EAS
              </a>
            </div>
          </div>
          <div className="text-center mt-6 text-sm text-slate-500 dark:text-slate-500">
            MIT License • Built with Next.js, TypeScript, and Tailwind CSS
          </div>
        </div>
      </footer>
    </div>
  );
}
