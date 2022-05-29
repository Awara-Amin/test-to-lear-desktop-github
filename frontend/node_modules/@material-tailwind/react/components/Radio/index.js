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
var Radio = React.forwardRef(function(_param, ref) {
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
    ]), radio = useTheme().radio, defaultProps = radio.defaultProps, valid = radio.valid, styles = radio.styles, base = styles.base, colors = styles.colors;
    color = null != color ? color : defaultProps.color, ripple = null != ripple ? ripple : defaultProps.ripple, className = null != className ? className : defaultProps.className;
    var rippleEffect = void 0 !== ripple && new Ripple(), rootClasses = classnames(objectsToString(base.root)), containerClasses = classnames(objectsToString(base.container), null == containerProps ? void 0 : containerProps.className), inputClasses = classnames(objectsToString(base.input), objectsToString(colors[findMatch(valid.colors, color, "blue")]), className), labelClasses = classnames(objectsToString(base.label), null == labelProps ? void 0 : labelProps.className), radioIconClasses = classnames("absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity", colors[findMatch(valid.colors, color, "blue")].color);
    return React.createElement("div", {
        ref: ref,
        className: rootClasses
    }, React.createElement("label", _extends({}, containerProps, {
        className: containerClasses,
        htmlFor: rest.id || "radio",
        onMouseDown: function(e) {
            var onMouseDown = null == containerProps ? void 0 : containerProps.onMouseDown;
            return ripple && rippleEffect.create(e, "dark"), "function" == typeof onMouseDown && onMouseDown(e);
        }
    }), React.createElement("input", _extends({}, rest, {
        type: "radio",
        className: inputClasses,
        id: rest.id || "radio"
    })), React.createElement("div", {
        className: radioIconClasses
    }, icon || React.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        className: "h-3.5 w-3.5",
        viewBox: "0 0 16 16",
        fill: "currentColor"
    }, React.createElement("circle", {
        "data-name": "ellipse",
        cx: "8",
        cy: "8",
        r: "8"
    })))), label && React.createElement("label", _extends({}, labelProps, {
        className: labelClasses,
        htmlFor: rest.id || "radio"
    }), label));
});
Radio.propTypes = {
    color: PropTypes.oneOf(propTypesColor),
    label: propTypesLabel,
    icon: propTypesIcon,
    ripple: propTypesRipple,
    className: propTypesClassName,
    containerProps: propTypesContainerProps,
    labelProps: propTypesLabelProps
}, Radio.displayName = "MaterialTailwind.Radio";
export default Radio;
export { Radio };
