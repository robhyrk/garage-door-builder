import React, { useState } from "react"

import "./App.css"

//COMPONENTS
import ImagePreview from "./components/ImagePreview"
import DoorCustomizer from "./components/DoorCustomizer"
import Page from "./components/Page"

import useCreateImgLink from "./hooks/useCreateImgLink"
import useDropdownFilter from "./hooks/useDropdownFilter"

function App() {
  const [width, setWidth] = useState("")
  const [height, setHeight] = useState("")
  const [style, setStyle] = useState("")
  const [lites, setLites] = useState("")
  const [liteStyles, setLiteStyles] = useState("")
  const [panes, setPanes] = useState("")

  const [imgSrc, message, setImgSrc, setMessage] = useCreateImgLink(lites, liteStyles, panes, width, height, style)
  const [dropDownValues] = useDropdownFilter(lites, liteStyles, setLiteStyles, panes, setPanes)

  const handleChange = (label, e) => {
    const val = e.target.value
    if (label === "Width") {
      setWidth(val)
    }
    if (label === "Height") {
      setHeight(val)
    }
    if (label === "Style") {
      setStyle(val)
    }
    if (label === "Lites") {
      setLites(val)
    }
    if (label === "Lites Styles") {
      setLiteStyles(val)
    }
    if (label === "Panes") {
      setPanes(val)
    }
  }

  return (
    <Page classes="lg:grid grid-cols-2 gap-10 h-screen" title="Garage Door Builder">
      <ImagePreview message={message} src={imgSrc} setImgSrc={setImgSrc} setMessage={setMessage} />
      <DoorCustomizer dropDownValues={dropDownValues} lites={lites} handleChange={handleChange} />
    </Page>
  )
}

export default App
