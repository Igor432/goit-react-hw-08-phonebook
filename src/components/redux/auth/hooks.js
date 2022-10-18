import { isLoggedIn, selectUser } from "./selectors";
import { useSelector } from "react-redux";

export const useAuth = () => {

    const checkLoggedin = useSelector(isLoggedIn)
    const user = useSelector(selectUser)

    return (

        checkLoggedin, user
    )

}