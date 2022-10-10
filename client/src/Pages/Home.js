import React from 'react'
import './css/demohome.css'
import './js/scripts.js'
import p1 from './assets/img/portfolio/cate4.jpg'
import p5 from './assets/img/portfolio/cate2.jpg'
import p3 from './assets/img/portfolio/cate3.jpg'
import p4 from './assets/img/portfolio/cate5.jpg'
import p2 from './assets/img/portfolio/cate1.jpg'
import p6 from './assets/img/portfolio/cate6.jpg'
import a1 from './assets/img/about/about12.jpg'
import a2 from './assets/img/about/2.jpg'
import a3 from './assets/img/about/about2.jpg'

import t1 from './assets/img/team/profile13.jpg'
import t2 from './assets/img/team/profile2.JPG'
import t3 from './assets/img/team/profile3.jpg'
import t4 from './assets/img/team/profile4.jpg'
import close from './assets/img/close-icon.svg'


function Homedemo() {
    return (
        <div  id="page-top">
            <header className="masthead" >
            <div className="container">
                <div className="masthead-subheading">Welcome To PetZone!</div>
                <div className="masthead-heading text-uppercase">It's Nice To Meet You</div>
                <a className="btn  btn-xl text-uppercase" href="#services" style={{backgroundColor:"#fcd303", color:"white", fontWeight:'bold', padding:'15px 20px 15px 20px', borderRadius:'5px'}} >Tell Me More</a>
            </div>
         </header>
     
         <section className="page-section" id="services">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase" style={{fontWeight:"bold"}}>Services</h2>
                    <h3 className="section-subheading text-muted">To keep a customer demands as much skill as to win one.</h3>
                </div>
                <div className="row " style={{textAlign:"center"}} >
               
                    <div className="col-md-4" >
                        <span className="fa-stack fa-3x" style={{marginRight:"140px"}}>
                            <i className="fas fa-circle fa-stack-2x " style={{color:"#fcd303"}} ></i>
                            <i className="fas fa-shopping-cart fa-stack-1x fa-inverse"style={{marginLeft:"85px"}} ></i>
                        </span>
                        <h4 className="my-5" style={{textAlign:"center",fontWeight:"bold"}} >E-Commerce</h4>
                        <p className="text-muted pstyle">pet lovers can buy pets formm petzone throught this website</p>
                    </div>
                 
                    <div className="col-md-4" >
                        <span className="fa-stack fa-3x" style={{marginRight:"140px"}}>
                            <i className="fas fa-circle fa-stack-2x " style={{color:"#fcd303"}} ></i>
                            <i className="fa fa-motorcycle fa-stack-1x fa-inverse"style={{marginLeft:"85px"}} ></i>
                        </span>
                        <h4 className="my-5" style={{textAlign:"center",fontWeight:"bold"}} >Delivery</h4>
                        <p className="text-muted pstyle">petzone willbe deliver pets as home delivery</p>
                    </div>
                    <div className="col-md-4" >
                        <span className="fa-stack fa-3x" style={{marginRight:"140px"}}>
                            <i className="fas fa-circle fa-stack-2x " style={{color:"#fcd303"}} ></i>
                            <i className="fa fa-paw fa-stack-1x fa-inverse"style={{marginLeft:"90px"}} ></i>
                        </span>
                        <h4 className="my-5" style={{textAlign:"center",fontWeight:"bold"}} >Breeding Pets</h4>
                        <p className="text-muted pstyle">we are the first breeders in northen province</p>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- Portfolio Grid--> */}

        <section className="page-section bg-light" id="portfolio">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase" style={{fontWeight:"bold"}}>Our products</h2>
                    <h3 className="section-subheading text-muted">Our PetZone Breeding Items</h3>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-sm-6 mb-4">
                        {/* <!-- Portfolio item 1--> */}
                        <div className="portfolio-item">
                            <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal1">
                                <div className="portfolio-hover">
                                    <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img className="img-fluid" src={p1} alt="..." />
                            </a>
                            <div className="portfolio-caption">
                                <div className="portfolio-caption-heading">Finchers</div>
                                <div className="portfolio-caption-subheading text-muted">Bird</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 mb-4">
                        {/* <!-- Portfolio item 2--> */}
                        <div className="portfolio-item">
                            <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal2">
                                <div className="portfolio-hover">
                                    <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img className="img-fluid" src={p2}alt="..."  style={{height:'300px', width:"100%"}}/>
                            </a>
                            <div className="portfolio-caption">
                                <div className="portfolio-caption-heading">Beta</div>
                                <div className="portfolio-caption-subheading text-muted">Fish</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 mb-4">
                        {/* <!-- Portfolio item 3--> */}
                        <div className="portfolio-item">
                            <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal3">
                                <div className="portfolio-hover">
                                    <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img className="img-fluid" src={p3} alt="..." style={{height:'300px', width:"100%"}}/>
                            </a>
                            <div className="portfolio-caption">
                                <div className="portfolio-caption-heading">Shrimp</div>
                                <div className="portfolio-caption-subheading text-muted">Fish</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 mb-4 mb-lg-0">
                        {/* <!-- Portfolio item 4--> */}
                        <div className="portfolio-item">
                            <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal4">
                                <div className="portfolio-hover">
                                    <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img className="img-fluid" src={p4} alt="..."style={{height:'300px', width:"100%"}} />
                            </a>
                            <div className="portfolio-caption">
                                <div className="portfolio-caption-heading">Cary</div>
                                <div className="portfolio-caption-subheading text-muted">Fish</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 mb-4 mb-sm-0">
                        {/* <!-- Portfolio item 5--> */}
                        <div className="portfolio-item">
                            <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal5">
                                <div className="portfolio-hover">
                                    <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img className="img-fluid" src={p5} alt="..." style={{height:'300px', width:"100%"}}/>
                            </a>
                            <div className="portfolio-caption">
                                <div className="portfolio-caption-heading">Azolla</div>
                                <div className="portfolio-caption-subheading text-muted">Food</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        {/* <!-- Portfolio item 6--> */}
                        <div className="portfolio-item">
                            <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal6">
                                <div className="portfolio-hover">
                                    <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img className="img-fluid" src={p6} alt="..." style={{height:'300px', width:"100%"}}/>
                            </a>
                            <div className="portfolio-caption">
                                <div className="portfolio-caption-heading">Pubs</div>
                                <div className="portfolio-caption-subheading text-muted">Dog</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- About--> */}
        <section className="page-section" id="about">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase" style={{fontWeight:"bold"}}>About</h2>
                    <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
                <ul className="timeline">
                    <li>
                        <div className="timeline-image"><img className="rounded-circle img-fluid" src={a1} alt="..." /></div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                                <h4 style={{fontWeight:"bold"}}>2018</h4>
                                <h4 className="subheading " style={{fontWeight:"bold"}}>Our Humble Beginnings</h4>
                            </div>
                            <div className="timeline-body"><p className="text-muted pstyle2">We started to grow accquirm and breed them in samll scale in our home town with out any employees.</p></div>
                        </div>
                    </li>
                    <li className="timeline-inverted">
                        <div className="timeline-image"><img className="rounded-circle img-fluid" src={a2} alt="..." /></div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                                <h4 style={{fontWeight:"bold"}}>2021</h4>
                                <h4 className="subheading" style={{fontWeight:"bold"}}>Intro Online Platform</h4>
                            </div>
                            <div className="timeline-body"><p className="text-muted pstyle2">We build our breeding center with the expansion and also launch our  online web platform successfully.</p></div>
                        </div>
                    </li>
                    <li>
                        <div className="timeline-image"><img className="rounded-circle img-fluid" src={a3} alt="..." /></div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                                <h4 style={{fontWeight:"bold"}}>2023</h4>
                                <h4 className="subheading" style={{fontWeight:"bold"}}>Making Exports</h4>
                            </div>
                            <div className="timeline-body"><p className="text-muted pstyle2">We are planning to make exports all overthe contries and we will capture the island with in 2023.</p></div>
                        </div>
                    </li>
                
                    <li className="timeline-inverted">
                        <div className="timeline-image">
                            <h4>
                                Be Part
                                <br />
                                Of Our
                                <br />
                                Story!
                            </h4>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
        {/* <!-- Team--> */}
        <section className="page-section bg-light" id="team">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase"  style={{fontWeight:"bold"}}>Our Amazing Team</h2>
                    <h3 className="section-subheading text-muted">PetZone</h3>
                </div>
                <div className="row">
                    <div className="col-lg-3">
                        <div className="team-member">
                            <img className="mx-auto rounded-circle" src={t1}alt="..." />
                            <h4 style={{fontWeight:"bold"}}>Dixshan</h4>
                            <p className="text-muted pstyle1" >Founder</p>
                            <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-twitter"></i></a>
                            <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-facebook-f"></i></a>
                            <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="team-member">
                            <img className="mx-auto rounded-circle" src={t2} alt="..." />
                            <h4 style={{fontWeight:"bold"}}>Jeyantharan</h4>
                            <p className="text-muted pstyle1 ">Lead Marketer</p>
                            <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-twitter"></i></a>
                            <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-facebook-f"></i></a>
                            <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="team-member">
                            <img className="mx-auto rounded-circle" src={t3} alt="..." />
                            <h4 style={{fontWeight:"bold"}}>Kopika</h4>
                            <p className="text-muted pstyle1">Lead Developer</p>
                            <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-twitter"></i></a>
                            <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-facebook-f"></i></a>
                            <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>

                    <div className="col-lg-3">
                        <div className="team-member">
                            <img className="mx-auto rounded-circle" src={t4} alt="..." />
                            <h4 style={{fontWeight:"bold"}}>Vithya</h4>
                            <p className="text-muted pstyle1">Lead Accountant</p>
                            <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-twitter"></i></a>
                            <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-facebook-f"></i></a>
                            <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-8 mx-auto text-center"><p className="large text-muted">We always with you</p></div>
                </div>
            </div>
        </section>


        
        {/* <!-- Clients-->
        
        <!-- Contact-->
        
        <!-- Footer-->
       
        <!-- Portfolio Modals-->
        <!-- Portfolio item 1 modal popup--> */}
        <div className="portfolio-modal modal fade" id="portfolioModal1" tabindex="-1" role="dialog" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="close-modal" data-bs-dismiss="modal"><img src={close}alt="Close modal"/></div>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="modal-body">
                                    {/* <!-- Project details--> */}
                                    <h2 className="text-uppercase" style={{fontWeight:"bold"}}>Finchers</h2>
                                    <p className="item-intro text-muted">Queen of birds.</p>
                                    <img className="img-fluid d-block mx-auto" src={p1} alt="..."  style={{width:"610px"}}/>
                                    <p className="pstyle2">The true finches are small to medium-sized passerine birds in the family Fringillidae. Finches have stout conical bills adapted for eating seeds and nuts and often have colourful plumage.</p>
                                    <ul className="list-inline">
                                        
                                        <li className="pstyle2">
                                            <strong className="pstyle2">Category:</strong>
                                            Birds
                                        </li>
                                    </ul>
                                    <button className="btn  btn-xl text-uppercase pstyle2" data-bs-dismiss="modal" type="button" style={{backgroundColor:"rgba(245, 208, 39, 1)", color:"white", fontWeight:'bold', fontSize:"20px", padding:'15px 30px 15px 30px', borderRadius:'5px'}}>
                                        <i className="fas fa-times me-1"  ></i>
                                        Close Category
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Portfolio item 2 modal popup--> */}
        <div className="portfolio-modal modal fade" id="portfolioModal2" tabindex="-1" role="dialog" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="close-modal" data-bs-dismiss="modal"><img src={close} alt="Close modal" /></div>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="modal-body">
                                    {/* <!-- Project details--> */}
                                    <h2 className="text-uppercase">Project Name</h2>
                                    <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                                    <img className="img-fluid d-block mx-auto" src={p2} alt="..."/>
                                    <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                                    <ul className="list-inline">
                                        <li>
                                            <strong>Client:</strong>
                                            Explore
                                        </li>
                                        <li>
                                            <strong>Category:</strong>
                                            Graphic Design
                                        </li>
                                    </ul>
                                    <button className="btn  btn-xl text-uppercase" data-bs-dismiss="modal" type="button" style={{backgroundColor:"#fcd303", color:"white", fontWeight:'bold', padding:'15px 20px 15px 20px', borderRadius:'5px'}}>
                                        <i className="fas fa-times me-1"></i>
                                        Close Project
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Portfolio item 3 modal popup--> */}
        <div className="portfolio-modal modal fade" id="portfolioModal3" tabindex="-1" role="dialog" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="close-modal" data-bs-dismiss="modal"><img src={close} alt="Close modal" /></div>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="modal-body">
                                    {/* <!-- Project details--> */}
                                    <h2 className="text-uppercase">Project Name</h2>
                                    <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                                    <img className="img-fluid d-block mx-auto"src={p3}  alt="..." />
                                    <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                                    <ul className="list-inline">
                                        <li>
                                            <strong>Client:</strong>
                                            Finish
                                        </li>
                                        <li>
                                            <strong>Category:</strong>
                                            Identity
                                        </li>
                                    </ul>
                                    <button className="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                                        <i className="fas fa-times me-1"></i>
                                        Close Project
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Portfolio item 4 modal popup--> */}
        <div className="portfolio-modal modal fade" id="portfolioModal4" tabindex="-1" role="dialog" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="close-modal" data-bs-dismiss="modal"><img  src={close} alt="Close modal" /></div>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="modal-body">
                                    {/* <!-- Project details--> */}
                                    <h2 className="text-uppercase">Project Name</h2>
                                    <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                                    <img className="img-fluid d-block mx-auto" src={p4}  alt="..." />
                                    <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                                    <ul className="list-inline">
                                        <li>
                                            <strong>Client:</strong>
                                            Lines
                                        </li>
                                        <li>
                                            <strong>Category:</strong>
                                            Branding
                                        </li>
                                    </ul>
                                    <button className="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                                        <i className="fas fa-times me-1"></i>
                                        Close Project
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Portfolio item 5 modal popup--> */}
        <div className="portfolio-modal modal fade" id="portfolioModal5" tabindex="-1" role="dialog" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="close-modal" data-bs-dismiss="modal"><img  src={close} alt="Close modal" /></div>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="modal-body">
                                    {/* <!-- Project details--> */}
                                    <h2 className="text-uppercase">Project Name</h2>
                                    <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                                    <img className="img-fluid d-block mx-auto" src={p5}  alt="..." />
                                    <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                                    <ul className="list-inline">
                                        <li>
                                            <strong>Client:</strong>
                                            Southwest
                                        </li>
                                        <li>
                                            <strong>Category:</strong>
                                            Website Design
                                        </li>
                                    </ul>
                                    <button className="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                                        <i className="fas fa-times me-1"></i>
                                        Close Project
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Portfolio item 6 modal popup--> */}
        <div className="portfolio-modal modal fade" id="portfolioModal6" tabindex="-1" role="dialog" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="close-modal" data-bs-dismiss="modal"><img  src={close} alt="Close modal" /></div>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="modal-body">
                                    {/* <!-- Project details--> */}
                                    <h2 className="text-uppercase">Project Name</h2>
                                    <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                                    <img className="img-fluid d-block mx-auto" src={p6}  alt="..." />
                                    <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                                    <ul className="list-inline">
                                        <li>
                                            <strong>Client:</strong>
                                            Window
                                        </li>
                                        <li>
                                            <strong>Category:</strong>
                                            Photography
                                        </li>
                                    </ul>
                                    <button className="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                                        <i className="fas fa-times me-1"></i>
                                        Close Project
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Homedemo
