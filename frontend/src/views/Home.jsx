import React, {useEffect, useState} from "react";
import useAppContext from "../store/appContext";

export const Home = () =>{
    const {store, actions} = useAppContext();


    return(
        <div>
            Soy el home

        </div>
    );
};