import { Link } from "react-scroll"

export default function AboutMe(){
    return(
        <section id="AboutMe" className="about--section">
            <div className="about--section--img">
                <img src="./img/profile2.PNG" alt="About me" />
            </div>
            <div className="hero--section--content--box about--section--box">
                <div className="hero--section--content">
                    <h1 className="skills-section--heading">About Me</h1>
                    <hr className="divider-title"></hr>
                    <p className="hero--section--description">
                        I am an Entry Level Software Engineer based in Pittsburgh, PA. I will graduate on December 2023 from La Roche University with BS in Computer Science. 
                    </p>
                    <p className="hero--section--description">
                       I have a strong foundation in networking, programming, and software development. Proficient in Java, Python, and C, with hands-on experience in developing full-stack web applications using frameworks such as Spring Boot, React and Angular. Please feel free to check out some of my personal and school projets and reach out using the contact form below or any of my social media accounts. My resume is also available to download!  
                    </p>
                    <div className="btn--container">
                        <Link spy={true} smooth={true} offset={-70} duration={500} to='Contact' className='btn btn-contact'>
                            Get in Touch
                        </Link>
                        <a href="./img/Naomie_Lutete_Resume.pdf" download="Naomie_Resume.pdf">
                            <button className="btn btn-resume" >Download CV</button>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}