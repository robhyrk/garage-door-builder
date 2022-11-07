import { useState, useEffect } from "react"
import { DROPDOWN_VALUES } from "../data/DROPDOWN_VALS"

const UseDropdownFilter = lites => {
  const [dropDownValues, setDropDownValues] = useState({})

  const removeOptionsSD = () => {
    return Object.keys(dropDownValues).reduce((obj, key) => {
      const val = dropDownValues[key]
      if (obj[val] === undefined && key !== "Lites Styles" && key !== "Panes") {
        obj = { ...obj, [key]: val }
      }
      return obj
    }, {})
  }

  useEffect(() => {
    setDropDownValues(DROPDOWN_VALUES)
  }, [])

  useEffect(() => {
    lites === "SD" ? setDropDownValues(removeOptionsSD()) : setDropDownValues(DROPDOWN_VALUES)
  }, [lites])

  return [dropDownValues]
}

export default UseDropdownFilter
