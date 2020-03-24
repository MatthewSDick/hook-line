import React, { useState } from 'react'

const App = () => {
  const [hue, setHue] = useState(0)
  const [saturation, setSaturation] = useState(0)
  const [light, setLight] = useState(0)
  const [alpha, setAlpha] = useState(1)

  const changeHue = (e) => {
    const i = e.target.value
    setHue(i)
  }

  const changeSaturation = (e) => {
    const i = e.target.value
    setSaturation(i)
  }

  const changeLight = (e) => {
    const i = e.target.value
    setLight(i)
  }

  const changeAlpha = (e) => {
    const i = e.target.value
    setAlpha(i)
  }

  const randomColor = () => {
    setHue(Math.floor(Math.random() * 360))
    setSaturation(Math.floor(Math.random() * 360))
    setLight(Math.floor(Math.random() * 360))
    setAlpha(Math.floor(Math.random() * 360))
  }

  return (
    <>
      <div className="colorBox">
        <input
          className="color-result"
          style={{
            backgroundColor: `hsla(${hue}, ${saturation}%, ${light}%, ${alpha})`,
          }}
        ></input>
        <p className="colorInfo">{`hsla:${hue}, ${saturation}%, ${light}%, ${alpha}`}</p>

        <input
          onChange={changeHue}
          type="range"
          min="0"
          max="360"
          value={hue}
          className="hueSlider"
          id="myRange"
        ></input>
        <input
          onChange={changeSaturation}
          type="range"
          min="0"
          max="100"
          value={saturation}
          className="saturationSlider"
          id="myRange"
        ></input>
        <input
          onChange={changeLight}
          type="range"
          min="0"
          max="100"
          value={light}
          className="lightSlider"
          id="myRange"
        ></input>
        <input
          onChange={changeAlpha}
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={alpha}
          className="alphaSlider"
          id="myRange"
        ></input>
        <br />
        <button className="randomColor" onClick={randomColor}>
          Random Color
        </button>
      </div>
    </>
  )
}

export default App
