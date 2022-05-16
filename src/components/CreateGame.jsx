import { Fab, Stack } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import BackButton from "./form-components/BackButton";
import GameCard from "./game-components/GameCard";


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

function CreateGame(){
    return( 
        <div id="parent" className='w-full h-screen bg-background-create-game bg-cover flex flex-row'>
            <div className='basis-1/5' id='left-bar' >
                <Stack className='!mt-2' spacing={2}
                    alignItems="center" >
                    <Stack spacing={1}
                        direction="column"
                        alignItems="center">
                        <BackButton text={'GAME CODE: '} bgcolor='#C4C4C4' navigate='/'/>
                    </Stack>

                            <Stack spacing={5}>
                                <Fab aria-label="gameCode" sx={{ bgcolor: '#8AED72', color:'#FFF' , fontSize: '30px'} }>5</Fab>
                                <Fab aria-label="add" sx={{ bgcolor: '#C4C4C4', color:'#FFF' , fontSize: '30px'}}>4</Fab>
                                <Fab aria-label="add" sx={{ bgcolor: '#8AED72', color:'#FFF' , fontSize: '30px'}} >7</Fab>
                                <Fab aria-label="add" sx={{ bgcolor: '#C4C4C4', color:'#FFF' , fontSize: '30px'}}>6</Fab>
                            </Stack> 

                </Stack>
            </div>
            <div className='basis-4/5  ' id='game-panel'>
                <div id='card-container' className='w-4/5 bg-white p-5 border-2 rounded-3xl grid grid-cols-4  mt-5 place-items-center'>
                    {

                        deck.map((value, index) => {

                            return (
                                <Link to='/game'>
                                    <GameCard link='/game' name={value.name}/>
                                </Link>
                            )
                        })
                    }
                </div>
            </div>
            
        </div>
    )
}

export default CreateGame;