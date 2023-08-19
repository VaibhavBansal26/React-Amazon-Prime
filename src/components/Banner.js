import React from 'react';
import styled from 'styled-components';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function Banner() {
    return (
        <Container>
            <Carousel autoFocus={true} autoPlay={true} showThumbs={false} infiniteLoop={true}>
                <div>
                <img src="https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_SherniReviews/80fca69d-78c4-40c1-812a-6fa0cd531abd._UR3000,600_SX1500_FMjpg_.jpeg" alt="Sherni" loading="eager"/>
                    {/* <p className="legend">Legend 1</p> */}
                </div>
                <div>
                <img src="https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_GothamAllSeasons/304040d9-0334-4664-bdf9-21cefe55f06d._UR3000,600_SX1500_FMjpg_.jpeg" alt="Gotham - Season 5" loading="eager"/>
                    {/* <p className="legend">Legend 2</p> */}
                </div>
                <div>
                <img src="https://m.media-amazon.com/images/G/01/digital/video/sonata/PV_IN_SuitsS9/abc927ec-9d6d-4d1c-89c7-b364f5c730ed._UR3000,600_SX1500_FMjpg_.jpg" alt="Suits" loading="eager"/>
                    {/* <p className="legend">Legend 3</p> */}
                </div>
            </Carousel>
            
        </Container>
    )
}

const Container = styled.div`
    width:100%;
    margin-top:70px;
    padding:5px;
`

export default Banner
