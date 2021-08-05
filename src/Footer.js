import React from 'react';

export const Footer =  () => {
    let footerStyle = {
        position: "bottom",
        top: "100vh",
        width: "100%",
        color: "Black",
        background: "White",
        display: "Flex",
        justifyContent: "Center",
        paddingTop: "20px"
    }
    let setTopPadding = {
        paddingTop: "60px"
    }

    return(
        <div className="footer">
            <footer>
                <p className="footer-text">Copyright &copy; 2021 | picassohub.com | <b>~All Rights Reserved~</b></p>
            </footer>
        </div>
    )
}