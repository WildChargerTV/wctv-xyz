// * src/components/Portfolio/Tabs/TRONTab.jsx

// Local Module Imports
import FileDownloadLink from '../../../utils/FileDownloadLink';

export default function TRONTab() {
    return (<>
        <h2 id='tron-header'>TRON 2.0</h2>
        <div id='tron-paragraph-1'>
            <p>
                TRON 2.0 is a game I always saw as one of the greatest underappreciated gems from
                the early 2000s, and the game that inspired me to explore game development as a
                medium. (Its disc lightlines are used for my site&apos;s favicon!) Although it was
                built on archaic technology using an engine better off forgotten, it really did
                deserve so much more love than it ended up getting, primarily from the dev team. So
                although I don&apos;t have much going on with this game at this exact moment, 
                I&apos;ve made it one of my personal goals to give it a chance to continue on.
                <br /><br />
                Of course, I couldn&apos;t have known any of what I currently do about this game 
                were it not for the fantastic <a href='https://x.com/_LDSO_' target='_blank' rel='noreferrer'>TronFAQ</a> of 
                the <a href='https://www.ldso.net/' target='_blank' rel='noreferrer'>LDSO</a> clan - the sole remaining developer of
                the <a href='https://www.moddb.com/mods/killer-app/downloads/tron-20-killer-app-mod-v11a' target='_blank' rel='noreferrer'>
                Killer App Mod</a>, which is quite literally the only thing keeping the game alive
                & fully functional to this day (an effort 20+ years strong!). Please send a thanks
                his way whenever you get the chance. He deserves it.
            </p>
            <img src='https://raw.githubusercontent.com/WildChargerTV/wildcharger-xyz/refs/heads/main/src/img/TRON/Jet%20Bradley.png' alt='Jet Bradley' />
        </div>
        <h3 className='tron-subheader'>TRON 2.0: Security Protocol</h3>
        <div id='tron-paragraph-2'>
            <p>
                <a href='https://github.com/WildChargerTV/TRON-2.0-Security-Protocol' target='_blank' rel='noreferrer'>
                TRON 2.0: Security Protocol</a> is planned to be my custom campaign for TRON 2.0.
                It sees the player thrust into the POV of a newly-rezzed Intrusion Countermeasure
                Program (ICP), tasked with defending the grid against an unknown threat that has
                recently entered the system, infecting everything around it. Is the entire
                network subject to fall under its rule? Or will you be able to put a stop to its
                terror once and for all?
                <br /><br />
                Right now, this project is far less an exercise in modding, and presently exists
                as a vessel to carry documentation. I explain it more in detail
                in <a href='https://www.youtube.com/watch?v=KrUXMHaThTM' target='_blank' rel='noreferrer'>
                this video</a>; however, the TL;DR is that as long as there isn&apos;t a way to 
                define most, if not all of the game&apos;s aspects in plain English, there will not
                be any kind of future for it&apos;s modding scene. So my goal is to document as
                much as I can about the game&apos;s assets, directories, & editing programs, such
                as DEdit. It is only after I have done as much of this as possible that I will be
                able to begin modding the game in earnest.
                <br /><br />
                If you want to contribute to this ongoing effort, please feel free to join the
                mod&apos;s <a href='https://discord.gg/7NNeBsE' target='_blank' rel='noreferrer'>
                Discord server</a> & follow the instructions to download & prepare the game for
                modding! I&apos;d greatly appreciate any assistance!
            </p>
            <img src='https://raw.githubusercontent.com/WildChargerTV/wildcharger-xyz/refs/heads/main/src/img/TRON/ICP%20Regular.png' alt='ICP Regular' />
        </div>
        <h3 className='tron-subheader'>TRON 2.0: Startup Sequence</h3>
        <div id='tron-paragraph-3'>
            <p>
                TRON 2.0: Startup Sequence is a simple texture replacement for the opening credits
                I created in 2019. It converts all names to use the Jet Bradley font, and adds
                credits for the <a href='https://www.ldso.net/' target='_blank' rel='noreferrer'>
                LDSO</a> crew. Feel free to download it using the below link; it should play
                nicely with any version of the <a href='https://www.moddb.com/mods/killer-app/downloads/tron-20-killer-app-mod-v11a' target='_blank' rel='noreferrer'>
                Killer App Mod</a>. A video of the mod&apos;s effect can be seen to the right (or
                below if on mobile).
                <br /><br />
                <FileDownloadLink itemKey='tron-20-startup-sequence.zip' linkText='Download' />
            </p>
            <iframe 
                src="https://www.youtube-nocookie.com/embed/OX36CGRPngY?si=8vTTjxn0nezz3eCY" 
                title="YouTube video player" 
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowfullscreen
            />
        </div>
        <img 
            id='tron-footer-meme'
            src='https://raw.githubusercontent.com/WildChargerTV/wildcharger-xyz/refs/heads/main/src/img/TRON/Drive%20C%20Forever.png' 
            alt='Drive C Forever Meme' 
        />
    </>);
}