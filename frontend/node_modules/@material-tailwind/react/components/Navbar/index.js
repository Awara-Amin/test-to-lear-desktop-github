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
import classnames from "classnames";
import findMatch from "../../utils/findMatch";
import objectsToString from "../../utils/objectsToString";
import { useTheme } from "../../context/theme";
import { propTypesVariant, propTypesColor, propTypesShadow, propTypesBlurred, propTypesFullWidth, propTypesClassName, propTypesChildren } from "../../types/components/navbar";
var Navbar = React.forwardRef(function(_param, ref) {
    var _obj, variant = _param.variant, color = _param.color, shadow = _param.shadow, blurred = _param.blurred, fullWidth = _param.fullWidth, className = _param.className, children = _param.children, rest = function(source, excluded) {
        if (null == source) return {};
        var key, i, target = {}, sourceKeys = Object.keys(source);
        for(i = 0; i < sourceKeys.length; i++)key = sourceKeys[i], excluded.indexOf(key) >= 0 || (target[key] = source[key]);
        return target;
    }(_param, [
        "variant",
        "color",
        "shadow",
        "blurred",
        "fullWidth",
        "className",
        "children"
    ]), navbar = useTheme().navbar, defaultProps = navbar.defaultProps, valid = navbar.valid, styles = navbar.styles, base = styles.base, variants = styles.variants;
    variant = null != variant ? variant : defaultProps.variant, color = null != color ? color : defaultProps.color, shadow = null != shadow ? shadow : defaultProps.shadow, blurred = null != blurred ? blurred : defaultProps.blurred, fullWidth = null != fullWidth ? fullWidth : defaultProps.fullWidth, className = null != className ? className : defaultProps.className;
    var navbarRoot = classnames(objectsToString(base.initial), ((_obj = {})[objectsToString(base.shadow)] = shadow, _obj[objectsToString(base.blurred)] = blurred && "white" === color, _obj[objectsToString(base.fullWidth)] = fullWidth, _obj)), navbarVariant = classnames(objectsToString(variants[findMatch(valid.variants, variant, "filled")][findMatch(valid.colors, color, "white")])), navbarClasses = classnames(navbarRoot, navbarVariant, className);
    return React.createElement("nav", _extends({}, rest, {
        ref: ref,
        className: navbarClasses
    }), children);
});
Navbar.propTypes = {
    variant: PropTypes.oneOf(propTypesVariant),
    color: PropTypes.oneOf(propTypesColor),
    shadow: propTypesShadow,
    blurred: propTypesBlurred,
    fullWidth: propTypesFullWidth,
    className: propTypesClassName,
    children: propTypesChildren
}, Navbar.displayName = "MaterialTailwind.Navbar";
export default Navbar;
export { Navbar };
