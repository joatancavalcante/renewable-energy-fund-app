import { NavigationContainer } from "@react-navigation/native";
import { AuthRoutes } from "./auth.routes";
import { AppRoutes } from "./app.routes";
import { useState } from "react";
import { useSelector } from 'react-redux';

export function Routes(){

    const user = useSelector((store) => store.userStore.user);

    return(
        <NavigationContainer>
            {user.username ? <AppRoutes/> : <AuthRoutes/>}
        </NavigationContainer>    
    )
}