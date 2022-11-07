import React from "react"

const Dropdown = ({ label, values, handleChange }) => {
  return (
    <div className="flex flex-col gap-1 mb-5">
      <label className="text-xs font-bold uppercase mb-1" htmlFor={label}>
        {label}
      </label>
      <select defaultValue={"Choose an option"} placeholder="Choose an option" onChange={e => handleChange(label, e)} name={label} id={label}>
        <option value="Choose an option" disabled>
          Choose an option
        </option>
        {Object.keys(values).map(val => (
          <option key={val} value={values[val]}>
            {val}
          </option>
        ))}
      </select>
    </div>
  )
}

export default Dropdown
