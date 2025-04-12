import { NavLink, useRouteError } from "react-router-dom";

export const ErrorPage = () => {

    const error = useRouteError();       // Hook for the error showing if page not found with this hook.
    console.log(error);
    return (
        <div>
            <h1>Oop! An error occured.</h1>
            {error && <p>{error.data}</p>}     //If error occur then show "{error.data}"
            <NavLink to="/"> <button> Go Home</button></NavLink>
        </div>
    )
}
