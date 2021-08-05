import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

export const CarouselComponent = () => {
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
    return (
        <div className="changeFont">
            <Carousel>
                <Carousel.Item interval={600}>
                    <img
                        className="d-block w-100"
                        src="https://source.unsplash.com/1600x900/?dark,paintings,nature"
                        alt="Image One"
                    />
                    <Carousel.Caption>
                        <h3 className="changeStyle">Explore our amazing Wall-Gallery</h3>
                        <p className="cara-quote">~“Every canvas is a journey all its own.”</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={600}>
                    <img
                        className="d-block w-100"
                        src="https://source.unsplash.com/1600x900/?dark,paintings,abstract,sketchings"
                        alt="Image Two"
                    />
                    <Carousel.Caption>
                        <h3 className="changeStyle">Checkout our fabulous Frame-Gallery</h3>
                        <p className="cara-quote">~“All you need to paint is a few tools, a little instruction, and a vision in your mind.”</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={600}>
                    <img
                        className="d-block w-100"
                        src="https://source.unsplash.com/1600x900/?dark,paintings,nature,potraits"
                        alt="Image One"
                    />
                    <Carousel.Caption>
                        <h3 className="changeStyle">Our Abstract paintings are the most viewed page !!</h3>
                        <p className="cara-quote">~“If you could say it in words, there would be no reason to paint.” </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={600}>
                    <img
                        className="d-block w-100"
                        src="https://source.unsplash.com/1600x900/?dark,paintings,nature"
                        alt="Image One"
                    />
                    <Carousel.Caption>
                        <h3 className="changeStyle">Explore varied Stencils and Sketches</h3>
                        <p className="cara-quote">~“Painting is just another way of keeping a diary”</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={600}>
                    <img
                        className="d-block w-100"
                        src="https://source.unsplash.com/1600x900/?dark,paintings,nature"
                        alt="Image One"
                    />
                    <Carousel.Caption>
                        <h3 className="changeStyle">Don't miss the Shop to view top-trending art items.</h3>
                        <p className="cara-quote">~“I love to look at art, I love to look at paintings, and I almost feel like the experience isn’t complete until I’ve made something of my own.”</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <div>
                <div style={setTopPadding}>
                    <h3 className="changeStyle"><b>Welcome to Picassohub</b></h3>
                </div>
                <p className="cara-tags">Hii, there Aesthete.</p>
                <p className="cara-tags">Welcome to our Art Gallery. We at Picaasohub have the amazing collection and variety of top demanding and creative paintings, sketches, wall-paintings, frames, stencils, and much more to explore.</p>
                <p  className="cara-tags">
                <p className="cara-head" >One-of-a-kind Paintings for a space that is as unique as you,
the effect of colour on the human mind and psyche is no secret to us.</p>There are associations to colours and shades all around us, beginning with the changing of the seasons in nature itself. While pastels and cool tones are associated with summer, deep hues and warm tones bring to mind the quiet chill of winter. From the clothes we choose and the food we eat to the hues we surround ourselves with, colours play a lead role in our lives. When initially setting up your home, one of the aspects that should be a pillar to all your colour decisions is narrowing down on the mood you are trying to capture. This will help you gain much-needed clarity about the interiors of your house and have a creative/aesthetic vision for them. After all, transforming a house into a home is painstaking work that demands meticulous care. In this regard, paintings of different kinds can come to your rescue in bringing a new dimension to any space. The art pieces we have carefully curated from across the globe on Pisarto will easily inspire you and help you transform your home. Whether you prefer glass paintings that cast their beautiful shades on the room in the sun or oil paintings that capture an emotion you want to surround yourself with, the choice is fully yours. Read on to know about the paintings you can buy on our platform.
                </p>
                <p className="cara-head" >FEATURED CATEGORIES</p>
                <p className="cara-tags">
                ~ Modern Art Paintings :-<hr></hr>
The appeal of contemporary art is its unique point of view. They are potent conversation starters that will enliven a room instantly. You can pick from oriental scenes of dancing women, mysterious dance of dragons, musical instruments, face profiles and so much more.
                </p>
                <p className="cara-tags">
                ~ Abstract Paintings<hr></hr>
Imagination is a beautiful thing that can translate our aspirations, emotions, and memories into works of art. These paintings reflect the intangible aspect of our thoughts in an eloquent manner, which keeps the viewer coming back for more.
                </p>
                <p className="cara-tags">
                ~ Floral Paintings<hr></hr>
Any room in your home can benefit from a painting of flowers. They have the ability to instantly put a person at ease and create a welcoming ambience. It is also the easiest way to add a burst of colour to space with otherwise plain décor, so be sure to mix and match when you pick up various shades combinations.
                </p>
                <p className="cara-tags">
                ~ Wall Paintings<hr></hr>
Invite the natural beauty of a place into your home with these enchanting paintings. There are vibrant sunsets by the sea, eventful fishing boats at the shore, tropical palm trees, quaint villages by the ocean, a town by the river, golden fields and the likes to choose from.

                </p>

            </div>
           
            
        </div>
    )
}

export default CarouselComponent;
