import React from 'react';

export default props => (
    <div className='well' onMouseEnter={props.mouseEnter} onMouseLeave={props.mouseLeave} >
        <h4>{props.name}</h4>
        <p>{props.description}</p>
        <a className='btn btn-primary' href={'https://maps.google.com/?q=' + props.location[0] + ',' + props.location[1]} role='button'>Open in Google Maps</a>
        <div>{props.showHide}</div>
    </div>
);