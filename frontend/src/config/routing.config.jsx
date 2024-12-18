import { BrowserRouter,Routes,Route } from "react-router-dom";

const RoutingConfig = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/"  element={""}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default RoutingConfig;