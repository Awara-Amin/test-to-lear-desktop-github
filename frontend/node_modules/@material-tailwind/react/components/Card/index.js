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
import CardHeader from "./CardHeader";
import CardBody from "./CardBody";
import CardFooter from "./CardFooter";
import { propTypesVariant, propTypesColor, propTypesShadow, propTypesClassName, propTypesChildren } from "../../types/components/card";
var Card = React.forwardRef(function(_param, ref) {
    var _obj, variant = _param.variant, color = _param.color, shadow = _param.shadow, className = _param.className, children = _param.children, rest = function(source, excluded) {
        if (null == source) return {};
        var key, i, target = {}, sourceKeys = Object.keys(source);
        for(i = 0; i < sourceKeys.length; i++)key = sourceKeys[i], excluded.indexOf(key) >= 0 || (target[key] = source[key]);
        return target;
    }(_param, [
        "variant",
        "color",
        "shadow",
        "className",
        "children"
    ]), card = useTheme().card, defaultProps = card.defaultProps, styles = card.styles, valid = card.valid, base = styles.base, variants = styles.variants;
    variant = null != variant ? variant : defaultProps.variant, color = null != color ? color : defaultProps.color, shadow = null != shadow ? shadow : defaultProps.shadow, className = null != className ? className : defaultProps.className;
    var cardRoot = objectsToString(base.initial), cardVariant = objectsToString(variants[findMatch(valid.variants, variant, "filled")][findMatch(valid.colors, color, "white")]), classes = classnames(cardRoot, cardVariant, ((_obj = {})[objectsToString(base.shadow)] = shadow, _obj), className);
    return React.createElement("div", _extends({}, rest, {
        ref: ref,
        className: classes
    }), children);
});
Card.propTypes = {
    variant: PropTypes.oneOf(propTypesVariant),
    color: PropTypes.oneOf(propTypesColor),
    shadow: propTypesShadow,
    className: propTypesClassName,
    children: propTypesChildren
}, Card.displayName = "MaterialTailwind.Card";
export default Object.assign(Card, {
    Header: CardHeader,
    Body: CardBody,
    Footer: CardFooter
});
export { Card, CardHeader, CardBody, CardFooter };
