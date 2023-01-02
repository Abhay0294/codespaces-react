import * as React from 'react';


const randomComponent = () => {
    return (<div className='clickable-component'>Clicked</div>);  
}

export default function WelcomePage() {
    return (
        <>
            <div>Namaste React</div>
            <div className='exp-col-container'>
                <div className='tabbed-components' onClick={randomComponent}>Properties</div>
                <div className='tabbed-components'>Trigger</div>
            </div>
        </>
    )
}