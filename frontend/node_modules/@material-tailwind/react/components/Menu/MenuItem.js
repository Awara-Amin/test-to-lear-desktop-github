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
import { propTypesClassName, propTypesDisabled, propTypesChildren } from "../../types/components/menu";
var MenuItem = React.forwardRef(function(_param, ref) {
    var _obj, className = _param.className, disabled = _param.disabled, children = _param.children, rest = function(source, excluded) {
        if (null == source) return {};
        var key, i, target = {}, sourceKeys = Object.keys(source);
        for(i = 0; i < sourceKeys.length; i++)key = sourceKeys[i], excluded.indexOf(key) >= 0 || (target[key] = source[key]);
        return target;
    }(_param, [
        "className",
        "disabled",
        "children"
    ]), menu = useTheme().menu, base = menu.styles.base;
    className = null != className ? className : "", disabled = null != disabled && disabled;
    var menuItemClasses = classnames(objectsToString(base.item.initial), ((_obj = {})[objectsToString(base.item.disabled)] = disabled, _obj), className);
    return React.createElement("li", _extends({}, rest, {
        ref: ref,
        role: "menuitem",
        className: menuItemClasses
    }), children);
});
MenuItem.propTypes = {
    className: propTypesClassName,
    disabled: propTypesDisabled,
    children: propTypesChildren
}, MenuItem.displayName = "MaterialTailwind.MenuItem";
export default MenuItem;
export { MenuItem };
