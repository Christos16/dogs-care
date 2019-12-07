import React from 'react';
import './testimonials.styles.scss';

const Testimonials = () => {
  return (
    <div className='container mb-5'>
      <div className='row'>
        <div className='col-sm-12'>
          <h2>
            See What <b>Other Pet Parent</b> Say About Us
          </h2>
          <div
            id='myCarousel'
            className='carousel slide mb-5'
            data-ride='carousel'
          >
            <ol className='carousel-indicators'>
              <li
                data-target='#myCarousel'
                data-slide-to='0'
                className='active'
              ></li>
              <li data-target='#myCarousel' data-slide-to='1'></li>
              <li data-target='#myCarousel' data-slide-to='2'></li>
            </ol>

            <div className='carousel-inner'>
              <div className='item carousel-item active'>
                <div className='row'>
                  <div className='col-sm-6'>
                    <div className='testimonial-wrapper'>
                      <div className='testimonial'>
                        Dogs-care is truly Amazing, I love using anytime I have
                        to leave my pet alone.
                      </div>
                      <div className='media'>
                        <div className='media-left d-flex mr-3'>
                          <img src='/examples/images/clients/1.jpg' alt='' />
                        </div>
                        <div className='media-body'>
                          <div className='overview'>
                            <div className='name'>
                              <b>Bella Thompson</b>
                            </div>
                            <div className='details'>Dog Parent</div>
                            <div className='star-rating'>
                              <ul className='list-inline'>
                                <li className='list-inline-item'>
                                  <i className='fa fa-star'></i>
                                </li>
                                <li className='list-inline-item'>
                                  <i className='fa fa-star'></i>
                                </li>
                                <li className='list-inline-item'>
                                  <i className='fa fa-star'></i>
                                </li>
                                <li className='list-inline-item'>
                                  <i className='fa fa-star'></i>
                                </li>
                                <li className='list-inline-item'>
                                  <i className='fa fa-star-half-o'></i>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-sm-6'>
                    <div className='testimonial-wrapper'>
                      <div className='testimonial'>
                        Obviously, it's natural to be skeptical about any kind
                        of service offered online; especially when it requires
                        you leaving your pet with someone else. Nevertheless, I
                        had the chance to stumble accross this new app Dogs-care
                        and ever since I don't regret it for one simple
                        reason... The sitters on this platform are all certified
                        and so lovely.
                      </div>
                      <div className='media'>
                        <div className='media-left d-flex mr-3'>
                          <img src='/examples/images/clients/2.jpg' alt='' />
                        </div>
                        <div className='media-body'>
                          <div className='overview'>
                            <div className='name'>
                              <b>Petros Gianopoulos</b>
                            </div>
                            <div className='details'>
                              Pet parent, Account Manager / Pondy
                            </div>
                            <div className='star-rating'>
                              <ul className='list-inline'>
                                <li className='list-inline-item'>
                                  <i className='fa fa-star'></i>
                                </li>
                                <li className='list-inline-item'>
                                  <i className='fa fa-star'></i>
                                </li>
                                <li className='list-inline-item'>
                                  <i className='fa fa-star'></i>
                                </li>
                                <li className='list-inline-item'>
                                  <i className='fa fa-star'></i>
                                </li>
                                <li className='list-inline-item'>
                                  <i className='fa fa-star-o'></i>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='item carousel-item'>
                <div className='row'>
                  <div className='col-sm-6'>
                    <div className='testimonial-wrapper'>
                      <div className='testimonial'>
                        Fantastic ! 10/10 for the services.
                      </div>
                      <div className='media'>
                        <div className='media-left d-flex mr-3'>
                          <img src='/examples/images/clients/3.jpg' alt='' />
                        </div>
                        <div className='media-body'>
                          <div className='overview'>
                            <div className='name'>
                              <b>Konstantinos Merkoulis</b>
                            </div>
                            <div className='details'>Pet parent</div>
                            <div className='star-rating'>
                              <ul className='list-inline'>
                                <li className='list-inline-item'>
                                  <i className='fa fa-star'></i>
                                </li>
                                <li className='list-inline-item'>
                                  <i className='fa fa-star'></i>
                                </li>
                                <li className='list-inline-item'>
                                  <i className='fa fa-star'></i>
                                </li>
                                <li className='list-inline-item'>
                                  <i className='fa fa-star'></i>
                                </li>
                                <li className='list-inline-item'>
                                  <i className='fa fa-star-o'></i>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-sm-6'>
                    <div className='testimonial-wrapper'>
                      <div className='testimonial'>
                        Πολύ καλοί άνθρωποι με τους οποίους συνεργάζεστε. Ο
                        σκύλος μου ήταν πολύ χαρούμενος παρά το γεγονός ότι δεν
                        του έδινα όλη την αγάπη που συνήθως κάνω
                      </div>
                      <div className='media'>
                        <div className='media-left d-flex mr-3'>
                          <img src='/examples/images/clients/4.jpg' alt='' />
                        </div>
                        <div className='media-body'>
                          <div className='overview'>
                            <div className='name'>
                              <b>Maria Stavropoula </b>
                            </div>
                            <div className='details'>
                              Graphic Designer /TechMedia
                            </div>
                            <div className='star-rating'>
                              <ul className='list-inline'>
                                <li className='list-inline-item'>
                                  <i className='fa fa-star'></i>
                                </li>
                                <li className='list-inline-item'>
                                  <i className='fa fa-star'></i>
                                </li>
                                <li className='list-inline-item'>
                                  <i className='fa fa-star'></i>
                                </li>
                                <li className='list-inline-item'>
                                  <i className='fa fa-star'></i>
                                </li>
                                <li className='list-inline-item'>
                                  <i className='fa fa-star-o'></i>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='item carousel-item'>
                <div className='row'>
                  <div className='col-sm-6'>
                    <div className='testimonial-wrapper'>
                      <div className='testimonial'>
                        Καταπληκτική δουλειά, ήμουν ανήσυχος για πρώτη φορά,
                        αλλά η Paula, η κατοικίδιο ζώο ήταν πάντα διαθέσιμη και
                        μου ανέφερε όλες τις δραστηριότητες που έκανε με το
                        σκυλί μου. Θα το χρησιμοποιήσω και πάλι
                      </div>
                      <div className='media'>
                        <div className='media-left d-flex mr-3'>
                          <img src='/examples/images/clients/5.jpg' alt='' />
                        </div>
                        <div className='media-body'>
                          <div className='overview'>
                            <div className='name'>
                              <b>Giorgos Tsoulis</b>
                            </div>
                            <div className='details'>
                              Dog parent / SearchNode
                            </div>
                            <div className='star-rating'>
                              <ul className='list-inline'>
                                <li className='list-inline-item'>
                                  <i className='fa fa-star'></i>
                                </li>
                                <li className='list-inline-item'>
                                  <i className='fa fa-star'></i>
                                </li>
                                <li className='list-inline-item'>
                                  <i className='fa fa-star'></i>
                                </li>
                                <li className='list-inline-item'>
                                  <i className='fa fa-star'></i>
                                </li>
                                <li className='list-inline-item'>
                                  <i className='fa fa-star-o'></i>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-sm-6'>
                    <div className='testimonial-wrapper'>
                      <div className='testimonial'>
                        I strongly recommend for those who travel a lot, your
                        pet will be in great hands !!!!
                      </div>
                      <div className='media'>
                        <div className='media-left d-flex mr-3'>
                          <img src='/examples/images/clients/6.jpg' alt='' />
                        </div>
                        <div className='media-body'>
                          <div className='overview'>
                            <div className='name'>
                              <b>Lori Spentzi</b>
                            </div>
                            <div className='details'>
                              Cat Parent, Digital Strategist / PointDesign
                            </div>
                            <div className='star-rating'>
                              <ul className='list-inline'>
                                <li className='list-inline-item'>
                                  <i className='fa fa-star'></i>
                                </li>
                                <li className='list-inline-item'>
                                  <i className='fa fa-star'></i>
                                </li>
                                <li className='list-inline-item'>
                                  <i className='fa fa-star'></i>
                                </li>
                                <li className='list-inline-item'>
                                  <i className='fa fa-star'></i>
                                </li>
                                <li className='list-inline-item'>
                                  <i className='fa fa-star-o'></i>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
