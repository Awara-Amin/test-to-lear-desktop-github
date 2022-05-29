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
import PropTypes from "prop-types";
import Ripple from "material-ripple-effects";
import classnames from "classnames";
import findMatch from "../../utils/findMatch";
import objectsToString from "../../utils/objectsToString";
import { useTheme } from "../../context/theme";
import { propTypesColor, propTypesLabel, propTypesIcon, propTypesRipple, propTypesClassName, propTypesContainerProps, propTypesLabelProps } from "../../types/components/checkbox";
var Checkbox = React.forwardRef(function(_param, ref) {
    var color = _param.color, label = _param.label, icon = _param.icon, ripple = _param.ripple, className = _param.className, containerProps = _param.containerProps, labelProps = _param.labelProps, rest = function(source, excluded) {
        if (null == source) return {};
        var key, i, target = {}, sourceKeys = Object.keys(source);
        for(i = 0; i < sourceKeys.length; i++)key = sourceKeys[i], excluded.indexOf(key) >= 0 || (target[key] = source[key]);
        return target;
    }(_param, [
        "color",
        "label",
        "icon",
        "ripple",
        "className",
        "containerProps",
        "labelProps"
    ]), checkbox = useTheme().checkbox, defaultProps = checkbox.defaultProps, valid = checkbox.valid, styles = checkbox.styles, base = styles.base, colors = styles.colors;
    color = null != color ? color : defaultProps.color, ripple = null != ripple ? ripple : defaultProps.ripple, className = null != className ? className : defaultProps.className;
    var rippleEffect = void 0 !== ripple && new Ripple(), rootClasses = classnames(objectsToString(base.root)), containerClasses = classnames(objectsToString(base.container), null == containerProps ? void 0 : containerProps.className), inputClasses = classnames(objectsToString(base.input), objectsToString(colors[findMatch(valid.colors, color, "blue")]), className), labelClasses = classnames(objectsToString(base.label), null == labelProps ? void 0 : labelProps.className);
    return React.createElement("div", {
        ref: ref,
        className: rootClasses
    }, React.createElement("label", _extends({}, containerProps, {
        className: containerClasses,
        htmlFor: rest.id || "checkbox",
        onMouseDown: function(e) {
            var onMouseDown = null == containerProps ? void 0 : containerProps.onMouseDown;
            return ripple && rippleEffect.create(e, "dark"), "function" == typeof onMouseDown && onMouseDown(e);
        }
    }), React.createElement("input", _extends({}, rest, {
        type: "checkbox",
        className: inputClasses,
        id: rest.id || "checkbox"
    })), React.createElement("div", {
        className: "text-white absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity"
    }, icon || React.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        className: "h-3.5 w-3.5",
        viewBox: "0 0 20 20",
        fill: "currentColor",
        stroke: "currentColor",
        strokeWidth: 1
    }, React.createElement("path", {
        fillRule: "evenodd",
        d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
        clipRule: "evenodd"
    })))), label && React.createElement("label", _extends({}, labelProps, {
        className: labelClasses,
        htmlFor: rest.id || "checkbox"
    }), label));
});
Checkbox.propTypes = {
    color: PropTypes.oneOf(propTypesColor),
    label: propTypesLabel,
    icon: propTypesIcon,
    ripple: propTypesRipple,
    className: propTypesClassName,
    containerProps: propTypesContainerProps,
    labelProps: propTypesLabelProps
}, Checkbox.displayName = "MaterialTailwind.Checkbox";
export default Checkbox;
export { Checkbox };
