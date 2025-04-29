import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/logo-d.png';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';
import Logo from './Logo';
import Loader from 'react-loaders';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const [loading, setLoading] = useState(true); // <- Add loading state

    const nameArray = ['a','v','i','d'];
    const jobArray = ['S','o','f','t','w','a','r','e',' ','D','e','v','e','l','o','p','e','r'];

    useEffect(() => {
        const loaderTimeout = setTimeout(() => {
            setLoading(false); // <- Stop loading after timeout
        }, 500); // Adjust this to match loader animation timing

        const letterTimeout = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 6000);

        return () => {
            clearTimeout(loaderTimeout);
            clearTimeout(letterTimeout);
        };
    }, []);

    if (loading) {
        return <Loader type="pacman" />;
    }

    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i</span>
                    <span className={`${letterClass} _13`}>,</span>
                    <br /> 
                    <span className={`${letterClass} _14`}>I</span>
                    <span className={`${letterClass} _15`}>'</span>
                    <span className={`${letterClass} _16`}>m</span>
                    <span className={`${letterClass} _17`}>,</span>
                    <img src={LogoTitle} alt="developer" />
                    <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={nameArray}
                        idx={15} 
                    />
                    <br />
                    <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={jobArray}
                        idx={18} 
                    />
                </h1>
                <h2>Java Developer/ Freelance Developer / Editor</h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
            <Logo/>
        </div>
    );
};


export default Home