import React from 'react';
import Layout from '../../components/Layout';
import { sanityClient, urlFor } from '../../sanity';

const DetailsPage = ({
  title,
  pid,
  facility,
  location,
  propertyType,
  mainImage,
  images,
  pricePerNight,
  beds,
  rooms,
  address,
  description,
  host,
  reviews,
  status,
}) => {
  // console.log(reviews.length);
  return (
    <>
      <Layout>
        <section class="property-single ">
          <div class="container">
            <h2>{title}</h2>
            <div class="row justify-content-center">
              <div class="col-lg-9 col-md-7">
                <img src={urlFor(mainImage)} alt="" className="bigimg" />
                <div className="bg-bel">
                  {images?.map((va) => (
                    <div className="">
                      <img src={urlFor(va.asset)} alt="" className="smlimg" />
                    </div>
                  ))}
                </div>
              </div>
              <div class="col-lg-3 col-md-5">
                <div className="card p-3">
                  <button
                    className={status ? 'btn btn-success' : 'btn btn-danger'}
                  >
                    {status ? 'Book Now' : 'NOT AVAILABLE'}
                  </button>

                  <br />
                  <form
                    action="http://maps.google.com/maps"
                    method="get"
                    target="_blank"
                  >
                    <div class="form-group">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Enter your location"
                        name="saddr"
                        required
                      />
                    </div>
                    <input type="hidden" name="daddr" value={address} />
                    <input
                      type="submit"
                      class="btn btn-success"
                      value="Get Direction"
                    />
                  </form>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-sm-12">
                <div class="row justify-content-between mt-5">
                  <div class="col-md-5 col-lg-4">
                    <div class="property-price d-flex justify-content-center foo">
                      <h5 class="title-c">Price:{pricePerNight}</h5>
                    </div>
                    <div class="property-summary">
                      <div class="row">
                        <div class="col-sm-12">
                          <div class="title-box-d section-t4">
                            <h3 class="title-d">Quick Summary</h3>
                          </div>
                        </div>
                      </div>
                      <div class="summary-list">
                        <ul class="list">
                          <li class="d-flex justify-content-between">
                            <strong>Property ID:</strong>
                            <span>{pid}</span>
                          </li>
                          <li class="d-flex justify-content-between">
                            <strong>Location:</strong>
                            <span>{address}</span>
                          </li>
                          <li class="d-flex justify-content-between">
                            <strong>Property Type:</strong>
                            <span>{propertyType}</span>
                          </li>
                          <li class="d-flex justify-content-between">
                            <strong>Status:</strong>
                            <span>{status ? 'Book Now' : 'NOT AVAILABLE'}</span>
                          </li>
                          <li class="d-flex justify-content-between">
                            <strong>Area:</strong>
                            <span>
                              340m
                              <sup>2</sup>
                            </span>
                          </li>
                          <li class="d-flex justify-content-between">
                            <strong>Beds:</strong>
                            <span>{beds}</span>
                          </li>
                          <li class="d-flex justify-content-between">
                            <strong>Rooms:</strong>
                            <span>{rooms}</span>
                          </li>
                          <li class="d-flex justify-content-between">
                            <strong>Garage:</strong>
                            <span>1</span>
                          </li>
                          <li class="d-flex justify-content-between">
                            <strong>Review:</strong>
                            <span>
                              {reviews?.length > 0 ? reviews?.length : 0}

                              {reviews?.length > 0 && (
                                <button
                                  className="btn btn-success ml-2"
                                  data-toggle="modal"
                                  data-target="#myModal"
                                >
                                  <i class="fa fa-eye" aria-hidden="true"></i>
                                </button>
                              )}
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-7 col-lg-7 section-md-t3">
                    <div class="row">
                      <div class="col-sm-12">
                        <div class="title-box-d">
                          <img
                            src={urlFor(host.profileImage.asset)}
                            alt=""
                            className="hoimg"
                          />

                          <h3 class="title-d">{host.personName}</h3>
                        </div>
                      </div>
                      <div class="col-sm-12">
                        <div class="title-box-d">
                          <h3 class="title-d">Property Description</h3>
                        </div>
                      </div>
                    </div>
                    <div class="property-description">
                      <p class="description color-text-a">{description}</p>
                    </div>
                    <div class="row section-t3">
                      <div class="col-sm-12">
                        <div class="title-box-d">
                          <h3 class="title-d">Facilities</h3>
                        </div>
                      </div>
                    </div>
                    <div class="amenities-list color-text-a">
                      <ul class="list-a no-margin">
                        {facility?.map((val) => (
                          <li>{val.faci}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <iframe
                    src="https://player.vimeo.com/video/73221098"
                    width="100%"
                    height="460"
                    frameborder="0"
                    webkitallowfullscreen
                    mozallowfullscreen
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div class="modal fade" id="myModal">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <h4 class="modal-title">
                  Total {reviews?.length > 0 ? reviews?.length : 0} reviews
                </h4>
                <button type="button" class="close" data-dismiss="modal">
                  &times;
                </button>
              </div>

              <div class="modal-body">
                {reviews?.map((vl) => (
                  <div className="reviewbox">
                    <img
                      src={urlFor(vl.traveller.profileImage.asset)}
                      alt=""
                      className="revimg"
                    />
                    <div className="pl-2">
                      <span>{vl.reviewDescription}</span>

                      <span class="badge badge-success ml-3">{vl.rating}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export const getServerSideProps = async (pageContext) => {
  const pageSlug = pageContext.query.slug;
  const query = `*[ _type == "property" && _id == $pageSlug][0]{
    title,
    id,
    location,
    propertyType,
    mainImage,
    images,
    status,
    address,
    pricePerNight,
    beds,
    
    rooms,
    description,
    facility,
    host->{
      _id,
      personName,
      slug,
      profileImage
    },
    reviews[]{
      ...,
      traveller->{
        _id,
        personName,
        slug,
        profileImage
      }
    }
  }`;

  const property = await sanityClient.fetch(query, { pageSlug });
  // console.log(property);
  // return {
  //   props: {},
  // };
  // const property = await sanityClient.fetch(query, { pageSlug });

  if (!property) {
    return {
      props: null,
    };
  } else {
    return {
      props: {
        title: property.title,
        facility: property.facility,
        pid: property.id,

        location: property.location,
        propertyType: property.propertyType,
        address: property.address,
        mainImage: property.mainImage,
        images: property.images,
        pricePerNight: property.pricePerNight,
        beds: property.beds,
        rooms: property.rooms,
        description: property.description,
        host: property.host,
        reviews: property.reviews,
        status: property.status,
      },
    };
  }
};

export default DetailsPage;
