import React, { Component } from 'react'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Carousel from 'react-bootstrap/Carousel'
export default class Project extends Component {

  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="project">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">What i worked on</span>
                <h2 className="colorlib-heading animate-box">Projects</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="col-md-12 text-center animate-box">
                  <div className="services color-1 ">
                    <span className="icon">
                      <h2 style={{ color: 'white', marginTop: "5%" }}>EventStop</h2>
                    </span>
                    <div className="desc">
                      <Container >
                        <Row>
                          <Col lg={4} md={12} xs={12} style={{ textAlign: "left" }}>
                            <h3 style={{ fontWeight: "bold", color: "#a26eb5" }}>Collaboration with Whale Cloud Technology Co.</h3>
                            <br></br>
                            <h4>EventStop is the solution to a complete events management system which creates a clean and efficient interface to facilitate interaction between event organisers, their business partners and attendees (consumers). Using this service. Event Organisers are able to effortlessly organise large scale events involving multiple business partners within large event spaces.</h4>
                            <br></br>
                            <h3 style={{ fontWeight: "bold", color: "#a26eb5" }}>Code Conventions: </h3>
                            <h4 style={{ fontWeight: "bold" }}>SpringBoot, React, Next.js and Bootstrap</h4>
                            <br></br>
                            <h3 style={{ fontWeight: "bold", color: "#a26eb5" }}>Unique Features: </h3>
                            <h4 style={{ fontWeight: "bold" }}>Google Places API for efficient venue search, Ravenhub API for real-time notifications and Stripe API for payment.</h4>

                          </Col>
                          <Col lg={8} md={12} xs={12}>
                            <Carousel >
                              <Carousel.Item interval={1000}>
                                <h3 style={{ color: "#a26eb5" }}>Profile Page</h3>
                                <img
                                  className="d-block w-100"
                                  src="/images/project1.PNG"
                                  alt="First slide"
                                />

                              </Carousel.Item>
                              <Carousel.Item interval={500}>
                                <h3 style={{ color: "#a26eb5" }}>Create Event - Location </h3>
                                <img
                                  className="d-block w-100"
                                  src="/images/project1.2.PNG"
                                  alt="Second slide"
                                />

                              </Carousel.Item>
                              <Carousel.Item>
                                <h3 style={{ color: "#a26eb5" }}>Event Details - Business Partner/Attendee's View</h3>
                                <img
                                  className="d-block w-100"
                                  src="/images/project1.3.PNG"
                                  alt="Third slide"
                                />

                              </Carousel.Item>
                              <Carousel.Item>
                                <h3 style={{ color: "#a26eb5" }}>Event Details - Organiser's View</h3>
                                <img
                                  className="d-block w-100"
                                  src="/images/project1.5.PNG"
                                  alt="Third slide"

                                />

                              </Carousel.Item>
                              <Carousel.Item>
                                <h3 style={{ color: "#a26eb5" }}>Homepage</h3>
                                <img
                                  className="d-block w-100"
                                  src="/images/project1.4.PNG"
                                  alt="Third slide"

                                />

                              </Carousel.Item>
                              <Carousel.Item>
                                <h3 style={{ color: "#a26eb5" }}>Dashboard</h3>
                                <img
                                  className="d-block w-100"
                                  src="/images/project1.6.PNG"
                                  alt="Third slide"
                                  maxHeight="450px"

                                />

                              </Carousel.Item>

                            </Carousel>                          </Col>
                        </Row>
                        <br></br>
                      </Container>

