import React from 'react'

const StarshipsCard = () => {
  return (
    <div>
      &nbsp;
      <h1 style={{ color: "blue" }}>Starships</h1>
      &nbsp;
      <div className="card">
        <img src="https://placehold.co/400x200" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Starship</h5>
          <ul className="card-text" style={{ listStyle: "none", padding: "1" }}>
            <li>Gender</li>
            <li>Hair Color</li>
            <li>Eye Color</li>
          </ul>
          <a href="#" className="btn btn-primary">Please, learn more!</a>
        </div>
      </div>
    </div>
  )
}

export default StarshipsCard
