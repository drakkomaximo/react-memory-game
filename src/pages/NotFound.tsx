import { useNavigate } from "react-router-dom";
import { ROUTES } from "../utils";

export const NotFound = () => {
    const navigate = useNavigate();

    const goToLogin = () =>{
        navigate(ROUTES.LOGIN)
    }

    return (
        <div>
            <h1>404</h1>
            <p>Page not found</p>
            <button className="bg-red-500 p-4 text-white" onClick={goToLogin}>Return Login</button>
        </div>
    );
};