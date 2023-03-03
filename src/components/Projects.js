import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Button from './Button'
import Heading from './Heading'
import sata from './Sata'
import "./Projects.css"
import Fade from 'react-reveal/Fade';

const Projects = () => {
    const [projects, setProjects] = useState(sata);
    const [selectedCategory, setSelectedCategory] = useState(null);

    useEffect(() =>{
let filteredProjects = sata;

if (selectedCategory){
    filteredProjects = filteredProjects.filter(
        project => project.category === selectedCategory
    );
}
setProjects(filteredProjects);
        
    }, [selectedCategory]);
    const handleCategoryClick = category => {
        setSelectedCategory(category);
    };
  return (
    <div className='py-5' id='projects'>
      <Container>
        <Heading text='projects' text2='our projects'></Heading>
        <Row className='justify-content-center text-center mb-5'>
          <Fade left>
        <button onClick={() => setSelectedCategory(null)} className='category-button'>All</button>
        <button onClick={() => handleCategoryClick('Skyscraper')} className='category-button'>
        Skyscraper
        </button>
        <button onClick={() => handleCategoryClick('Villa')}className='category-button'>
          Villa
        </button>
        <button onClick={() => handleCategoryClick('House')} className='category-button'>Houses</button>
        </Fade>
        </Row>
        <Row>
           
        {projects.length ? (
          projects.map(project => (
            <Col lg={4} className='mb-4'>
              <Fade>
            <div key={project.id} className="image">
                <img className='image-img' src={project.img}></img>
                <div className='image-overlay'>
              <h2>{project.name}</h2>
              
            </div>
            </div>
            </Fade>
            </Col>
          ))
        ) : (
          <h2>No projects found.</h2>
        )}
       
        </Row>
      </Container>
    </div>
  )
}

export default Projects
