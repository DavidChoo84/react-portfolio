import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useState, useEffect } from 'react'
import Loader from 'react-loaders'
import work1 from '../../assets/images/work1.jpg'
import work2 from '../../assets/images/work2.jpg'
import work3 from '../../assets/images/work3.jpeg'
import work4 from '../../assets/images/work4.jpg'

const images = [work1, work2, work3, work4]

const WorkExperience = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const [imageIndex, setImageIndex] = useState(0)
  const [experienceIndex, setExperienceIndex] = useState(0)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prev) => (prev + 1) % images.length)
    }, 4000)

    const loaderTimeout = setTimeout(() => setLoading(false), 1000)
    const letterTimeout = setTimeout(() => setLetterClass('text-animate-hover'), 5000)

    return () => {
      clearInterval(interval)
      clearTimeout(loaderTimeout)
      clearTimeout(letterTimeout)
    }
  }, [])

  const goToPrevImage = () => {
    setImageIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  const goToNextImage = () => {
    setImageIndex((prev) => (prev + 1) % images.length)
  }

  const goToPrevExperience = () => {
    setExperienceIndex((prev) => (prev - 1 + experiences.length) % experiences.length)
  }

  const goToNextExperience = () => {
    setExperienceIndex((prev) => (prev + 1) % experiences.length)
  }

  const experiences = [
    {
      company: 'Silverlake Axis | Petaling Jaya, Malaysia',
      role: 'Software Developer ',
      period: ' March 2023 – Present',
      description:
        ['Provide backend solution and enhance for reported Jira ticket or RSD.',
          'Implemented and enhanced the core banking function for an under developed project based on user requirement.',
          'Provided guidance for newcomers during onboarding session and solving reported Jira tickets.',
          'Gaining experience using Postman (API Platform) to run local test to ensure the enhancement and implementation fulfill the requirement.',
          'Gaining hands-on experience with Aliyun Kubernetes (Alibaba Cloud) for container log inspection in a baseline project.'
        ]
    },
    {
      company: 'Silverlake Axis | Petaling Jaya, Malaysia',
      role: 'Software Developer Intern',
      period: 'Sep 2022 – Jan 2023',
      description:
        ['Completed Java learning materials, database and resources setup for onboarding. ',
          'Managed to rearrange the structure of database in testing environment using MySQL.',
          'Completed an enhancement of a program to use Kafka in testing environment.',
          'Coordinated and communicated with teams to deliver the development.'
        ],
    },
  ]

  if (loading) {
    return <Loader type="pacman" />
  }

  return (
    <div className="container workexperience-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['W', 'o', 'r', 'k', ' ', 'E', 'x', 'p', 'e', 'r', 'i', 'e', 'n', 'c', 'e']}
            idx={1}
          />
        </h1>

        <div className="experience-wrapper paged">
          <div className="experience-box fade-transition" key={experienceIndex}>
            <h2>{experiences[experienceIndex].company}</h2>
            <h3>{experiences[experienceIndex].role}</h3>
            <span className="period">{experiences[experienceIndex].period}</span>
            <ul className="bullet-list">
              {experiences[experienceIndex].description.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="paging-controls">
            <button onClick={goToPrevExperience} className="paging-btn stylish-btn">&#10094; Prev</button>
            <div className="dot-indicators">
              {experiences.map((_, idx) => (
                <span
                  key={idx}
                  className={`dot ${idx === experienceIndex ? 'active' : ''}`}
                  onClick={() => setExperienceIndex(idx)}
                />
              ))}
            </div>
            <button onClick={goToNextExperience} className="paging-btn stylish-btn">Next &#10095;</button>
          </div>
        </div>
      </div>

      <div className="slider-container">
        <div className="slider-image-wrapper">
          {images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`slide-${i}`}
              className={`slider-image ${i === imageIndex ? 'active' : ''}`}
            />
          ))}
        </div>
        <button className="slider-btn prev" onClick={goToPrevImage}>&#10094;</button>
        <button className="slider-btn next" onClick={goToNextImage}>&#10095;</button>
      </div>
    </div>
  )
}

export default WorkExperience
