import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

import Container from 'react-bootstrap/Container'
export default class Introduction extends Component {
    render() {
        return (
            <div>
                <section id="colorlib-hero" className="js-fullheight" data-section="home">
                    <div className="flexslider js-fullheight">
                        <ul className="slides">
                            <li style={{ backgroundImage: 'url(images/background.jpeg)' }}>
                                <div className="overlay" />
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-md-12 col-sm-12 col-xs-12 js-fullheight slider-text">
                                            <div className="slider-text-inner js-fullheight">
                                                <div className="desc" style={{ marginBottom: "200px" }}>
                                                    <h1>Hello there. I'm Wun Jing</h1>
                                                    {/* ADD CV HERE FOR DOWNLOAD */}
                                                    <p><a className="btn btn-primary btn-learn" href="/images/CV.pdf" target="_blank" rel="noopener noreferrer">View CV<i className="icon-download4" /></a></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li style={{ backgroundImage: 'url(images/background3.jpg)' }}>
                                <div className="overlay" />
                                <Container className="js-fullheight" style={{textAlign : "center", display:"flex", justifyContent: "center"}}>
                                {/* <Row >
                                <Col lg={12} md={12} xs={12} className="slider-text">
                                 <div className="slider-text-inner">
                                                <div className="desc">
                                                    <h1>Web Development Projects!!</h1>
                                                    <p><a className="btn btn-primary btn-learn" href="#timeline" target="_blank" rel="noopener noreferrer">View Projects <i className="icon-briefcase3" /></a></p>
                                                </div>
                                             </div> 
                                    </Col>
                                    </Row> */}
                                    <br></br>
                                    <br></br>
                                    <Row >
                                    <Col lg={12} md={12} xs={12} className="slider-text">
                                 <div className="slider-text-inner">
                                                <div className="desc">
                                                    <h1>Web Development Projects!!</h1>
                                                    <p><a className="btn btn-primary btn-learn" href="#project" target="_blank" rel="noopener noreferrer">View Projects <i className="icon-briefcase3" /></a></p>
                                                    <br></br> 
                                                </div> 
                                                <br></br> 
                                                
                                                 <Card style={{maxHeight:"500px"}}>
                                                            <Card.Img variant="top" src="images/project1.PNG" style={{maxHeight:"380px"}}/>
                                                            <Card.Body>
                                                                <Card.Title><h2>EventStop</h2></Card.Title>
                                                                <Card.Text>
                                                                    <h2>An Event Management System, in collboration with WhaleCloud Technology Co., Ltd</h2>
                                                                </Card.Text>
                                                                {/* <Button variant="primary">Go somewhere</Button> */}
                                                            </Card.Body>
                                                        </Card>
                                             </div> 
                                    </Col>
                              
                                     
                                            {/* <div className="slider-text" > 
                                            <div className="slider-text-inner" style={{textAlign:"left"}}>
                                                <div className="desc">
                                                    <h1>Web Development Projects!!</h1>
                                                    <p><a className="btn btn-primary btn-learn" href="#timeline" target="_blank" rel="noopener noreferrer">View Projects <i className="icon-briefcase3" /></a></p>
                                                </div>
                                             </div>  */}
                                                     
                                                    {/* </div> */}

                                    </Row>

                                </Container>
                               
                            </li>
                          
                        </ul>
                    </div>
                </section>
            </div>
        )
    }
}