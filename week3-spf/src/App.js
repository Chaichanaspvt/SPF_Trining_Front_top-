
import './App.css';
import {BtInitModel,BtGrabImage,BtRun} from './companents/Button/SPFButton.js'
import Display from './companents/Display/Display'
import 'bootstrap/dist/css/bootstrap.min.css';
import React , {useState,useCallback}  from 'react';
import TableResult from './companents/Table/TableResult';
function App() {
  const [Img,SetImg] = useState();
  const [Result,setResult] = useState();
  const [AreaResult,setAreaResult] = useState();
  const [AreaCount,setAreaCount] = useState();
  const [CycleTime,setCycleTime] = useState();

  const handleImage = useCallback(
    () => {
      //Api get Image
      SetImg('https://itp1.itopfile.com/ImageServer/d271e9d835e66d73/0/0/ST-VTbanner21z-z264503491302.webp')
      console.log('getImage')
    }
  )
  const Run = useCallback(() =>{ 


  })


  return (
  <div>
    <div>
  <Display Img = {Img}></Display>
  <BtInitModel/>
  <BtGrabImage handleImage = {handleImage}  ></BtGrabImage>
  <BtRun Run = {Run}  ></BtRun>
  </div>
  <div>
    <TableResult Result = {Result}
    AreaResult = {AreaResult}
    AreaCount ={AreaCount}
    CycleTime = {CycleTime}
    ></TableResult>
  </div>
  </div>
  
  // input even data
  // * onClick= {() =>function Name (data)}
  );
}

export default App;
