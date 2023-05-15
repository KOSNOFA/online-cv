const launchProject = document.querySelector('.launch-project');
const launchEducation = document.querySelector('.launch-education');
const launchContact = document.querySelector('.launch-contact');


const backProject = document.querySelector('.back-project');
const backEducation = document.querySelector('.back-education');
const backContact = document.querySelector('.back-contact');

const textProject = document.querySelector('.text-project');
const textEducation = document.querySelector('.text-education');
const textContact = document.querySelector('.text-contact');
const textWelcome = document.querySelector('.text-welcome');

const canvas = document.querySelector('.canvas');
const sectionProject = document.querySelector('.section-project');
const sectionEducation = document.querySelector('.section-education');
const sectionContact = document.querySelector('.section-contact');

const hitboxProject = document.querySelector('.hitbox-project');
const hitboxEducation = document.querySelector('.hitbox-education');
const hitboxContact = document.querySelector('.hitbox-contact');

const textMadeby = document.querySelector('.madeby');

const hitboxC = document.querySelector('.hitbox-project-c');
const hitboxCSharp = document.querySelector('.hitbox-project-c-sharp');
const hitboxJava = document.querySelector('.hitbox-project-java');
const hitboxHtml = document.querySelector('.hitbox-project-html');
const hitboxBlender = document.querySelector('.hitbox-project-blender');

const textProjectC = document.querySelector('.text-project-c');
const textProjectCSharp = document.querySelector('.text-project-c-sharp');
const textProjectJava = document.querySelector('.text-project-java');
const textProjectHtml = document.querySelector('.text-project-html');
const textProjectBlender = document.querySelector('.text-project-blender');

const hitboxTwitter = document.querySelector('.hitbox-contact-twitter');
const hitboxGithub = document.querySelector('.hitbox-contact-github');
const hitboxLinkedin = document.querySelector('.hitbox-contact-linkedin');

const hitboxSfsu = document.querySelector('.hitbox-education-sfsu');
const hitboxEpita = document.querySelector('.hitbox-education-epita');

var element;
function ShowfadeAnimation(element) {
    gsap.fromTo(element, { opacity: 0 }, { opacity: 1, duration: 1, delay: 1.5 });
}

function HidefadeAnimation(element) {
    gsap.fromTo(element, { opacity: 1 }, { opacity: 0, duration: 0.5, delay: 0 });
}


function hideWhenVisible(element) {
    var elementOpacity = window.getComputedStyle(element).getPropertyValue("opacity");
    if (elementOpacity != "0") {
        HidefadeAnimation(element);
    }
}


const frameCount = 60;

function hideLaunch() {
    launchProject.classList.remove('is-active');
    launchEducation.classList.remove('is-active');
    launchContact.classList.remove('is-active');
}

function showLaunch() {
    launchProject.classList.add('is-active');
    launchEducation.classList.add('is-active');
    launchContact.classList.add('is-active');
}

function hideBack() {
    backProject.classList.remove('is-active');
    backEducation.classList.remove('is-active');
    backContact.classList.remove('is-active');
}


const getZeroes = (index) => {
    if (index < 10) {
        return "000";
    } else if (index < 100) {
        return "00";
    } else {
        return "0";
    }
};

let frame = 0;
var t;

function displayForwardProject() {
    clearTimeout(t);
    requestAnimationFrame(() => {
        t = setTimeout(() => {
            displayForwardProject();
        }, 1000 / 60);
    });
    const render = document.querySelector('.render');
    render.src = `render/render-canvas-project2/${getZeroes(frame)}${(frame).toString()}.jpg`;
    if (frame < frameCount) {
        frame++;
    } else {
        hitboxProject.classList.add('is-active');
        backProject.classList.add('is-active');
        return;
    }
}

function displayBackwardProject() {
    clearTimeout(t);
    requestAnimationFrame(() => {
        t = setTimeout(() => {
            displayBackwardProject();
        }, 1000 / 60);
    });
    const render = document.querySelector('.render');
    render.src = `render/render-canvas-project2/${getZeroes(frame)}${(frame).toString()}.jpg`;
    if (frame > 1) {
        frame--;
    } else {
        showLaunch();
        return;
    }
}



