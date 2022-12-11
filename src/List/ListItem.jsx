import React from 'react'

function listItems({ item}) {
  return (
  <li>
    {
       JSON.stringify(item)
    }
  </li>
  )
}

export default listItems