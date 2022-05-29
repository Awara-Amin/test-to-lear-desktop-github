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
import { propTypesClassName, propTypesChildren } from "../../types/components/dialog";
var DialogFooter = React.forwardRef(function(_param, ref) {
    var className = _param.className, children = _param.children, rest = function(source, excluded) {
        if (null == source) return {};
        var key, i, target = {}, sourceKeys = Object.keys(source);
        for(i = 0; i < sourceKeys.length; i++)key = sourceKeys[i], excluded.indexOf(key) >= 0 || (target[key] = source[key]);
        return target;
    }(_param, [
        "className",
        "children"
    ]), dialogFooter = useTheme().dialogFooter, defaultProps = dialogFooter.defaultProps, base = dialogFooter.styles.base;
    className = null != className ? className : defaultProps.className;
    var dialogFooterClasses = classnames(objectsToString(base), className);
    return React.createElement("div", _extends({}, rest, {
        ref: ref,
        className: dialogFooterClasses
    }), children);
});
DialogFooter.propTypes = {
    className: propTypesClassName,
    children: propTypesChildren
}, DialogFooter.displayName = "MaterialTailwind.DialogFooter";
export default DialogFooter;
export { DialogFooter };
