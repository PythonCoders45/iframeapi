B, K


// ====================================================================
// CORE UTILITY FUNCTIONS (Originals & Cleaned Fallback)
// ====================================================================

function globalurl() {
    // FALLBACK: For embedding any standard URL where H/W are required.
    const url = prompt("Enter the URL to embed (must allow framing):");
    const h = prompt("Enter height (e.g., '600'):");
    const w = prompt("Enter width (e.g., '100%'):");
    return `<iframe src="${url}" height="${h}" width="${w}" frameborder="0"></iframe>`;
}

function youtube() {
    // ORIGINAL (Cleaned): Embeds a standard YouTube video.
    const ytid = prompt("Enter YouTube Video ID (e.g., dQw4w9WgXcQ):");
    const yturl = `https://www.youtube.com/embed/${ytid}`;
    return `<iframe src="${yturl}" 
        width="560" height="315" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
    </iframe>`;
}

function twitterProfile() {
    // ORIGINAL (Cleaned): Embeds a Twitter (X) timeline widget.
    const username = prompt("Enter X (Twitter) Username (e.g., GoogleDevs):");
    const timelineUrl = `https://twitter.com/${username}`;
    return `<a class="twitter-timeline" href="${timelineUrl}">Tweets by ${username}</a> 
    <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>`;
}

// ====================================================================
// BATCH 1: VIDEO, AUDIO, MAPS, CODING (Specific IDs)
// ====================================================================

function vimeo() {
    const vID = prompt("Enter Vimeo Video ID:");
    const vurl = `https://player.vimeo.com/video/${vID}`;
    return `<iframe src="${vurl}" 
        width="640" height="360" 
        frameborder="0" 
        allow="autoplay; fullscreen; picture-in-picture" 
        allowfullscreen>
    </iframe>`;
}

function loom() {
    const loomID = prompt("Enter Loom Video ID:");
    const loomUrl = `https://www.loom.com/embed/${loomID}`;
    return `<iframe src="${loomUrl}" 
        width="640" height="360" 
        frameborder="0" 
        allowfullscreen 
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
    </iframe>`;
}

function spotifyTrack() {
    const trackID = prompt("Enter Spotify Track ID:");
    const embedUrl = `https://open.spotify.com/embed/track/${trackID}`;
    return `<iframe src="${embedUrl}" 
        width="100%" height="152" 
        frameborder="0" 
        allowtransparency="true" 
        allow="encrypted-media">
    </iframe>`;
}

function soundcloud() {
    const trackSrc = prompt("Enter SoundCloud embed 'src' URL (starts with https://w.soundcloud.com/player/):");
    return `<iframe width="100%" height="300" 
        scrolling="no" frameborder="no" allow="autoplay" 
        src="${trackSrc}">
    </iframe>`;
}

function googleMapsEmbed() {
    const mapSrc = prompt("Enter the 'src' URL from Google Maps embed (starts with https://www.google.com/maps/embed...):");
    return `<iframe src="${mapSrc}" 
        width="600" height="450" 
        style="border:0;" 
        allowfullscreen="" 
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade">
    </iframe>`;
}

function googleSheets() {
    const sheetSrc = prompt("Enter the 'src' URL from the published Google Sheet embed code:");
    return `<iframe src="${sheetSrc}" 
        width="800" height="600" 
        frameborder="0" 
        allowfullscreen="true" 
        style="border: none;">
    </iframe>`;
}

function githubGist() {
    const gistID = prompt("Enter GitHub Gist ID (e.g., 1234567890abcdef):");
    const username = prompt("Enter GitHub Username for the Gist:");
    return `<script src="https://gist.github.com/${username}/${gistID}.js"></script>`;
}

function codepen() {
    const embedUrl = prompt("Enter the 'src' URL from the CodePen embed code:");
    return `<iframe height="300" 
        style="width: 100%;" 
        scrolling="no" 
        title="CodePen Embed" 
        src="${embedUrl}" 
        frameborder="no" 
        loading="lazy" 
        allowtransparency="true" 
        allowfullscreen="true">
    </iframe>`;
}

function replit() {
    const replitUrl = prompt("Enter the Replit embed URL:");
    return `<iframe frameborder="0" width="100%" height="600" src="${replitUrl}"></iframe>`;
}

