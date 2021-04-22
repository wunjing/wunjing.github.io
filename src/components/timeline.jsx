import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-briefcase" />
                      </div>
                      <div className="timeline-label">
                        <h2>RPA Developer Internship at BioQuest Advisory <span>May 2021-Nov 2021 (Expected)</span></h2>
                        <h5>Excited to learn new skills!</h5>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-briefcase" />
                      </div>
                      <div className="timeline-label">
                        <h2>Website Project Management Internship at Tektronz PTE LTD <span>Dec 2020-Jan 2021</span></h2>
                        <h5>• Managed troubleshooting efforts for published content, correct performance issues and malfunctions.</h5>
                        <h5>• Integrated SEO measures into all customer-facing content to optimize search rank and ease user discovery.</h5>
                        <h5>• Collaborated with the team to create sleek and innovative UI design.</h5>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Bachelor's Degree in NUS, Information Systems<span>2018-2021(Expected)</span></h2>
                        <h5>• Graduating in December 2021</h5>
                        <h5>• Fintech Society Dev Ops Team where we develop the Fintech Society Website. </h5>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-briefcase" />
                      </div>
                      <div className="timeline-label">
                        <h2>Human Resource Internship in Citibank <span>Mar 2017-Aug 2017</span></h2>
                        <h5>• Created and implemented forward-thinking initiatives to improve employee engagement.</h5> 
                        <h5>• Improved productivity initiatives while coordinating resignation process.</h5> 
                        <h5>• Prepared monthly termination lists to be added to permanent records.</h5> 
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Banking and Finance Diploma in Ngee Ann Polytechnic <span>2015-2018</span></h2>
                        <h5>• Graduated in Top 25% of Cohort</h5> 
                        <h5>• Member of Heartware Society where I volunteered for National Day Parade in 2016 and 2017</h5> 
                        <h5>• Leader for Business and Accountancy Orientation in 2015 and 2016</h5> 
                        <h5>• Member of Cambodia Youth Expedition Project in 2017</h5> 
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}