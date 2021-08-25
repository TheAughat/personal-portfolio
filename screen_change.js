if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
}
else {
    ready()
}


function ready() {
    var aboutBtn = document.getElementsByClassName('about-btn')[0]
    aboutBtn.addEventListener('click', aboutClicked)

    var projectsBtn = document.getElementsByClassName('projects-btn')[0]
    projectsBtn.addEventListener('click', projectsClicked)

    var contactBtn = document.getElementsByClassName('contact-btn')[0]
    contactBtn.addEventListener('click', contactClicked)

    var cvBtn = document.getElementsByClassName('cv-btn')[0]
    cvBtn.addEventListener('click', cvClicked)

    var powerBtn = document.getElementsByClassName('power')[0]
    powerBtn.addEventListener('click', powerSwitch)

    var dpBtn = document.getElementsByClassName('dp')[0]
    dpBtn.addEventListener('click', dpClicked)
}


function aboutClicked(event) {
    console.log('about clicked!')
    clearContentPane()
    var newContentPane = `
    <div class='sub-content about-title'>
        <h1>About</h1>
    </div>
    <div class='sub-content about-content'>
        <h3><br>Hello there!<br><br>I'm a Computer Science student who's greatly interested in the future of AI and software and how they 
        continue to develop and evolve with time. <br><br> I'm keen to learn new tools and technologies and explore the 
        tech industry. <br><br> I attend Brunel University in London, and have experience working as a Data Science Intern 
        for LexisNexis (ICIS). <br><br>
        My hobbies are digital illustration and following the latest trends in sci-tech and space.</h3>
    </div>`
    var contentPane = document.getElementsByClassName('content')[0]
    contentPane.innerHTML = newContentPane
    var projectsElement = event.target
    projectsElement.parentElement.parentElement.classList.add('btn-highlighted')
}


var slideshow = `
<div class='carousel'>
    

    <div class='carousel__track-container'>
        <button class='carousel__button carousel__button--left'>&lt;</button>
        <ul class='carousel__track moving'>
            <li class='carousel__slide current-slide'>
                <img class='carousel__image' src='images/1.jpg' alt=''>
            </li>
            <li class='carousel__slide'>
                <img class='carousel__image' src='images/2.jpg' alt=''>
            </li>
            <li class='carousel__slide'>
                <img class='carousel__image' src='images/3.jpg' alt=''>
            </li>
            <li class='carousel__slide'>
                <img class='carousel__image' src='images/4.jpg' alt=''>
            </li>
        </ul>
        <button class='carousel__button carousel__button--right'>&gt;</button>
    </div>

    

    <div class='carousel__nav'>
        <button class='carousel__indicator current-slide'></button>
        <button class='carousel__indicator'></button>
        <button class='carousel__indicator'></button>
        <button class='carousel__indicator'></button>
    </div>
</div>
<a href='#' class='readmore view-project-assembly'>View All</a>`
function projectsClicked(event) {
    console.log('projects clicked!')
    if (document.querySelector('.carousel') == null) {
        clearContentPane()
        var newContentPane = `
        <div class='sub-content projects-title'>
            <h1>Projects</h1>
        </div>
        <div class='sub-content projects-content'>
            ${slideshow}
        </div>`
        var contentPane = document.getElementsByClassName('content')[0]
        contentPane.innerHTML = newContentPane
        // console.log(contentPane.children)
        var projectsElement = event.target
        projectsElement.parentElement.parentElement.classList.add('btn-highlighted')
        // console.log()

        var viewProjectsAssemblyBtn = document.getElementsByClassName('view-project-assembly')[0]
        viewProjectsAssemblyBtn.addEventListener('click', showProjectsAssembly)
        // console.log(document.getElementsByTagName("head")[0].lastChild.classList === undefined);
        if (document.getElementsByTagName("head")[0].lastChild.classList === undefined){
            load_js();
        }
    }

}

function load_js()
{
    // Get the head tag
    var head_ID = document.getElementsByTagName("head")[0]; 
    // Create script element       
    var script_element = document.createElement('script');
    // Set the script type to JavaScript
    script_element.type = 'text/javascript';
    // External JS file
    script_element.src = 'carousel2.js';
    script_element.classList.add('carousel2-class');
    head_ID.appendChild(script_element);
    // console.log(head_ID.lastChild.src)
}

