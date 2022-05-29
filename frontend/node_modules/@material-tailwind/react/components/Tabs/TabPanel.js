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
import { motion, AnimatePresence } from "framer-motion";
import classnames from "classnames";
import objectsToString from "../../utils/objectsToString";
import { useTheme } from "../../context/theme";
import { useTabs } from "./TabsContext";
import { propTypesValue, propTypesClassName, propTypesChildren } from "../../types/components/tabs";
var TabPanel = React.forwardRef(function(_param, ref) {
    var value = _param.value, className = _param.className, children = _param.children, rest = function(source, excluded) {
        if (null == source) return {};
        var key, i, target = {}, sourceKeys = Object.keys(source);
        for(i = 0; i < sourceKeys.length; i++)key = sourceKeys[i], excluded.indexOf(key) >= 0 || (target[key] = source[key]);
        return target;
    }(_param, [
        "value",
        "className",
        "children"
    ]), tabPanel = useTheme().tabPanel, defaultProps = tabPanel.defaultProps, base = tabPanel.styles.base, tab = useTabs().tab, active = tab.active, appliedAnimation = tab.appliedAnimation;
    className = null != className ? className : defaultProps.className;
    var tabPanelClasses = classnames(objectsToString(base), className);
    return React.createElement(AnimatePresence, {
        exitBeforeEnter: !0
    }, active === value && React.createElement(motion.div, _extends({}, rest, {
        ref: ref,
        role: "tabpanel",
        className: tabPanelClasses,
        initial: "unmount",
        exit: "unmount",
        animate: active === value ? "mount" : "unmount",
        variants: appliedAnimation,
        "data-value": value
    }), children));
});
TabPanel.propTypes = {
    value: propTypesValue,
    className: propTypesClassName,
    children: propTypesChildren
}, TabPanel.displayName = "MaterialTailwind.TabPanel";
export default TabPanel;
export { TabPanel };
