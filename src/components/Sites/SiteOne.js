import React from "react";
import useData from "../Hooks/UseData";
import Spinner from "../Loading/Spinner";
import FaveButton from "../Favorites/FaveButton";
import {
  Container,
  Grid,
  Segment,
  Card,
  Image,
  Reveal,
  Icon,
  Divider,
  Header,
  Label,
  Button,
} from "semantic-ui-react";
import "../styles/SiteOne.css";
import myGif from "../../assets/treat-yo-self-gif.gif";

const SiteOne = () => {
  const {
    siteState,
    currentCard,
    nextCard,
    prevCard,
    isLoading,
    setCurrentCard,
  } = useData("https://jeep-prices-repo-be.herokuapp.com/siteOne");

  return (
    <>
      {!isLoading ? (
        <>
          {siteState.map((data, i) => {
            return (
              <>
                {currentCard === i && (
                  <Container
                    className="site-container-one"
                    key={data}
                    value={currentCard}
                  >
                    <Segment piled>
                      <Header as="h2" className="site-one-button-container">
                        <Button
                          as="div"
                          className="prev"
                          onClick={prevCard}
                          labelPosition="right"
                        >
                          <Button icon>
                            <Icon name="backward"></Icon>
                          </Button>
                          <Label as="div" basic>
                            Previous Page
                          </Label>
                        </Button>

                        <Button
                          as="div"
                          className="next"
                          onClick={nextCard}
                          labelPosition="left"
                        >
                          <Label as="div" basic>
                            Next Page
                          </Label>
                          <Button icon>
                            <Icon name="forward"></Icon>
                          </Button>
                        </Button>
                      </Header>
                    </Segment>
                    <Card className="site-one-card" raised>
                      <Grid columns={2} relaxed="very" stackable>
                        <Grid.Column>
                          <Segment raised>
                            <Segment className="site-one-details-container">
                              <Header as="h3">
                                {" "}
                                <strong>Vehicle Information:</strong>
                              </Header>
                              {"\n"} <p>{data.deetz}</p>
                            </Segment>
                          </Segment>

                          <Segment raised>
                            <Segment style={{ height: "280px" }} id='site-one-price-outer-container'>
                              <div className="site-one-price-container">
                                <Header as="h3">Price:</Header>

                                <Reveal animated="small fade">
                                  <Reveal.Content visible>
                                    <Image
                                      src={myGif}
                                      alt="wait until the page loads"
                                      size="large"
                                      style={{ width: "100%" }}
                                    />
                                  </Reveal.Content>

                                  <Reveal.Content hidden>
                                    <p>{data.price}</p>
                                  </Reveal.Content>
                                </Reveal>
                              </div>
                            </Segment>
                          </Segment>
                        </Grid.Column>

                        <Grid.Column verticalAlign="middle">
                          <Segment className="vehicleImg-container" raised>
                            <Label ribbon="left">
                              {currentCard + 1}/{siteState.length}
                            </Label>

                            <Header as="h3" className="site-one-jeep-title">
                              <strong>{data.title}</strong>
                            </Header>
                            <Image
                              src={data.img}
                              alt="jeep img"
                              className="jeep-img"
                            ></Image>
                          </Segment>
                        </Grid.Column>
                      </Grid>

                      <Divider vertical clearing>
                        <FaveButton card={currentCard} data={siteState} />
                      </Divider>
                    </Card>
                  </Container>
                )}
              </>
            );
          })}
        </>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default SiteOne;
