import React from 'react';
import { Card } from 'react-bootstrap';

export const About = () => {
    let setBottomPadding = {
        paddingBottom: "40px"
    }
    let setTopPadding = {
        paddingTop: "60px"
    }
    return (
        <div>
            <h2 className="changeStyle" style={setBottomPadding}><b>About Us</b></h2>
            <Card className="changeFont">
                <Card.Img variant="top" src="https://source.unsplash.com/1600x500/?founder,person" />
                <Card.Body>
                    <Card.Text>
                        Founder of this institution.
                    </Card.Text>
                </Card.Body>
            </Card>
            <br />
            <p className="changeFont" style={setTopPadding}>
                <b className="changeFont">~ Thanks for Reaching our Site</b>
                <hr></hr>
                We at Picasso-Hub have attractive and user's choice oriented collection of creative Paintings, Sketches, Wall-paintings, Frames, Stencils, and much more to explore.
            </p>
        </div>
    )
}
