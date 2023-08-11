import React, { useContext } from 'react';
import Htag from './UI/H1toH6/Htag';
import Icon from './UI/Icon/Icon';
import Titel from './UI/Title/Titel';
import { ThemeContext } from './Context/ThemeContext';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

function Home(props) {
    let theme = useContext(ThemeContext);
    let color = theme.theme === 'dark' ? 'color' : '';
    let color1 = theme.theme === 'dark' ? 'color1' : '';
    let color2 = theme.theme === 'dark' ? 'color2' : 'counts';
    let color3 = theme.theme === 'dark' ? 'color3' : 'services';
    let color4 = theme.theme === 'dark' ? 'color4' : '';
    let color5 = theme.theme === 'dark' ? 'color5' : '';
    let color6 = theme.theme === 'dark' ? 'color6' : '';
    let color8 = theme.theme === 'dark' ? 'color8' : '';

    return (
        <div>
            <section id="hero" className="d-flex align-items-center">
                <div className="container">
                    <h1 className={`${color}`}>Welcome to City <br />Multispeciality Hospital</h1>
                    <h2 className={`${color}`}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h2>
                </div>
            </section>
            <main id="main">
                <section id="why-us" className="why-us">
                </section>
                <section id="counts" className={`counts ${color2}`}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-6">
                                <div className={`count-box ${color3}`}>
                                    <i className={`fas fa-user-md ${color4}`} />
                                    <span className={`${color}`}>23</span>
                                    <p className={`${color1}`}>Doctors</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 mt-5 mt-md-0">
                                <div className={`count-box ${color3}`}>
                                    <i className={`far fa-hospital ${color4}`} />
                                    <span className={`${color}`}>18</span>
                                    <p className={`${color1}`}>Departments</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
                                <div className={`count-box ${color3}`}>
                                    <i className={`fas fa-heartbeat ${color4}`} />
                                    <span className={`${color}`}>980</span>
                                    <p className={`${color1}`}>Patients</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
                                <div className={`count-box ${color3}`}>
                                    <i className={`fas fa-award ${color4}`} />
                                    <span className={`${color}`}>12</span>
                                    <p className={`${color1}`}>Awards</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="services" className={`services ${color3}`}>
                    <div className="container">
                        <div className={`section-title ${color}`}>
                            <Htag name="h2tag" >Our Facilities</Htag>
                            <p>Nunc aliquam eget nibh eu euismod. Donec dapibus blandit quam volutpat sollicitudin. Fusce tincidunt sit
                                amet ex in volutpat. Donec lacinia finibus tortor. Curabitur luctus eleifend odio. Phasellus placerat mi et
                                suscipit pulvinar. Donec quis tristique lectus.</p>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                                <div className="icon-box">
                                    <div className="icon"><i className="fas fa-hospital-alt" /></div>
                                    <h4><a href>24x7 Emergency Available</a></h4>
                                    <p>Nullam accumsan, velit et porta consequat, purus leo congue risus</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
                                <div className="icon-box">
                                    <div className="icon"><i className="fas fa-bed" /></div>
                                    <h4><a href>40+ Bed Facilities</a></h4>
                                    <p>Pellentesque id felis elit. Pellentesque blandit sem a nisi dictum</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
                                <div className="icon-box">
                                    <div className="icon"><i className="fas fa-hospital-user" /></div>
                                    <h4><a href>Cardiogram Machine</a></h4>
                                    <p>Donec lacinia finibus tortor. Curabitur luctus eleifend odio.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                                <div className="icon-box">
                                    <div className="icon"><i className="fas fa-dna" /></div>
                                    <h4><a href>X-ray and Sonography</a></h4>
                                    <p>Aliquam auctor felis ut sem elementum, ac rutrum turpis venenatis.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                                <div className="icon-box">
                                    <div className="icon"><i className="fas fa-wheelchair" /></div>
                                    <h4><a href>Semi Special, Special and Delux Room Available</a></h4>
                                    <p>Etiam in massa eu neque euismod consectetur.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                                <div className="icon-box">
                                    <div className="icon"><i className="fas fa-notes-medical" /></div>
                                    <h4><a href>Medical</a></h4>
                                    <p>Morbi vulputate, tortor nec pellentesque molestie</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="testimonials" className={`testimonials ${color3}`}>
                    <div className="container">
                        <div className="section-title"><Htag name="h2tag1">Reviews</Htag></div>

                        <div className="testimonials-slider swiper-container" data-aos="fade-up" data-aos-delay={100}>
                            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                                <SwiperSlide>
                                    <div className="swiper-slide">
                                        <div className="testimonial-wrap">
                                            <div className={`testimonial-item ${color5}`}>
                                                <img src="assets/img/testimonials/testimonials-1.jpg" className="testimonial-img" alt />
                                                <h3 className={`${color}`}>Jacob Wilsson</h3>
                                                <h4>Writer</h4>
                                                <Titel>
                                                    <i className={`bx bxs-quote-alt-left quote-icon-left ${color8}`} />
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis posuere, lacus ac tincidunt tempor,
                                                    sapien justo ultrices ante, vel pharetra turpis ex ac nisi. Aliquam tempor egestas turpis, nec
                                                    commodo lorem egestas eleifend. Curabitur lacus ipsum, fermentum sit amet leo non, blandit tincidunt
                                                    turpis.
                                                    <i className={`bx bxs-quote-alt-right quote-icon-right ${color8}`} />
                                                </Titel>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="swiper-slide">
                                        <div className="testimonial-wrap">
                                            <div className={`testimonial-item ${color5}`}>
                                                <img src="assets/img/testimonials/testimonials-2.jpg" className="testimonial-img" alt />
                                                <h3 className={`${color}`}>Ava Smith</h3>
                                                <h4>Artist</h4>
                                                <Titel>
                                                    <i className={`bx bxs-quote-alt-left quote-icon-left ${color8}`} />
                                                    Praesent pellentesque leo vestibulum, facilisis ante eget, pharetra mi. Curabitur risus mauris,
                                                    dignissim ullamcorper vehicula id, aliquet ut turpis. Nunc euismod nec nulla non tincidunt. Vivamus
                                                    nisi mauris, blandit quis sem sit amet, posuere blandit diam. Cras quis quam suscipit.
                                                    <i className={`bx bxs-quote-alt-right quote-icon-right ${color8}`} />
                                                </Titel>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="swiper-slide">
                                        <div className="testimonial-wrap">
                                            <div className={`testimonial-item ${color5}`}>
                                                <img src="assets/img/testimonials/testimonials-3.jpg" className="testimonial-img" alt />
                                                <h3 className={`${color}`}>Abigail Martin</h3>
                                                <h4>Teacher</h4>
                                                <Titel>
                                                    <i className={`bx bxs-quote-alt-left quote-icon-left ${color8}`} />
                                                    Fusce ante ipsum, convallis auctor dui sit amet, feugiat blandit ex. Etiam eget tortor sed augue
                                                    laoreet laoreet vel non libero. Sed in nibh ut sem ornare feugiat at at risus. Morbi gravida enim
                                                    vitae tortor fringilla tristique. Nulla ac mauris et elit eleifend suscipit et quis lacus. Nam nec
                                                    ex purus.
                                                    <i className={`bx bxs-quote-alt-right quote-icon-right ${color8}`} />
                                                </Titel>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="swiper-slide">
                                        <div className="testimonial-wrap">
                                            <div className={`testimonial-item ${color5}`}>
                                                <img src="assets/img/testimonials/testimonials-4.jpg" className="testimonial-img" alt />
                                                <h3 className={`${color}`}>Alexander Tremblay</h3>
                                                <h4>Designer</h4>
                                                <Titel>
                                                    <i className={`bx bxs-quote-alt-left quote-icon-left ${color8}`} />
                                                    Nam at est in nibh cursus hendrerit. Nunc commodo diam a erat fermentum aliquet. Integer at interdum
                                                    nisi. Vivamus risus erat, facilisis a blandit ut, sollicitudin sed est. Vestibulum volutpat luctus
                                                    quam sed finibus. Sed luctus odio eget ex posuere hendrerit. Donec iaculis
                                                    <i className={`bx bxs-quote-alt-right quote-icon-right ${color8}`} />
                                                </Titel>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="swiper-slide">
                                        <div className="testimonial-wrap">
                                            <div className={`testimonial-item ${color5}`}>
                                                <img src="assets/img/testimonials/testimonials-5.jpg" className="testimonial-img" alt />
                                                <h3 className={`${color}`}>Jayden Brown</h3>
                                                <h4>Entrepreneur</h4>
                                                <Titel>
                                                    <i className={`bx bxs-quote-alt-left quote-icon-left ${color8}`} />
                                                    Quisque tristique lectus eget pretium lacinia. Mauris suscipit sapien sit amet enim rhoncus
                                                    tristique. Phasellus dictum aliquam nisl vel fermentum. Duis viverra luctus justo, vel aliquam ipsum
                                                    mollis nec. Pellentesque quis suscipit erat. Mauris id lobortis tellus.
                                                    <i className={`bx bxs-quote-alt-right quote-icon-right ${color8}`} />
                                                </Titel>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                            <div className="swiper-wrapper">
                            </div>
                        </div>
                    </div>
                </section>
                <section id="gallery" className={`gallery ${color3}`}>
                    <div className="container">
                        <div className="section-title">
                            <Htag name="h2tag1">Gallery</Htag>
                            <p className={`${color}`}>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint
                                consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit
                                in iste officiis commodi quidem hic quas.</p>
                        </div>
                    </div>
                    <div className="container-fluid">
                        <div className="row no-gutters">
                            <div className="col-lg-3 col-md-4">
                                <div className={`gallery-item ${color6}`}>
                                    <a href="assets/img/gallery/gallery-1.jpg" className="galelry-lightbox">
                                        <img src="assets/img/gallery/gallery-1.jpg" alt className="img-fluid" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4">
                                <div className={`gallery-item ${color6}`}>
                                    <a href="assets/img/gallery/gallery-2.jpg" className="galelry-lightbox">
                                        <img src="assets/img/gallery/gallery-2.jpg" alt className="img-fluid" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4">
                                <div className={`gallery-item ${color6}`}>
                                    <a href="assets/img/gallery/gallery-3.jpg" className="galelry-lightbox">
                                        <img src="assets/img/gallery/gallery-3.jpg" alt className="img-fluid" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4">
                                <div className={`gallery-item ${color6}`}>
                                    <a href="assets/img/gallery/gallery-4.jpg" className="galelry-lightbox">
                                        <img src="assets/img/gallery/gallery-4.jpg" alt className="img-fluid" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4">
                                <div className={`gallery-item ${color6}`}>
                                    <a href="assets/img/gallery/gallery-5.jpg" className="galelry-lightbox">
                                        <img src="assets/img/gallery/gallery-5.jpg" alt className="img-fluid" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4">
                                <div className={`gallery-item ${color6}`}>
                                    <a href="assets/img/gallery/gallery-6.jpg" className="galelry-lightbox">
                                        <img src="assets/img/gallery/gallery-6.jpg" alt className="img-fluid" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4">
                                <div className={`gallery-item ${color6}`}>
                                    <a href="assets/img/gallery/gallery-7.jpg" className="galelry-lightbox">
                                        <img src="assets/img/gallery/gallery-7.jpg" alt className="img-fluid" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4">
                                <div className={`gallery-item ${color6}`}>
                                    <a href="assets/img/gallery/gallery-8.jpg" className="galelry-lightbox">
                                        <img src="assets/img/gallery/gallery-8.jpg" alt className="img-fluid" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>


    );
}

export default Home;