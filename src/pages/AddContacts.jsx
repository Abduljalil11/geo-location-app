import Search from "../components/Search"
import Contact from "../components/Contact"

function AddContacts() {
  return (
    <div className='pages contacts'>
        <p className="edit-profile contacts">Contacts</p>
        <div className="back--div">
            <img className="chevronLeft-b" src="./assets/images/Chevron Left.svg" alt="" />
            <p className='back'>Back</p>
        </div>
        <Search/>
        <div className="contact--div">
            <Contact/>
            <Contact/>
            <Contact/>
            <Contact/>
            <Contact/>
            <Contact/>
            <Contact/>
            <Contact/>
            <Contact/>
        </div>
        <footer>
            <img className="smartphone" src="./assets/images/Add to Favorites.svg" alt="" />
            <img className="people" src="./assets/images/Clock.svg" alt="" />
            <img className="grayMaleUser" src="./assets/images/Tiny Male User.svg" alt="" />
            <img className="grayMaleUser" src="./assets/images/Keypad.svg" alt="" />
        </footer>  
    </div>
  )
}

export default AddContacts