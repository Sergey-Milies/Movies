import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import {StyledEngineProvider} from "@mui/material";
import { store } from './app/Redux/store';
import Layout from './components/Layout/Layout';
import {BrowserRouter} from "react-router-dom";

const container = document.getElementById('root')!;
const root = createRoot(container);


const App = () => (
    <Provider store={store}>
        <BrowserRouter>
            <StyledEngineProvider injectFirst>
                <Layout />
            </StyledEngineProvider>
        </BrowserRouter>
    </Provider>
)

root.render(<App/>);