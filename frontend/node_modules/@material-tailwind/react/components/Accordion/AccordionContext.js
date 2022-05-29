import React from "react";
import { propTypesValue, propTypesChildren } from "../../types/components/accordion";
export var AccordionContext = React.createContext(null);
AccordionContext.displayName = "MaterialTailwind.AccordionContext";
export function useAccordion() {
    var context = React.useContext(AccordionContext);
    if (!context) throw new Error("useAccordion() must be used within an Accordion. It happens when you use AccordionHeader or AccordionBody components outside the Accordion component.");
    return context;
}
export var AccordionContextProvider = function(param) {
    var value = param.value, children = param.children;
    return React.createElement(AccordionContext.Provider, {
        value: value
    }, children);
};
AccordionContextProvider.propTypes = {
    value: propTypesValue,
    children: propTypesChildren
}, AccordionContextProvider.displayName = "MaterialTailwind.AccordionContextProvider";
