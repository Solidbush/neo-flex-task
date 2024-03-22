import {observer} from "mobx-react";
import {BrowserRouter} from "react-router-dom";
import Footer from "./components/footer/Footer";
import AppRouter from "./AppRouter";
import "./App.css"
import {NavBar} from "./components/navBar/NavBar";

const App = observer(() => {
    return (
        <div className={"app"}>
            <BrowserRouter>
                <NavBar/>
                <AppRouter />
                <Footer/>
            </BrowserRouter>
        </div>
    );
})

export default App;
