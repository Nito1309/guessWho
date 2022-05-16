import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import DefaultImage from '../../assets/img/character-default.png'
import UnknownCharacter from '../../assets/img/background-card.png'
import Chip from '@mui/material/Chip';
import { ButtonBase, CardActionArea } from '@mui/material';

const GameCard = ({picture='character-default', name='Nito'}, id) => {

  const [background, setBackground] = React.useState(DefaultImage);

  const handleClick = () => {
    setBackground(UnknownCharacter);
  }

  return( 
    <Card className={`w-32 `} >
      <CardActionArea
        onClick={handleClick}>
        <CardContent>
          <img src={background}/>
        </CardContent>
        <CardActions className='flex justify-center'>
          <Chip className='!px-8 ' color='primary' label={name} />
        </CardActions>
      </CardActionArea>
    </Card>
  )   
}
export default GameCard;