function launchAnimationProject() {
    frame = 1;
    hideLaunch();
    ShowfadeAnimation(textProject);
    HidefadeAnimation(textMadeby);
    hideWhenVisible(textWelcome);
    requestAnimationFrame(displayForwardProject);
}

function cancelAnimationProject() {
    frame = frameCount - 1;
    hideBack();
    HidefadeAnimation(textProject);
    ShowfadeAnimation(textMadeby);
    hitboxProject.classList.remove('is-active');
    requestAnimationFrame(displayBackwardProject);
}





function displayForwardEducation() {
    clearTimeout(t);
    requestAnimationFrame(() => {
        t = setTimeout(() => {
            displayForwardEducation();
        }, 1000 / 60);
    });
    const render = document.querySelector('.render');
    render.src = `render/render-canvas-education2/${getZeroes(frame)}${(frame).toString()}.jpg`;
    if (frame < frameCount) {
        frame++;
    } else {
        hitboxEducation.classList.add('is-active');
        backEducation.classList.add('is-active');
        return;
    }
}

function displayBackwardEducation() {
    clearTimeout(t);
    requestAnimationFrame(() => {
        t = setTimeout(() => {
            displayBackwardEducation();
        }, 1000 / 60);
    });
    const render = document.querySelector('.render');
    render.src = `render/render-canvas-education2/${getZeroes(frame)}${(frame).toString()}.jpg`;
    if (frame > 1) {
        frame--;
    } else {
        showLaunch();
        return;
    }
}


function launchAnimationEducation() {
    frame = 1;
    hideLaunch();
    ShowfadeAnimation(textEducation);
    hideWhenVisible(textWelcome);
    HidefadeAnimation(textMadeby);
    requestAnimationFrame(displayForwardEducation);
}

function cancelAnimationEducation() {
    frame = frameCount - 1;
    hideBack();
    HidefadeAnimation(textEducation);
    ShowfadeAnimation(textMadeby);
    hitboxEducation.classList.remove('is-active');
    requestAnimationFrame(displayBackwardEducation);
}







function displayForwardContact() {
    clearTimeout(t);
    requestAnimationFrame(() => {
        t = setTimeout(() => {
            displayForwardContact();
        }, 1000 / 60);
    });
    const render = document.querySelector('.render');
    render.src = `render/render-canvas-contact2/${getZeroes(frame)}${(frame).toString()}.jpg`;
    if (frame < frameCount) {
        frame++;
    } else {
        hitboxContact.classList.add('is-active');
        backContact.classList.add('is-active');
        return;
    }
}

function displayBackwardContact() {
    clearTimeout(t);
    requestAnimationFrame(() => {
        t = setTimeout(() => {
            displayBackwardContact();
        }, 1000 / 60);
    });
    const render = document.querySelector('.render');
    render.src = `render/render-canvas-contact2/${getZeroes(frame)}${(frame).toString()}.jpg`;
    if (frame > 1) {
        frame--;
    } else {
        showLaunch();
        return;
    }
}


function launchAnimationContact() {
    frame = 1;
    hideLaunch();
    ShowfadeAnimation(textContact);
    hideWhenVisible(textWelcome);
    HidefadeAnimation(textMadeby);
    requestAnimationFrame(displayForwardContact);
}

function cancelAnimationContact() {
    frame = frameCount - 1;
    hideBack();
    HidefadeAnimation(textContact);
    hitboxContact.classList.remove('is-active');
    ShowfadeAnimation(textMadeby);
    requestAnimationFrame(displayBackwardContact);
}


window.onscroll = function () {
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

    window.scrollTo(scrollLeft, scrollTop);
};


function smoothScroll(target, duration) {
    var targetPosition = target.getBoundingClientRect().top + 2;
    var startPosition = window.pageYOffset;
    var distance = targetPosition - startPosition;
    var startTime = null;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        var timeElapsed = currentTime - startTime;
        var run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
}

var onview = canvas;

function scrolltoProject() {
    onview = sectionProject;
    smoothScroll(sectionProject, 1000);
}

function scrolltoEducation() {
    onview = sectionEducation;
    smoothScroll(sectionEducation, 1000);
}

