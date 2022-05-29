import React from "react";
import { propTypesContextValue, propTypesChildren } from "../../types/components/menu";
export var MenuContext = React.createContext(null);
MenuContext.displayName = "MaterialTailwind.MenuContext";
export function useMenu() {
    var context = React.useContext(MenuContext);
    if (!context) throw new Error("useMenu() must be used within a Menu. It happens when you use MenuCore, MenuHandler, MenuItem or MenuList components outside the Menu component.");
    return context;
}
export var MenuContextProvider = function(param) {
    var value = param.value, children = param.children;
    return React.createElement(MenuContext.Provider, {
        value: value
    }, children);
};
MenuContextProvider.prototypes = {
    value: propTypesContextValue,
    children: propTypesChildren
}, MenuContextProvider.displayName = "MaterialTailwind.MenuContextProvider";
