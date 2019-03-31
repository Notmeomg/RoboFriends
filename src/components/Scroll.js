import React from 'react';

const Scroll = (props) => {
    return (
        <div style={{height: '100%', width: '100%', overflow: 'hidden'}}>
            <div style={{height: '800px', width: '100%', overflowY: 'scroll', paddingRight: '17px', boxSizing: 'content-box', border: '2px solid black'}}>
                {props.children}
            </div>
        </div>
    );
};

export default Scroll;