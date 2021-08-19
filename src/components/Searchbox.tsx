import React from 'react';
interface ISearchBoxProps {
    searchChange(event: React.SyntheticEvent<HTMLInputElement>): void;
}

const Searchbox = ({ searchChange }: ISearchBoxProps) => {
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