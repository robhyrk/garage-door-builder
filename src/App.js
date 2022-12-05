import React, { useState } from "react"
import Button from "./components/Button"
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

  const [dropDownValues] = useDropdownFilter(style, setLites, lites)
  const [imgSrc, message, setImgSrc, setMessage] = useCreateImgLink(lites, width, height, style)

  const handleChange = (label, e) => {
    const val = e.target.value
    if (label === "Width") {
      setWidth(val)
    }
    if (label === "Height") {
      setHeight(val)
    }
    if (label === "Style") {
      setLites("SD")
      setStyle(val)
    }
    if (label === "Lites") {
      setLites(val)
    }
  }

  return (
    <Page classes="lg:grid grid-cols-2 gap-10 h-screen" title="Garage Door Builder">
      <ImagePreview message={message} src={imgSrc} setImgSrc={setImgSrc} setMessage={setMessage} />
      <DoorCustomizer style={style} setLites={setLites} dropDownValues={dropDownValues} lites={lites} handleChange={handleChange} />
    </Page>
  )
}

export default App
