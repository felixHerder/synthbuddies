import React from 'react';
import Card from './Card';


const Cardlist = ({ robots }) => {
    //if(true) throw new Error("Hell no!");
    console.log('Cardlist rendered');
    return (
        <div>
            {
                robots.map(user => {
                    return <Card key={user.id} id={user.id} name={user.name} email={user.email} />
                })
            }
        </div>
    );
}

export default Cardlist;