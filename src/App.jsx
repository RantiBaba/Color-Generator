import Form from './Form'
import ColorList from './ColorList'
import Values from 'values.js'
import { ToastContainer, toast } from 'react-toastify'

import { useState } from 'react'

const App = () => {

  //* The value of 10 in the all method represents 10% of the next shade of the color and also 10% of the tint of the color.

  const [colors, setColors] = useState(new Values('#f15025').all(10))

  //* The addColor function is passed down to the Form component as a prop.
  //* The addColor function is called when the user submits the form.
  //* The addColor function takes in a color as an argument.
  //* The color argument is passed to the Values constructor function.
  //* The all method is called on the Values constructor function, it returns an array of 10 shades of the color.
  //* The array of colors is passed to the ColorList component as a prop.
  //* The ColorList component maps over the array of colors and renders a SingleColor component for each color.
  //* The SingleColor component renders a div with a background color set to the color, it renders the hex and weight of the color.
  //* The SingleColor component also renders a button that copies the hex and rgb values of the color to the clipboard.

  const addColor = color => {
    try {
      const newColors = new Values(color).all(10)
      setColors(newColors)
      toast.success('Success')
    } catch (error) {
      toast.error(`${error.message}. Enter a valid hex number`)
    }
  }

  return (
    <main>
      <Form addColor={addColor} />
      <ColorList colors={colors} />
      <ToastContainer position='top-right' draggable={true} closeOnClick={true} />
    </main>
  )
}
export default App