function scrolltoContact() {
    onview = sectionContact;
    smoothScroll(sectionContact, 1000);
}

function scrolltoCanvas() {
    onview = canvas;
    smoothScroll(canvas, 2000);
}


window.addEventListener('resize', function (event) {
    onview.scrollIntoView();
}, true);


let frameProjectC = 1;
let frameProjectCSharp = 1;
let frameProjectJava = 1;
let frameProjectHtml = 1;
let frameProjectBlender = 1;


function IsNotMovingProject(hbproject) {
    if (hbproject == hitboxC) {
        return (frameProjectCSharp == 1 &&
            frameProjectJava == 1 &&
            frameProjectHtml == 1 &&
            frameProjectBlender == 1)
    }
    if (hbproject == hitboxCSharp) {
        return (frameProjectC == 1 &&
            frameProjectJava == 1 &&
            frameProjectHtml == 1 &&
            frameProjectBlender == 1)
    }
    if (hbproject == hitboxJava) {
        return (frameProjectCSharp == 1 &&
            frameProjectC == 1 &&
            frameProjectHtml == 1 &&
            frameProjectBlender == 1)
    }
    if (hbproject == hitboxHtml) {
        return (frameProjectCSharp == 1 &&
            frameProjectJava == 1 &&
            frameProjectC == 1 &&
            frameProjectBlender == 1)
    }
    if (hbproject == hitboxBlender) {
        return (frameProjectCSharp == 1 &&
            frameProjectJava == 1 &&
            frameProjectHtml == 1 &&
            frameProjectC == 1)
    } else {
        return True;
    }
}


function displayUpAnimationC() {
    clearTimeout(t);
    requestAnimationFrame(() => {
        t = setTimeout(() => {
            displayUpAnimationC();
        }, 1000 / 60);
    });
    const render = document.querySelector('.render-project');
    render.src = `render/render-project/C/${getZeroes(frameProjectC)}${(frameProjectC).toString()}.png`;
    if (frameProjectC > 50) {
        textProjectC.classList.add('is-active');
    }
    if (frameProjectC < frameCount && isMouseHoverC) {
        frameProjectC++;
    } else {
        return;
    }
}

function displayDownAnimationC() {
    clearTimeout(t);
    requestAnimationFrame(() => {
        t = setTimeout(() => {
            displayDownAnimationC();
        }, 1000 / 60);
    });
    const render = document.querySelector('.render-project');
    render.src = `render/render-project/C/${getZeroes(frameProjectC)}${(frameProjectC).toString()}.png`;
    if (frameProjectC < 50) {
        textProjectC.classList.remove('is-active');
    }
    if (frameProjectC > 1 && !isMouseHoverC) {
        frameProjectC--;
    } else {
        return;
    }
}


let isMouseHoverC = false

hitboxC.addEventListener("mouseleave", function (event) {
    isMouseHoverC = false
}, false);
hitboxC.addEventListener("mouseover", function (event) {
    isMouseHoverC = true
}, false);


function overProjectC() {
    if (IsNotMovingProject(hitboxC)) {
        requestAnimationFrame(displayUpAnimationC);
    }
}

function nooverProjectC() {
    if (frameProjectC > 1 && IsNotMovingProject(hitboxC)) {
        requestAnimationFrame(displayDownAnimationC);
    }
}





function displayUpAnimationCSharp() {
    clearTimeout(t);
    requestAnimationFrame(() => {
        t = setTimeout(() => {
            displayUpAnimationCSharp();
        }, 1000 / 60);
    });
    const render = document.querySelector('.render-project');
    render.src = `render/render-project/C-sharp/${getZeroes(frameProjectCSharp)}${(frameProjectCSharp).toString()}.png`;
    if (frameProjectCSharp > 50) {
        textProjectCSharp.classList.add('is-active');
    }
    if (frameProjectCSharp < frameCount && isMouseHoverCSharp) {
        frameProjectCSharp++;
    } else {
        return;
    }
}

