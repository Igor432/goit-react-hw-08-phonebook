import { isLoggedIn, selectUser, selectIsRefreshing } from "./selectors";
import { useSelector } from "react-redux";

export const useAuth = () => {

    const checkLoggedIn = useSelector(isLoggedIn)
    const user = useSelector(selectUser)
    const isRefreshing = useSelector(selectIsRefreshing)

    return {
        checkLoggedIn,
        user,
        isRefreshing
    }


}