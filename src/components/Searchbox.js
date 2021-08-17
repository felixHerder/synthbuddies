import React from 'react';

const Searchbox = ({ searchfield, searchChange }) => {
    console.log('Searchbox rendered');
    return (
        <div className='pa2 '>
            <input
                aria-label="Search Robots"
                className='pa3 ba b--green bg-lightest-blue'
                type='search' placeholder='search synths'
                onChange={searchChange}
            />
        </div>
    );
}

export default Searchbox;