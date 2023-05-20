import { useState } from 'react'

const Form = ({ addColor }) => {
  const [color, setColor] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    addColor(color)
  }

  return (
    <section className='container'>
      <h4>color generator</h4>
      <form className='color-form' onSubmit={handleSubmit}>
        {/*//*The value of the input field is set to the value of the color state. */}
        {/*//* This means that the input field will be empty when the page loads. */}
        {/*//* As the user types in the input field, the color state will be updated. */}

        <input type='color' value={color} onChange={e => setColor(e.target.value)} />

        <input type='text' value={color} onChange={e => setColor(e.target.value)} placeholder='#f15025' />
        {/* //*The background color of the button is set to the value of the color state.*/}
        {/*//* This means that the button will change color as the user types in the input field. */}
        {/*//* The button will also change color when the user submits the form.*/}
        <button className='btn' type='submit' style={{ background: color }}>
          submit
        </button>
      </form>
    </section>
  )
}
export default Form
