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
import { TabsContextProvider, useTabs } from "./TabsContext";
import Tab from "./Tab";
import TabsBody from "./TabsBody";
import TabsHeader from "./TabsHeader";
import TabPanel from "./TabPanel";
import { propTypesValue, propTypesClassName, propTypesChildren } from "../../types/components/tabs";
var Tabs = React.forwardRef(function(_param, ref) {
    var value = _param.value, className = _param.className, children = _param.children, rest = function(source, excluded) {
        if (null == source) return {};
        var key, i, target = {}, sourceKeys = Object.keys(source);
        for(i = 0; i < sourceKeys.length; i++)key = sourceKeys[i], excluded.indexOf(key) >= 0 || (target[key] = source[key]);
        return target;
    }(_param, [
        "value",
        "className",
        "children"
    ]), tabs = useTheme().tabs, defaultProps = tabs.defaultProps, base = tabs.styles.base;
    className = null != className ? className : defaultProps.className;
    var tabsClasses = classnames(objectsToString(base), className);
    return React.createElement(TabsContextProvider, {
        value: value
    }, React.createElement("div", _extends({}, rest, {
        ref: ref,
        className: tabsClasses
    }), children));
});
Tabs.propTypes = {
    value: propTypesValue,
    className: propTypesClassName,
    children: propTypesChildren
}, Tabs.displayName = "MaterialTailwind.Tabs";
export default Object.assign(Tabs, {
    Tab: Tab,
    Body: TabsBody,
    Header: TabsHeader,
    Panel: TabPanel
});
export { Tabs, Tab, TabsBody, TabsHeader, TabPanel, useTabs };
