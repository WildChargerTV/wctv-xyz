// * src/components/Portfolio/Tabs/ESTab.jsx

// Node Module Imports
import { Slide } from 'react-slideshow-image';
// Local Module Imports
import useWindowSize from '../../../hooks/windowSize';

export default function ESTab() {
    const { windowX } = useWindowSize();
    const IMAGES = [
        'https://raw.githubusercontent.com/WildChargerTV/wildcharger-xyz/refs/heads/main/src/img/EVERSPACE/ESBuilder%20Slide%201.png',
        'https://raw.githubusercontent.com/WildChargerTV/wildcharger-xyz/refs/heads/main/src/img/EVERSPACE/ESBuilder%20Slide%202.png',
        'https://raw.githubusercontent.com/WildChargerTV/wildcharger-xyz/refs/heads/main/src/img/EVERSPACE/ESBuilder%20Slide%203.png'
    ]

    return (<>
        <h2 id='es-header'>
            <img src='https://upload.wikimedia.org/wikipedia/fr/2/2b/Everspace_Logo.png' alt='ES1 Logo' />
        </h2>
        <div id='es-paragraph-1'>
            <p>
                Following the bankruptcy & sale of FISHLABS GmbH, its co-founders, alongside the
                original dev team of Galaxy on Fire, left the company to form ROCKFISH Games. A few
                years later, they came out with EVERSPACE™, the spiritual successor to the Galaxy
                on Fire series. I immediately bought it, and proceeded to enjoy it very much, just
                as I had done with the team&apos;s prior titles. Although I maintain the opinion
                that the more stylized, less realistic artstyle of Galaxy on Fire has its continued
                merits, when I compare this to the dumpster fire that was Galaxy on Fire 3: 
                Manticore, there simply is no competition.
            </p>
            <img src='https://raw.githubusercontent.com/WildChargerTV/wildcharger-xyz/refs/heads/main/src/img/EVERSPACE/Interceptor.png' alt='Colonial Interceptor' />
        </div>
        <h3 className='es-subheader'>EVERSPACE™ Builder (ESBuilder)</h3>
        <div id='es-paragraph-2'>
            <p>
                <a href='https://esbuilder.wildcharger.xyz/' target='_blank' rel='noreferrer'>
                EVERSPACE™ Builder</a> (or ESBuilder for short) is a companion tool that allows
                users to create, save, & share in-game EVERSPACE™ loadouts with others. It was
                originally intended to be my final project for a software engin course; however,
                following some private shared testing, I now consider ESBuilder to stand on its own 
                as a project worthy of continued development. 
                <br /><br />
                I consider myself very lucky to have received the blessing of ROCKFISH Games to
                continue work on this endeavor. Whether you want to record a build you achieved in 
                a run, create a build that you&apos;d like to use in a future run, or want to make
                builds to share with new pilots, I invite any and all to give ESBuilder a try.
                <br /><br />
                <a href='https://esbuilder.wildcharger.xyz/' target='_blank' rel='noreferrer'>
                {windowX >= 720 ? 'Click' : 'Tap'} here to participate in the ESBuilder Beta!
                </a>
            </p>
            <div id='es-builder-slideshow'>
                <Slide arrows canSwipe={windowX < 720} easing='cubic' indicators infinite>
                    {IMAGES.map((url) => (<div key={crypto.randomUUID()} className='es-slide'>
                        <div style={{backgroundImage: `url(${url})`}}>
                            <span></span>
                        </div>
                    </div>))}
                </Slide>
            </div>
        </div>
        
    </>);
}