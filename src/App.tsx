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
        </div>
      </div>

      {/* Tree Stories Section */}
      <section className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 " id="about">
        <h2 className="text-white text-4xl font-bold text-center small-caps">About</h2>
        <div className="prose lg:prose-lg prose-invert max-w-4xl py-8 px-4">
          <p className="text-gray-300">
            From July to September 2025, Parlament der Bäume transforms the city of Hamburg into a walkable soundscape. Trees in urban space become poetic narrators – their voices can be heard through site-specific sound installations. The project weaves together ecological research, sound art, and participatory formats.
          </p>
        </div>
      </section>


      <section className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 bg-black" id="trees">
        <h2 className="text-white text-4xl font-bold text-center small-caps">Trees</h2>
        
         {/* Map Section */}
        <section className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="mt-4 text-lg text-gray-300">
              Discover the location of Hamburg's trees and their stories
            </p>
          </div>
          <Map />
        </section>

        {/* Description Text */}
        <div className="max-w-4xl mx-auto mt-12 px-4 sm:px-6 lg:px-8">
          <div className="prose lg:prose-lg prose-invert">
            <p className="text-gray-300 leading-relaxed">
              'Parlament der Bäume' (Parliament of Trees) is a site-specific sound and text installation across Hamburg's inner city. Discreet solar-powered listening units render selected urban trees as audible speakers: poetic monologues (texts by Julia Nordholz) voice each tree's story, stance, and appeal, while sensor data informs the sonic textures. Passers-by are invited to slow down, listen, and build a relationship with the city's trees. The monologues and dialogues give selected urban trees a voice, weaving site-specific memories with current ecological experiences. They address layers of landscape history and social use around their environments, climate and drought stress, soil compaction, and practices of care in the urban realm. Species-specific traits—such as those of the Lehmann plane and the Exeter elm—become audible alongside questions of the rights of nature and more-than-human publics. In doing so, the trees share their worries, experiences, encounters, visions, and wishes.
            </p>
            <p className="text-gray-300 leading-relaxed mt-4">
              The sound design blends field recordings with sonified climate/environmental data, resulting in a poetic yet well-grounded speaking position that invites listeners to pause and attend. The texts and spatial choices draw on combined research sources: historical landscape plans and planting lists related to the places; materials and conversations within the context of the places; municipal tree and site information as well as technical documents on urban ecology; library and press archives (reports, historical photographs, city maps); multi-year climate and weather data as a basis for the sonification; supplemented by on-site conversations with caretakers, residents, and passers-by.
            </p>
          </div>
        </div>
      
        <div id="lehmann-platane" className="py-8">
         <h3 className="text-white text-2xl font-bold py-8 text-left">Lehmann-Platane (Alter Botanischer Garten, Planten un Blomen)</h3>
          {/*<img src="https://placehold.co/600x400" alt="Lehmann-Platane"/>*/}
          <p className="text-gray-300 py-4">
            Narrator: Lisa Hagmeister
          </p>
          {/* Custom SoundCloud-style audio player */}
          {(() => {
            const streamUrl = "/250801_Lehmann_Platane_V1.mp3";
            const trackTitle = "Lehmann-Platane - Lisa Hagmeister";
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

        <div id="exeter-ulme" className="py-8">
         <h3 className="text-white text-2xl font-bold py-8 text-left">Exeter-Ulme (Alter Botanischer Garten, Planten un Blomen)</h3>
          {/*<img src="https://placehold.co/600x400" alt="Exeter-Ulme"/>*/}
          <p className="text-gray-300 py-4">
            Narrator: Bjarne Mädel
          </p>
          {/* Custom SoundCloud-style audio player */}
          {(() => {
            const streamUrl = "/250709_Exeter_UlmeV2_final.mp3";
            const trackTitle = "Exeter-Ulme - Bjarne Mädel";
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

 <div id="ailanthus" className="py-8">
         <h3 className="text-white text-2xl font-bold py-8 text-left">Götterbaum (Kaiser-Wilhelm-Straße, Kreuzung Kronträgergang) </h3>
          {/*<img src="https://placehold.co/600x400" alt="Ailanthus"/>*/}
          <p className="text-gray-300 py-4">
            Narrator: Lina Beckmann
          </p>
          {/* Custom SoundCloud-style audio player */}
          {(() => {
            const streamUrl = "/250819_PDB_Goetterbaum.mp3";
            const trackTitle = "Götterbaum - Lina Beckmann";
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
         <h3 className="text-white text-2xl font-bold py-8 text-left">Klopstock-Linde (Christianskirche, Altona)</h3>
          {/*<img src="https://placehold.co/600x400" alt="Kloppstock-Linde"/>*/}
          <p className="text-gray-300 py-4">
            Narrator: Tilo Werner
          </p>
          {/* Custom SoundCloud-style audio player */}
          {(() => {
            const streamUrl = "/250627_PDB02_AltonaV2.mp3";
            const trackTitle = "Klopstock-Linde - Tilo Werner";
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
         <h3 className="text-white text-2xl font-bold py-8 text-left">5 Platanen (Gerhart-Hauptmann-Platz)</h3>
          {/* Custom SoundCloud-style audio player */}
          {(() => {
            const streamUrl = "/250812_PDB_LAG_Schnitt_mitAtmo.mp3";
            const trackTitle = "Conversation of the Five Plane Trees - Stadtteilschule Eidelstedt";
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
          })()} <br></br> <br>
          </br>
         <h4>Conversation of the Five Plane Trees</h4>  
          <p className="text-gray-300 py-4">
            Created as part of the art project at the Stadtteilschule Eidelstedt</p>
          <p className="text-gray-300 py-4">
            The sound installation at Gerhart-Hauptmann-Platz is the result of a project with students from STS Eidelstedt.<br /><br />
            Under the artistic direction of Julia Nordholz, and in collaboration with Martin Muth, Matthias Schubert, and Charlotte Höflich, debating, speech, and field recording workshops were held in July 2025.
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
            In cooperation with the Kulturagent*innen Hamburg (Julie Kuhn and Matthias Anton) and WeField e.V.<br /><br />
            Special thanks to LAG Kinder- und Jugendkultur e.V. for supporting the project through the Project Fund Culture & School.
          </p>
        </div>

        <div id="fusion" className="py-8">
         <h3 className="text-white text-2xl font-bold py-8 text-left">Eiche auf dem Gelände des Kulturkosmos Lärz / Fusion</h3>
          {/*<img src="https://placehold.co/600x400" alt="Fusion"/>*/}
          <p className="text-gray-300 py-4">
            Narrator: Martin Muth
          </p>
          {/* Custom SoundCloud-style audio player */}
          {(() => {
            const streamUrl = "/250624_PDB01_FusionV2.mp3";
            const trackTitle = "Eiche auf dem Gelände des Kulturkosmos Lärz / Fusion - Martin Muth";
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

        <div id="glaskirsche" className="py-8">
         <h3 className="text-white text-2xl font-bold py-8 text-left">Glaskirsche (University of Hamburg)</h3>
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
         <h3 className="text-white text-2xl font-bold py-8 text-left">Sumpfeiche (University of Hamburg)</h3>
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
        
        <div id="lohsepark" className="py-8">
         <h3 className="text-white text-2xl font-bold py-8 text-left">Kirschbäume (Lohsepark, entrance at Yokohamastraße)</h3>
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

        
        <div id="marco-polo-terassen" className="py-8">
         <h3 className="text-white text-2xl font-bold py-8 text-left">Sumpfzypresse (Marco-Polo-Terassen) </h3>
          {/*<img src="https://placehold.co/600x400" alt="Marco-Polo-Terassen"/>*/}
          <p className="text-gray-300 py-4">
            Coming soon.
          </p>
        </div>

        
      </section>

      <section className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 bg-black" id="archive">
        <div className="prose lg:prose-lg prose-invert max-w-4xl">
          <h2 className="text-white text-4xl font-bold text-center small-caps">Archive</h2>
          <p className="text-gray-300 mt-6">
            Coming soon.
          </p>
        </div>
      </section>


      <section className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 bg-black" id="documentation">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-white text-4xl font-bold text-center small-caps mb-12">Documentation</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-2">
              <img 
                src="/Photos/JuliaNordholz_14_B7058748_rgb_©HansSchlimbach.jpg" 
                alt="Installation Götterbaum at Kaiser-Wilhelm-Straße" 
                className="w-full h-auto object-cover rounded-lg"
              />
              <p className="text-gray-400 text-sm text-center">
                Installation Götterbaum at Kaiser-Wilhelm-Straße. Foto credit: Hans Schlimbach
              </p>
            </div>
            
            <div className="space-y-2">
              <img 
                src="/Photos/JuliaNordholz_Space_09_B7058751_rgb_©HansSchlimbach.jpg" 
                alt="Installation Götterbaum at Kaiser-Wilhelm-Straße" 
                className="w-full h-auto object-cover rounded-lg"
              />
              <p className="text-gray-400 text-sm text-center">
                Installation Götterbaum at Kaiser-Wilhelm-Straße. Foto credit: Hans Schlimbach
              </p>
            </div>
            
            <div className="space-y-2">
              <img 
                src="/Photos/JuliaNordholz_Space_13_B7058742_rgb_©HansSchlimbach.jpg" 
                alt="Installation Götterbaum at Kaiser-Wilhelm-Straße" 
                className="w-full h-auto object-cover rounded-lg"
              />
              <p className="text-gray-400 text-sm text-center">
                Installation Götterbaum at Kaiser-Wilhelm-Straße. Foto credit: Hans Schlimbach
              </p>
            </div>
          </div>
        </div>
      </section>


      <section className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 bg-black" id="team">
        <div className="prose lg:prose-lg prose-invert max-w-4xl">
          <h2 className="text-white text-4xl font-bold text-center small-caps">Team</h2>
          
          <div className="mt-8">
            <h3 className="text-white text-2xl font-bold mb-4">Core Team</h3>
            <ul className="list-disc py-4 px-4 text-gray-300">
              <li>Julia Nordholz (Artistic Direction, Production,Text)</li>
              <li>Matthias Schubert (Sound Design & Technical Support)</li>
              <li>Hannes Hehemann (Architect)</li>
              <li>Oliver Ochs (Software & Technical Support)</li>
              <li>Martin Hupf (Hardware & Technical Support)</li>
              <li>Heidrun Bock (Project Management Assistant)</li>
              <li>Argo Paalmann (Project Management Assistant)</li>
              <li>Fiona Grassl (Text Assistant Klopstock-Linde & Fusion Eiche)</li>
              <li>Charlotte Höflich (Workshop Support)</li>
              <li>Martin Muth (Workshop Support)</li>
            </ul>
          </div>

          <div className="mt-8">
            <h3 className="text-white text-2xl font-bold mb-4">Narrators & Contributors</h3>
            <ul className="list-disc py-4 px-4 text-gray-300">
              <li>Lisa Hagmeister (Lehmann-Platane)</li>
              <li>Bjarne Mädel (Exeter-Ulme)</li>
              <li>Lina Beckmann (Götterbaum)</li>
              <li>Tilo Werner (Klopstock-Linde)</li>
              <li>Julian Greis (Apfelbäume)</li>
              <li>Martin Muth (Eiche at Fusion Area in Lärz)</li>
              <li>Martin Kohlstedt (Sumpfeiche)</li>
              <li>Hendrik Weber (Exeter-Ulme)</li>
              <li>Simon Hehemann (Sumpfeiche)</li>
              <li>Julia Nordholz (Glaskirsche)</li>
              <li>Students STS Eidelstedt (Platanen at Gerhart-Hauptmann-Platz)</li>
            </ul>
          </div>

          <div className="mt-8">
            <h3 className="text-white text-2xl font-bold mb-4">Supporters</h3>
            <ul className="list-disc py-4 px-4 text-gray-300">
              <li>Universität Hamburg (Green Office)</li>
              <li>Curious Commuity Labs e.V.</li>
              <li>WeField e.V.</li>
              <li>Planten un Blomen</li>
              <li>altonale</li>
              <li>Fusion Festival / Kulturkosmos e.V.</li>
              <li>Behörde für Stadtentwicklung und Wohnen (Verborgene Potenziale Innenstadt)</li>
              <li>Bezirksamt Hamburg-Mitte Stadtteilkultur</li>
              <li>LAG Kulturfonds</li>
              <li>Kulturagent*innen Hamburg (Matthias Anton)</li>
              <li>STS Eidelstedt (Julie Kuhn)</li>
              <li>Gute Leude Fabrik (Lars Meier and team)</li>
              <li>Christianskirche Altona</li>
              <li>Archiv St. Pauli</li>
              <li>Stadtteilarchiv Ottensen</li>
              <li>Baumpflege Thomsen</li>
              <li>TBN Nord</li>
              <li>Schöneberndt & Sohn</li>
              <li>KSK Ingenieure</li>
            </ul>
          </div>

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
              Funded by Verborgene Potenziale Innenstadt, by Behörde für Stadtentwicklung und Wohnen and Stadtteilkultur-Förderung by Bezirksamt-Hamburg-Mitte, Freie und Hansestadt Hamburg, Hamburg Kreativgesellschaft. Gefördert durch das Programm "Zukunftsfähige Innenstädte und Zentren" des Bundesministeriums für Wohnen, Stadtentwicklung und Bauwesen.
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

     
     <hr />

      {/* Logo Section */}
      <section className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <img src="/potentiale.png" alt="Verborgene Potenziale Innenstadt" className="mx-auto mb-4 w-48" />
          </div>
          
          <div>
            <img src="/innenstaedte.jpeg" alt="Gefördert durch as Bundesministerium für Wohnen, Stadtentwicklung und Bauwesen aufgrund eines Beschlusses des Deutschen Bundestages - zukunftsfähige Innenstädte und Zentren" className="mx-auto mb-4 w-48" />
          </div>
          
          <div>
            <img src="/kreativgesellschaft.png" alt="Hamburg Kreativgesellschaft" className="mx-auto mb-4 w-48" />
          </div>

          <div>
            <img src="/hamburg.png" alt="Freie und Hansestadt Hamburg" className="mx-auto mb-4 w-48" />
          </div>
        </div>
      </section>

      <hr />
      
      {/* Contact Section */}
      <section className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 bg-black" id="contact">
        <div className="prose lg:prose-lg prose-invert max-w-4xl">
          <h2 className="text-white text-4xl font-bold text-center small-caps">Contact</h2>
          <p className="text-gray-300 mt-6">
            More information coming soon.<br /><br />
            Meanwhile → <a href="https://instagram.com/julianordholz" className="text-cyan-400 hover:text-cyan-300 underline">instagram.com/julianordholz</a><br />
            <a href="mailto:julia.nordholz@gmail.com" className="text-cyan-400 hover:text-cyan-300 underline">julia.nordholz@gmail.com</a>
          </p>
        </div>
      </section>

    </div>
  );
}

export default App;