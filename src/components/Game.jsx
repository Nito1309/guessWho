
import { StackedLineChart } from "@mui/icons-material"
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import EyeIcon from '../assets/img/eye_icon.svg'
import BaldIcon from '../assets/img/bald_icon.svg'
import GlassesIcon from '../assets/img/glasses_icon.svg'
import HairIcon from '../assets/img/hair_icon.svg'
import HatIcon from '../assets/img/hat_icon.svg'
import MustacheIcon from '../assets/img/mustache_icon.svg'
import PickerIcon from '../assets/img/picker_icon.svg'
import GameCard from "./game-components/GameCard";
import { Button } from "@mui/material";

class PlayerCard {
    constructor(name,image){
        this.name=name;
        this.image=image;
    }
}

var deck = [];
for (var i = 0; i < 16; i++) {
    deck.push({
        name: 'Nito',
        image: ''
    });
}

function Game() {
    return (
        <div id="parent" className='w-full h-screen bg-background-game bg-cover flex flex-row'>
            <div className='basis-1/5' id='left-bar' >
                <Stack className='!mt-2' spacing={2}
                    alignItems="center" >
                    <Stack spacing={1}
                        direction="column"
                        alignItems="center">
                        <h2>Your character:</h2>
                        <GameCard></GameCard>
                    </Stack>
                    <Card className='w-20' >
                        <CardContent>
                            <Stack spacing={3}>
                                <div className='flex flex-row'><img src={EyeIcon}/><img src={PickerIcon}/></div>
                                <div className='flex flex-row'><img src={HairIcon}/><img src={PickerIcon}/></div>
                                <img src={BaldIcon}/>
                                <img src={MustacheIcon}/>
                                <img src={HatIcon}/>
                                <img src={GlassesIcon}/>
                            </Stack> 
                        </CardContent>
                    </Card>
                    <Button className='w-40' style={{
                        backgroundColor: "#8AED72" //TODO make proper pallet
                    }}
                    variant="contained" >PASS</Button>
                    <Button style={{
                        backgroundColor: "#F8CE3D" //TODO make proper pallet
                    }}
                    className='w-40' variant="contained" >GUESS</Button>
                </Stack>
            </div>
            <div className='basis-4/5' id='game-panel'>
                <div id='card-container' className='w-4/5 grid grid-cols-4 gap-2 mt-5 place-items-center'>
                    {
                        deck.map((value, index) => {
                            return <GameCard name={value.name}></GameCard>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Game