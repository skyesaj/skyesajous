import React, { useState, useEffect} from 'react';



function ItemDetail({match}) {
useEffect(() => {
   fetchItem();
   console.log(match);
}, []);

const [item, setItem] = useState([]);

const fetchItem = async () => {
    const data = await fetch(`http://site.api.espn.com/apis/site/v2/sports/football/nfl/teams/`
    );
    const item = await fetchItem.json();
        console.log('itemdetails', item.sports['0'].leagues['0'].teams.displayName);
        setItem(item.sports['0'].leagues['0'].teams.displayName);
}
return (
    <div>
      {item.map(item =>(
      <h1 key={item.team.displayName}>
          {item.team.displayName}</h1>
      // <h1>{sports.team.nickname}</h1>
    
  ))}
  </div>
);
}

export default ItemDetail;