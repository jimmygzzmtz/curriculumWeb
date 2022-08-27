import { html, render, useState } from 'https://unpkg.com/htm/preact/standalone.module.js'

function App(props) {
    const projects = [
        {
            name: "ProgriScript",
            screenshot: "assets/progriscript_screenshot.webp",
            icon: "assets/progriscript_icon.webp",
            timeframe: "August - December 2020",
            description: "A progressive web app that compiles, runs, and teaches the user about the ProgriScript language.",
            details: ["Collaborated with Raul Hernandez to develop the compiler and virtual machine in JavaScript, using Jison.", "Designed and developed the user-interface in Ionic."],
            links: [{ name: "Code", url: "https://github.com/jimmygzzmtz/ProgriScript" }, { name: "Web App", url: "https://jimmygzzmtz.github.io/ProgriScript" }]
        },
        {
            name: "GeminAI",
            screenshot: "assets/geminai_screenshot.webp",
            icon: "assets/geminai_icon.webp",
            timeframe: "April - August 2020",
            description: "A hybrid chatbot based on AIML and a Seq2Seq model.",
            details: ["Designed and developed the back-end using Python in Google Cloud Run.", "Integrated GeminAI with tools from DuckDuckGo, DialogFlow, TensorFlow, AIML, and others.", "This application was developed for the MSc Dissertation, along with a thesis."],
            links: null
        },
        {
            name: "Vibe",
            screenshot: "assets/vibe_screenshot.webp",
            icon: "assets/vibe_icon.webp",
            timeframe: "January - March 2020",
            description: "An application that allows users to detect their current emotion by analyzing their face.",
            details: ["Designed the front-end of the application in Ionic and Angular.", "Collaborated with colleagues to integrate it with a back-end model hosted in Google Cloud Run.", "This application was developed for Centro Puzzle, a rehabilitation center in Italy."],
            links: null
        },
        {
            name: "prodActiv",
            screenshot: "assets/prodactiv_screenshot.webp",
            icon: "assets/prodactiv_icon.webp",
            timeframe: "January - May 2019",
            description: "An iOS graphical task manager in Swift 4.",
            details: ["Collaborated with colleagues to develop the application for an iOS class.", "Built using card-based graphical interface, along with extensive use of RegEx and notifications."],
            links: [{ name: "Code", url: "https://github.com/jimmygzzmtz/prodActiv" }]
        },
        {
            name: "POIAPP & POI-API",
            screenshot: "assets/poiapp_screenshot.webp",
            icon: "assets/poiapp_icon.webp",
            timeframe: "January - May 2019",
            description: "A crowd-sourced Points of Interest back-end and Progressive Web App.",
            details: ["Collaborated with Ariel Mendez to develop the front-end in Ionic and back-end in MongoDB.", "Designed and developed the user-interface and database."],
            links: [{ name: "Front-End Code", url: "https://github.com/jimmygzzmtz/POIAPP" }, { name: "Back-End Code", url: "https://github.com/jimmygzzmtz/POI-API" }]
        },
    ];

    const [showingProjects, setShowingProjects] = useState(false);

    return html`
    <div class="app">
        <ion-app>
            <ion-header translucent={true} mode="ios">
                <ion-toolbar>
                    <ion-title>Jaime González CV</ion-title>
                </ion-toolbar>
            </ion-header>
    
            <ion-content fullscreen="true">
                <ion-header collapse="condense" mode="ios">
                    <ion-toolbar>
                        <ion-title size="large" class="centerText">Jaime González CV</ion-title>
                    </ion-toolbar>
                </ion-header>
                <ion-card mode="ios">
                    <img src="assets/profile.webp" />
                    <ion-card-header>
                        <ion-card-subtitle>Software Developer</ion-card-subtitle>
                        <ion-card-title>Jaime Alberto González Martínez</ion-card-title>
                    </ion-card-header>
                    <ion-card-content>
                        <h2>E-mail</h2>
                        <a href="mailto:jimmygzzmtz@gmail.com">jimmygzzmtz@gmail.com</a>
                        <h2>LinkedIn</h2>
                        <a href="https://www.linkedin.com/in/jaime-gonz%C3%A1lez-005758127/" target="_blank">
                            Jaime González
                        </a>
                        <h2>GitHub</h2>
                        <a href="https://www.github.com/jimmygzzmtz" target="_blank">https://www.github.com/jimmygzzmtz</a>
                    </ion-card-content>
                </ion-card>
    
                <ion-card mode="ios">
                    <ion-card-header>
                        <ion-card-title>Education</ion-card-title>
                    </ion-card-header>
                    <ion-card-content>
                        <h2>2019 - 2020</h2>
                        MSc Artificial Intelligence at University of Essex
                        <br /><br />
                        <h2>2016 - 2020</h2>
                        B.S. Computer Science and Technology (BCT) at ITESM-Campus Monterrey
                        <br />
                        Cumulative GPA: 96.3
                    </ion-card-content>
                </ion-card>
    
                <ion-card mode="ios">
                    <ion-card-header>
                        <ion-card-title>Skills</ion-card-title>
                    </ion-card-header>
                    <ion-card-content>
                        <h2>Programming Languages</h2>
                        <ul>
                            <li>7 years: Java</li>
                            <li>5 years: C++</li>
                            <li>3 years: Python, TypeScript, JavaScript</li>
                        </ul>
                        <h2>Awards</h2>
                        <ul>
                            <li>Academic Excellence at ITESM (2016-2020)</li>
                            <li>1st Place in the HackPrepas-ITESM (2015)</li>
                        </ul>
                        <h2>Technologies</h2>
                        <ul>
                            <li>HTML, CSS, JQuery, Express, SQL, MongoDB (NoSQL), Git, Google Cloud, Heroku, Android SDK, iOS SDK, Ionic, Angular, React, Puppeteer, Unix/Bash, TensorFlow, Preact</li>
                        </ul>
                    </ion-card-content>
                </ion-card>
    
                <ion-card mode="ios">
                    <ion-card-header>
                        <ion-card-title>Work Experience</ion-card-title>
                    </ion-card-header>
                    <ion-card-content>
                        <h2>February 2021 - November 2021</h2>
                        Full Stack Engineer at Intelimotor
                        <br /><br />
                        <h2>November 2021 - May 2022</h2>
                        Senior Developer at Onis Solutions
                        <br /><br />
                        <h2>June 2022 - Present</h2>
                        Co-founder at Nuxio Software
                    </ion-card-content>
                </ion-card>
    
                <ion-card mode="ios">
                    <div style="width: 100%; background-color: white;">
                        <img src="assets/nuxio-logo.webp" class="centerImage" style="padding-top: 10px; padding-bottom: 10px;" />
                    </div>
                    <ion-card-header>
                        <ion-card-subtitle>Current Role</ion-card-subtitle>
                        <ion-card-title>Co-founder at Nuxio Software</ion-card-title>
                    </ion-card-header>
                    <ion-card-content>
                        <h2>Nuxio Software</h2>
                        Your allies in software development & modernization.
                        <br /><br />
                        <h2>Our services</h2>
                        Develop an application from the ground up or modernize your current application with the latest web industry standards.
                        <br /><br />
                        <h2>More Information</h2>
                        <a href="https://nuxio.mx/" target="_blank">Visit our website</a>
                    </ion-card-content>
                </ion-card>
    
                <div class="centerButton">
                    <ion-button mode="ios" class="center" onClick=${() =>
            setShowingProjects(!showingProjects)}>${showingProjects ? 'Hide' : 'Show'} Projects</ion-button>
                </div>
    
                ${showingProjects && projects.map((project) => html`
                <ion-card mode="ios">
                    <img src=${project.screenshot} style="width: 100%" />
                    <img src=${project.icon} height="50" width="50" class="projectIcon" />
                    <ion-card-header>
                        <ion-card-subtitle>Project</ion-card-subtitle>
                        <ion-card-title>${project.name}</ion-card-title>
                    </ion-card-header>
                    <ion-card-content>
                        <h2>Timeframe</h2>
                        ${project.timeframe}
                        <br /><br />
                        <h2>Description</h2>
                        ${project.description}
                        <br /><br />
                        <h2>Details</h2>
                        <ul>
                            ${project.details.map((detail) => html`
                            <li>${detail}</li>
                            `)}
                        </ul>
                        ${project.links && html`
                        <h2>Links</h2>
                        ${project.links.map((link) => html`
                        <a href=${link.url} target="_blank">${link.name}</a>
                        <br />
                        `)}
                        `}
                    </ion-card-content>
                </ion-card>
                `
                        )}
            </ion-content>
        </ion-app>
    </div>
  `;
}

render(html`<${App} />`, document.body);