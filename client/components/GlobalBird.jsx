/* eslint-disable camelcase */
import React from 'react'
import { Link } from 'react-router-dom'

function GlobalBird (props) {
  const { name, maori_name, photo, id } = props.bird

  return (
    <>
      <div>
        <Link to={`/birds/${id}`}>
          <h2>{maori_name}</h2>
        </Link>
        <h3>{name}</h3>
        <img src={photo} height='100px' />
      </div>
    </>
  )
}

export default GlobalBird
