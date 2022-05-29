import React from "react";
import { useIsomorphicLayoutEffect } from "framer-motion";
import { propTypesContextValue, propTypesChildren } from "../../types/components/select";
export var SelectContext = React.createContext(null);
SelectContext.displayName = "MaterialTailwind.SelectContext";
export function useSelect() {
    var context = React.useContext(SelectContext);
    if (null === context) throw new Error("useSelect() must be used within a Select. It happens when you use SelectOption component outside the Select component.");
    return context;
}
export function usePrevious(value) {
    var ref = React.useRef();
    return useIsomorphicLayoutEffect(function() {
        ref.current = value;
    }, [
        value
    ]), ref.current;
}
export var SelectContextProvider = function(param) {
    var value = param.value, children = param.children;
    return React.createElement(SelectContext.Provider, {
        value: value
    }, children);
};
SelectContextProvider.propTypes = {
    value: propTypesContextValue,
    children: propTypesChildren
}, SelectContextProvider.displayName = "MaterialTailwind.SelectContextProvider";
