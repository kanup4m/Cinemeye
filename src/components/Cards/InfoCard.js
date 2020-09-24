import React from 'react'
import ImageDark from '../../assets/img/wallhaven-13exl1.jpg'
function InfoCard({ title, genre, number }) {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg cursor-pointer">
      <div className="image-text">
        <img className="w-full " src={ImageDark} alt="sdsdsdsd" />
        <div className="movie-side rounded">{number}</div>

      </div>

      <div className="px-6 py-4" style={{ backgroundColor: "#24262e" }}>
        <div className="text-white font-extrabold">{genre}</div>
        <div className="text-white text-xs text-sm">
          {title}
        </div>
      </div>
    </div>
  )
}

export default InfoCard
