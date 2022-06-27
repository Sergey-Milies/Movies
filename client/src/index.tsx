import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import {BrowserRouter} from "react-router-dom";
import {StyledEngineProvider} from "@mui/material";
import {store} from "./Store/store";
import Layout from "./Layout/Layout";

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