import SingleColor from './SingleColor'
import { nanoid } from 'nanoid'

const ColorList = ({ colors }) => {
  //* The index in the map method is used to set the className of the SingleColor component.
  //* See the SingleColor component for more details.
  return (
    <section className='colors'>
      {colors.map((color, index) => {
        return <SingleColor key={nanoid()} color={color} index={index} />
      })}
    </section>
  )
}
export default ColorList
