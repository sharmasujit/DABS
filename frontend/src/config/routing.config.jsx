import { useEffect } from "react";
import { initFlowbite } from "flowbite";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import LoginPage from "../pages/auth/login.page";
import RegisterPage from "../pages/auth/register.page";

const RoutingConfig = () => {
    useEffect(()=>{
        initFlowbite();
    })
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/"  element={<LoginPage/>}/>
                    <Route path="/register"  element={<RegisterPage/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default RoutingConfig;