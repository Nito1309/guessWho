import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import DefaultImage from '../../assets/img/character-default.png'
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

const GameCard = ({picture='character-default', name='Nito'}) => {
    return( 
        <Card className='w-1/12'>
        <CardContent>
            <img src={DefaultImage}/>
    
        </CardContent>
        <CardActions>
        <Chip color='primary' label={name} />
        </CardActions>
      </Card>
       )
    
}
export default GameCard;