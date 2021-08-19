import React from 'react';

interface CardStatelesProps {
    name: string;
    email: string;
    id: number;
}
const Card: React.FunctionComponent<CardStatelesProps> =
    ({ name, email, id }) => {
        return (
            <div className='f7 tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
                <img alt="synths" src={`https://robohash.org/${id}?size=200x200`} />
                <div>
                    <h2>{name}</h2>
                    <p>{email}</p>
                </div>
            </div>
        );
    }

export default Card;