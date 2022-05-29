function _extends() {
    return (_extends = Object.assign || function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source)Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
        }
        return target;
    }).apply(this, arguments);
}
import React, { forwardRef, isValidElement, Children } from "react";
import classnames from "classnames";
import objectsToString from "../../utils/objectsToString";
import { useTheme } from "../../context/theme";
import { propTypesSeparator, propTypesFullWidth, propTypesClassName, propTypesChildren } from "../../types/components/breadcrumbs";
var Breadcrumbs = forwardRef(function(_param, ref) {
    var _obj1, separator = _param.separator, fullWidth = _param.fullWidth, className = _param.className, children = _param.children, rest = function(source, excluded) {
        if (null == source) return {};
        var key, i, target = {}, sourceKeys = Object.keys(source);
        for(i = 0; i < sourceKeys.length; i++)key = sourceKeys[i], excluded.indexOf(key) >= 0 || (target[key] = source[key]);
        return target;
    }(_param, [
        "separator",
        "fullWidth",
        "className",
        "children"
    ]), breadcrumbs = useTheme().breadcrumbs, defaultProps = breadcrumbs.defaultProps, base = breadcrumbs.styles.base;
    separator = null != separator ? separator : defaultProps.separator, fullWidth = null != fullWidth ? fullWidth : defaultProps.fullWidth, className = null != className ? className : defaultProps.className;
    var breadcrumbsRootClasses = classnames(objectsToString(base.root.initial), ((_obj1 = {})[objectsToString(base.root.fullWidth)] = fullWidth, _obj1)), breadcrumbsListClasses = classnames(objectsToString(base.list), className), breadcrumbsItemClasses = classnames(objectsToString(base.item.initial)), breadcrumbsSeparatorClasses = classnames(objectsToString(base.separator));
    return React.createElement("nav", {
        "aria-label": "breadcrumb",
        className: breadcrumbsRootClasses
    }, React.createElement("ol", _extends({}, rest, {
        ref: ref,
        className: breadcrumbsListClasses
    }), Children.map(children, function(child, index) {
        if (isValidElement(child)) {
            var _$ref, _obj;
            return React.createElement("li", {
                className: classnames(breadcrumbsItemClasses, ((_obj = {})[objectsToString(base.item.disabled)] = null == child ? void 0 : null == (_$ref = child.props) ? void 0 : _$ref.disabled, _obj))
            }, child, index !== Children.count(children) - 1 && React.createElement("span", {
                className: breadcrumbsSeparatorClasses
            }, separator));
        }
        return null;
    })));
});
Breadcrumbs.propTypes = {
    separator: propTypesSeparator,
    fullWidth: propTypesFullWidth,
    className: propTypesClassName,
    children: propTypesChildren
}, Breadcrumbs.displayName = "MaterialTailwind.Breacrumbs";
export default Breadcrumbs;
export { Breadcrumbs };
