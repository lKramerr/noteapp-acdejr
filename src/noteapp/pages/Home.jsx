import { useDispatch, useSelector } from "react-redux";
import { startLogout } from "../../store/auth";

export const Home = () => {

    const { email } = useSelector( state => state.auth );
    const dispatch = useDispatch();

    const onLogout = () => {

        dispatch( startLogout() );

    };

    return (
        <>
        
            <h1>Welcome Aboard, { email }!</h1>
            <button className="btn btn-danger" onClick={ onLogout }>Log out</button>
        
        </>
    )

};