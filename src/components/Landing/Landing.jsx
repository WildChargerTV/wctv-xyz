// * src/components/Landing/Landing.jsx

// Node Module Imports
import { Link } from 'react-router-dom';
// Local Module Imports
import './Landing.css';
import './Landing-m.css';

/**
 * Renders the site's landing page.
 * @returns 
 */
export default function Landing() {
    return (<main id='site-landing'>
        {/* Page Title (Hidden) */}
        <h1 style={{ display: 'none'}}>WildCharger.xyz</h1>

        {/* Section 1: Intro */}
        <h2>Greetings, traveller!</h2>
        <div id='landing-intro'>
            <p>
                Welcome to my website. My name is WildCharger, a software developer for web
                applications, occasional content creator, & enthusiast for various science fiction
                franchises (& Pokémon). Whether you arrived here by chance, or are interested in my
                endeavors, I hope you enjoy your visit.
                <br /><br />
                Take a look at my <b><Link to='/portfolio'>Portfolio</Link></b> to see a list of my
                ongoing & completed projects, and head over to the <b><Link to='/contact'>Contact
                </Link></b> page if you need to get in touch with me. Thank you!
            </p>
            <img src='https://raw.githubusercontent.com/WildChargerTV/wildcharger-xyz/refs/heads/main/src/img/Characters.png' alt='brand characters' />
        </div>
        
        {/* Section 2: Twitch */}
        <h2>Live Streaming</h2>
        <div id='landing-twitch'>
            <p>
                Although not a common occurrence, I do tend to stream every once in a while. When I
                do, it can be pretty much anything between games I want to play for the first time,
                games I simply want to share around, or (very rarely) I stream development of my
                various projects. Feel free to take a look, if you&apos;re interested!
            </p>
            <iframe
                src='https://player.twitch.tv/?channel=wildchargertv&parent=wildcharger.xyz'
                title='twitchembed'
                allowfullscreen>
            </iframe>
        </div>
    </main>);
}