function displayDownAnimationCSharp() {
    clearTimeout(t);
    requestAnimationFrame(() => {
        t = setTimeout(() => {
            displayDownAnimationCSharp();
        }, 1000 / 60);
    });
    const render = document.querySelector('.render-project');
    render.src = `render/render-project/C-sharp/${getZeroes(frameProjectCSharp)}${(frameProjectCSharp).toString()}.png`;
    if (frameProjectCSharp < 50) {
        textProjectCSharp.classList.remove('is-active');
    }
    if (frameProjectCSharp > 1 && !isMouseHoverCSharp) {
        frameProjectCSharp--;
    } else {
        return;
    }
}


let isMouseHoverCSharp = false

hitboxCSharp.addEventListener("mouseleave", function (event) {
    isMouseHoverCSharp = false
}, false);
hitboxCSharp.addEventListener("mouseover", function (event) {
    isMouseHoverCSharp = true
}, false);


function overProjectCSharp() {
    if (IsNotMovingProject(hitboxCSharp)) {
        requestAnimationFrame(displayUpAnimationCSharp);
    }
}

function nooverProjectCSharp() {
    if (frameProjectCSharp > 1 && IsNotMovingProject(hitboxCSharp)) {
        requestAnimationFrame(displayDownAnimationCSharp);
    }
}





function displayUpAnimationJava() {
    clearTimeout(t);
    requestAnimationFrame(() => {
        t = setTimeout(() => {
            displayUpAnimationJava();
        }, 1000 / 60);
    });
    const render = document.querySelector('.render-project');
    render.src = `render/render-project/java/${getZeroes(frameProjectJava)}${(frameProjectJava).toString()}.png`;
    if (frameProjectJava > 50) {
        textProjectJava.classList.add('is-active');
    }
    if (frameProjectJava < frameCount && isMouseHoverJava) {
        frameProjectJava++;
    } else {
        return;
    }
}

function displayDownAnimationJava() {
    clearTimeout(t);
    requestAnimationFrame(() => {
        t = setTimeout(() => {
            displayDownAnimationJava();
        }, 1000 / 60);
    });
    const render = document.querySelector('.render-project');
    render.src = `render/render-project/java/${getZeroes(frameProjectJava)}${(frameProjectJava).toString()}.png`;
    if (frameProjectJava < 50) {
        textProjectJava.classList.remove('is-active');
    }
    if (frameProjectJava > 1 && !isMouseHoverJava) {
        frameProjectJava--;
    } else {
        return;
    }
}


let isMouseHoverJava = false

hitboxJava.addEventListener("mouseleave", function (event) {
    isMouseHoverJava = false
}, false);
hitboxJava.addEventListener("mouseover", function (event) {
    isMouseHoverJava = true
}, false);


function overProjectJava() {

    if (IsNotMovingProject(hitboxJava)) {
        requestAnimationFrame(displayUpAnimationJava);
    }
}

function nooverProjectJava() {

    if (frameProjectJava > 1 && IsNotMovingProject(hitboxJava)) {
        requestAnimationFrame(displayDownAnimationJava);
    }
}



function displayUpAnimationHtml() {
    clearTimeout(t);
    requestAnimationFrame(() => {
        t = setTimeout(() => {
            displayUpAnimationHtml();
        }, 1000 / 60);
    });
    const render = document.querySelector('.render-project');
    render.src = `render/render-project/html/${getZeroes(frameProjectHtml)}${(frameProjectHtml).toString()}.png`;
    if (frameProjectHtml > 50) {
        textProjectHtml.classList.add('is-active');
    }
    if (frameProjectHtml < frameCount && isMouseHoverHtml) {
        frameProjectHtml++;
    } else {
        return;
    }
}

function displayDownAnimationHtml() {
    clearTimeout(t);
    requestAnimationFrame(() => {
        t = setTimeout(() => {
            displayDownAnimationHtml();
        }, 1000 / 60);
    });
    const render = document.querySelector('.render-project');
    render.src = `render/render-project/html/${getZeroes(frameProjectHtml)}${(frameProjectHtml).toString()}.png`;
    if (frameProjectHtml < 50) {
        textProjectHtml.classList.remove('is-active');
    }
    if (frameProjectHtml > 1 && !isMouseHoverHtml) {
        frameProjectHtml--;
    } else {
        return;
    }
}


let isMouseHoverHtml = false

