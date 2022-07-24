import useData from "../Hooks/UseData";
import React, { useState, useEffect } from "react";
import RemoveFavoriteButton from "./RemoveFavoriteButton";
import {
  Container,
  Grid,
  Segment,
  Card,
  Image,
  Input,
  Reveal,
  Popup,
  Icon,
  Label,
  Message,
} from "semantic-ui-react";
import "../styles/FavoritesList.css";

const FavoritesList = () => {
  const { faveState } = useData(
    "https://jeep-prices-repo-be.herokuapp.com/my-favorites"
  );
  const [filteredFaves, setFilteredFaves] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  //copy the fave arr and filter it to only return cars that match the handleChange for vehicle description or title + set the fiter results to new arr state
  useEffect(() => {
    let filteredRes = [...faveState].filter((car) => {
      return (
        car["deetz"].toLowerCase().includes(searchInput.toLowerCase()) ||
        car["title"].toLowerCase().includes(searchInput.toLowerCase())
      );
    });
    setFilteredFaves(filteredRes);
  }, [searchInput, faveState]);
  //status msg when there are no favorites saved or detected
  if (faveState <= 0) {
    return <Message icon='exclamation circle' warning size="large" id='fave-warning' header='There are no favorites saved. Go save something!'/>;
  }

  const noSearchResults = () => {
    if (searchInput && filteredFaves <= 0) {
      return (
        <Message negative centered size="large" id="search-err">
          {" "}
          <Message.Header>
            No cars were found matching that search term. Please try again.
          </Message.Header>
        </Message>
      );
    }
  };

  return (
    <Container>
      <Segment basic className="search-container" centered>
        <Input
          icon="search icon"
          iconPosition="left"
          size="large"
          type="text"
          placeholder="Search Favorite Cars"
          value={searchInput}
          onChange={handleChange}
          className="search-input"
        />
        <Label basic circular>
          <Icon id='saved-jeeps' name='heart outline' > {" "}
         {faveState.length}
          </Icon>
        </Label>
      </Segment>
      <>
        {!searchInput ? (
          <Grid columns={3} className="favorite-container">
            {faveState.map((data, i) => {
              return (
                <Card color="black" centered className="fave-card">
                  <div test={i} className="fave-list">
                    <Card.Header className="fave-card-header">
                      <Popup trigger={<Icon circular name="dollar sign"/>}>
                        {data.price}
                      </Popup>
                        <RemoveFavoriteButton
                          data={faveState}
                          faveId={data._id}
                        >
                        </RemoveFavoriteButton>
                      
                    </Card.Header>
                    <Reveal animated="move">
                      <Reveal.Content visible>
                        <Image src={data.img} />
                        <Card.Header className='fave-card-title'>{data.title}</Card.Header>
                      </Reveal.Content>

                      <Reveal.Content hidden>
                        <Card.Description className="fave-card-description">
                          {data.deetz}
                        </Card.Description>
                      </Reveal.Content>
                    </Reveal>
                  </div>
                </Card>
              );
            })}
          </Grid>
        ) : (
          <Grid columns={3} className="favorite-container">
            {noSearchResults()}
            {filteredFaves.map((data, i) => {
              return (
                <Card color="black" centered className="fave-card">
                  <div key={i} className="fave-list">
                    <Card.Header className="fave-card-header">
                      <Popup
                        trigger={
                          <Icon
                            circular
                            name="dollar sign"
                            className="fave-dollar-popup"
                          />
                        }
                      >
                        {data.price}
                      </Popup>
                        <RemoveFavoriteButton
                          data={faveState}
                          faveId={data._id}
                        />{" "}
                    </Card.Header>
                    <Reveal animated="move">
                      <Reveal.Content visible>
                        <Image src={data.img} />
                        <Card.Header>{data.title}</Card.Header>
                      </Reveal.Content>
                      <Reveal.Content hidden>
                        <Card.Description className="fave-card-description">
                          {data.deetz}
                        </Card.Description>
                      </Reveal.Content>
                    </Reveal>
                  </div>
                </Card>
              );
            })}
          </Grid>
        )}
      </>
    </Container>
  );
};

export default FavoritesList;
