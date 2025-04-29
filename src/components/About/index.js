import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useState } from 'react'
import { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDocker, faJenkins, faGitlab, faJava, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

const About = () => {
    const [letterClass, setLetterClass] =useState('text-animate')
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loaderTimeout = setTimeout(() => {
            setLoading(false); // <- Stop loading after timeout
        }, 1000); // Adjust this to match loader animation timing

        const letterTimeout = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 5000);

        return () => {
            clearTimeout(loaderTimeout);
            clearTimeout(letterTimeout);
        };
    }, []);

    if (loading) {
            return <Loader type="pacman" />;
    }

    return (
      <>
        <div className="container about-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters
                      letterClass={letterClass}
                      strArray={['A','b','o','u','t',' ','m','e']}
                      idx={1}
                    />
                </h1>
                <p>
                Hi, I’m Choo Zhe Lim, you can call me David as well. I'm a passionate Software Developer with a strong foundation in Java and experience working across multiple 
                programming languages and technologies. I love turning complex problems into simple, elegant solutions through clean 
                and efficient code.Whether it's building robust backend systems, crafting smooth front-end interfaces, or contributing 
                to full-stack applications, I’m always excited to learn and grow. 
                </p>
                <p>
                    I'm currently open to new opportunities and would love to collaborate with forward-thinking individuals or teams.
                </p>
                <p>
                    If you're viewing this page and looking for someone dedicated, curious, and easy to work with — let's connect! 
                </p>
            </div>

            <div className="stage-cube-cont">
                <div className="cubespinner">
                    <div className="face1">
                        <FontAwesomeIcon icon={faDocker} color="#1D63ED" />
                    </div>
                    <div className="face2">
                        <FontAwesomeIcon icon={faJava} color="#F06529" />
                    </div>
                    <div className="face3">
                        <FontAwesomeIcon icon={faJenkins} color="#black" />
                    </div>
                    <div className="face4">
                        <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                    </div>
                    <div className="face5">
                        <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                    </div>
                    <div className="face6">
                        <FontAwesomeIcon icon={faGitlab} color="#EC4028" />
                    </div>
                </div>
            </div>
        </div>
      </>
    )
}

export default About