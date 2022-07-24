import React from 'react';
import UseData from "../Hooks/UseData";
import axios from "axios";
import {
  Icon,
  Popup,
} from "semantic-ui-react";


const FaveButton = (props) => {
  const { card, data} = props;
 

  const { setFaveState,  setValidate, successMsg, isActive, setActive, setFavorite} = UseData(
    "https://jeep-prices-repo-be.herokuapp.com/my-favorites"
  );  


  const addFavorite = () => {
    data.forEach((item, i) => {
      if (item["_id"] && i === card) {
        axios
          .post("https://jeep-prices-repo-be.herokuapp.com/my-favorites", item)
          .then((res) => {
            setFaveState(res)
          })
          .catch((err) => console.log(err));
      }
    });
  };



  return (
    <div
    onClick={() => addFavorite()}
    >
    <Popup
    trigger={<Icon name="heart outline save-to-favorites" />}
    content="Save to favorites."
    position='right top'
    />
    {successMsg}
</div>

  );
};

export default FaveButton;
