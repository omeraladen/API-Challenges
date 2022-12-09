import React from 'react'

function List({items}) {
  return (
    <div>
       {
         items.map(items => <ul key={items.id}>
            <li>
            {JSON.stringify(items)}
        </li>
        </ul>)
       }
    </div>
  )
}

export default List;