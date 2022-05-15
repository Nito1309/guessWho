import React from "react";
import BackButton from "./form-components/BackButton";

function CreateGame(){
    return( 
        <div id="parent" className='w-full h-screen bg-background-create-game bg-cover'>
            <BackButton text={'Guess who ?'} bgcolor='#C4C4C4' navigate='/'></BackButton>
        </div>
    )
}

export default CreateGame;