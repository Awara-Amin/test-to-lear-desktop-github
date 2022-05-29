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
import { propTypesVariant, propTypesSize, propTypesColor, propTypesFullWidth, propTypesRipple, propTypesClassName, propTypesChildren } from "../../types/components/button";
var Button = React.forwardRef(function(_param, ref) {
    var _obj, variant = _param.variant, size = _param.size, color = _param.color, fullWidth = _param.fullWidth, ripple = _param.ripple, className = _param.className, children = _param.children, rest = function(source, excluded) {
        if (null == source) return {};
        var key, i, target = {}, sourceKeys = Object.keys(source);
        for(i = 0; i < sourceKeys.length; i++)key = sourceKeys[i], excluded.indexOf(key) >= 0 || (target[key] = source[key]);
        return target;
    }(_param, [
        "variant",
        "size",
        "color",
        "fullWidth",
        "ripple",
        "className",
        "children"
    ]), button = useTheme().button, valid = button.valid, defaultProps = button.defaultProps, styles = button.styles, base = styles.base, variants = styles.variants, sizes = styles.sizes;
    variant = null != variant ? variant : defaultProps.variant, size = null != size ? size : defaultProps.size, color = null != color ? color : defaultProps.color, fullWidth = null != fullWidth ? fullWidth : defaultProps.fullWidth, ripple = null != ripple ? ripple : defaultProps.ripple, className = null != className ? className : defaultProps.className;
    var rippleEffect = void 0 !== ripple && new Ripple(), buttonBase = objectsToString(base.initial), buttonVariant = objectsToString(variants[findMatch(valid.variants, variant, "filled")][findMatch(valid.colors, color, "blue")]), buttonSize = objectsToString(sizes[findMatch(valid.sizes, size, "md")]), classes = classnames(buttonBase, buttonSize, buttonVariant, ((_obj = {})[objectsToString(base.fullWidth)] = fullWidth, _obj), className);
    return React.createElement("button", _extends({}, rest, {
        ref: ref,
        className: classes,
        type: rest.type || "button",
        onMouseDown: function(e) {
            var onMouseDown = null == rest ? void 0 : rest.onMouseDown;
            return ripple && rippleEffect.create(e, "filled" === variant || "gradient" === variant ? "light" : "dark"), "function" == typeof onMouseDown && onMouseDown(e);
        }
    }), children);
});
Button.propTypes = {
    variant: PropTypes.oneOf(propTypesVariant),
    size: PropTypes.oneOf(propTypesSize),
    color: PropTypes.oneOf(propTypesColor),
    fullWidth: propTypesFullWidth,
    ripple: propTypesRipple,
    className: propTypesClassName,
    children: propTypesChildren
}, Button.displayName = "MaterialTailwind.Button";
export default Button;
export { Button };
