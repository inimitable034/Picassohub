import React from 'react';

export const Contact = () => {
    let contactStyle = {
        color: "Black",
        background: "rgba(128, 255, 0, 0.5)",
        display: "Flex",
        justifyContent: "Center",
        textAlign: "Center",
        border: "solid",
        padding: "40px",
        width: "75%",
        paddingTop: "65px",
        paddingBottom: "65px",
    }
    let correctStyle = {
        border: "30px",
        justifyContent: "Center",
    }
    let changePosition = {
        justifyContent: "Center",

    }
    return (
        <fieldset className="drawMargin">
            <table style={contactStyle}>
                <span className="contact-img">
                    <legend className="changeStyle"><b>Contact Us</b></legend>
                    <form className="changeFont" style={correctStyle} method="post" action="mailto:paintinghub@gmail.com">
                        <div className="input-group">
                            <span className="input-group-text">Enter Email and Username</span>
                            <div className="usrnm-paswd">
                            <input type="text" aria-label="Email" className="form-control" placeholder="name@example.com" required/>
                            <input type="text" aria-label="Username" className="form-control" placeholder="Enter your username..." required/>
                            </div>
                        </div>
                        <div className="mb-3">
                            <label for="exampleFormControlTextarea1" className="form-label"></label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Enter your text here..." required></textarea>
                        </div>
                        <div className="mb-3 form-check">
                            <input type="checkbox" class="form-check-input" id="exampleCheck1" style={changePosition}  required/>
                            <label className="form-check-label" for="exampleCheck1">Check me out</label>
                        </div>
                        <div className="submit-contact">
                            <button type="submit" className="btn btn-primary" value="Send Email">Submit</button>
                        </div>
                    </form>
                </span>
            </table>
        </fieldset>
    )
}
