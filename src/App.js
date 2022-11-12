import './App.css';
import { Typography } from "@mui/material";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img width="100" style={{borderRadius: "5px"}} src="./scammerFace.png" />
        <Typography variant="h1" component="h1">Scammer Whores
        </Typography>
        <Typography variant="h3" component="h3">A blockchain based Scammer Archive!</Typography>
        <Typography variant="h3" component="h3">Coming Soon on Arweave!</Typography>
      </header>
    </div>
  );
}

export default App;
