import React from 'react';
import Navigation from './components/Navigation';
import Map from './components/Map';
import { Leaf, MessageCircle } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      
      {/* Hero Section */}
      <div className="relative bg-black">
        <div className="w-full py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-6xl font-extrabold tracking-wider text-white sm:text-7xl lg:text-8xl xl:text-9xl w-full text-center leading-none">
            PARLAMENT DER BÄUME
          </h1>
          <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto text-center">
            a project by Julia Nordholz
          </p>
          <div className="mt-4 overflow-hidden">
            <div className="animate-scroll whitespace-nowrap text-gray-300 text-2xl font-bold">
              Opening 8th August 6pm Alter Botanischer Garten, Planten un Blomen, Hamburg
            </div>
          </div>
        </div>
      </div>

      {/* Tree Stories Section */}
      <section className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="prose lg:prose-lg prose-invert max-w-4xl">
          <p className="text-gray-300">
            From July to September 2025, Parlament der Bäume transforms the city of Hamburg into a walkable soundscape. Trees in urban space become poetic narrators – their voices can be heard through site-specific sound installations. The project weaves together ecological research, sound art, and participatory formats.
          </p>
          <p className="text-gray-300 mt-6">
            More information coming soon.<br />
            Meanwhile → <a href="https://instagram.com/julianordholz" className="text-cyan-400 hover:text-cyan-300 underline">instagram.com/julianordholz</a>
          </p>
        </div>
      </section>

      {/* Map Section */}
      <section className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="mt-4 text-lg text-gray-300">
            Discover the location of Hamburg's trees and their stories
          </p>
        </div>
        <Map />
      </section>

      {/* Bottom Links Section */}
      <section className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <h2 className="text-2xl font-bold text-gray-300 mb-4">
              Funding credits
            </h2>
            <p className="text-gray-300 text-lg">
              Funded by Verborgene Potenziale Innenstadt, by Behörde für Stadtentwicklung und Wohnen and Stadtteilkultur-Förderung by Bezirksamt-Hamburg-Mitte.
            </p>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold text-gray-300 mb-4">
              Impressum Link
            </h2>
            <a href="#" className="text-cyan-400 hover:text-cyan-300 underline text-lg">
              Impressum
            </a>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold text-gray-300 mb-4">
              Instagram
            </h2>
            <a href="https://www.instagram.com/julianordholz" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 underline text-lg">
              @julianordholz
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;