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
import { propTypesVariant, propTypesColor, propTypesTextGradient, propTypesAs, propTypesClassName, propTypesChildren } from "../../types/components/typography";
var Typography = React.forwardRef(function(_param, ref) {
    var _obj, _obj1, _obj2, template, variant = _param.variant, color = _param.color, textGradient = _param.textGradient, as = _param.as, className = _param.className, children = _param.children, rest = function(source, excluded) {
        if (null == source) return {};
        var key, i, target = {}, sourceKeys = Object.keys(source);
        for(i = 0; i < sourceKeys.length; i++)key = sourceKeys[i], excluded.indexOf(key) >= 0 || (target[key] = source[key]);
        return target;
    }(_param, [
        "variant",
        "color",
        "textGradient",
        "as",
        "className",
        "children"
    ]), typography = useTheme().typography, defaultProps = typography.defaultProps, valid = typography.valid, styles = typography.styles, variants = styles.variants, colors = styles.colors, gradient = styles.textGradient;
    variant = null != variant ? variant : defaultProps.variant, color = null != color ? color : defaultProps.color, textGradient = textGradient || defaultProps.textGradient, as = null != as ? as : void 0, className = null != className ? className : defaultProps.className;
    var typographyVariant = objectsToString(variants[findMatch(valid.variants, variant, "paragraph")]), typographyColor = colors[findMatch(valid.colors, color, "inherit")], gradientTextClasses = objectsToString(gradient), classes = classnames(typographyVariant, ((_obj = {})[typographyColor.color] = !textGradient, _obj), ((_obj1 = {})[gradientTextClasses] = textGradient, _obj1), ((_obj2 = {})[typographyColor.gradient] = textGradient, _obj2), className);
    switch(variant){
        case "h1":
            template = React.createElement(as || "h1", _extends({}, rest, {
                ref: ref,
                className: classes
            }), children);
            break;
        case "h2":
            template = React.createElement(as || "h2", _extends({}, rest, {
                ref: ref,
                className: classes
            }), children);
            break;
        case "h3":
            template = React.createElement(as || "h3", _extends({}, rest, {
                ref: ref,
                className: classes
            }), children);
            break;
        case "h4":
            template = React.createElement(as || "h4", _extends({}, rest, {
                ref: ref,
                className: classes
            }), children);
            break;
        case "h5":
            template = React.createElement(as || "h5", _extends({}, rest, {
                ref: ref,
                className: classes
            }), children);
            break;
        case "h6":
            template = React.createElement(as || "h6", _extends({}, rest, {
                ref: ref,
                className: classes
            }), children);
            break;
        case "lead":
            template = React.createElement(as || "p", _extends({}, rest, {
                ref: ref,
                className: classes
            }), children);
            break;
        case "paragraph":
            template = React.createElement(as || "p", _extends({}, rest, {
                ref: ref,
                className: classes
            }), children);
            break;
        case "small":
            template = React.createElement(as || "p", _extends({}, rest, {
                ref: ref,
                className: classes
            }), children);
            break;
        default:
            template = React.createElement(as || "p", _extends({}, rest, {
                ref: ref,
                className: classes
            }), children);
            break;
    }
    return template;
});
Typography.propTypes = {
    variant: PropTypes.oneOf(propTypesVariant),
    color: PropTypes.oneOf(propTypesColor),
    as: propTypesAs,
    textGradient: propTypesTextGradient,
    className: propTypesClassName,
    children: propTypesChildren
}, Typography.displayName = "MaterialTailwind.Typography";
export default Typography;
export { Typography };
