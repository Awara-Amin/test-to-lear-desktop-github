import React from "react";
import { propTypesContextValue, propTypesChildren } from "../../types/components/popover";
export var PopoverContext = React.createContext(null);
PopoverContext.displayName = "MaterialTailwind.PopoverContext";
export function usePopover() {
    var context = React.useContext(PopoverContext);
    if (!context) throw new Error("usePopover() must be used within a Popover. It happens when you use PopoverHandler or PopoverContent components outside the Popover component.");
    return context;
}
export var PopoverContextProvider = function(param) {
    var value = param.value, children = param.children;
    return React.createElement(PopoverContext.Provider, {
        value: value
    }, children);
};
PopoverContextProvider.propTypes = {
    value: propTypesContextValue,
    children: propTypesChildren
}, PopoverContextProvider.displayName = "MaterialTailwind.PopoverContextProvider";
