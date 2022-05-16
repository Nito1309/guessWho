import React from "react";
import BackButton from "./form-components/BackButton";
function Leaderboard(){
    return( 
        <div id="parent" className='w-full h-screen bg-background-leaderboard bg-cover'>
            <BackButton  text={'Guess who ?'} bgcolor='#7B61FF' navigate='/'></BackButton>
        </div>
    )
}

export default Leaderboard;