function unload_js()
{
    // Get the head tag
    var head_ID = document.getElementsByTagName("head")[0];
    console.log(head_ID.childNodes)
    head_ID.removeChild(head_ID.lastChild);
    console.log(head_ID.childNodes)
}


var linkedInCard = `
<div class='card'>
    <div class='card-content'>
        <h2>LinkedIn</h2>
        <img src='images/linkedin_logo.png'>
        <a href='https://www.linkedin.com/in/r-c-dan/' target='_blank'>Visit</a>
    </div>
</div>`
var gmailCard = `
<div class='card'>
    <div class='card-content'>
        <h2>Email</h2>
        <img src='images/email_logo.png'>
        <a href='mailto:rcdan22@gmail.com' target='_blank'>Send Email</a>
    </div>
</div>`
var githubCard = `
<div class='card'>
    <div class='card-content'>
        <h2>GitHub</h2>
        <img src='images/github_logo.png'>
        <a href='https://github.com/TheAughat' target='_blank'>Visit</a>
    </div>
</div>`
function contactClicked(event) {
    unload_js();
    console.log('contact clicked!')
    clearContentPane()
    var newContentPane = `
    <div class='sub-content contact-title'>
        <h1>Contact</h1>
    </div>
    <div class='sub-content contact-content'>
        <h3>You can reach me by Email or via LinkedIn or GitHub.</h3>
        <div class='cards'>
            ${linkedInCard}
            ${gmailCard}
            ${githubCard}
        </div>
    </div>`
    var contentPane = document.getElementsByClassName('content')[0]
    contentPane.innerHTML = newContentPane
    var projectsElement = event.target
    projectsElement.parentElement.parentElement.classList.add('btn-highlighted')

    runVanillaTilt()
}


function runVanillaTilt() {
    VanillaTilt.init(document.querySelectorAll(".card"),{
        max: 25,
        speed: 400,
        glare: true,
        "max-glare": 1
    })
}


var cvSection = `
<embed src='Latest CV.pdf' type='application/pdf' class='cv-container'/>
<button class='refs-btn readmore'>References</button>`
function cvClicked(event) {
    console.log('resume clicked!')

    clearContentPane()
    var newContentPane = `
    <div class='sub-content cv-title'>
        <h1>Resume</h1>
    </div>
    <div class='sub-content cv-content'>
        ${cvSection}
    </div>`
    var contentPane = document.getElementsByClassName('content')[0]
    contentPane.innerHTML = newContentPane
    // var projectsElement = event.target
    // projectsElement.parentElement.parentElement.classList.add('btn-highlighted')
    document.getElementsByClassName('cv-btn')[0].parentElement.classList.add('btn-highlighted')

    document.getElementsByClassName('refs-btn')[0].addEventListener('click', refsClicked)
}


var drBtn = `
<button class='maximize-dash-btn' title='Maximize Dashboard'>&gt;&gt;</button>
`
var noMaxiBtn = ``
function dpClicked(event) {
    document.getElementsByClassName('dashboard')[0].classList.remove('dash-change-4')
    document.getElementsByClassName('user')[0].classList.remove('dash-change-3')
    document.getElementsByClassName('links')[0].classList.remove('dash-change-3')

    noMaxiBtn = `\n` + document.getElementsByClassName('dashboard')[0].innerHTML

    document.getElementsByClassName('user')[0].classList.add('dash-change-1')
    document.getElementsByClassName('links')[0].classList.add('dash-change-1')
    console.log('profile picture clicked!')

    document.getElementsByClassName('sub-content')[0].classList.remove('powered-on')
    document.getElementsByClassName('sub-content')[1].classList.remove('powered-on')
    document.getElementsByClassName('dashboard')[0].classList.remove('powered-on')
    // var dashPane = document.getElementsByClassName('user')
    // lenDashPane = dashPane.length
    // for (var i=0; i<lenDashPane; i++) {
    //     console.log(dashPane[0])
    //     dashPane[0].remove()
    // }
    // var dashPane = document.getElementsByClassName('links')
    // lenDashPane = dashPane.length
    // for (var i=0; i<lenDashPane; i++) {
    //     console.log(dashPane[0])
    //     dashPane[0].remove()
    // }
    document.getElementsByClassName('dashboard')[0].classList.remove('dash-change-4')
    document.getElementsByClassName('dashboard')[0].classList.add('dash-change')

    document.getElementsByClassName('dashboard')[0].innerHTML = document.getElementsByClassName('dashboard')[0].innerHTML + drBtn

    var maximizeBtn = document.getElementsByClassName('maximize-dash-btn')[0]
    maximizeBtn.addEventListener('click', maximizeDash)
}


