import {observer} from "mobx-react";
import NavBar from "./components/navBar/NavBar";
import {BrowserRouter} from "react-router-dom";
import Footer from "./components/footer/Footer";
import AppRouter from "./components/AppRouter";
import "./App.css"

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
