import { Outlet } from "react-router-dom"
import { Suspense } from 'react';
import AppNav from "./AppNav";


const Layout = () => {



return (

<div>
<AppNav/>
<Suspense fallback={<div>...Loading</div>}>

<Outlet/>
</Suspense>


</div>


)



}

export default Layout