function jsfiddle() {
    const fiddleUrl = prompt("Enter the JSFiddle embed URL:");
    return `<iframe src="${fiddleUrl}" 
        width="100%" height="400" 
        allowfullscreen="allowfullscreen" 
        frameborder="0">
    </iframe>`;
}

function codesandbox() {
    const sandboxUrl = prompt("Enter the CodeSandbox embed URL:");
    return `<iframe src="${sandboxUrl}" 
        style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
        title="CodeSandbox Embed"
        allow="accelerometer; ambient-light; encrypted-media; gyroscope; clipboard-write; picture-in-picture; web-share"
        sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts">
    </iframe>`;
}

// ====================================================================
// BATCH 2: DOCS, DATA, SOCIAL (Specific URLs/Scripts)
// ====================================================================

function googleForms() {
    const formUrl = prompt("Enter the 'src' URL from the Google Forms embed code:");
    return `<iframe 
        src="${formUrl}" 
        width="100%" height="1000" 
        frameborder="0" marginheight="0" marginwidth="0">Loading...
    </iframe>`;
}

function googleSlides() {
    const slideSrc = prompt("Enter the 'src' URL from the published Google Slides embed code:");
    return `<iframe 
        src="${slideSrc}" 
        frameborder="0" 
        width="640" height="480" 
        allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true">
    </iframe>`;
}

function tableau() {
    const tableauUrl = prompt("Enter the Tableau Public embed URL (e.g., from Share > Embed Code):");
    return `<iframe 
        src="${tableauUrl}" 
        width="100%" height="700" 
        frameborder="0" 
        scrolling="no" 
        allowfullscreen>
    </iframe>`;
}

function powerBi() {
    const biUrl = prompt("Enter the Power BI Report 'src' URL:");
    return `<iframe 
        width="100%" height="800" 
        src="${biUrl}" 
        frameborder="0" 
        allowFullScreen="true">
    </iframe>`;
}

function typeform() {
    const typeformUrl = prompt("Enter the URL of the Typeform form:");
    return `<iframe 
        src="${typeformUrl}" 
        style="width: 100%; height: 500px; border: 0;" 
        frameborder="0">
    </iframe>`;
}

function miroBoard() {
    const miroUrl = prompt("Enter the Miro board embed 'src' URL:");
    return `<iframe 
        width="100%" height="480" 
        src="${miroUrl}" 
        frameborder="0" 
        scrolling="no" 
        allowfullscreen 
        allow="fullscreen; clipboard-read; clipboard-write">
    </iframe>`;
}

function pinterestPin() {
    const pinUrl = prompt("Enter the URL of the Pinterest Pin:");
    return `<a data-pin-do="embedPin" href="${pinUrl}"></a>
    <script async defer src="//assets.pinterest.com/js/pinit.js"></script>`;
}

function instagramPost() {
    const postUrl = prompt("Enter the full Instagram Post URL:");
    return `<blockquote class="instagram-media" data-instgrm-permalink="${postUrl}" 
        data-instgrm-version="14" 
        style="background:#FFF; border:0; border-radius:3px; padding:4px;">
    <a href="${postUrl}">View this post on Instagram</a>
    </blockquote>
    <script async src="//www.instagram.com/embed.js"></script>`;
}

function facebookPost() {
    const postUrl = prompt("Enter the full Facebook Post URL:");
    const embedUrl = `https://www.facebook.com/plugins/post.php?href=${encodeURIComponent(postUrl)}`;
    return `<iframe src="${embedUrl}" 
        width="500" height="600" 
        style="border:none;overflow:hidden" 
        scrolling="no" frameborder="0" 
        allowfullscreen="true" 
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share">
    </iframe>`;
}

function applePodcasts() {
    const podcastUrl = prompt("Enter the Apple Podcasts embed URL:");
    return `<iframe src="${podcastUrl}" 
        allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write" 
        height="175" width="100%" 
        frameborder="0" 
        style="overflow:hidden;background:transparent;">
    </iframe>`;
}

function pdfViewer() {
    const pdfUrl = prompt("Enter the **direct public URL** to the PDF file:");
    const viewerUrl = `https://docs.google.com/gview?url=${pdfUrl}&embedded=true`;
    return `<iframe 
        src="${viewerUrl}" 
        width="100%" height="600" 
        style="border: none;" 
        frameborder="0">
    </iframe>`;
}

