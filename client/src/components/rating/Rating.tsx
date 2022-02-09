import React from "react";
import './rating.scss'

export default function Rating({rating}) {
  const ratingRound = Math.round(rating)
  return (
    <div className="rating">
      {!ratingRound ? '-' : ratingRound}
    </div>
  )
}