function maximizeDash(event) {
    console.log('This works!')
    document.getElementsByClassName('user')[0].classList.remove('dash-change-1')
    document.getElementsByClassName('links')[0].classList.remove('dash-change-1')
    document.getElementsByClassName('dashboard')[0].classList.remove('dash-change')

    document.getElementsByClassName('dashboard')[0].classList.remove('powered-on')

    document.getElementsByClassName('dashboard')[0].innerHTML = noMaxiBtn

    document.getElementsByClassName('user')[0].classList.add('dash-change-3')
    document.getElementsByClassName('links')[0].classList.add('dash-change-3')
    document.getElementsByClassName('dashboard')[0].classList.add('dash-change-4')

    ready()
}


// var powerMode = true
// function powerSwitch() {
//     if (powerMode) {
//         console.log('power off')
//         recordWhereabouts()
//         console.log(userScript)
//         document.getElementsByClassName('sub-content')[0].remove()
//         document.getElementsByClassName('sub-content')[0].remove()
//         document.getElementsByClassName('user')[0].remove()
//         document.getElementsByClassName('links')[0].remove()
//         document.getElementsByClassName('dashboard')[0].classList.add('zero-width')
//         powerMode = false
//     }
//     else {
//         console.log('power on')
//         // console.log(contentScript2)
//         document.getElementsByClassName('dashboard')[0].classList.remove('zero-width')
//         document.getElementsByClassName('content')[0].innerHTML = contentScript
//         document.getElementsByClassName('dashboard')[0].innerHTML = dashScript
//         ready()
//         runVanillaTilt()
//         // aboutBtn.addEventListener('click', aboutClicked)
//         // projectsBtn.addEventListener('click', projectsClicked)
//         // contactBtn.addEventListener('click', contactClicked)
//         // cvBtn.addEventListener('click', cvClicked)
//         // powerBtn.addEventListener('click', powerSwitch)
//         powerMode = true
//     }
// }

var powerMode = true
function powerSwitch() {
    if (powerMode) {
        console.log('power-off')
        document.getElementsByClassName('sub-content')[0].classList.remove('powered-on')
        document.getElementsByClassName('sub-content')[1].classList.remove('powered-on')
        document.getElementsByClassName('dashboard')[0].classList.remove('powered-on')

        document.getElementsByClassName('sub-content')[0].classList.add('powered-off')
        document.getElementsByClassName('sub-content')[1].classList.add('powered-off')
        document.getElementsByClassName('dashboard')[0].classList.add('powered-off')
        powerMode = false
    }
    else {
        console.log('power on')
        document.getElementsByClassName('sub-content')[0].classList.remove('powered-off')
        document.getElementsByClassName('sub-content')[1].classList.remove('powered-off')
        document.getElementsByClassName('dashboard')[0].classList.remove('powered-off')

        document.getElementsByClassName('sub-content')[0].classList.add('powered-on')
        document.getElementsByClassName('sub-content')[1].classList.add('powered-on')
        document.getElementsByClassName('dashboard')[0].classList.add('powered-on')
        powerMode = true
    }
}


var contentScript = null
var dashScript = null
function recordWhereabouts() {
    contentScript = document.getElementsByClassName('content')[0].innerHTML
    dashScript = document.getElementsByClassName('dashboard')[0].innerHTML
    userScript = document.getElementsByClassName('user')[0].innerHTML
    linksScript = document.getElementsByClassName('links')[0].innerHTML
}


function clearContentPane() {
    if (document.getElementsByTagName("head")[0].lastChild.classList !== undefined){
        unload_js();
    }
    
    document.getElementsByClassName('btn-highlighted')[0].classList.remove('btn-highlighted')
    var contentPane = document.getElementsByClassName('sub-content')
    lenConPane = contentPane.length
    for (var i=0; i<lenConPane; i++) {
        contentPane[0].remove()
    }
}


var projectOneDetails = `
<div class='project-card'>
    <div class='project-card-content'>
        <h2>Project One</h2>
        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h3>
        <a href='#' class='readmore'>Explore</a>
    </div>
    <h1>01</h1>
</div>`

