import { useState, useEffect } from "react"
import { DROPDOWN_VALUES } from "../data/DROPDOWN_VALS"

const useDropdownFilter = (lites, liteStyles, setLiteStyles, panes, setPanes) => {
  const [dropDownValues, setDropDownValues] = useState({})

  const removeOptionsSD = () => {
    //removes pane and lite style values and their inputs
    setLiteStyles("")
    setPanes("")
    return Object.keys(dropDownValues).reduce((obj, key) => {
      const val = dropDownValues[key]
      if (obj[val] === undefined && key !== "Lites Styles" && key !== "Panes") {
        obj = { ...obj, [key]: val }
      }
      return obj
    }, {})
  }

  const removeOptionsLS = option => {
    console.log(option)
    setPanes("")
    return Object.keys(dropDownValues).reduce((obj, key) => {
      const val = dropDownValues[key]
      if (key === "Panes" && option === "VENICE") {
        obj = {
          ...obj,
          [key]: {
            1: "1P",
            2: "2P",
            3: "3P",
            4: "4P"
          }
        }
      } else if (key === "Panes" && option === "COLONIAL") {
        obj = {
          ...obj,
          [key]: {
            4: "4P",
            6: "6P",
            8: "8P"
          }
        }
      } else {
        obj = { ...obj, [key]: val }
      }
      return obj
    }, {})
  }

  //set initial values
  useEffect(() => {
    setDropDownValues(DROPDOWN_VALUES)
  }, [])

  //remove lite styles and panes if solid door is selected, otherwise reset values
  useEffect(() => {
    liteStyles ? setDropDownValues(removeOptionsLS(liteStyles)) : setDropDownValues(DROPDOWN_VALUES)
  }, [liteStyles])

  //remove lite styles and panes if solid door is selected, otherwise reset values
  useEffect(() => {
    lites === "SD" ? setDropDownValues(removeOptionsSD()) : setDropDownValues(DROPDOWN_VALUES)
  }, [lites])

  return [dropDownValues]
}

export default useDropdownFilter
