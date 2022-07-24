import React from "react";
import { Message, Segment} from 'semantic-ui-react';
import "../styles/Home.css";

const Home = () => {

    const items = [
        'Jeeps can be added to & removed from favorites',
        'Search favorites by title and vehicle information',
        'Dashboard will inherit the color scheme of system preferences'
    ]


    return(
        <div id='home-msg-container'>
        <Message centered info size='large' id='home-msg'>
            <Message.Header>
                Welcome!
            </Message.Header>
            <p>This is a dashboard I made to find a Jeep from my preferred auto websites. The data is being scraped from those sites and saved to a database. The database is being hosted on Heroku (because well it's free) so it might take a second for the data to load. </p>
           <Message.Header>Features:</Message.Header>
            <Message.List items={items} />
        </Message>
        </div>
    )
}



export default Home;