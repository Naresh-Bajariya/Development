import React, { Component } from 'react'
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn
} from 'mdb-react-ui-kit';
import CardCompo from "./4.1cardcompo.jsx";
import Lionimg from "./img/lion_thumb.jpg";


export default class Props extends Component {
    render() {
        return (
            <>
                <div className="row">

                    <div className="col-md-3">
                        {/* <CardCompo imgpath="https://mdbootstrap.com/img/new/standard/nature/184.webp" title="Lion" /> */}
                        <CardCompo imgpath={Lionimg} title="Lion" />
                    </div>

                    <div className="col-md-3">
                        {/* <CardCompo imgpath={`${process.env.PUBLIC_URL}/imges/ozone.jpeg`} /> */}

                        {/* or */}

                        <CardCompo imgpath={process.env.PUBLIC_URL+"/imges/ozone.jpeg"} title="Ozone Day" />
                    </div>

                    <div className="col-md-3">

                    <CardCompo imgpath={Lionimg} title="Lion"/>

                    </div>

                    <div className="col-md-3">


                        <MDBCard >
                            <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/184.webp' position='top' alt='...' />
                            <MDBCardBody>
                                <MDBCardTitle>Card title</MDBCardTitle>
                                <MDBCardText>
                                    Some quick example text to build on the card title and make up the bulk of the card's content.
                                </MDBCardText>
                                <MDBBtn href='#'>Button</MDBBtn>
                            </MDBCardBody>
                        </MDBCard>

                    </div>

                </div>

            </>
        )
    }
}
