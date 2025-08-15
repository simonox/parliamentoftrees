import React from 'react';
import Navigation from './components/Navigation';
import Map from './components/Map';
import { Leaf, MessageCircle } from 'lucide-react';
import { PlayButton, Timer } from 'react-soundplayer/components';
import { withCustomAudio } from 'react-soundplayer/addons';

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
      <section className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 " id="about">
        <h2 className="text-white text-4xl font-bold text-center">About</h2>
        <div className="prose lg:prose-lg prose-invert max-w-4xl py-8 px-4">
          <p className="text-gray-300">
            From July to September 2025, Parlament der Bäume transforms the city of Hamburg into a walkable soundscape. Trees in urban space become poetic narrators – their voices can be heard through site-specific sound installations. The project weaves together ecological research, sound art, and participatory formats.
          </p>
          <p className="text-gray-300 mt-6">
            More information coming soon.<br />
            Meanwhile → <a href="https://instagram.com/julianordholz" className="text-cyan-400 hover:text-cyan-300 underline">instagram.com/julianordholz</a>
          </p>
        </div>
      </section>


      <section className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 bg-black" id="trees">
        <h2 className="text-white text-4xl font-bold text-center">Trees</h2>
        
         {/* Map Section */}
        <section className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="mt-4 text-lg text-gray-300">
              Discover the location of Hamburg's trees and their stories
            </p>
          </div>
          <Map />
        </section>
      
        {/* every tree gets an own div identified by it's id */} 
        <div id="marco-polo-terassen" className="py-8">
         <h3 className="text-white text-2xl font-bold py-8 text-center">Marco-Polo-Terassen</h3>
          <img src="https://placehold.co/600x400" alt="Marco-Polo-Terassen"/>
          <p className="text-gray-300 py-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
          </p>
          {/* Custom SoundCloud-style audio player */}
          {(() => {
            const streamUrl = "/Free_Test_Data_500KB_MP3.mp3";
            const trackTitle = "Test Audio";
            const CustomPlayer = withCustomAudio((props) => {
              return (
                <div className="bg-gray-900 rounded-lg p-4 flex gap-4 shadow-lg max-w-xl mt-4">
                  <PlayButton {...props} className="w-12 h-12 text-cyan-400 hover:text-cyan-300" />
                  <div className="flex-1">
                    <div className="font-bold text-white text-lg">{trackTitle}</div>
                    <Timer {...props} className="text-gray-300" />
                  </div>
                </div>
              );
            });
            return <CustomPlayer streamUrl={streamUrl} trackTitle={trackTitle} preloadType="auto" />;
          })()}
        </div>

        <div id="kloppstock-linde" className="py-8">
         <h3 className="text-white text-2xl font-bold py-8 text-center">Kloppstock-Linde</h3>
          <img src="https://placehold.co/600x400" alt="Kloppstock-Linde"/>
          <p className="text-gray-300 py-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
          </p>
          {/* Custom SoundCloud-style audio player */}
          {(() => {
            const streamUrl = "/Free_Test_Data_500KB_MP3.mp3";
            const trackTitle = "Test Audio";
            const CustomPlayer = withCustomAudio((props) => {
              return (
                <div className="bg-gray-900 rounded-lg p-4 flex gap-4 shadow-lg max-w-xl mt-4">
                  <PlayButton {...props} className="w-12 h-12 text-cyan-400 hover:text-cyan-300" />
                  <div className="flex-1">
                    <div className="font-bold text-white text-lg">{trackTitle}</div>
                    <Timer {...props} className="text-gray-300" />
                  </div>
                </div>
              );
            });
            return <CustomPlayer streamUrl={streamUrl} trackTitle={trackTitle} preloadType="auto" />;
          })()}
        </div>

        <div id="uni-hamburg" className="py-8">
         <h3 className="text-white text-2xl font-bold py-8 text-center">University of Hamburg</h3>
          <img src="https://placehold.co/600x400" alt="Uni Hamburg"/>
          <p className="text-gray-300 py-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
          </p>
          {/* Custom SoundCloud-style audio player */}
          {(() => {
            const streamUrl = "/Free_Test_Data_500KB_MP3.mp3";
            const trackTitle = "Test Audio";
            const CustomPlayer = withCustomAudio((props) => {
              return (
                <div className="bg-gray-900 rounded-lg p-4 flex gap-4 shadow-lg max-w-xl mt-4">
                  <PlayButton {...props} className="w-12 h-12 text-cyan-400 hover:text-cyan-300" />
                  <div className="flex-1">
                    <div className="font-bold text-white text-lg">{trackTitle}</div>
                    <Timer {...props} className="text-gray-300" />
                  </div>
                </div>
              );
            });
            return <CustomPlayer streamUrl={streamUrl} trackTitle={trackTitle} preloadType="auto" />;
          })()}
        </div>


        <div id="planten-un-blomen" className="py-8">
         <h3 className="text-white text-2xl font-bold py-8 text-center">Planten un Blomen</h3>
          <img src="https://placehold.co/600x400" alt="Planten un Blomen"/>
          <p className="text-gray-300 py-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
          </p>
          {/* Custom SoundCloud-style audio player */}
          {(() => {
            const streamUrl = "/Free_Test_Data_500KB_MP3.mp3";
            const trackTitle = "Test Audio";
            const CustomPlayer = withCustomAudio((props) => {
              return (
                <div className="bg-gray-900 rounded-lg p-4 flex gap-4 shadow-lg max-w-xl mt-4">
                  <PlayButton {...props} className="w-12 h-12 text-cyan-400 hover:text-cyan-300" />
                  <div className="flex-1">
                    <div className="font-bold text-white text-lg">{trackTitle}</div>
                    <Timer {...props} className="text-gray-300" />
                  </div>
                </div>
              );
            });
            return <CustomPlayer streamUrl={streamUrl} trackTitle={trackTitle} preloadType="auto" />;
          })()}
        </div>

        <div id="gerhard-hauptmann-platz" className="py-8">
         <h3 className="text-white text-2xl font-bold py-8 text-center">Gerhart-Hauptmann-Platz</h3>
         <h4>Gespräch der fünf Platanen</h4>  
          <p className="text-gray-300 py-4">
            Entstanden im Rahmen des Kunstprojekts an der Stadtteilschule Eidelstedt
          </p>
          <p className="text-gray-300 py-4">
            Die Klanginstallation am Gerhart-Hauptmann-Platz ist das Ergebnis eines Projekts mit Schülerinnen der STS Eidelstedt.<br /><br />
            Unter der künstlerischen Leitung von Julia Nordholz und in Zusammenarbeit mit Martin Muth, Matthias Schubert und Charlotte Höflich wurden im Juli 2025 Debattier-, Sprech- und Field-Recording-Workshops durchgeführt.<br /><br />
            Darin entwickelten die Schüler*innen eigene Texte aus der Perspektive der Platanen des Platzes, nahmen diese auf und gestalteten so ein vielstimmiges Gespräch zwischen den Bäumen.
          </p>
          <p className="text-gray-300 py-4">
            <b>Mitwirkende Schüler*innen:</b>
            <ul className="list-disc py-4 px-4">
              <li>Klasse 11: Lennard, Yusra, Devrim, Incilay, Satyam</li>
              <li>Klasse 10: Josephine</li>
              <li>Klasse 8: tba</li>
              <li>Klasse 7: Ronja, Sina, Anna</li>
              <li>Klasse 6: Amelia, Christiane, Maja, Reyhan</li>
              <li>Klasse 5: Lojayn, Fatoumata, Abuzar, Oliver</li>
            </ul>
          </p>
          <p className="text-gray-300 py-4">
            In Kooperation mit den Kulturagent*innen Hamburg (Julie Kuhn und Matthias Anton) und WeField e.V. <br /><br />
            Herzlichen Dank an die LAG Kinder- und Jugendkultur e.V. für die Förderung über den Projektfonds Kultur & Schule.          
          </p>
          {/* Custom SoundCloud-style audio player */}
          {(() => {
            const streamUrl = "/250812_PDB_LAG_Schnitt_mitAtmo.mp3";
            const trackTitle = "Gespräch der fünf Platanen";
            const CustomPlayer = withCustomAudio((props) => {
              return (
                <div className="bg-gray-900 rounded-lg p-4 flex gap-4 shadow-lg max-w-xl mt-4">
                  <PlayButton {...props} className="w-12 h-12 text-cyan-400 hover:text-cyan-300" />
                  <div className="flex-1">
                    <div className="font-bold text-white text-lg">{trackTitle}</div>
                    <Timer {...props} className="text-gray-300" />
                  </div>
                </div>
              );
            });
            return <CustomPlayer streamUrl={streamUrl} trackTitle={trackTitle} preloadType="auto" />;
          })()}
        </div>


        <div id="lohsepark" className="py-8">
         <h3 className="text-white text-2xl font-bold py-8 text-center">Lohsepark</h3>
          <img src="https://placehold.co/600x400" alt="Lohsepark"/>
          <p className="text-gray-300 py-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
          </p>
          {/* Custom SoundCloud-style audio player */}
          {(() => {
            const streamUrl = "/Free_Test_Data_500KB_MP3.mp3";
            const trackTitle = "Test Audio";
            const CustomPlayer = withCustomAudio((props) => {
              return (
                <div className="bg-gray-900 rounded-lg p-4 flex gap-4 shadow-lg max-w-xl mt-4">
                  <PlayButton {...props} className="w-12 h-12 text-cyan-400 hover:text-cyan-300" />
                  <div className="flex-1">
                    <div className="font-bold text-white text-lg">{trackTitle}</div>
                    <Timer {...props} className="text-gray-300" />
                  </div>
                </div>
              );
            });
            return <CustomPlayer streamUrl={streamUrl} trackTitle={trackTitle} preloadType="auto" />;
          })()}
        </div>
        
      </section>


      <section className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 bg-black" id="archive">
        <div className="prose lg:prose-lg prose-invert max-w-4xl">
          <h2 className="text-white text-4xl font-bold text-center">Archive</h2>
          <p className="text-gray-300 mt-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
          </p>
        </div>
      </section>


      <section className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 bg-black" id="network">
        <div className="prose lg:prose-lg prose-invert max-w-4xl">
          <h2 className="text-white text-4xl font-bold text-center">Network</h2>
          <p className="text-gray-300 mt-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
          </p>
        </div>
      </section>


      <section className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 bg-black" id="team">
        <div className="prose lg:prose-lg prose-invert max-w-4xl">
          <h2 className="text-white text-4xl font-bold text-center">Team</h2>
          <p className="text-gray-300 mt-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
          </p>
        </div>
      </section>


      <section className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 bg-black" id="contact">
        <div className="prose lg:prose-lg prose-invert max-w-4xl">
          <h2 className="text-white text-4xl font-bold text-center">Contact</h2>
          <p className="text-gray-300 mt-6">
            More information coming soon.<br />
            Meanwhile → <a href="https://instagram.com/julianordholz" className="text-cyan-400 hover:text-cyan-300 underline">instagram.com/julianordholz</a><br />
            <a href="mailto:julia.nordholz@gmail.com" className="text-cyan-400 hover:text-cyan-300 underline">julia.nordholz@gmail.com</a>
          </p>
        </div>
      </section>

     <hr></hr>

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
              Impressum 
            </h2>
            <p className="text-gray-300 text-lg">Verantwortlich für die Inhalte dieser Seite: Julia Nordholz</p>
            <p className="text-gray-300 text-lg">Kontakt: <a href='mailto:julia.nordholz@gmail.com' className="text-cyan-400 hover:text-cyan-300 underline">julia.nordholz@gmail.com</a></p>
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