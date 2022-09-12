import {
    html,
    render,
    useState,
    useEffect,
} from "https://unpkg.com/htm/preact/standalone.module.js";

function App(props) {
    const [showingProjects, setShowingProjects] = useState(false);
    const [translations, setTranslations] = useState();

    useEffect(() => {
        async function getTranslations() {
            const translationsFile = await fetch("./translations.json");
            const translationsJSON = await translationsFile.json();
            setTranslations(translationsJSON);
        }
        getTranslations();
     }, [])

    const userLocale = navigator.languages && navigator.languages.length
        ? navigator.languages[0]
        : navigator.language;
    const langInUse = userLocale.slice(0, 2);

    const usedTranslation = translations ? translations[["en", "es"].includes(langInUse) ? langInUse : "en"] : {};
    const projects = usedTranslation ? usedTranslation.projectsList : [];

    return html`
    <div class="app">
        <ion-app>
            <ion-header translucent="{true}" mode="ios">
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

                ${translations && html`
                    <ion-grid>
                        <ion-row class="centerButton">
                            <ion-col size="12" size-sm>
                                <ion-card mode="ios">
                                    <img src="assets/profile.webp" />
                                    <ion-card-header>
                                        <ion-card-subtitle>${usedTranslation.info.subtitle}</ion-card-subtitle>
                                        <ion-card-title>Jaime Alberto González Martínez</ion-card-title>
                                    </ion-card-header>
                                    <ion-card-content>
                                        <h2>${usedTranslation.info.email}</h2>
                                        <a href="mailto:jimmygzzmtz@gmail.com">jimmygzzmtz@gmail.com</a>
                                        <h2>LinkedIn</h2>
                                        <a href="https://www.linkedin.com/in/jaime-gonz%C3%A1lez-005758127/" target="_blank">
                                            Jaime González
                                        </a>
                                        <h2>GitHub</h2>
                                        <a href="https://www.github.com/jimmygzzmtz"
                                            target="_blank">https://www.github.com/jimmygzzmtz</a>
                                    </ion-card-content>
                                </ion-card>
                            </ion-col>
                            <ion-col size="12" size-sm>
                                <ion-card mode="ios">
                                    <ion-card-header>
                                        <ion-card-title>${usedTranslation.education.title}</ion-card-title>
                                    </ion-card-header>
                                    <ion-card-content>
                                        <h2>2019 - 2020</h2>
                                        ${usedTranslation.education.masters}
                                        <br /><br />
                                        <h2>2016 - 2020</h2>
                                        ${usedTranslation.education.college}
                                        <br />
                                        ${usedTranslation.education.gpa}
                                    </ion-card-content>
                                </ion-card>
                            </ion-col>
                            <ion-col size="12" size-sm>
                                <ion-card mode="ios">
                                    <ion-card-header>
                                        <ion-card-title>${usedTranslation.skills.title}</ion-card-title>
                                    </ion-card-header>
                                    <ion-card-content>
                                        <h2>
                                            ${usedTranslation.skills.programmingLanguages.title}
                                        </h2>
                                        <ul>
                                            ${usedTranslation.skills.programmingLanguages.list.map(
                            (lang) => html`<li>${lang}</li>`
                        )}
                                        </ul>
                                        <h2>${usedTranslation.skills.awards.title}</h2>
                                        <ul>
                                            ${usedTranslation.skills.awards.list.map(
                            (award) => html`<li>${award}</li>`
                        )}
                                        </ul>
                                        <h2>${usedTranslation.skills.technologies.title}</h2>
                                        <ul>
                                            <li>${usedTranslation.skills.technologies.list}</li>
                                        </ul>
                                    </ion-card-content>
                                </ion-card>
                            </ion-col>
                            <ion-col size="12" size-sm>
                                <ion-card mode="ios">
                                    <ion-card-header>
                                        <ion-card-title>${usedTranslation.work.title}</ion-card-title>
                                    </ion-card-header>
                                    <ion-card-content>
                                        ${usedTranslation.work.experiences.map(
                        (experience, i) => html`
                                        <h2>${experience.timeframe}</h2>
                                        ${experience.role}
                                        ${i !== usedTranslation.work.experiences.length - 1 &&
                            html`<br /><br />`}
                                        `
                        )}
                                    </ion-card-content>
                                </ion-card>
                            </ion-col>
                            <ion-col size="12" size-sm>
                                <ion-card mode="ios">
                                    <div style="width: 100%; background-color: white;">
                                        <img src="assets/nuxio-logo.webp" class="centerImage"
                                            style="padding-top: 10px; padding-bottom: 10px;" />
                                    </div>
                                    <ion-card-header>
                                        <ion-card-subtitle>${usedTranslation.currentRole
                                .subtitle}</ion-card-subtitle>
                                        <ion-card-title>${usedTranslation.currentRole.title}</ion-card-title>
                                    </ion-card-header>
                                    <ion-card-content>
                                        ${usedTranslation.currentRole.info.map(
                                (roleInfo, i) => html`
                                        <h2>${roleInfo.title}</h2>
                                        ${roleInfo.description}
                                        <br /><br />
                                        `
                                )}
                                        <h2>${usedTranslation.currentRole.website.title}</h2>
                                        <a href="https://nuxio.mx/"
                                            target="_blank">${usedTranslation.currentRole.website.label}</a>
                                    </ion-card-content>
                                </ion-card>
                            </ion-col>
                        </ion-row>
                        <ion-row class="centerButton">
                            ${showingProjects &&
                    projects.map(
                        (project) => html`
                            <ion-col size="12" size-sm>
                                <ion-card mode="ios">
                                    <img src=${project.screenshot} style="width: 100%" />
                                    <img src=${project.icon} height="50" width="50" class="projectIcon" />
                                    <ion-card-header>
                                        <ion-card-subtitle>${usedTranslation.projects
                                    .subtitle}</ion-card-subtitle>
                                        <ion-card-title>${project.name}</ion-card-title>
                                    </ion-card-header>
                                    <ion-card-content>
                                        <h2>${usedTranslation.projects.timeframe}</h2>
                                        ${project.timeframe}
                                        <br /><br />
                                        <h2>${usedTranslation.projects.description}</h2>
                                        ${project.description}
                                        <br /><br />
                                        <h2>${usedTranslation.projects.details}</h2>
                                        <ul>
                                            ${project.details.map(
                                        (detail) => html`<li>${detail}</li>`
                                    )}
                                        </ul>
                                        ${project.links &&
                                html`
                                        <h2>${usedTranslation.projects.links}</h2>
                                        ${project.links.map(
                                (link) => html`
                                        <a href=${link.url} target="_blank">${link.name}</a>
                                        <br />
                                        `
                                        )}
                            `}
                                    </ion-card-content>
                                </ion-card>
                            </ion-col>
                            `
                    )}
                        </ion-row>
                    </ion-grid>
        
                    <div class="centerButton">
                        <ion-button mode="ios" class="center" onClick=${()=> setShowingProjects(!showingProjects)}
                            >${(showingProjects
                        ? usedTranslation.button.hide
                        : usedTranslation.button.show) + ' '}
                            ${usedTranslation.button.projects}</ion-button>
                    </div>
                `}
            </ion-content>
        </ion-app>
    </div>
  `;
}

render(html`<${App} />`, document.body);