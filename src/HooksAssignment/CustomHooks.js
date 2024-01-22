import React, { useEffect } from "react";

const useDebounceHook = (time, callback, depArray) => {
    useEffect(() => {
        timeout = setTimeout(() => {
            callback()
        }, time)

        // to clear timout 
        return () => clearTimeout(timeout) 
    }, depArray)

}

export {useDebounceHook};