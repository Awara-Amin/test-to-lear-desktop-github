function _extends() {
    return (_extends = Object.assign || function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source)Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
        }
        return target;
    }).apply(this, arguments);
}
import React from "react";
import classnames from "classnames";
import objectsToString from "../../utils/objectsToString";
import { useTheme } from "../../context/theme";
import { AccordionContextProvider, useAccordion } from "./AccordionContext";
import { propTypesOpen, propTypesIcon, propTypesAnimate, propTypesDisabled, propTypesClassName, propTypesChildren } from "../../types/components/accordion";
import AccordionHeader from "./AccordionHeader";
import AccordionBody from "./AccordionBody";
var Accordion = React.forwardRef(function(_param, ref) {
    var _obj, open = _param.open, icon = _param.icon, animate = _param.animate, className = _param.className, disabled = _param.disabled, children = _param.children, rest = function(source, excluded) {
        if (null == source) return {};
        var key, i, target = {}, sourceKeys = Object.keys(source);
        for(i = 0; i < sourceKeys.length; i++)key = sourceKeys[i], excluded.indexOf(key) >= 0 || (target[key] = source[key]);
        return target;
    }(_param, [
        "open",
        "icon",
        "animate",
        "className",
        "disabled",
        "children"
    ]), accordion = useTheme().accordion, defaultProps = accordion.defaultProps, base = accordion.styles.base;
    icon = null != icon ? icon : defaultProps.icon, animate = null != animate ? animate : defaultProps.animate, className = null != className ? className : defaultProps.className, disabled = null != disabled ? disabled : defaultProps.disabled;
    var accordionClasses = classnames(objectsToString(base.container), ((_obj = {})[objectsToString(base.disabled)] = disabled, _obj), className), contextValue = React.useMemo(function() {
        return {
            open: open,
            icon: icon,
            animate: animate
        };
    }, [
        open,
        icon,
        animate
    ]);
    return React.createElement(AccordionContextProvider, {
        value: contextValue
    }, React.createElement("div", _extends({}, rest, {
        ref: ref,
        className: accordionClasses
    }), children));
});
Accordion.propTypes = {
    open: propTypesOpen,
    icon: propTypesIcon,
    animate: propTypesAnimate,
    disabled: propTypesDisabled,
    className: propTypesClassName,
    children: propTypesChildren
}, Accordion.displayName = "MaterialTailwind.Accordion";
export default Object.assign(Accordion, {
    Header: AccordionHeader,
    Body: AccordionBody
});
export { Accordion, AccordionHeader, AccordionBody, useAccordion };