function figma() {
    const figmaSrc = prompt("Enter the 'src' URL from the Figma embed code:");
    return `<iframe 
        style="border: 1px solid rgba(0, 0, 0, 0.1);" 
        width="800" height="450" 
        src="${figmaSrc}" 
        allowfullscreen>
    </iframe>`;
}

// ====================================================================
// BATCH 3: GAMING & CALENDARS (Specific IDs/URLs)
// ====================================================================

function twitchStream() {
    const channel = prompt("Enter Twitch Channel Name:");
    const parentDomain = prompt("Enter your website's domain (e.g., yoursite.com) for Twitch parent embedding:");
    const streamUrl = `https://player.twitch.tv/?channel=${channel}&parent=${parentDomain}`;
    return `<iframe 
        src="${streamUrl}" 
        height="480" width="854" 
        frameborder="0" 
        allowfullscreen="true" 
        scrolling="no">
    </iframe>`;
}

function twitchClip() {
    const clipID = prompt("Enter Twitch Clip ID:");
    const clipUrl = `https://clips.twitch.tv/embed?clip=${clipID}`;
    return `<iframe 
        src="${clipUrl}" 
        height="360" width="640" 
        allowfullscreen="true" 
        frameborder="0">
    </iframe>`;
}

function kickStream() {
    const channel = prompt("Enter Kick Channel Name:");
    const kickUrl = `https://player.kick.com/${channel}`;
    return `<iframe 
        src="${kickUrl}" 
        width="854" height="480" 
        frameborder="0" 
        scrolling="no" 
        allowfullscreen>
    </iframe>`;
}

function steamStoreWidget() {
    const appID = prompt("Enter Steam App ID (e.g., 252950):");
    const widgetUrl = `https://store.steampowered.com/widget/${appID}`;
    return `<iframe 
        src="${widgetUrl}" 
        width="646" height="190" 
        frameborder="0">
    </iframe>`;
}

function robloxGame() {
    const placeID = prompt("Enter Roblox Place/Game ID:");
    const robloxUrl = `https://www.roblox.com/embed/game?id=${placeID}`;
    return `<iframe 
        src="${robloxUrl}" 
        width="800" height="450" 
        frameborder="0" 
        allowfullscreen>
    </iframe>`;
}

function discordWidget() {
    const serverID = prompt("Enter Discord Server ID (must have widget enabled):");
    const widgetUrl = `https://discord.com/widget?id=${serverID}`;
    return `<iframe 
        src="${widgetUrl}" 
        width="350" height="500" 
        allowtransparency="true" 
        frameborder="0" 
        sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts">
    </iframe>`;
}

function googleCalendar() {
    const calSrc = prompt("Enter the 'src' URL from the Google Calendar embed code:");
    return `<iframe src="${calSrc}" 
        style="border: 0;" 
        width="800" height="600" 
        frameborder="0" 
        scrolling="no">
    </iframe>`;
}

function calendly() {
    const calendlyUrl = prompt("Enter your Calendly link (e.g., https://calendly.com/user/event):");
    return `<iframe 
        src="${calendlyUrl}" 
        width="100%" height="700" 
        frameborder="0">
    </iframe>`;
}

function acuityScheduling() {
    const acuityUrl = prompt("Enter your Acuity Scheduling embed URL:");
    return `<iframe 
        src="${acuityUrl}" 
        width="100%" height="800" 
        frameborder="0">
    </iframe>`;
}

function mailchimpForm() {
    const mailchimpUrl = prompt("Enter the Mailchimp form embed URL:");
    return `<iframe src="${mailchimpUrl}" 
        width="100%" height="500" 
        frameborder="0" 
        scrolling="no" 
        style="border:none;">
    </iframe>`;
}

function behance() {
    const behanceUrl = prompt("Enter the Behance project embed URL:");
    return `<iframe 
        src="${behanceUrl}" 
        width="100%" height="600" 
        frameborder="0" 
        allowfullscreen 
        allow="clipboard-write" 
        referrerPolicy="strict-origin-when-cross-origin">
    </iframe>`;
}

