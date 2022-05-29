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
import { propTypesColor, propTypesLabel, propTypesRipple, propTypesClassName, propTypesContainerProps, propTypesLabelProps, propTypesCircleProps } from "../../types/components/checkbox";
var Switch = React.forwardRef(function(_param, ref) {
    var color = _param.color, label = _param.label, ripple = _param.ripple, className = _param.className, containerProps = _param.containerProps, circleProps = _param.circleProps, labelProps = _param.labelProps, rest = function(source, excluded) {
        if (null == source) return {};
        var key, i, target = {}, sourceKeys = Object.keys(source);
        for(i = 0; i < sourceKeys.length; i++)key = sourceKeys[i], excluded.indexOf(key) >= 0 || (target[key] = source[key]);
        return target;
    }(_param, [
        "color",
        "label",
        "ripple",
        "className",
        "containerProps",
        "circleProps",
        "labelProps"
    ]), toggle = useTheme().switch, defaultProps = toggle.defaultProps, valid = toggle.valid, styles = toggle.styles, base = styles.base, colors = styles.colors;
    color = null != color ? color : defaultProps.color, ripple = null != ripple ? ripple : defaultProps.ripple, className = null != className ? className : defaultProps.className;
    var rippleEffect = void 0 !== ripple && new Ripple(), rootClasses = classnames(objectsToString(base.root)), containerClasses = classnames(objectsToString(base.container), null == containerProps ? void 0 : containerProps.className), inputClasses = classnames(objectsToString(base.input), objectsToString(colors[findMatch(valid.colors, color, "blue")]), className), circleClasses = classnames(objectsToString(base.circle), colors[findMatch(valid.colors, color, "blue")].circle, colors[findMatch(valid.colors, color, "blue")].before, null == circleProps ? void 0 : circleProps.className), rippleClasses = classnames(objectsToString(base.ripple)), labelClasses = classnames(objectsToString(base.label), null == labelProps ? void 0 : labelProps.className);
    return React.createElement("div", {
        ref: ref,
        className: rootClasses
    }, React.createElement("div", _extends({}, containerProps, {
        className: containerClasses
    }), React.createElement("input", _extends({}, rest, {
        type: "checkbox",
        id: rest.id || "switch",
        className: inputClasses
    })), React.createElement("label", _extends({}, circleProps, {
        htmlFor: rest.id || "switch",
        className: circleClasses
    }), ripple && React.createElement("div", {
        className: rippleClasses,
        onMouseDown: function(e) {
            var onMouseDown = null == containerProps ? void 0 : containerProps.onMouseDown;
            return ripple && rippleEffect.create(e, "dark"), "function" == typeof onMouseDown && onMouseDown(e);
        }
    }))), label && React.createElement("label", _extends({}, labelProps, {
        htmlFor: rest.id || "switch",
        className: labelClasses
    }), label));
});
Switch.propTypes = {
    color: PropTypes.oneOf(propTypesColor),
    label: propTypesLabel,
    ripple: propTypesRipple,
    className: propTypesClassName,
    containerProps: propTypesContainerProps,
    labelProps: propTypesLabelProps,
    circleProps: propTypesCircleProps
}, Switch.displayName = "MaterialTailwind.Switch";
export default Switch;
export { Switch };
