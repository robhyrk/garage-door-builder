import React from "react"
import Dropdown from "./Dropdown"

const DoorCustomizer = ({ handleChange, dropDownValues }) => {
  return (
    <section className="py-8 px-4 lg:mr-auto">
      <h3 className="text-4xl mb-5">Build your own</h3>
      <p className="text-sm mb-7 text-gray-600">Garage doors fully customizable to your needs.</p>
      {Object.keys(dropDownValues).map(key => {
        return <Dropdown key={key} handleChange={handleChange} label={key} values={dropDownValues[key]} />
      })}
    </section>
  )
}

export default DoorCustomizer
