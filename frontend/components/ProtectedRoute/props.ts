import { SingletonRouter } from "next/router";

export default interface ProtectedRouteProps {
   children : React.ReactNode,
   router: any
}