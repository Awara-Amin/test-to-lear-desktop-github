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
import { propTypesDivider, propTypesClassName, propTypesChildren } from "../../types/components/card";
var CardFooter = React.forwardRef(function(_param, ref) {
    var _obj, divider = _param.divider, className = _param.className, children = _param.children, rest = function(source, excluded) {
        if (null == source) return {};
        var key, i, target = {}, sourceKeys = Object.keys(source);
        for(i = 0; i < sourceKeys.length; i++)key = sourceKeys[i], excluded.indexOf(key) >= 0 || (target[key] = source[key]);
        return target;
    }(_param, [
        "divider",
        "className",
        "children"
    ]), cardFooter = useTheme().cardFooter, defaultProps = cardFooter.defaultProps, base = cardFooter.styles.base;
    className = null != className ? className : defaultProps.className, divider = null != divider ? divider : defaultProps.divider;
    var cardFooterClasses = classnames(objectsToString(base.initial), ((_obj = {})[objectsToString(base.divider)] = divider, _obj), className);
    return React.createElement("div", _extends({}, rest, {
        ref: ref,
        className: cardFooterClasses
    }), children);
});
CardFooter.propTypes = {
    divider: propTypesDivider,
    className: propTypesClassName,
    children: propTypesChildren
}, CardFooter.displayName = "MaterialTailwind.CardFooter";
export default CardFooter;
