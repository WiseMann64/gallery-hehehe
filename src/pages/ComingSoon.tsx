import { Navigate } from "react-router-dom";

export const ComingSoon = () => {

    const time = Date.now();
    const oneYear = 1663584240000;
    const test = 1661766650000;

    const passed = time >= test;

    return (
        <>
            {passed ? 
            <Navigate to={"/lock"}/>
            :
            <>COMING SOON</>
            }
        </>
    );
};