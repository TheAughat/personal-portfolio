import { ThemeProvider } from '@mui/material/styles';
import { defaultTheme } from './utils/Theme';
import LandingBackground from './components/pages/LandingBackground';


function App() {
    return (
        <ThemeProvider theme={defaultTheme}>
            <LandingBackground/>
        </ThemeProvider>
    );
}

export default App;
