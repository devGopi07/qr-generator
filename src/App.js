import logo from "./logo.svg";
import "./App.css";
// import QRCode from "react-qr-code";
import QRCode from "qrcode";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useState } from "react";

function App() {
  const [value, setValue] = useState("");
  const [height, setHeight] = useState("250");
  const [width, setWidth] = useState("250");
  const [qr, setQr] = useState("#000000");
  const [bg, setBg] = useState("#ffffff");
  const [jpg, setJpg] = useState(".jpg");
  const [png, setPng] = useState(".png");
  const [svg, setSvg] = useState(".svg");

  const [imgu, setImgu] = useState("");

  const [age, setAge] = React.useState("");
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  async function generateQrCode() {
    try { 
      const res = await QRCode.toDataURL(value);
      setImgu(res);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="App container">
      <h1>Qr Code Generator</h1>
      <div style={{ alignItems: "center" }} className="row">
        <div className="col-md-6 details-div">
          <p style={{ textAlign: "start" }}>Data</p>
          <TextField
            id="outlined-basic"
            label="Enter The Data"
            variant="outlined"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />

          <div className="h-w-div">
            <div>
              <p style={{ textAlign: "start" }}>Height</p>
              <TextField
                id="outlined-basic"
                label="Enter height"
                variant="outlined"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
              />
            </div>

            <div>
              <p style={{ textAlign: "start" }}>Width</p>
              <TextField
                id="outlined-basic"
                label="Enter width"
                variant="outlined"
                value={width}
                onChange={(e) => setWidth(e.target.value)}
              />
            </div>
          </div>
          {/* <div className="qrc-div">
            <p>QR Color : </p>
            <input
              type="color"
              value={qr}
              onChange={(e) => setQr(e.target.value)}
            />
          </div> 
          <div className="qrc-div">
            <p>Background Color : </p>
            <input
              type="color"
              value={bg}
              onChange={(e) => setBg(e.target.value)}
            />
          </div>
          <div className="format-select">
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Format</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Age"
                onChange={handleChange}
              >
                <MenuItem value={jpg}>jpg</MenuItem>
                <MenuItem value={png}>png</MenuItem>
                <MenuItem value={svg}>svg</MenuItem>
              </Select>
            </FormControl>
          </div> */}
          <div className="btnss">
            <Button
              color="success"
              variant="contained"
              onClick={() => generateQrCode()}
            >
              Generate
            </Button>
            <Button variant="contained"><a href={imgu} download style={{color:"white",textDecoration:"none"}}>Download</a></Button>
          </div>
        </div>
        <div className="qr-main col-md-6">
          <img
            // style={{ height: `350px`, width: `350px` }}
            style={{ height: `${height}px`, width: `${width}px` }}
            src={imgu}
            alt=""
          />
          {/* <QRCode
            fgColor={qr}
            bgColor={bg}
            style={{ height: height, width: width }}
            value={value}
          /> */}
        </div>
      </div>
    </div>
  );
}

export default App;
