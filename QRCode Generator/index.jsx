import React, { useState } from 'react';

const QRCode = () => {
     const [Data, setData] = useState('');
     const [Size, setSize] = useState(150);
     const [Img, setImg] = useState('');
  

     async function HandleGenarate(){
          if(!Data){
               return alert("Please Enter URL");
          }      
          const URL =(`https://api.qrserver.com/v1/create-qr-code/?size=${Size}x${Size}&data=${Data}`);
          setImg(URL);    
     }

     function HandleDownload(){
          if(!Img){
               return alert("Please wait for QR Code genarate");
          }
          const a = document.createElement('a');
          a.href= Img;
          a.target= '_blank';
          a.download = 'QRCode.png';
          a.click();
     }

  return (
    <div className='container'>
     <h1 id="head">QR Code Genarate</h1>
     {Img && <img src={Img} id="image" alt='QRCode'/>}
     <div id="input-box">
          <input type="text" className='input' placeholder='Enter URL (eg: www.google.com)' value={Data} onChange={(e)=>setData(e.target.value)}/>
          <input type="text" className='input' placeholder='Enter QR Size (eg: 150px)' value={Size} onChange={(e)=>setSize(e.target.value)} />
     </div>
     <div id="btn-box">
          <button className='btn' onClick={HandleGenarate}>QR Code Genarate</button>
          <button className='btn' onClick={HandleDownload}  >Download QR Code</button>
     </div>
    </div>
  )
}

export default QRCode

