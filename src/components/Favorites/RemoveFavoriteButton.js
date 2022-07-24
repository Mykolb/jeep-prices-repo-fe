import React from 'react';
import UseData from "../Hooks/UseData";
import axios from "axios";
import {Icon} from 'semantic-ui-react';


const RemoveFavoriteButton = (props) => {
  const { setFaveState, faveState} = UseData(
    "https://jeep-prices-repo-be.herokuapp.com/my-favorites"
  );

  let { faveId } = props;

  const  deleteFavorite = () => {
 
      axios
        .delete(`https://jeep-prices-repo-be.herokuapp.com/my-favorites/${faveId}`)
        .then((res) =>{
            console.log(res)
             let updatedState = [faveState].filter(item => item.faveId !== faveId)
            setFaveState(...updatedState)
              if(res.status === 201) {
                console.log('Successfully deleted!')
                return (<h2 className='test'>Deleted!</h2>)
              }
        })
        .catch((err) => console.log(err));
    }
    
 
  return (
    <>
      <Icon 
      circular
      name='trash alternate'
      onClick={() => deleteFavorite()}
      id='trash-icon'
      />
    </>
  );
};

export default RemoveFavoriteButton;
