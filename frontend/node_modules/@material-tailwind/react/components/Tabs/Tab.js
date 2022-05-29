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
import { motion } from "framer-motion";
import classnames from "classnames";
import objectsToString from "../../utils/objectsToString";
import { useTheme } from "../../context/theme";
import { useTabs } from "./TabsContext";
import { propTypesValue, propTypesClassName, propTypesDisabled, propTypesChildren } from "../../types/components/tabs";
var Tab = React.forwardRef(function(_param, ref) {
    var _obj, _$ref, value = _param.value, className = _param.className, disabled = _param.disabled, children = _param.children, rest = function(source, excluded) {
        if (null == source) return {};
        var key, i, target = {}, sourceKeys = Object.keys(source);
        for(i = 0; i < sourceKeys.length; i++)key = sourceKeys[i], excluded.indexOf(key) >= 0 || (target[key] = source[key]);
        return target;
    }(_param, [
        "value",
        "className",
        "disabled",
        "children"
    ]), _$ref1 = useTheme(), tabTheme = _$ref1.tab, defaultProps = tabTheme.defaultProps, base = tabTheme.styles.base, _$ref2 = useTabs(), tab = _$ref2.tab, setTab = _$ref2.setTab, active = tab.active, indicatorProps = tab.indicatorProps;
    className = null != className ? className : defaultProps.className, disabled = null != disabled ? disabled : defaultProps.disabled;
    var tabClasses = classnames(objectsToString(base.tab.initial), ((_obj = {})[objectsToString(base.tab.disabled)] = disabled, _obj), className), indicatorClasses = classnames(objectsToString(base.indicator), null != (_$ref = null == indicatorProps ? void 0 : indicatorProps.className) ? _$ref : "");
    return React.createElement("li", _extends({}, rest, {
        ref: ref,
        role: "tab",
        className: tabClasses,
        onClick: function(e) {
            var onClick = null == rest ? void 0 : rest.onClick;
            "function" == typeof onClick && (setTab(_extends({}, tab, {
                active: value
            })), onClick(e)), setTab(_extends({}, tab, {
                active: value
            }));
        },
        "data-value": value
    }), React.createElement("div", {
        className: "z-20"
    }, children), active === value && React.createElement(motion.div, _extends({}, indicatorProps, {
        transition: {
            duration: 0.5
        },
        className: indicatorClasses,
        layoutId: "indicator"
    })));
});
Tab.propTypes = {
    value: propTypesValue,
    className: propTypesClassName,
    disabled: propTypesDisabled,
    children: propTypesChildren
}, Tab.displayName = "MaterialTailwind.Tab";
export default Tab;
export { Tab };
