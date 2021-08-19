import React from 'react';
import Card from './Card';
import { IRobot } from './MainPage';


const Cardlist = ({ robots }: { robots: Array<IRobot> }) => {
    //if(true) throw new Error("Hell no!");
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