                    </div>
                  </div>
                </div>
              </div>
            </div>
            <br></br>
            <div className="row">
              <div className="col-md-12">
                <div className="col-md-12 text-center animate-box">
                  <div className="services color-3 ">
                    <span className="icon">
                      <h2 style={{ color: 'white', marginTop: "5%" }}>Subscribify</h2>
                    </span>
                    <div className="desc">
                      <Container>
                        <Row>
                          <Col lg={4} md={12} xs={12} style={{ textAlign: "left" }}>
                            <h4>Subscribify is a subscription marketplace where consumers can subscribe to products listed by the merchants in the platform. It is done with two application - one for the merchants and the other for consumers.</h4>
                            <br></br>
                            <h3 style={{ fontWeight: "bold", color: "#a26eb5" }}>Code Conventions for Merchant Side Applciation: </h3>
                            <h4 style={{ fontWeight: "bold" }}>JavaServer Faces (JSF), Java EE and MySQL</h4>
                            <br></br>
                            <h3 style={{ fontWeight: "bold", color: "#a26eb5" }}>Code Conventions for Consumer Side Applciation: </h3>
                            <h4 style={{ fontWeight: "bold" }}>Angular TypeScript, Java EE and MySQL</h4>
                            <br></br>
                          </Col>
                          <Col lg={8} md={12} xs={12}>
                            <Carousel >
                              <Carousel.Item interval={1000}>
                                <h3 style={{ color: "#a26eb5" }}>Consumer - Homepage</h3>
                                <img
                                  className="d-block w-100"
                                  src="/images/carousel1.png"
                                  alt="First slide"
                                />

                              </Carousel.Item>
                              <Carousel.Item interval={500}>
                                <h3 style={{ color: "#a26eb5" }}>Consumer - View Products </h3>
                                <img
                                  className="d-block w-100"
                                  src="/images/carousel2.png"
                                  alt="Second slide"
                                />

                              </Carousel.Item>
                              <Carousel.Item>
                                <h3 style={{ color: "#a26eb5" }}>Consumer - Pause Subscription</h3><img
                                  className="d-block w-100"
                                  src="/images/carousel3.png"
                                  alt="Third slide"
                                />

                              </Carousel.Item>
                              <Carousel.Item>
                                <h3 style={{ color: "#a26eb5" }}>Merchant - View Products </h3> <img
                                  className="d-block w-100"
                                  src="/images/carousel4.png"
                                  alt="Third slide"

                                />

                              </Carousel.Item>

                            </Carousel>

                          </Col>
                        </Row>
                        <br></br>
                      </Container>

                    </div>
                  </div>
                </div>
              </div>
            </div>
            <br></br>
            <div className="row">
              <div className="col-md-12">
                <div className="col-md-12 text-center animate-box">
                  <div className="services color-5 ">
                    <span className="icon">
                      <h2 style={{ color: 'white', marginTop: "5%" }}>FDS</h2>
                    </span>
                    <div className="desc">
                      <Container>
                        <Row>
                          <Col lg={4} md={12} xs={12} style={{ textAlign: "left" }}>
                            <h4>Food Delivery System(FDS) is a platform where consumers can order food and the application keeps track of restaurants, their respective food categories and food items and deliverymen's work schedule.</h4>
                            <br></br>
                            <h3 style={{ fontWeight: "bold", color: "#a26eb5" }}>Code Conventions: </h3>
                            <h4 style={{ fontWeight: "bold" }}>Vue, Node.js, PostgreSQL</h4>
                            <br></br>

                          </Col>
                          <Col lg={8} md={12} xs={12}>
                            <Carousel >
                              <Carousel.Item interval={1000}>
                                <h3 style={{ color: "#a26eb5" }}>Browse Restaurants and Menu</h3><img
                                  className="d-block w-100"
                                  src="/images/galleria1.png"
                                  alt="First slide"
                                />

                              </Carousel.Item>
                              <Carousel.Item interval={500}>
                                <h3 style={{ color: "#a26eb5" }}>Dashboard </h3> <img
                                  className="d-block w-100"
                                  src="/images/galleria2.png"
                                  alt="Second slide"
                                />

                              </Carousel.Item>
                              <Carousel.Item>
                                <h3 style={{ color: "#a26eb5" }}>Payroll Management</h3><img
                                  className="d-block w-100"
                                  src="/images/galleria3.png"
                                  alt="Third slide"
                                />

                              </Carousel.Item>
                              <Carousel.Item>
                                <h3 style={{ color: "#a26eb5" }}>Work Schedule Allocation </h3>
                                <img
                                  className="d-block w-100"
                                  src="/images/galleria4.png"
                                  alt="Third slide"

                                />

                              </Carousel.Item>

                            </Carousel>

                          </Col>
                        </Row>
                        <br></br>
                      </Container>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}