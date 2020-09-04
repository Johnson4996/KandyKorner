import React from "react"
import"./Location.css"


export const Location = ({ location }) => (
    <section className="location">
        <address className="location__address">{location.address}</address>
        <p className="location_sqft">{location.sqft}</p>
        <p className="location_handicap">{location.handicap}</p>
    </section>
)