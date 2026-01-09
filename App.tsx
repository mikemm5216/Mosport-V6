import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { SearchHero } from './components/SearchHero';
import { DecisionCard } from './components/DecisionCard';
import { AuthModal } from './components/AuthModal';
import { UserRole, DecisionSignal } from './types';
import { getDecisionSignals } from './services/moEngine';

function App() {
  const [currentRole, setCurrentRole] = useState<UserRole>(UserRole.FAN);
  const [signals, setSignals] = useState<DecisionSignal[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [isAuthOpen, setIsAuthOpen] = useState<boolean>(false);

  // Initial Load - "30-Second Journey" (0s mark)
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const data = await getDecisionSignals();
      setSignals(data);
      setLoading(false);
    };

    fetchData();
  }, []); // Run once on mount

  return (
    <div className="min-h-screen bg-mosport-black font-sans text-gray-200 pb-20">
      
      <Navbar 
        currentRole={currentRole} 
        setRole={setCurrentRole}
        onLoginClick={() => setIsAuthOpen(true)}
      />

      <SearchHero />

      {/* Main Content Area */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <span className="text-yellow-500">🏆</span> Upcoming Events
          </h2>
          {loading && (
             <span className="text-xs text-gray-500 animate-pulse">Syncing with MoEngine...</span>
          )}
        </div>

        {loading ? (
          // Skeleton Loader
          <div className="space-y-4">
             {[1, 2].map(i => (
                <div key={i} className="h-48 bg-gray-900/50 rounded-xl animate-pulse border border-gray-800"></div>
             ))}
          </div>
        ) : (
          <div>
            {signals.map(signal => (
              <DecisionCard 
                key={signal.eventId} 
                signal={signal} 
                userRole={currentRole} 
              />
            ))}
          </div>
        )}

        {/* Footer / Disclaimer */}
        <div className="mt-12 text-center border-t border-gray-800 pt-8 pb-12">
           <p className="text-xs text-gray-600 mb-2">MOSPORT V6.0 - THE PHYSICAL DECISION INDEX</p>
           <p className="text-[10px] text-gray-700 max-w-md mx-auto">
             Data is real-time verified via Layer B (Mo Engine). We do not store third-party data permanently.
             Operating under the "Compare-only" compliance framework.
           </p>
        </div>

      </main>

      <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
    </div>
  );
}

export default App;