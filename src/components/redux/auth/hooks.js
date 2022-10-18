import { isLoggedIn, selectUser } from "./selectors";
import { useSelector } from "react-redux";

export const useAuth = () => {

    const checkLoggedIn = useSelector(isLoggedIn)
    const user = useSelector(selectUser)

    return {
        checkLoggedIn,
        user
    }


}