hitboxHtml.addEventListener("mouseleave", function (event) {
    isMouseHoverHtml = false
}, false);
hitboxHtml.addEventListener("mouseover", function (event) {
    isMouseHoverHtml = true
}, false);


function overProjectHtml() {
    if (IsNotMovingProject(hitboxHtml)) {
        requestAnimationFrame(displayUpAnimationHtml);
    }
}

function nooverProjectHtml() {
    if (frameProjectHtml > 1 && IsNotMovingProject(hitboxHtml)) {
        requestAnimationFrame(displayDownAnimationHtml);
    }
}




function displayUpAnimationBlender() {
    clearTimeout(t);
    requestAnimationFrame(() => {
        t = setTimeout(() => {
            displayUpAnimationBlender();
        }, 1000 / 60);
    });
    const render = document.querySelector('.render-project');
    render.src = `render/render-project/blender/${getZeroes(frameProjectBlender)}${(frameProjectBlender).toString()}.png`;
    if (frameProjectBlender > 50) {
        textProjectBlender.classList.add('is-active');
    }
    if (frameProjectBlender < frameCount && isMouseHoverBlender) {
        frameProjectBlender++;
    } else {
        return;
    }
}

function displayDownAnimationBlender() {
    clearTimeout(t);
    requestAnimationFrame(() => {
        t = setTimeout(() => {
            displayDownAnimationBlender();
        }, 1000 / 60);
    });
    const render = document.querySelector('.render-project');
    render.src = `render/render-project/blender/${getZeroes(frameProjectBlender)}${(frameProjectBlender).toString()}.png`;
    if (frameProjectBlender < 50) {
        textProjectBlender.classList.remove('is-active');
    }
    if (frameProjectBlender > 1 && !isMouseHoverBlender) {
        frameProjectBlender--;
    } else {
        return;
    }
}

let isMouseHoverBlender = false

hitboxBlender.addEventListener("mouseleave", function (event) {
    isMouseHoverBlender = false
}, false);
hitboxBlender.addEventListener("mouseover", function (event) {
    isMouseHoverBlender = true
}, false);


function overProjectBlender() {
    if (IsNotMovingProject(hitboxBlender)) {
        requestAnimationFrame(displayUpAnimationBlender);
    }
}

function nooverProjectBlender() {
    if (frameProjectBlender > 1 && IsNotMovingProject(hitboxBlender)) {
        requestAnimationFrame(displayDownAnimationBlender);
    }
}








let frameContactTwitter = 1;
let frameContactGithub = 1;
let frameContactLinkedin = 1;


function IsNotMovingContact(hbproject) {
    if (hbproject == hitboxTwitter) {
        return (frameContactGithub == 1 &&
            frameContactLinkedin == 1)
    }
    if (hbproject == hitboxGithub) {
        return (frameContactTwitter == 1 &&
            frameContactLinkedin == 1)
    }
    if (hbproject == hitboxLinkedin) {
        return (frameContactTwitter == 1 &&
            frameContactGithub == 1)
    } else {
        return True;
    }
}


function displayUpAnimationTwitter() {
    clearTimeout(t);
    requestAnimationFrame(() => {
        t = setTimeout(() => {
            displayUpAnimationTwitter();
        }, 1000 / 60);
    });
    const render = document.querySelector('.render-contact');
    render.src = `render/render-contact/twitter/${getZeroes(frameContactTwitter)}${(frameContactTwitter).toString()}.png`;
    if (frameContactTwitter < frameCount && isMouseHoverTwitter) {
        frameContactTwitter++;
    } else {
        return;
    }
}

function displayDownAnimationTwitter() {
    clearTimeout(t);
    requestAnimationFrame(() => {
        t = setTimeout(() => {
            displayDownAnimationTwitter();
        }, 1000 / 60);
    });
    const render = document.querySelector('.render-contact');
    render.src = `render/render-contact/twitter/${getZeroes(frameContactTwitter)}${(frameContactTwitter).toString()}.png`;
    if (frameContactTwitter > 1 && !isMouseHoverTwitter) {
        frameContactTwitter--;
    } else {
        return;
    }
}


let isMouseHoverTwitter = false

