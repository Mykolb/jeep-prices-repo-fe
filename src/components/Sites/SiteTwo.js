// import "../../styles/_sitetwo.scss";
//importing arrow icons
import React from 'react';
import useData from "../Hooks/UseData";
import Spinner from "../Loading/Spinner";
import FaveButton from "../Favorites/FaveButton";

const SiteTwo = () => {
  const { siteState, currentCard, nextCard, prevCard, isLoading } = useData(
    "https://jeep-prices-repo-be.herokuapp.com/siteTwo"
  );

  return (
    <>
      {!isLoading ? (
        <>
          {siteState.map((data, i) => {
            return (
              <>
                {currentCard === i && (
                  <div className="site-container-two" key={data}>
                    <button icon="angle-left" className='left-arrow-two' onClick={prevCard} />
                    {/* <h2>Site two goes here.</h2> */}
                    <h3 className="prev" onClick={prevCard}>
                      Previous Page
                    </h3>
                    <h3>
                      Save to Faves
                      <FaveButton card={currentCard} data={siteState} />
                    </h3>
                    <h3 className="next" onClick={nextCard}>
                      Next Page
                    </h3>
                    <div className="miles-container">
                      <h3>Mileage</h3>
                      <p>{data.mileage}</p>
                    </div>

                    <div className="listPrice-container">
                      <h3>List Price</h3>
                      <p>{data.listPrice}</p>
                    </div>

                    <div className="monthlyPrice-container">
                      <h3>Monthly Price</h3>
                      <p>{data.monthlyPrice}</p>
                    </div>

                    <div className="vehicleDetails-container">
                      <h3>Details</h3>
                      <p>
                        <strong>Vehicle Information:</strong>
                        {"\n"} {data.deetz}
                      </p>
                    </div>

                    <div className="vehicleImg-two-container">
                      <img src={data.img} alt="jeep img"></img>
                    </div>
                    <div className="page-num">
                      <h3>Card: {currentCard}/{siteState.length} </h3>
                    </div>
                    <button icon="angle-right" className='right-arrow-two' onClick={nextCard} />
                  </div>
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

export default SiteTwo;
