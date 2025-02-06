// * src/components/Portfolio/Tabs/GOFTab.jsx

// Local Module Imports
import FileDownloadLink from '../../../utils/FileDownloadLink';

export default function GOFTab() {
    return (<>
        <h2 id='galaxy-on-fire-header'>Galaxy on Fire</h2>
        <div id='gof-paragraph-1'>
            <p>
                I could not name one single franchise that has had a bigger impact on my life than
                the Galaxy on Fire series. I wasn&apos;t around for its Java phases, but ever since
                the first time I played the iOS release of Galaxy on Fire 3D on my parents&apos; 
                first-generation iPad, I gained way more interest in space & science fiction as a
                whole.
            </p>
            <img src='https://raw.githubusercontent.com/WildChargerTV/wildcharger-xyz/refs/heads/main/src/img/GalaxyOnFire/Nemesis.png' alt='Nemesis' />
        </div>
        <h3 className='galaxy-on-fire-subheader'>The Galaxy on Fire Wiki & Kaamo Club</h3>
        <div id='gof-paragraph-2'>
            <p>
                My largest contribution to this community would be my time as the administrator of
                the <a href='https://galaxyonfire.wiki.gg/' target='_blank' rel='noreferrer'>Galaxy
                on Fire Wiki</a>. I joined the community in November of 2013 under the
                username of <a href='https://galaxyonfire.wiki.gg/wiki/User:NiveliKing' target='_blank' rel='noreferrer'>
                NiveliKing</a>, and was nominated for the position mere months later in February of
                2014. Since then, I&apos;ve completed major undertakings, including the
                documentation of every planet in the GoF3D galaxy & porting the entirety of the
                Codex from GoF3: Manticore, alongside over 4,500+ other edits.
                <br /><br />
                When we announced the Wiki had entered end-of-support in July of 2020, I, as well
                as what little was left of the Galaxy on Fire community at the time, moved over to
                the <a href='https://kaamo.club/' target='_blank' rel='noreferrer'>Kaamo Club</a>,
                which now serves as a hub for all things Galaxy on Fire outside of the wiki. Since
                then, we&apos;ve grown to become over 3,000 members strong. Please feel free to
                join us by clicking on the bold link above or joining via the widget to the left
                (or below on mobile). We&apos;d love your patronage!
            </p>
            <div id='wiki-logo-discord'>
                <img src='https://raw.githubusercontent.com/WildChargerTV/wildcharger-xyz/refs/heads/main/src/img/GalaxyOnFire/Wiki%20Logo.png' alt='Wiki Logo' />
                <iframe 
                    title='kaamo-club-embed' 
                    src='https://discord.com/widget?id=226528541368385536&theme=dark'  
                    sandbox='allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts'
                />
            </div>
        </div>
        <h3 className='galaxy-on-fire-subheader'>Galaxy on Fire Soundtracks</h3>
        <p id='gof-paragraph-3'>
            A long time ago, the website of FISHLABS (the developers behind Galaxy on Fire) hosted
            direct downloads of album releases for the first two Galaxy on Fire games. I was able
            to snag these files before they were removed from the site, and now host them here on
            my own, with an additional third album featuring loopable versions of the tracks from
            Galaxy on Fire 2! Feel free to use the below links to download them. (Just don&apos;t
            let Mkkt Bkkt know they&apos;re here... got it?)
        </p>
        <div id='gof-album-grid'>
            <div id='gof3d-soundtrack'>
                <img src='https://raw.githubusercontent.com/WildChargerTV/wildcharger-xyz/refs/heads/main/src/img/GalaxyOnFire/GoF3D%20Album%20Cover.png' alt='Galaxy on Fire 3D Soundtrack Album Cover' />
                <FileDownloadLink itemKey='gof3d-official-soundtrack.zip' linkText='Download' />
                <a href='https://www.youtube.com/watch?v=eneWtnXU_Rg' target='_blank'>Video</a>
                <a href='https://www.youtube.com/playlist?list=PLVJSCg8T091cLDPH7o7AHK5HYIvqtc6Qr' target='_blank'>Playlist</a>
            </div>
            <div id='gof2-soundtrack'>
                <img src='https://raw.githubusercontent.com/WildChargerTV/wildcharger-xyz/refs/heads/main/src/img/GalaxyOnFire/GoF2%20Album%20Cover.png' alt='Galaxy on Fire 2 Soundtrack Album Cover' />
                <FileDownloadLink itemKey='gof2-official-soundtrack.zip' linkText='Download' />
                <a href='https://www.youtube.com/watch?v=joiw2CTcZQQ' target='_blank'>Video</a>
                <a href='https://www.youtube.com/playlist?list=PLVJSCg8T091cgzTeEzK6INit2AkDImksP' target='_blank'>Playlist</a>
            </div>
            <div id='gof2-game-audio'>
                <img src='https://raw.githubusercontent.com/WildChargerTV/wildcharger-xyz/refs/heads/main/src/img/GalaxyOnFire/GoF2%20Album%20Cover%202.png' alt='Galaxy on Fire 2 Other Soundtrack Album Cover' />
                <FileDownloadLink itemKey='gof2-game-music.zip' linkText='Download' />
                <a href='https://www.youtube.com/watch?v=pK-CrpAc5Wo' target='_blank'>Video</a>
            </div>
        </div>
    </>);
}