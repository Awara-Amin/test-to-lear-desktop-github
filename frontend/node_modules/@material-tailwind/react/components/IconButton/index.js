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
import { propTypesVariant, propTypesSize, propTypesColor, propTypesRipple, propTypesClassName, propTypesChildren } from "../../types/components/button";
var IconButton = React.forwardRef(function(_param, ref) {
    var variant = _param.variant, size = _param.size, color = _param.color, ripple = _param.ripple, className = _param.className, children = _param.children, rest = function(source, excluded) {
        if (null == source) return {};
        var key, i, target = {}, sourceKeys = Object.keys(source);
        for(i = 0; i < sourceKeys.length; i++)key = sourceKeys[i], excluded.indexOf(key) >= 0 || (target[key] = source[key]);
        return target;
    }(_param, [
        "variant",
        "size",
        "color",
        "ripple",
        "className",
        "children"
    ]), iconButton = useTheme().iconButton, valid = iconButton.valid, defaultProps = iconButton.defaultProps, styles = iconButton.styles, base = styles.base, variants = styles.variants, sizes = styles.sizes;
    variant = null != variant ? variant : defaultProps.variant, size = null != size ? size : defaultProps.size, color = null != color ? color : defaultProps.color, ripple = null != ripple ? ripple : defaultProps.ripple, className = null != className ? className : defaultProps.className;
    var rippleEffect = void 0 !== ripple && new Ripple(), buttonBase = objectsToString(base), buttonVariant = objectsToString(variants[findMatch(valid.variants, variant, "filled")][findMatch(valid.colors, color, "blue")]), buttonSize = objectsToString(sizes[findMatch(valid.sizes, size, "md")]), classes = classnames(buttonBase, buttonSize, buttonVariant, className);
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
IconButton.propTypes = {
    variant: PropTypes.oneOf(propTypesVariant),
    size: PropTypes.oneOf(propTypesSize),
    color: PropTypes.oneOf(propTypesColor),
    ripple: propTypesRipple,
    className: propTypesClassName,
    children: propTypesChildren
}, IconButton.displayName = "MaterialTailwind.IconButton";
export default IconButton;
export { IconButton };
