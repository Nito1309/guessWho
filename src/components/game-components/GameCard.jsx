import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import DefaultImage from '../../assets/img/character-default.png'
import UnknownCharacter from '../../assets/img/background-card.png'
import Chip from '@mui/material/Chip';
import { ButtonBase, CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';


const GameCard = ( {picture='character-default', name='Nito', disabled=false}, id) => {

  const [background, setBackground] = React.useState(DefaultImage);
  const [cname, setName] = React.useState(name);
  const handleClick = () => {
    console.log(disabled);
    if(!disabled){
      setBackground(UnknownCharacter);
      setName('');
    }
  }

  return( 
  <Card className={`w-32 `} >
    {/* <Link to={link}> */}
      <CardActionArea
        onClick={handleClick}
       >
        <CardContent>
          <img src={background}/>
        </CardContent>
        <CardActions className='flex justify-center'>
          <Chip className='!px-8 ' color='primary' label={cname} />
        </CardActions>
      </CardActionArea>
      {/* </Link> */}
    </Card>
  )   
}
export default GameCard;