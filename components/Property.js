import React from 'react';
import Link from 'next/link';
import { sanityClient, urlFor } from '../sanity';
import { useEffect, useState } from 'react';
const Property = () => {
  // console.log(properties);
  const [state, setState] = useState([]);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const products = await sanityClient.fetch(`*[_type == "property"]`);
        setState(products);
        // console.log(products);
      } catch (err) {
        console.log(err);
        // setState({ loading: false, error: err.message });
      }
    };
    fetchData();
    setLoad(true);
  }, []);
  return (
    <>
      <main id="main">
        <section class="intro-single">
          <div class="container">
            <div class="row">
              <div class="col-md-12 col-lg-8">
                <div class="title-single-box">
                  <h1 class="title-single">Our Amazing Properties</h1>
                  <span class="color-text-a">Total {state.length} items</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        {load ? (
          <section class="property-grid grid">
            <div class="container">
              <div class="row">
                {state?.map((val) => (
                  <div class="col-md-4" key={val._id}>
                    <div class="card-box-a card-shadow">
                      <div class="img-box-a">
                        <img
                          src={urlFor(val.mainImage)}
                          alt=""
                          class="img-a img-fluid imgbig"
                        />
                      </div>
                      <div class="card-overlay">
                        <div class="card-overlay-a-content">
                          <div class="card-header-a">
                            <h2 class="card-title-a">
                              <a href="#">{val.title}</a>
                            </h2>
                          </div>
                          <div class="card-body-a">
                            <div class="price-box d-flex">
                              <span class="price-a">
                                {' '}
                                {val.status ? 'RENT' : 'NOT AVAILABLE'} | $
                                {val.pricePerNight}
                              </span>
                            </div>
                            <Link href={`property/${val._id}`}>
                              <a class="link-a">
                                Click here to view{' '}
                                <span class="fa fa-arrow-right"></span>
                              </a>
                            </Link>
                          </div>
                          <div class="card-footer-a">
                            <ul class="card-info d-flex justify-content-around">
                              <li>
                                <h4 class="card-info-title">Area</h4>
                                <span>
                                  340m
                                  <sup>2</sup>
                                </span>
                              </li>
                              <li>
                                <h4 class="card-info-title">Rooms</h4>
                                <span>{val.rooms}</span>
                              </li>
                              <li>
                                <h4 class="card-info-title">Beds</h4>
                                <span>{val.beds}</span>
                              </li>
                              <li>
                                <h4 class="card-info-title">Garages</h4>
                                <span>1</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ) : (
          'loading'
        )}
      </main>
    </>
  );
};

// export const getServerSideProps = async () => {
//   const products = await sanityClient.fetch(`*[_type == "property"]`);

//   if (!products.length) {
//     return {
//       props: {
//         products: [],
//       },
//     };
//   } else {
//     return {
//       props: {
//         products,
//       },
//     };
//   }
// };

export default Property;
