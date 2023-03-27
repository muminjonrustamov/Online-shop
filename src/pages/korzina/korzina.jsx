import React from 'react'

const Korzina = ({products}) => {
  return (
    <div>
        {products?.map((p) => {
            return (
                <div className="cards">
                    <div className="card">
                    <img src={p.image} alt="" />
                    <p>{p.title}</p>
                    </div>
                </div>
            )
        })}
    </div>
  )
}

export default Korzina