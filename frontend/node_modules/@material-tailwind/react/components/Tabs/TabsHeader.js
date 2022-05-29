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
import { useTabs } from "./TabsContext";
import { propTypesIndicator, propTypesClassName, propTypesChildren } from "../../types/components/tabs";
var TabsHeader = React.forwardRef(function(_param, ref) {
    var indicatorProps = _param.indicatorProps, className = _param.className, children = _param.children, rest = function(source, excluded) {
        if (null == source) return {};
        var key, i, target = {}, sourceKeys = Object.keys(source);
        for(i = 0; i < sourceKeys.length; i++)key = sourceKeys[i], excluded.indexOf(key) >= 0 || (target[key] = source[key]);
        return target;
    }(_param, [
        "indicatorProps",
        "className",
        "children"
    ]), tabsHeader = useTheme().tabsHeader, defaultProps = tabsHeader.defaultProps, base = tabsHeader.styles.base, _$ref = useTabs(), tab = _$ref.tab, setTab = _$ref.setTab;
    React.useEffect(function() {
        setTab(_extends({}, tab, {
            indicatorProps: indicatorProps
        }));
    }, [
        indicatorProps
    ]), className = null != className ? className : defaultProps.className;
    var tabsHeaderClasses = classnames(objectsToString(base), className);
    return React.createElement("nav", null, React.createElement("ul", _extends({}, rest, {
        ref: ref,
        role: "tablist",
        className: tabsHeaderClasses
    }), children));
});
TabsHeader.propTypes = {
    indicatorProps: propTypesIndicator,
    className: propTypesClassName,
    children: propTypesChildren
}, TabsHeader.displayName = "MaterialTailwind.TabsHeader";
export default TabsHeader;
export { TabsHeader };
