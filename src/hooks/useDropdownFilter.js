import { useState, useEffect } from "react"
import { DROPDOWN_VALUES } from "../data/DROPDOWN_VALS"

const options = ["CHATEAU-FLAT", "CHATEAU-TG", "MONARCH-FLAT", "MONARCH-TG", "REGAL", "REGAL-BOXED", "REGAL-TG", "SONOMA", "SONOMA-BOXED", "SONOMA-TG", "TRADITION-LP", "TRADITION-SP", "TUDOR", "TUDOR-BOXED", "TUDOR-TG", "VICTORIAN", "VICTORIAN-BOXED", "VICTORIAN-TG"]

const useDropdownFilter = style => {
  const [dropDownValues, setDropDownValues] = useState({})

  const removeLites = () => {
    return Object.keys(DROPDOWN_VALUES).reduce((obj, key) => {
      const val = DROPDOWN_VALUES[key]
      if (obj[val] === undefined && options.indexOf(style) > -1) {
        const lites = Object.keys(val).reduce((liteOptions, lite) => {
          const liteVal = val[lite]
          if (!lite.includes("Colonial") && !lite.includes("Venice")) {
            liteOptions = { ...liteOptions, [lite]: liteVal }
          }
          return liteOptions
        }, {})
        if (key === "Lites") {
          obj = { ...obj, Lites: lites }
        } else {
          obj = { ...obj, [key]: val }
        }
      } else {
        const lites = Object.keys(val).reduce((liteOptions, lite) => {
          const liteVal = val[lite]
          if (lite.includes("Colonial") || lite.includes("Venice") || lite.includes("Solid")) {
            liteOptions = { ...liteOptions, [lite]: liteVal }
          }
          return liteOptions
        }, {})
        if (key === "Lites") {
          obj = { ...obj, Lites: lites }
        } else {
          obj = { ...obj, [key]: val }
        }
      }
      return obj
    }, {})
  }

  //set initial values
  useEffect(() => {
    setDropDownValues(DROPDOWN_VALUES)
  }, [])

  useEffect(() => {
    style ? setDropDownValues(removeLites()) : setDropDownValues(DROPDOWN_VALUES)
  }, [style])

  return [dropDownValues]
}

export default useDropdownFilter
