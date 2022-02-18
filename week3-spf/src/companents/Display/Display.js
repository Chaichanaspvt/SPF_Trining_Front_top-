import "./Display.css"
import black from './black.jpeg'
export default function Display ({Img}) {

    return (
        <>
        <img className="main-display"
        src={(Img === undefined) ?  black:Img }>
        </img>
        </>
    )
}