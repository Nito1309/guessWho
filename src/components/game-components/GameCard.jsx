import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import DefaultImage from '../../assets/img/character-default.png'
import Chip from '@mui/material/Chip';

const GameCard = ({picture='character-default', name='Nito'}) => {
    return( 
        <Card className='w-32' 
        sx={{
            ":onclick": {
              backgroundColor: 'black',
            },
          }}
        >
        <CardContent>
            <img src={DefaultImage}/>
    
        </CardContent>
        <CardActions className='flex justify-center'>
        <Chip className='!px-8 ' color='primary' label={name} />
        </CardActions>
      </Card>
       )
    
}
export default GameCard;