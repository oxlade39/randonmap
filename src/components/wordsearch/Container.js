import React from 'react';
import { Grid } from '@vx/grid';

function Container() {
    return (
        <>
        <h1>Word Search</h1>
        <Grid 
            xScale={10}
            yScale={10}
            width={100}
            height={100}            
        />
        </>
    )
}

export default Container;