import { NavigationContainer } from "@react-navigation/native";
import { AuthRoutes } from "./auth.routes";
import { AppRoutes } from "./app.routes";
import { useState } from "react";

export function Routes(){

    const [user, setUser] = useState({});

    return(
        <NavigationContainer>
            {user ? <AppRoutes/> : <AuthRoutes/>}
        </NavigationContainer>    
    )
}