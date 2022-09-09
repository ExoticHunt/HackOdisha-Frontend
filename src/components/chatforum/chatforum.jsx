import React from 'react';

function chatforum(){
  
    return (
        
        <>
        {/*<div className='cotainer'></div>
        <form action='#' id='send-container'>
            <input type='text' name='sentMessage' id='sentMessage' />
            <button type='submit'>Send</button>
    </form>*/}
        <div className='cotainer'>
        <div className='message receive'>
            Simron: Hello
        </div>
        <div className='message sent'>
            Harsh: Hiii
        </div>
    </div>
    <form action='#' id='send-container'>
        <input type='text' name='sentMessage' id='sentMessage'/>
        <button type='submit'>
            Send
        </button>
    </form>
        </>
       
    )
}
export default chatforum;
