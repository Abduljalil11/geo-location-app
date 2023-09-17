import Header from "../components/Header"

function Splash() {
  return (
    <div className="pages splash">
        <Header/>
        <div className="elipse--div">
            <div className="elipse"></div>
            <div className="elipse"></div>
            <div className="elipse active"></div>
        </div>
    </div>
  )
}

export default Splash