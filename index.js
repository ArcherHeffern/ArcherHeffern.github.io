const welcome = document.getElementById("welcome");
const aboutMe = document.getElementById("aboutMe");
const skills = document.getElementById("skills");
const projects = document.getElementById("projects");
const welcomeAnchor = document.getElementById("welcomeAnchor")
const aboutMeAnchor = document.getElementById("aboutMeAnchor")
const skillsAnchor = document.getElementById("skillsAnchor")
const projectsAnchor = document.getElementById("projectsAnchor")

welcomeAnchor.addEventListener('click', welcomeScroll)
aboutMeAnchor.addEventListener('click', aboutMeScroll)
skillsAnchor.addEventListener('click', skillsScroll)
projectsAnchor.addEventListener('click', projectsScroll)

function welcomeScroll() {
    welcome.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
function aboutMeScroll() {
    aboutMe.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
function skillsScroll() {
    skills.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
function projectsScroll() {
    projects.scrollIntoView({ behavior: 'smooth', block: 'start' })
}