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
      
       <div id="gerhard-hauptmann-platz" className="py-8">
         <h3 className="text-white text-2xl font-bold py-8 text-center">Five Plane Trees (Gerhart-Hauptmann-Platz)</h3>
         <h4>Conversation of the Five Plane Trees</h4>  
          <p className="text-gray-300 py-4">
            Created as part of the art project at the Stadtteilschule Eidelstedt          </p>
          <p className="text-gray-300 py-4">
            The sound installation at Gerhart-Hauptmann-Platz is the result of a project with students from STS Eidelstedt.<br /><br />
            Under the artistic direction of Julia Nordholz, and in collaboration with Martin Muth, Matthias Schubert, and Charlotte Höflich, debating, speech, and field recording workshops were held in July 2025.<br /><br />
            During these sessions, the students developed their own texts from the perspective of the plane trees on the square, recorded them, and thus created a multi-voiced conversation between the trees.
          </p>
          <p className="text-gray-300 py-4">
            <b>Participating students:</b>
            <ul className="list-disc py-4 px-4">
              <li>Grade 11: Lennard, Yusra, Devrim, Incilay, Satyam</li>
              <li>Grade 10: Josephine</li>
              <li>Grade 7: Ronja, Sina, Anna</li>
              <li>Grade 6: Amelia, Christiane, Maja, Reyhan</li>
              <li>Grade 5: Lojayn, Fatoumata, Abuzar, Oliver</li>
            </ul>
          </p>
          <p className="text-gray-300 py-4">
            In Kooperation mit den Kulturagent*innen Hamburg (Julie Kuhn und Matthias Anton) und WeField e.V.
            Herzlichen Dank an die LAG Kinder- und Jugendkultur e.V. für die Förderung über den Projektfonds Kultur & Schule.          </p>
          {/* Custom SoundCloud-style audio player */}
          {(() => {
            const streamUrl = "/250812_PDB_LAG_Schnitt_mitAtmo.mp3";
            const trackTitle = "Conversation of the Five Plane Trees";
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
         <h3 className="text-white text-2xl font-bold py-8 text-center">Kloppstock-Linde (An der Christianskirche Altona)</h3>
          {/*<img src="https://placehold.co/600x400" alt="Kloppstock-Linde"/>*/}
          <p className="text-gray-300 py-4">
            Coming soon.
          </p>
          {/* Custom SoundCloud-style audio player 
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
          */}
        </div>

        <div id="glaskirsche" className="py-8">
         <h3 className="text-white text-2xl font-bold py-8 text-center">Glaskirsche (University of Hamburg)</h3>
          {/*<img src="https://placehold.co/600x400" alt="Glaskirsche"/>*/}
          <p className="text-gray-300 py-4">
            Coming soon.
          </p>
          {/* Custom SoundCloud-style audio player 
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
          */}
        </div>

         <div id="sumpfeiche" className="py-8">
         <h3 className="text-white text-2xl font-bold py-8 text-center">Sumpfeiche (University of Hamburg)</h3>
          {/*<img src="https://placehold.co/600x400" alt="Sumpfeiche"/>*/}
          <p className="text-gray-300 py-4">
            Coming soon.
          </p>
          {/* Custom SoundCloud-style audio player 
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
          */}
        </div>


        <div id="lehmann-platane" className="py-8">
         <h3 className="text-white text-2xl font-bold py-8 text-center">Lehmann-Platane (Planten un Blomen)</h3>
          {/*<img src="https://placehold.co/600x400" alt="Lehmann-Platane"/>*/}
          <p className="text-gray-300 py-4">
            Coming soon.
          </p>
          {/* Custom SoundCloud-style audio player 
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
          */}
        </div>

         <div id="exeter-ulme" className="py-8">
         <h3 className="text-white text-2xl font-bold py-8 text-center">Exeter-Ulme (Planten un Blomen)</h3>
          {/*<img src="https://placehold.co/600x400" alt="Exeter-Ulme"/>*/}
          <p className="text-gray-300 py-4">
            Coming soon.
          </p>
          {/* Custom SoundCloud-style audio player 
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
          */}
        </div>

        <div id="lohsepark" className="py-8">
         <h3 className="text-white text-2xl font-bold py-8 text-center">Lohsepark</h3>
          {/* <img src="https://placehold.co/600x400" alt="Lohsepark"/> */}
          <p className="text-gray-300 py-4">
            Coming soon.
          </p>
          {/* Custom SoundCloud-style audio player 
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
          */}
        </div>



        <div id="ailanthus" className="py-8">
         <h3 className="text-white text-2xl font-bold py-8 text-center">Ailanthus (Bezirksamt)</h3>
          {/*<img src="https://placehold.co/600x400" alt="Ailanthus"/>*/}
          <p className="text-gray-300 py-4">
            Coming soon.
          </p>
        </div>

        
        <div id="marco-polo-terassen" className="py-8">
         <h3 className="text-white text-2xl font-bold py-8 text-center">Marco-Polo-Terassen</h3>
          {/*<img src="https://placehold.co/600x400" alt="Marco-Polo-Terassen"/>*/}
          <p className="text-gray-300 py-4">
            Coming soon.
          </p>
        </div>

        
      </section>

      <section className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 bg-black" id="archive">
        <div className="prose lg:prose-lg prose-invert max-w-4xl">
          <h2 className="text-white text-4xl font-bold text-center">Archive</h2>
          <p className="text-gray-300 mt-6">
            Coming soon.
          </p>
        </div>
      </section>


      <section className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 bg-black" id="network">
        <div className="prose lg:prose-lg prose-invert max-w-4xl">
          <h2 className="text-white text-4xl font-bold text-center">Network</h2>
          <p className="text-gray-300 mt-6">
            Coming soon.
          </p>
        </div>
      </section>


      <section className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 bg-black" id="team">
        <div className="prose lg:prose-lg prose-invert max-w-4xl">
          <h2 className="text-white text-4xl font-bold text-center">Team</h2>
          <p className="text-gray-300 mt-6">
            Coming soon.
          </p>
        </div>
      </section>


      <section className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 bg-black" id="contact">
        <div className="prose lg:prose-lg prose-invert max-w-4xl">
          <h2 className="text-white text-4xl font-bold text-center">Contact</h2>
          <p className="text-gray-300 mt-6">
            More information coming soon.<br /><br />
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