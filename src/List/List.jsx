import React from 'react';
import './list.css';
import ListItem from '../List/ListItem';

function List({items}) {
    // const keys = [id,name,username,email,
    //     JSON.stringify(items.address),
    //     phone,website,JSON.stringify(items.company)];

  return (
    <ul>
        {
          items.map(item => (
            <ListItem  key={item.id} item={item}/>
          ))
        }
    </ul>
  )
}

export default List;