

function ContactItem({ContactInfo}) {
  return (
    <a href={`tel:${ContactInfo.phone}`} className='contact'>
        <img className='smallMaleUser' src="./assets/images/Small Male User.svg" alt="" />
        <p className='userName'>{ContactInfo.name}</p>
    </a>
  )
}

export default ContactItem
