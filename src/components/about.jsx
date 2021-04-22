import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="about-desc">
                    <span className="heading-meta">About Me</span>
                    <h2 className="colorlib-heading">Aspiring Software Developer</h2>
                    <h5>I am in my final year of my bachelor's degree in NUS, School of Computing (Information Systems). I aspire to build a career as a Software Developer in the IT industry.</h5>
                    <h5> During my free time, I participate in projects to hone my techncial skills such as building web and mobile applications and trying out activities in UIPath Studio. I completed a React Native and Firebase project which is to built a mobile application on grocery shopping list.</h5>
 
<h5> On the side, I also take online courses on Six Sigma Projects and on Project Management Skills. Beyond my technical skills, I aim to build on my communication and leadership skills by actively volunteering in events.</h5>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        <section className="colorlib-about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">What I do?</span>
                <h2 className="colorlib-heading">Here are some of my expertise</h2>
            </div>
            </div>
            <div className="row row-pt-md">
            <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                <span className="icon">
                    <i className="icon-display2" />
                </span>
                <div className="desc">
                    <h3>Web Development </h3>
                    <h5>I have experience building websites using JavaScript,React,React Native, HTML,CSS.</h5>
                    <h5>With SpringBoot, Django and Firebase as backend. MySQL and PostgreSQl as database.</h5>
                    <br></br>

                    <p className="slider-text"><a className="btn btn-outline-dark" href="/images/NUScert.pdf" target="_blank" rel="noopener noreferrer">View Cert<i className="icon-download4" /></a></p>                


                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                <span className="icon">
                    <i className="icon-bulb" />
                </span>
                <div className="desc">
                    <h3>RPA</h3>
                    <h5>Pursuing a 6 months internship as a RPA Developer in BioQuest Advisory. </h5>
                    <h5>  Obtained UIPath RPA Developer Foundation and Developer Advanced Certifications. </h5>
                    <br></br>
                    <p className="slider-text"><a className="btn btn-outline-dark" href="/images/uipathcert.pdf" target="_blank" rel="noopener noreferrer">View Cert<i className="icon-download4" /></a></p>                </div>
                </div>
                </div>

            <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                <span className="icon">
                    <i className="icon-data" />
                </span>
                <div className="desc">
                    <h3>Project Management</h3>
                    <h5>I have experience in MS Project and currently taking courses on Six Sigma.</h5>
                    <h5>Obtained AIGPE’s Six Sigma Yellow Belt Certification.</h5>
                    <br></br>
                    <br></br>
                    <p className="slider-text"><a className="btn btn-outline-dark" href="/images/sixsigma.pdf" target="_blank" rel="noopener noreferrer">View Cert<i className="icon-download4" /></a></p>                </div>
                </div>
            </div>
{/*             
            <div className="col-md-4 text-center animate-box">
                <div className="services color-2">
                <span className="icon">
                    <i className="icon-data" />
                </span>
                <div className="desc">
                    <h3>Dev Ops</h3>
                    <p>Jenkins , Kubernetes , Docker </p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-4">
                <span className="icon">
                    <i className="icon-layers2" />
                </span>
                <div className="desc">
                    <h3>Graphic Design</h3>
                    <p>My friend knows .. P</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-6">
                <span className="icon">
                    <i className="icon-phone3" />
                </span>
                <div className="desc">
                    <h3>Digital Marketing</h3>
                    <p>I use Instagram eight hours a day :) </p>
                </div>
                </div>
            </div>
            */}
            </div>
        </div>
        </section>
      </div>
    )
  }
}