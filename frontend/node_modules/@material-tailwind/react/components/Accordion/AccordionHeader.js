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
import { useAccordion } from "./AccordionContext";
import { useTheme } from "../../context/theme";
import { propTypesClassName, propTypesChildren } from "../../types/components/accordion";
var AccordionHeader = React.forwardRef(function(_param, ref) {
    var _obj, className = _param.className, children = _param.children, rest = function(source, excluded) {
        if (null == source) return {};
        var key, i, target = {}, sourceKeys = Object.keys(source);
        for(i = 0; i < sourceKeys.length; i++)key = sourceKeys[i], excluded.indexOf(key) >= 0 || (target[key] = source[key]);
        return target;
    }(_param, [
        "className",
        "children"
    ]), _$ref = useAccordion(), open = _$ref.open, icon = _$ref.icon, accordion = useTheme().accordion, base = accordion.styles.base;
    className = null != className ? className : "";
    var buttonStyles = classnames(objectsToString(base.header.initial), ((_obj = {})[objectsToString(base.header.active)] = open, _obj), className), iconClasses = classnames(objectsToString(base.header.icon));
    return React.createElement("button", _extends({}, rest, {
        ref: ref,
        type: "button",
        className: buttonStyles
    }), children, React.createElement("span", {
        className: iconClasses
    }, null != icon ? icon : open ? React.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 20 20",
        fill: "currentColor"
    }, React.createElement("path", {
        fillRule: "evenodd",
        d: "M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z",
        clipRule: "evenodd"
    })) : React.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 20 20",
        fill: "currentColor"
    }, React.createElement("path", {
        fillRule: "evenodd",
        d: "M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z",
        clipRule: "evenodd"
    }))));
});
AccordionHeader.propTypes = {
    className: propTypesClassName,
    children: propTypesChildren
}, AccordionHeader.displayName = "MaterialTailwind.AccordionHeader";
export default AccordionHeader;
export { AccordionHeader };