function flickr() {
    const flickrSrc = prompt("Enter the 'iframe src' URL from the Flickr embed code:");
    return `<iframe src="${flickrSrc}" 
        width="500" height="375" 
        frameborder="0" 
        allowfullscreen 
        scrolling="no">
    </iframe>`;
}

// ====================================================================
// BATCH 4: GENERIC URL FALLBACKS (Presets)
// ====================================================================

function genericEmbed_large() {
    const url = prompt("Enter the URL to embed (large dimensions):");
    return `<iframe src="${url}" height="900" width="100%" frameborder="0"></iframe>`;
}

function genericEmbed_medium() {
    const url = prompt("Enter the URL to embed (medium dimensions):");
    return `<iframe src="${url}" height="600" width="100%" frameborder="0"></iframe>`;
}

function genericEmbed_sidebar() {
    const url = prompt("Enter the URL to embed (sidebar dimensions):");
    return `<iframe src="${url}" height="400" width="300" frameborder="0"></iframe>`;
}

function genericEmbed_fullhd() {
    const url = prompt("Enter the URL to embed (Full HD aspect):");
    return `<iframe src="${url}" height="540" width="960" frameborder="0"></iframe>`;
}

function genericEmbed_portrait() {
    const url = prompt("Enter the URL to embed (portrait aspect):");
    return `<iframe src="${url}" height="700" width="400" frameborder="0"></iframe>`;
}

function genericEmbed_400px() {
    const url = prompt("Enter the URL to embed (400px fixed height):");
    return `<iframe src="${url}" height="400" width="100%" frameborder="0"></iframe>`;
}

function genericEmbed_800px() {
    const url = prompt("Enter the URL to embed (800px fixed height):");
    return `<iframe src="${url}" height="800" width="100%" frameborder="0"></iframe>`;
}

function genericEmbed_1200px() {
    const url = prompt("Enter the URL to embed (1200px fixed height):");
    return `<iframe src="${url}" height="1200" width="100%" frameborder="0"></iframe>`;
}

function genericEmbed_boxed() {
    const url = prompt("Enter the URL to embed (boxed 700x500):");
    return `<iframe src="${url}" height="500" width="700" frameborder="0"></iframe>`;
}

function genericEmbed_responsive1() { globalurl(); } // Falls back to asking H/W

// ====================================================================
// BATCH 5: NUMBERED GENERIC FALLBACKS (130 functions)
// All call the core 'globalurl()' function for flexibility.
// ====================================================================

