import { toast } from 'react-toastify'
import { useState } from 'react'

//* The index prop is used to set the className of the SingleColor component.
//* The className is set to color-light if the index is greater than 10.
//* This means that the text color will be white for the last 10 colors.
//* The text color will be black for the first 10 colors.
//* The color prop is used to set the background color of the SingleColor component.
//* The weight and hex properties are used to set the text content of the SingleColor component.

const SingleColor = ({ index, color }) => {
  //* The weight and hex properties are destructured from the color object.
  const { hex, weight } = color

  //* The opacity state is used to set the opacity of the tooltip.
  const [opacity, setOpacity] = useState(1)

  //* The text state is used to set the text content of the tooltip.
  const [text, setText] = useState('')

  //* The position state is used to set the position of the tooltip.
  const [position, setPosition] = useState({ x: 0, y: 0 })

  //* The saveToClipBoard function is called when the user clicks on the SingleColor component.
  //* The saveToClipBoard function uses the navigator.clipboard API to copy the hex value of the color to the clipboard.
  //* The function is asynchronous because the writeText method returns a promise.

  const saveToClipBoard = async () => {
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(`#${hex}`)
        toast.success('Color copied to clipboard')
      } catch (error) {
        toast.error('Failed to copy to clipboard')
      }
    } else {
      toast.error('Clipboard not supported')
    }
  }

  //* The handleMouseEnter function is called when the user moves the mouse over the SingleColor component.
  const handleMouseEnter = () => {
    setOpacity(0.5)
    setText('Click to copy to clipboard')
  }

  //* The handleMouseLeave function is called when the user moves the mouse away from the SingleColor component.
  const handleMouseLeave = () => {
    setOpacity(1)
    setText('')
  }

  //* The handleMouseMove function is called when the user moves the mouse on the screen.
  const handleMouseMove = e => {
    setPosition({ x: e.clientX, y: e.clientY })
  }

  //* The tooltipStyle object is used to set the position of the tooltip.
  const tooltipStyle = {
    position: 'fixed',
    top: position.y,
    left: position.x,
    color: index > 10 ? '#D3D3D3' : '#3f3f3f',
  }


  return (
    <article
      className={index > 10 ? 'color color-light' : 'color'}
      style={{ background: `#${hex}`, opacity: opacity, color: 'white' }}
      onClick={saveToClipBoard}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      data-testid={`color-#${hex}`}
    >
      <p className='percent-value'>{weight}%</p>
      <p className='color-value'>#{hex}</p>
      <span style={tooltipStyle}>{text}</span>
    </article>
  )
}
export default SingleColor
