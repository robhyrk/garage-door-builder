import Button from "./Button"
import Dropdown from "./Dropdown"

const DoorCustomizer = ({ handleChange, dropDownValues }) => {
  return (
    <section className="py-8 px-4 lg:mr-auto">
      <h3 className="text-3xl mb-5">Build your own</h3>
      <p className="text-sm mb-10 text-gray-600">Garage doors fully customizable to your needs.</p>
      {Object.keys(dropDownValues).map(key => {
        return <Dropdown key={key} handleChange={handleChange} label={key} values={dropDownValues[key]} />
      })}
      <div className="flex justify-between border-t mt-10 pt-7">
        <Button text="Print Order" type="primary" />
        <Button text="Contact Us" link="https://www.zendoors.com/contact" />
      </div>
    </section>
  )
}

export default DoorCustomizer