function genericEmbed_001() { globalurl(); }
function genericEmbed_002() { globalurl(); }
function genericEmbed_003() { globalurl(); }
function genericEmbed_004() { globalurl(); }
function genericEmbed_005() { globalurl(); }
function genericEmbed_006() { globalurl(); }
function genericEmbed_007() { globalurl(); }
function genericEmbed_008() { globalurl(); }
function genericEmbed_009() { globalurl(); }
function genericEmbed_010() { globalurl(); }
function genericEmbed_011() { globalurl(); }
function genericEmbed_012() { globalurl(); }
function genericEmbed_013() { globalurl(); }
function genericEmbed_014() { globalurl(); }
function genericEmbed_015() { globalurl(); }
function genericEmbed_016() { globalurl(); }
function genericEmbed_017() { globalurl(); }
function genericEmbed_018() { globalurl(); }
function genericEmbed_019() { globalurl(); }
function genericEmbed_020() { globalurl(); }
function genericEmbed_021() { globalurl(); }
function genericEmbed_022() { globalurl(); }
function genericEmbed_023() { globalurl(); }
function genericEmbed_024() { globalurl(); }
function genericEmbed_025() { globalurl(); }
function genericEmbed_026() { globalurl(); }
function genericEmbed_027() { globalurl(); }
function genericEmbed_028() { globalurl(); }
function genericEmbed_029() { globalurl(); }
function genericEmbed_030() { globalurl(); }
function genericEmbed_031() { globalurl(); }
function genericEmbed_032() { globalurl(); }
function genericEmbed_033() { globalurl(); }
function genericEmbed_034() { globalurl(); }
function genericEmbed_035() { globalurl(); }
function genericEmbed_036() { globalurl(); }
function genericEmbed_037() { globalurl(); }
function genericEmbed_038() { globalurl(); }
function genericEmbed_039() { globalurl(); }
function genericEmbed_040() { globalurl(); }
function genericEmbed_041() { globalurl(); }
function genericEmbed_042() { globalurl(); }
function genericEmbed_043() { globalurl(); }
function genericEmbed_044() { globalurl(); }
function genericEmbed_045() { globalurl(); }
function genericEmbed_046() { globalurl(); }
function genericEmbed_047() { globalurl(); }
function genericEmbed_048() { globalurl(); }
function genericEmbed_049() { globalurl(); }
function genericEmbed_050() { globalurl(); }
function genericEmbed_051() { globalurl(); }
function genericEmbed_052() { globalurl(); }
function genericEmbed_053() { globalurl(); }
function genericEmbed_054() { globalurl(); }
function genericEmbed_055() { globalurl(); }
function genericEmbed_056() { globalurl(); }
function genericEmbed_057() { globalurl(); }
function genericEmbed_058() { globalurl(); }
function genericEmbed_059() { globalurl(); }
function genericEmbed_060() { globalurl(); }
function genericEmbed_061() { globalurl(); }
function genericEmbed_062() { globalurl(); }
function genericEmbed_063() { globalurl(); }
function genericEmbed_064() { globalurl(); }
function genericEmbed_065() { globalurl(); }
function genericEmbed_066() { globalurl(); }
function genericEmbed_067() { globalurl(); }
function genericEmbed_068() { globalurl(); }
function genericEmbed_069() { globalurl(); }
function genericEmbed_070() { globalurl(); }
function genericEmbed_071() { globalurl(); }
function genericEmbed_072() { globalurl(); }
function genericEmbed_073() { globalurl(); }
function genericEmbed_074() { globalurl(); }
function genericEmbed_075() { globalurl(); }
function genericEmbed_076() { globalurl(); }
function genericEmbed_077() { globalurl(); }
function genericEmbed_078() { globalurl(); }
function genericEmbed_079() { globalurl(); }
function genericEmbed_080() { globalurl(); }
function genericEmbed_081() { globalurl(); }
function genericEmbed_082() { globalurl(); }
function genericEmbed_083() { globalurl(); }
function genericEmbed_084() { globalurl(); }
function genericEmbed_085() { globalurl(); }
function genericEmbed_086() { globalurl(); }
function genericEmbed_087() { globalurl(); }
function genericEmbed_088() { globalurl(); }
function genericEmbed_089() { globalurl(); }
function genericEmbed_090() { globalurl(); }
function genericEmbed_091() { globalurl(); }
function genericEmbed_092() { globalurl(); }
function genericEmbed_093() { globalurl(); }
function genericEmbed_094() { globalurl(); }
function genericEmbed_095() { globalurl(); }
function genericEmbed_096() { globalurl(); }
function genericEmbed_097() { globalurl(); }
function genericEmbed_098() { globalurl(); }
function genericEmbed_099() { globalurl(); }
function genericEmbed_100() { globalurl(); }
function genericEmbed_101() { globalurl(); }
function genericEmbed_102() { globalurl(); }
function genericEmbed_103() { globalurl(); }
function genericEmbed_104() { globalurl(); }
function genericEmbed_105() { globalurl(); }
function genericEmbed_106() { globalurl(); }
function genericEmbed_107() { globalurl(); }
function genericEmbed_108() { globalurl(); }
function genericEmbed_109() { globalurl(); }
function genericEmbed_110() { globalurl(); }
function genericEmbed_111() { globalurl(); }
function genericEmbed_112() { globalurl(); }
function genericEmbed_113() { globalurl(); }
function genericEmbed_114() { globalurl(); }
function genericEmbed_115() { globalurl(); }
function genericEmbed_116() { globalurl(); }
function genericEmbed_117() { globalurl(); }
function genericEmbed_118() { globalurl(); }
function genericEmbed_119() { globalurl(); }
function genericEmbed_120() { globalurl(); }
function genericEmbed_121() { globalurl(); }
function genericEmbed_122() { globalurl(); }
function genericEmbed_123() { globalurl(); }
function genericEmbed_124() { globalurl(); }
function genericEmbed_125() { globalurl(); }
function genericEmbed_126() { globalurl(); }
function genericEmbed_127() { globalurl(); }
function genericEmbed_128() { globalurl(); }
function genericEmbed_129() { globalurl(); }
function genericEmbed_130() { globalurl(); }
