import React, { useState } from "react"

import "./App.css"

//COMPONENTS
import ImagePreview from "./components/ImagePreview"
import DoorCustomizer from "./components/DoorCustomizer"
import Page from "./components/Page"

import UseCreateImgLink from "./hooks/useCreateImgLink"
import UseDropdownFilter from "./hooks/useDropdownFilter"

function App() {
  const [width, setWidth] = useState("")
  const [height, setHeight] = useState("")
  const [style, setStyle] = useState("")
  const [lites, setLites] = useState("")
  const [liteStyles, setLiteStyles] = useState("")
  const [panes, setPanes] = useState("")

  const [imgSrc, message, setImgSrc, setMessage] = UseCreateImgLink(lites, liteStyles, panes, width, height, style)
  const [dropDownValues] = UseDropdownFilter(lites)

  const handleChange = (label, e) => {
    const val = e.target.value
    if (label === "Width") {
      setWidth(val)
    } else if (label === "Height") {
      setHeight(val)
    } else if (label === "Style") {
      setStyle(val)
    } else if (label === "Lites") {
      //removes pane and lite style values since solid doors do not contain those vals
      if (val === "SD") {
        setLites(val)
        setLiteStyles("")
        setPanes("")
        return
      } else {
        setLites(val)
      }
    } else if (label === "Lites Styles") {
      setLiteStyles(val)
    } else if (label === "Panes") {
      setPanes(val)
    }
  }

  return (
    <Page classes="md:grid grid-cols-2 gap-10 h-screen" title="Garage Door Builder">
      <ImagePreview message={message} src={imgSrc} setImgSrc={setImgSrc} setMessage={setMessage} />
      <DoorCustomizer dropDownValues={dropDownValues} lites={lites} handleChange={handleChange} />
    </Page>
  )
}

export default App
