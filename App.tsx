
import React, { useState, useEffect } from 'react';
import GardenVisualizer from './components/GardenVisualizer';
import ChatInterface from './components/ChatInterface';
import { generateGardenImage } from './services/geminiService';

const App: React.FC = () => {
  const [growth, setGrowth] = useState<number>(() => {
    const saved = localStorage.getItem('garden_growth');
    return saved ? parseInt(saved, 10) : 0;
  });

  const [milestones, setMilestones] = useState<string[]>(() => {
    const saved = localStorage.getItem('garden_milestones');
    return saved ? JSON.parse(saved) : [];
  });

  const [dailyVerse, setDailyVerse] = useState<{ text: string; ref: string } | null>(null);
  const [isGeneratingMilestone, setIsGeneratingMilestone] = useState(false);

  const currentLevel = Math.floor(growth / 10);

  useEffect(() => {
    localStorage.setItem('garden_growth', growth.toString());
    localStorage.setItem('garden_milestones', JSON.stringify(milestones));
  }, [growth, milestones]);

  // Handle milestone image generation
  useEffect(() => {
    const checkMilestone = async () => {
      // If we've reached a new level (multiple of 10) and don't have its reward yet
      if (currentLevel > 0 && milestones.length < currentLevel && !isGeneratingMilestone) {
        setIsGeneratingMilestone(true);
        const imageUrl = await generateGardenImage(currentLevel);
        if (imageUrl) {
          setMilestones(prev => [...prev, imageUrl]);
        }
        setIsGeneratingMilestone(false);
      }
    };
    checkMilestone();
  }, [currentLevel, milestones.length, isGeneratingMilestone]);

  useEffect(() => {
    const verses = [
      { text: "Verily, with hardship comes ease.", ref: "Surah Ash-Sharh 94:6" },
      { text: "So remember Me; I will remember you.", ref: "Surah Al-Baqarah 2:152" },
      { text: "And speak to people good words.", ref: "Surah Al-Baqarah 2:83" },
      { text: "The best among you are those who have the best manners and character.", ref: "Sahih Bukhari" }
    ];
    setDailyVerse(verses[Math.floor(Math.random() * verses.length)]);
  }, []);

  const handleGrowth = (amount: number) => {
    setGrowth(prev => prev + amount);
  };

  return (
    <div className="min-h-screen pb-12">
      <header className="bg-emerald-800 text-white pt-8 pb-16 px-6 text-center relative overflow-hidden">
        <div className="relative z-10">
          <h1 className="text-3xl md:text-4xl font-bold italic arabic-text mb-2">Riyad al-Iman</h1>
          <p className="text-emerald-100 text-sm md:text-base max-w-lg mx-auto">
            Nurturing young hearts with wisdom from the Quran and Sunnah.
          </p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 -mt-10 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1 space-y-6">
            <section className="bg-white p-6 rounded-2xl shadow-lg border border-emerald-50">
              <GardenVisualizer growth={growth} />
              
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="bg-emerald-50 p-3 rounded-xl text-center">
                  <span className="block text-xs text-emerald-600 font-bold uppercase tracking-tighter">Level</span>
                  <span className="text-xl font-bold text-emerald-800">{currentLevel}</span>
                </div>
                <div className="bg-emerald-50 p-3 rounded-xl text-center">
                  <span className="block text-xs text-emerald-600 font-bold uppercase tracking-tighter">Growth</span>
                  <span className="text-xl font-bold text-emerald-800">{growth}</span>
                </div>
              </div>
            </section>

            {milestones.length > 0 && (
              <section className="bg-white p-6 rounded-2xl shadow-lg border border-emerald-50">
                <h3 className="text-sm font-bold text-emerald-800 mb-4 flex items-center">
                  <span className="mr-2">🏆</span> Garden Milestones
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  {milestones.map((url, i) => (
                    <div key={i} className="relative aspect-square rounded-lg overflow-hidden group">
                      <img src={url} alt={`Level ${i+1}`} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                        <span className="text-[10px] text-white font-bold">Lvl {i+1}</span>
                      </div>
                    </div>
                  ))}
                  {isGeneratingMilestone && (
                    <div className="aspect-square rounded-lg bg-emerald-50 flex items-center justify-center animate-pulse">
                      <span className="text-[20px]">✨</span>
                    </div>
                  )}
                </div>
              </section>
            )}

            <section className="bg-emerald-700 text-white p-6 rounded-2xl shadow-lg relative overflow-hidden">
              <h3 className="text-lg font-bold mb-3 flex items-center">
                <span className="mr-2">🌱</span> Seed of the Day
              </h3>
              {dailyVerse ? (
                <>
                  <p className="text-sm leading-relaxed italic">"{dailyVerse.text}"</p>
                  <p className="text-[10px] mt-2 opacity-70 font-bold text-right">— {dailyVerse.ref}</p>
                </>
              ) : (
                <div className="h-20 animate-pulse bg-emerald-600 rounded-lg"></div>
              )}
            </section>
          </div>

          <div className="lg:col-span-2">
            <ChatInterface onGrowth={handleGrowth} />
            <p className="text-[10px] text-center mt-4 text-emerald-700/60 max-w-md mx-auto">
              Answers are generated by AI based on Quran and Sunnah.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
