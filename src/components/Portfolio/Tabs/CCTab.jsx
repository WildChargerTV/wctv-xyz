// * src/components/Portfolio/Tabs/CCTab.jsx

// Node Module Imports
import useWindowSize from '../../../hooks/windowSize';

export default function CCTab() {
    const { windowX } = useWindowSize();

    return (<>
        <h2 id='cc-header'>Content Creation</h2>
        <p>
            My journey as a content creator spans pretty much my entire life from the beginning of
            high school. For the most part, my efforts were on my YouTube channel; and although 
            there was a point where I was convinced I could turn it into a career, the dawn of the 
            third YouTube Adpocalypse in early 2019 brought me back to reality. Ever since then, 
            the channel simply served as an outlet for my own personal interests - moreso than it
            already was, at least.
            <br /><br />
            My time as WildCharger has taught me a lot about understanding how to manage my online
            presence, as well as what it&apos;s like to be a &quot;public figure&quot;. I now
            consider this brand as a whole to be an ongoing project in and of itself; and as such,
            I have decided to place this tab here in my portfolio, and use it to provide a general
            timeline of my online career as best I can remember it (excluding my time at the
            Galaxy on Fire Wiki). Fair warning: this one&apos;s pretty lengthy!
        </p>
        <h3 className='cc-subheader'>A Little Backstory</h3>
        <p>
            Before I was WildCharger, I went by &quot;piRatemaster&quot;, where the capital R stood
            for &quot;pirate&quot;. Almost all of the material I used in this era has been lost to
            the sands of time - the only surviving remnant lives in a short-lived collaboration
            channel named <a href='https://www.youtube.com/@bananasplitgames258' target='_blank' rel='noreferrer'>
            Banana Split Games</a>. Most of my time under this name was spent being a young teen,
            playing games like Team Fortress 2 & Geometry Dash (you know, the usual). It would only
            be about a year and a half later that WildCharger was born.
            <br /><br />
            Back during my early teens, I watched a lot of <a href='https://www.youtube.com/@SSundee' target='_blank' rel='noreferrer'>
            SSundee</a>. The first series I really remember was his original Pixelmon series in
            2013, from which I continued to watch his stuff up until about the mid-way point of his
            time making videos with Crainer. In mid-2015, <a href='https://www.youtube.com/watch?v=bESnEIQrpns' target='_blank' rel='noreferrer'>
            he co-created a music label</a> named <a href='https://www.youtube.com/c/ninety9lives' target='_blank' rel='noreferrer'>
            Ninety9Lives</a>, whose music I still go back and listen to every so often - even after
            it was largely abandoned.
            <br /><br /> 
            Why does this matter? Well, as the label was preparing to release their third album  
            named <i>Press Start</i>, they released a now-privated vlog/announcement video 
            (<a href='https://www.reddit.com/r/ninety9lives/comments/49toc2/99l_vlogs_archive/' target='_blank' rel='noreferrer'>
            listed here</a>) announcing that they were giving away keys for the closed beta of 
            Paladins, <a href='https://www.youtube.com/watch?v=cWoeMkr8XLM' target='_blank' rel='noreferrer'>
            a game SSundee had played only a couple months prior</a>. I was lucky enough to win one
            of these keys; and, when prompted for a username, I chose WildCharger, assuming that
            having a username using two common words without numbers would somehow become valuable
            despite never having any intention of selling the account later.
            <br /><br />
            Little did I know where that name would take me.
        </p>
        <h3 className='cc-subheader'>The Paladins Era</h3>
        <div id='cc-paragraph-paladins-1'>
            <p>
                When I first tried Paladins in 2016, I did find it fun; however, I wasn&apos;t
                really clicking with the complexities of the card system. A year later, however,
                around the OB48 patch, I tried again - and was instantly hooked. Although I never
                truly figured out what made a fantasy shooter like Paladins so appealing to me - 
                especially given that my tastes in fiction should have driven me far more towards 
                Overwatch - if I had to guess, it probably stemmed from my undying passion for 
                games I consider to be underappreciated, or underdogs.
                <br /><br />
                Regardless, it easily became one of my favorite games of all time (and remains one,
                despite the turn it took after exiting beta). I&apos;d make a few standalone videos
                of my Paladins gameplay, as well as one describing my experience with its mobile
                companion title Paladins Strike. But most of my Paladins videos came about during
                my short-lived time participating in Paladins&apos; competitive Esports scene. 
                Looking back on that, I had never really taken it seriously enough to even stand a
                chance of truly succeeding. But being a part of Team Nectar & Team Resonance was
                some of the most fun I&apos;d ever had, and I wouldn&apos;t trade that time for
                anything. I owe a lot of my ability to even work as a team to my time with them,
                and for that I am forever grateful.

            </p>
            <img 
                src={windowX >= 720
                    ? 'https://raw.githubusercontent.com/WildChargerTV/wildcharger-xyz/refs/heads/main/src/img/Nectar%20%26%20Resonance%20V.png'
                    : 'https://raw.githubusercontent.com/WildChargerTV/wildcharger-xyz/refs/heads/main/src/img/Nectar%20%26%20Resonance%20H.png'}
                alt='Nectar & Resonance Logos' 
            />
        </div>
        <div id='cc-paragraph-paladins-2'>
            <p>
                The decision to drop piRatemaster in favor of the WildCharger name was a no-brainer
                for me. Every single person I&apos;d mentioned the old name to always asked why the
                R was capitalized, after which it didn&apos;t take long for me to realize the whole
                thing just wasn&apos;t going to stick - even if I did get somewhat popular. A year
                later, in April of 2018, I commissioned the fantastic <a href='https://x.com/halel_game' target='_blank' rel='noreferrer'>
                winterout1</a> to create art of my most played character&apos;s skin combination -
                a move made in response to Hi-Rez&apos; announcement regarding the removal of the
                game&apos;s Parts & Pieces skin system in the OB68 patch. Ever since, it has been
                the face of the WildCharger brand - something I don&apos;t intend to change anytime
                soon.
                <br /><br />
                However come mid-2020, it was very obvious that the Paladins I loved was going in a
                different direction than what I had enjoyed in the past. Its originally very bright
                and cartoonish style had gradually become more realistic, dark, & grim, both in its
                presentation and its lore - something I just didn&apos;t vibe with very well. That,
                and opportunities for playing the game at the professional level were disappearing. 
                By the time 2021 rolled around, and the announcement was made that <a href='https://x.com/PaladinsPro/status/1351227958640472069' target='_blank' rel='noreferrer'>
                Paladins Esports would be discontinued</a>, I had completely checked out, moving on 
                to play other games & seek out other occupations.
            </p>
            <img src='https://raw.githubusercontent.com/WildChargerTV/wildcharger-xyz/refs/heads/main/src/img/Old%20to%20New.png' alt='Old to New WildCharger' />
        </div>
        <h3 className='cc-subheader'>The 2019-2021 &quot;Variety Content&quot; Era</h3>
        <p>
            For a couple years after ending Paladins content uploads, the channel was kind of in a
            limbo. Uploads pretty much consisted of whatever I felt like posting at the time; stuff
            like a couple modifications to Daft Punk&apos;s &quot;Around the World&quot;, some TRON
            2.0 content from my first attempt at Security Protocol, and a couple of clips from the
            YouTuber CallMeCarson. Oh, and <a href='https://www.youtube.com/watch?v=msNi4PV2l_M' target='_blank' rel='noreferrer'>
            quagsire chant</a>.
            <br /><br />
            Most of this content is still public, and I don&apos;t intend to get rid of it yet, but
            I&apos;d be lying if I said this content was anywhere near my current-day standards for
            quality. However, this would end up being mostly sidelined once I decided to try making
            videos on a silly little mobile game I started playing during the 2020 holiday season.
        </p>
        <h3 className='cc-subheader'>The Pokémon Masters Era</h3>
        <div id='cc-paragraph-masters-1'>
            <p>
                When I first downloaded Pokémon Masters EX in December of 2020, I had become rather
                burnt out from playing Pokémon GO, and was just trying to find a game consisting of
                dear god anything that wasn&apos;t Pokémon UNITE. Masters&apos; gameplay took a bit
                of time to get used to; but the game quickly became a mainstay, solely based on the 
                idea that Trainers from various regions could talk to & battle amongst each other - 
                a concept that, overall, is still largely unseen in the Pokémon franchise. The fact 
                that they also got to wear cool outfits was a neat bonus, too!
                <br /><br />
                At first, I uploaded Masters content straight from my phone, without any real edits
                beyond trimming out the end segments showing the &quot;stop recording&quot; button.
                However, as I became more involved with the community, I decided to create a layout
                that would be usable for both videos & live streams. In doing so, I learned quite a
                lot about OBS, despite having used it to stream Paladins for many years prior. 
            </p>
            <img src='https://raw.githubusercontent.com/WildChargerTV/wildcharger-xyz/refs/heads/main/src/img/PM%20Character%20Montage.png' alt='PM Character Montage' />
        </div>
        <div id='cc-paragraph-masters-2'>
            <p>
                Ultimately, however, the prime of my Pokémon Masters era stemmed from the fact that
                other events in my life demanded a lot of my time. Because Masters videos were easy
                to &quot;mass-produce&quot;, it ended up just being an easy out to keep the channel
                alive whilst I tended to other things. It wouldn&apos;t hold up, though; the cracks
                in the foundation were apparent, but there were three main reasons why I decided to
                move on from the game.
                <ol>
                    <li>
                        Power creep was starting to drive the game away from the battling mechanics
                        of the core series - a trend which continues to this day.
                    </li>
                    <li>
                        The difficulty ceiling was starting to get a bit too high. Even though this
                        may sound funny for a gacha game, I had began to notice months earlier that
                        other players were pulling off battle strategies that would have demanded
                        hours of my time.
                    </li>
                    <li>
                        As I started getting more into the environment of game development, I found
                        that I was wanting to actually build a gacha system of my own: one which
                        would focus on players over profit. Although this has yet to materialize, I
                        have had some ideas rolling around that I definitely intend to work with at
                        a later time.
                    </li>
                </ol>
                At the end of the day, Masters was never going to hold up; however, I still revisit
                the game from time to time, if I feel like it. But especially as my web development
                course started to pick up in complexity, leaving it behind was likely for the best.
                (But hey, <a href='https://www.youtube.com/playlist?list=PLnPMjDuz3DzwFtR4jzhIrTBuVHs9DxVDg' target='_blank' rel='noreferrer'>
                at least I&apos;ll have it&apos;s music</a>.)
            </p>
        </div>
        <h3 className='cc-subheader'>Where I Am Today</h3>
        <p>
            As of now, my content creation career is on a bit of a &quot;leave of absence&quot;, so
            to speak. Although I have uploaded some stuff since, such as the <a href='https://www.youtube.com/playlist?list=PLVJSCg8T091e0BNvVSZikF8nzWoeYDxyy' target='_blank' rel='noreferrer'>
            TRON 2.0 Soundtrack</a> (download coming soon), other things in my life currently take
            a higher priority. Anything I do will likely be on <a href='https://twitch.tv/wildchargertv' target='_blank' rel='noreferrer'>
            my Twitch channel</a>, as it is more easily accessible; though I do intend preparing to
            start multistreaming to YouTube as well whenever I get the time.
            <br /><br />
            Thank you for reading this big ol&apos; text wall! As usual, you can expect this to be
            updated as my journey continues, but if you&apos;re interested in what I do, feel free
            to keep an eye on my socials for any announcements regarding existing/upcoming projects
            that may not be on this site yet.
        </p>
    </>);
}