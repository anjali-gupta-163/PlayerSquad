import React from 'react';
import './card.styles.css';
import dateFormat from 'dateformat';

export const Card = (props) => {
    return(
        <div className='card-container'>
            <img 
            alt="player" 
            src={require(`../../assets/player-images/${props.player.Id}.jpg`)}
            width={200} height={200}
             />
            <h2>{props.player.PFName}</h2>
            <p>{props.player.SkillDesc}</p>
            <p>{props.player.Value} $</p>
            { props.player.UpComingMatchesList && props.player.UpComingMatchesList.map(player => (
                <div>
                    <p>{player.CCode} vs. {player.VsCCode}</p>
                    <p>Next Match: {`${
                            player.MDate.length !== 0
                            ? dateFormat(player.MDate,"dd-mm-yyyy h:MM:ss TT")  
                            : dateFormat(new Date().toUTCString(),"dd-mm-yyyy h:MM:ss TT") 
                        }`} 
                    </p>
                </div>
            ))}
                        
        </div>
    );
}