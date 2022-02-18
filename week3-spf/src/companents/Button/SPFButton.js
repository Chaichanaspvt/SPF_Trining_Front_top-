
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Buttom.css'
function Alret () {
    alert("Hollow   SPF ")
}


export default function SPFButton () {
    return(
    <Button onClick={Alret}>Init</Button>

    )
}
//* #region  Init Model
// This Buttom  for initial model
//1. Read Model
//2. List Image

export function BtInitModel() 
{
    function InitModel () {
        alert("Init Model")
    }
    return(
        <Button className='main-button' onClick={InitModel}>  1. Initial Model </Button>
    )
}
//* #endregion


export function  BtGrabImage ({handleImage}) {

    return(
        <Button className='main-button' 
        onClick={handleImage}>2. Grab Image</Button>
    )
}

export function BtRun ({Run}) {
    return(
        <Button className='main-button'
        onClick={Run}>3. Run</Button>
    )
}

