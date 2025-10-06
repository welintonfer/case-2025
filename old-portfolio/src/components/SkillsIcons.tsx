import FigmaIcon from "../assets/img/skills/figma.svg";
import PsdIcon from "../assets/img/skills/ps.svg";
import AiIcon from "../assets/img/skills/ai.svg";
import GithubIcon from "../assets/img/skills/github.svg";
import GitIcon from "../assets/img/skills/git.svg";
import NpmIcon from "../assets/img/skills/npm.svg";
import Html5Icon from "../assets/img/skills/html5.svg";
import Css3Icon from "../assets/img/skills/css3.svg";
import SassIcon from "../assets/img/skills/sass.svg";
import Bootstrap5Icon from "../assets/img/skills/bootstrap5.svg";
import JsIcon from "../assets/img/skills/js.svg";
import ReactjsIcon from "../assets/img/skills/reactjs.svg";

export default function SkillsIcons() {
  const skills = [
    { id: 1, logo: <FigmaIcon />, alt: "Figma", color: "#1E1E1E", borderColor: "#2C2C2C", bg: "#fff" },
    { id: 2, logo: <PsdIcon />, alt: "Adobe Photoshop", color: "#080138", borderColor: "#5F97D7", bg: "#fff" },
    { id: 3, logo: <AiIcon />, alt: "Adobe Illustrator", color: "#070401", borderColor: "#EDA741", bg: "#fff" },
    { id: 4, logo: <GithubIcon />, alt: "Github", color: "#000000", borderColor: "#252833", bg: "#fff" },
    { id: 5, logo: <GitIcon />, alt: "Git", color: "#CB3C26", borderColor: "#DE4C36", bg: "#fff" },
    { id: 6, logo: <NpmIcon />, alt: "npm", color: "#BC0000", borderColor: "#CC0000", bg: "#fff" },
    { id: 8, logo: <Html5Icon />, alt: "Html5", color: "#E44D26", borderColor: "#F16529", bg: "#fff" },
    { id: 9, logo: <Css3Icon />, alt: "CSS3", color: "#264DE4", borderColor: "#2965F1", bg: "#fff" },
    { id: 10, logo: <SassIcon />, alt: "Sass", color: "#BF3E7D", borderColor: "#CD6799", bg: "#fff" },
    { id: 11, logo: <Bootstrap5Icon />, alt: "Bootstrap 5", color: "#7040B6", borderColor: "#7952B3", bg: "#fff" },
    { id: 12, logo: <JsIcon />, alt: "Js", color: "#E0CA15", borderColor: "#F7DF1E", bg: "#fff" },
    { id: 13, logo: <ReactjsIcon />, alt: "React JS", color: "#53C6E5", borderColor: "#61DAFB", bg: "#fff" },
  ];

  return (
    <section className="relative my-12 flex flex-col justify-center py-12 overflow-hidden isolate bg-white border-t-4 border-b-4 border-solid border-gray-900">
      <div className="absolute inset-2 -z-10">
        <div className={`bg-1`}></div>
        <div className={`bg-2`}></div>
        <div className={`bg-3`}></div>
      </div>
      <div className="w-full px-6 lg:px-8">
        <div className="max-w-9xl mx-auto skills">
          <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-12">
            {skills.map((skill) => (
              <li
                key={skill.id}
                className="skill-icon"
                style={{
                  backgroundColor: skill.bg,
                  boxShadow: `0.74519px 0.74519px 0px 0px ${skill.color}, 
                              1.49038px 1.49038px 0px 0px ${skill.color}, 
                              2.23558px 2.23558px 0px 0px ${skill.color}`,
                  border: `2px solid ${skill.borderColor}`,
                }}
              >
                {skill.logo}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
