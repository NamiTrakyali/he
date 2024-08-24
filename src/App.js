
import './styles/App.css';
import Banner from './components/Banner'
import Photogrid from './components/Photogrid'
import PerfectVacation from './components/PerfectVacation';
import Explore from "./components/Explore"
import Reasons from './components/Reasons';
import Footer from "./components/Footer"
import Tour from "./components/Tour"


import {createMuiTheme,ThemeProvider, responsiveFontSizes } from '@material-ui/core/styles';

let theme=createMuiTheme({

typography:{fontFamily: 'Nunito Sans'},

palette: {
  primary: {
    main:'#121C20',
  },
},

// spacing:'1%',
})

theme=responsiveFontSizes(theme);



const App=()=>{
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <Banner/>
      <Photogrid/>
      <Reasons/>
      <PerfectVacation/>
      <Explore/>
      <Tour/>
      <Footer/>
    </div>
    </ThemeProvider>
  );
}

export default App;
