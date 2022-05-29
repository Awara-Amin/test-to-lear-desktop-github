import React, { createContext, useContext, useState, useMemo } from "react";
import { propTypesValue } from "../../types/components/tabs";
import { propTypesChildren } from "../../types/components/tabs";
export var TabsContext = createContext(null);
TabsContext.displayName = "MaterialTailwind.TabsContext";
export function useTabs() {
    var context = useContext(TabsContext);
    if (!context) throw new Error("useTabs() must be used within a Tabs. It happens when you use TabsHeader, TabsBody, Tab or TabPanel outside the Tabs component.");
    return context;
}
export var TabsContextProvider = function(param) {
    var value = param.value, children = param.children, ref = useState({
        active: value,
        appliedAnimation: {
            unmount: {},
            mount: {}
        }
    }), tab = ref[0], setTab = ref[1], contextValue = useMemo(function() {
        return {
            tab: tab,
            setTab: setTab
        };
    }, [
        tab
    ]);
    return React.createElement(TabsContext.Provider, {
        value: contextValue
    }, children);
};
TabsContextProvider.propTypes = {
    value: propTypesValue,
    children: propTypesChildren
}, TabsContextProvider.displayName = "MaterialTailwind.TabsContextProvider";