var projectTwoDetails = `
<div class='project-card'>
    <div class='project-card-content'>
        <h2>Project Two</h2>
        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h3>
        <a href='#' class='readmore'>Explore</a>
    </div>
    <h1>02</h1>
</div>`

var projectThreeDetails = `
<div class='project-card'>
    <div class='project-card-content'>
        <h2>Project Three</h2>
        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h3>
        <a href='#' class='readmore'>Explore</a>
    </div>
    <h1>03</h1>
</div>`

var projectFourDetails = `
<div class='project-card'>
    <div class='project-card-content'>
        <h2>Project Four</h2>
        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h3>
        <a href='#' class='readmore'>Explore</a>
    </div>
    <h1>04</h1>
</div>`

var allProjectsAssembly = `
<div class='all-projects-view'>
${projectOneDetails}
${projectTwoDetails}
${projectThreeDetails}
${projectFourDetails}
</div>`


// function showProjectsAssembly(event) {
//     console.log('view all projects clicked!')
//     clearContentPane()
//     var newContentPane = `
//     ${allProjectsAssembly}`
//     console.log(newContentPane)
//     var contentPane = document.getElementsByClassName('content')[0]
//     contentPane.innerHTML = newContentPane
//     document.getElementsByClassName('project-btn').parentElement.classList.add('btn-highlighted')
// }

function showProjectsAssembly(event) {
    console.log('view all projects clicked!')
    clearContentPane()
    var newContentPane = `
    <div class='sub-content projects-title'>
        <h1>Projects</h1>
    </div>
    <div class='sub-content projects-content'>
        ${allProjectsAssembly}
    </div>`
    var contentPane = document.getElementsByClassName('content')[0]
    contentPane.innerHTML = newContentPane
    // console.log(contentPane.children)
    // var projectsElement = event.target
    // projectsElement.parentElement.parentElement.classList.add('btn-highlighted')
    // console.log()
    document.getElementsByClassName('projects-btn')[0].parentElement.classList.add('btn-highlighted')
}


var ref1 = `
<div class='ref-details project-card'>
    <h3>From: Kester Smith</h3>
    <h3>At: ICIS (LexisNexis Risk Solutions Group)</h3>
    <a href='#' class='ref-view readmore'>View</a>
</div>`

var ref2 = `
<div class='ref-details project-card'>
    <h3>From: Mr. Nobody&nbsp; &nbsp; &nbsp; &nbsp; </h3>
    <h3>At: BlankCorp &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </h3>
    <a href='#' class='ref-view readmore'>View</a>
</div>`

var allRefs = `
<div class='all-refs'>
    <a href='#' class='refs-back-btn readmore'>Back</a>
    <div class='all-projects-view'>
    ${ref1}
    ${ref2}
    </div>
</div>
`
var refsSection = `
`
function refsClicked(event) {
    clearContentPane()
    var newContentPane = `
    <div class='sub-content cv-title'>
        <h1>References</h1>
    </div>
    <div class='sub-content cv-content'>
        ${allRefs}
    </div>`
    var contentPane = document.getElementsByClassName('content')[0]
    contentPane.innerHTML = newContentPane
    document.getElementsByClassName('cv-btn')[0].parentElement.classList.add('btn-highlighted')

    document.getElementsByClassName('refs-back-btn')[0].addEventListener('click', cvClicked)

    var refN = 0

    if (refN == 0) {
        refsSection = `
        <embed src='icis_reference.pdf' type='application/pdf' class='cv-container'/>
        <button class='refs-btn readmore'>References</button>`
    }
    document.getElementsByClassName('ref-view')[refN].addEventListener('click', singleRefClicked)
}

function singleRefClicked(event) {
    console.log('resume clicked!')

    clearContentPane()
    var newContentPane = `
    <div class='sub-content cv-title'>
        <h1>References</h1>
    </div>
    <div class='sub-content cv-content'>
        ${refsSection}
    </div>`
    var contentPane = document.getElementsByClassName('content')[0]
    contentPane.innerHTML = newContentPane
    // var projectsElement = event.target
    // projectsElement.parentElement.parentElement.classList.add('btn-highlighted')
    document.getElementsByClassName('cv-btn')[0].parentElement.classList.add('btn-highlighted')

    document.getElementsByClassName('refs-btn')[0].addEventListener('click', refsClicked)
}