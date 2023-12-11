import {Link } from "react-scroll";

export default function HeroSection() {
    return(
        <section id="heroSection" className="hero--section">
            <div className="hero--section--content--box">
                <div className="hero--section--content">
                    <h3>Hello, I'm Naomie Lutete</h3>
                    <h1 className="hero--section--title">
                        <span className="hero--section--title--color">Software Engineer</span>
                    </h1>
                    <p className="hero--section-description">
                        Welcome to my digital space!!!
                        <br/>This website serves as a window into my professional endeavors, showcasing my skills, projects, and the enthusiasm I bring to the field of software development.
                    </p>
                    <div className="btn--container">
                        <Link spy={true} smooth={true} offset={-70} duration={500} to='Contact' className='btn btn-contact'>
                            Get in Touch
                        </Link>
                        <a href="./img/Naomie_Lutete_Resume.pdf" download="Naomie_Resume.pdf">
                            <button className="btn btn-resume" >Download CV</button>
                        </a>
                    </div>
                    <div className="socials--container">
                        <a
                            href="https://www.linkedin.com/in/naomie-lutete-1303261ba/"
                            className="navbar--content"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            viewBox="0 0 33 33"
                            fill="none"
                            >
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M7.33341 4.65479H26.0001C27.4729 4.65479 28.6667 5.84869 28.6667 7.32145V25.9881C28.6667 27.4609 27.4729 28.6548 26.0001 28.6548H7.33341C5.86065 28.6548 4.66675 27.4609 4.66675 25.9881V7.32145C4.66675 5.84869 5.86065 4.65479 7.33341 4.65479ZM11.3334 24.6548C11.7016 24.6548 12.0001 24.3563 12.0001 23.9881V14.6548C12.0001 14.2867 11.7016 13.9881 11.3334 13.9881H9.33342C8.96523 13.9881 8.66675 14.2867 8.66675 14.6548V23.9881C8.66675 24.3563 8.96523 24.6548 9.33342 24.6548H11.3334ZM10.3334 12.6548C9.22884 12.6548 8.33341 11.7594 8.33341 10.6548C8.33341 9.55021 9.22884 8.65479 10.3334 8.65479C11.438 8.65479 12.3334 9.55021 12.3334 10.6548C12.3334 11.7594 11.438 12.6548 10.3334 12.6548ZM24.0001 24.6548C24.3682 24.6548 24.6667 24.3563 24.6667 23.9881V17.8548C24.7101 15.7359 23.1435 13.9275 21.0401 13.6681C19.5694 13.5338 18.1445 14.2207 17.3334 15.4548V14.6548C17.3334 14.2867 17.0349 13.9881 16.6667 13.9881H14.6667C14.2986 13.9881 14.0001 14.2867 14.0001 14.6548V23.9881C14.0001 24.3563 14.2986 24.6548 14.6667 24.6548H16.6667C17.0349 24.6548 17.3334 24.3563 17.3334 23.9881V18.9881C17.3334 17.8836 18.2289 16.9881 19.3334 16.9881C20.4379 16.9881 21.3334 17.8836 21.3334 18.9881V23.9881C21.3334 24.3563 21.6319 24.6548 22.0001 24.6548H24.0001Z"
                                fill="black"
                            />
                            </svg>
                        </a>
                        <a
                            href="https://www.facebook.com/naomie.luna.39/"
                            className="navbar--content"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            viewBox="0 0 33 33"
                            fill="none"
                            >
                            <path
                                d="M22.6667 8.65479H18.6667C17.9303 8.65479 17.3333 9.25175 17.3333 9.98812V13.9881H22.6667C22.8183 13.9848 22.9621 14.0553 23.0523 14.1773C23.1424 14.2993 23.1677 14.4575 23.12 14.6015L22.1333 17.5348C22.0424 17.804 21.7908 17.986 21.5067 17.9881H17.3333V27.9881C17.3333 28.3563 17.0348 28.6548 16.6667 28.6548H13.3333C12.9651 28.6548 12.6667 28.3563 12.6667 27.9881V17.9881H10.6667C10.2985 17.9881 10 17.6896 10 17.3215V14.6548C10 14.2867 10.2985 13.9881 10.6667 13.9881H12.6667V9.98812C12.6667 7.0426 15.0545 4.65479 18 4.65479H22.6667C23.0348 4.65479 23.3333 4.95327 23.3333 5.32145V7.98812C23.3333 8.35631 23.0348 8.65479 22.6667 8.65479Z"
                                fill="black"
                            />
                            </svg>
                        </a>
                        <a  href="https://github.com/Naomie05"
                            className="navbar--content"
                            target="_blank"
                            rel="noreferrer">
                                <img src="./img/github.png" alt="Github Logo"  className="icon"/>
                        </a>
                    </div>
                </div> 
            </div>
            <div className="hero--section--imag">
                <img src="./img/profile1.jpg" alt="hero section"/>
            </div>
        </section>
    );
}