hitboxTwitter.addEventListener("mouseleave", function (event) {
    isMouseHoverTwitter = false
}, false);
hitboxTwitter.addEventListener("mouseover", function (event) {
    isMouseHoverTwitter = true
}, false);


function overContactTwitter() {
    if (IsNotMovingContact(hitboxTwitter)) {
        requestAnimationFrame(displayUpAnimationTwitter);
    }
}

function nooverContactTwitter() {
    if (frameContactTwitter > 1 && IsNotMovingContact(hitboxTwitter)) {
        requestAnimationFrame(displayDownAnimationTwitter);
    }
}





function displayUpAnimationGithub() {
    clearTimeout(t);
    requestAnimationFrame(() => {
        t = setTimeout(() => {
            displayUpAnimationGithub();
        }, 1000 / 60);
    });
    const render = document.querySelector('.render-contact');
    render.src = `render/render-contact/github/${getZeroes(frameContactGithub)}${(frameContactGithub).toString()}.png`;
    if (frameContactGithub < frameCount && isMouseHoverGithub) {
        frameContactGithub++;
    } else {
        return;
    }
}

function displayDownAnimationGithub() {
    clearTimeout(t);
    requestAnimationFrame(() => {
        t = setTimeout(() => {
            displayDownAnimationGithub();
        }, 1000 / 60);
    });
    const render = document.querySelector('.render-contact');
    render.src = `render/render-contact/github/${getZeroes(frameContactGithub)}${(frameContactGithub).toString()}.png`;
    if (frameContactGithub > 1 && !isMouseHoverGithub) {
        frameContactGithub--;
    } else {
        return;
    }
}


let isMouseHoverGithub = false

hitboxGithub.addEventListener("mouseleave", function (event) {
    isMouseHoverGithub = false
}, false);
hitboxGithub.addEventListener("mouseover", function (event) {
    isMouseHoverGithub = true
}, false);


function overContactGithub() {
    if (IsNotMovingContact(hitboxGithub)) {
        requestAnimationFrame(displayUpAnimationGithub);
    }
}

function nooverContactGithub() {
    if (frameContactGithub > 1 && IsNotMovingContact(hitboxGithub)) {
        requestAnimationFrame(displayDownAnimationGithub);
    }
}



function displayUpAnimationLinkedin() {
    clearTimeout(t);
    requestAnimationFrame(() => {
        t = setTimeout(() => {
            displayUpAnimationLinkedin();
        }, 1000 / 60);
    });
    const render = document.querySelector('.render-contact');
    render.src = `render/render-contact/linkedin/${getZeroes(frameContactLinkedin)}${(frameContactLinkedin).toString()}.png`;
    if (frameContactLinkedin < frameCount && isMouseHoverLinkedin) {
        frameContactLinkedin++;
    } else {
        return;
    }
}

function displayDownAnimationLinkedin() {
    clearTimeout(t);
    requestAnimationFrame(() => {
        t = setTimeout(() => {
            displayDownAnimationLinkedin();
        }, 1000 / 60);
    });
    const render = document.querySelector('.render-contact');
    render.src = `render/render-contact/linkedin/${getZeroes(frameContactLinkedin)}${(frameContactLinkedin).toString()}.png`;
    if (frameContactLinkedin > 1 && !isMouseHoverLinkedin) {
        frameContactLinkedin--;
    } else {
        return;
    }
}


let isMouseHoverLinkedin = false

hitboxLinkedin.addEventListener("mouseleave", function (event) {
    isMouseHoverLinkedin = false
}, false);
hitboxLinkedin.addEventListener("mouseover", function (event) {
    isMouseHoverLinkedin = true
}, false);


function overContactLinkedin() {
    if (IsNotMovingContact(hitboxLinkedin)) {
        requestAnimationFrame(displayUpAnimationLinkedin);
    }
}

function nooverContactLinkedin() {
    if (frameContactLinkedin > 1 && IsNotMovingContact(hitboxLinkedin)) {
        requestAnimationFrame(displayDownAnimationLinkedin);
    }
}

function onclickTwitter() {
    window.open("https://twitter.com/KOSNOFA", "_blank");
}

function onclickGithub() {
    window.open("https://github.com/KOSNOFA", "_blank");
}

