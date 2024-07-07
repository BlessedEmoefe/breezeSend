import {ThemeProvider} from 'styled-components/native';
import {Navigation} from './src/infrastructure/navigation';
import {theme} from './src/infrastructure/theme';

function App(): React.JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <Navigation />
    </ThemeProvider>
  );
}

export default App;