function onclickLinkedin() {
    window.open("https://www.linkedin.com/in/kevin-afonso-pro/", "_blank");
}






let frameEducationSfsu = 1;
let frameEducationEpita = 1;


function IsNotMovingEducation(hbeducation) {
    if (hbeducation == hitboxSfsu) {
        return (frameEducationEpita == 1)
    }
    if (hbeducation == hitboxEpita) {
        return (frameEducationSfsu == 1)
    } else {
        return True;
    }
}


function displayUpAnimationSfsu() {
    clearTimeout(t);
    requestAnimationFrame(() => {
        t = setTimeout(() => {
            displayUpAnimationSfsu();
        }, 1000 / 60);
    });
    const render = document.querySelector('.render-education');
    render.src = `render/render-education/sfsu/${getZeroes(frameEducationSfsu)}${(frameEducationSfsu).toString()}.png`;
    if (frameEducationSfsu < frameCount && isMouseHoverSfsu) {
        frameEducationSfsu++;
    } else {
        return;
    }
}

function displayDownAnimationSfsu() {
    clearTimeout(t);
    requestAnimationFrame(() => {
        t = setTimeout(() => {
            displayDownAnimationSfsu();
        }, 1000 / 60);
    });
    const render = document.querySelector('.render-education');
    render.src = `render/render-education/sfsu/${getZeroes(frameEducationSfsu)}${(frameEducationSfsu).toString()}.png`;
    if (frameEducationSfsu > 1 && !isMouseHoverSfsu) {
        frameEducationSfsu--;
    } else {
        return;
    }
}


let isMouseHoverSfsu = false

hitboxSfsu.addEventListener("mouseleave", function (event) {
    isMouseHoverSfsu = false
}, false);
hitboxSfsu.addEventListener("mouseover", function (event) {
    isMouseHoverSfsu = true
}, false);


function overEducationSfsu() {
    console.log("enter sfsu");
    if (IsNotMovingEducation(hitboxSfsu)) {
        console.log("moving up sfsu");
        requestAnimationFrame(displayUpAnimationSfsu);
    }
}

function nooverEducationSfsu() {
    console.log("out sfsu");
    if (frameEducationSfsu > 1 && IsNotMovingEducation(hitboxSfsu)) {
        console.log("moving down sfsu");
        requestAnimationFrame(displayDownAnimationSfsu);
    }
}




function displayUpAnimationEpita() {
    clearTimeout(t);
    requestAnimationFrame(() => {
        t = setTimeout(() => {
            displayUpAnimationEpita();
        }, 1000 / 60);
    });
    const render = document.querySelector('.render-education');
    render.src = `render/render-education/epita/${getZeroes(frameEducationEpita)}${(frameEducationEpita).toString()}.png`;
    if (frameEducationEpita < frameCount && isMouseHoverEpita) {
        frameEducationEpita++;
    } else {
        return;
    }
}

function displayDownAnimationEpita() {
    clearTimeout(t);
    requestAnimationFrame(() => {
        t = setTimeout(() => {
            displayDownAnimationEpita();
        }, 1000 / 60);
    });
    const render = document.querySelector('.render-education');
    render.src = `render/render-education/epita/${getZeroes(frameEducationEpita)}${(frameEducationEpita).toString()}.png`;
    if (frameEducationEpita > 1 && !isMouseHoverEpita) {
        frameEducationEpita--;
    } else {
        return;
    }
}


let isMouseHoverEpita = false;

hitboxEpita.addEventListener("mouseleave", function (event) {
    isMouseHoverEpita = false;
}, false);
hitboxEpita.addEventListener("mouseover", function (event) {
    isMouseHoverEpita = true;
}, false);


function overEducationEpita() {
    if (IsNotMovingEducation(hitboxEpita)) {
        requestAnimationFrame(displayUpAnimationEpita);
    }
}

function nooverEducationEpita() {
    if (frameEducationEpita > 1 && IsNotMovingEducation(hitboxEpita)) {
        requestAnimationFrame(displayDownAnimationEpita);
    }
}



function onclickSfsu() {
    window.open("https://www.sfsu.edu/", "_blank");
}

function onclickEpita() {
    window.open("https://epita.it/", "_blank");
}