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
import merge from "deepmerge";
import classnames from "classnames";
import objectsToString from "../../utils/objectsToString";
import { useTheme } from "../../context/theme";
import { useTabs } from "./TabsContext";
import { propTypesAnimate, propTypesClassName, propTypesChildren } from "../../types/components/tabs";
var TabsBody = React.forwardRef(function(_param, ref) {
    var animate = _param.animate, className = _param.className, children = _param.children, rest = function(source, excluded) {
        if (null == source) return {};
        var key, i, target = {}, sourceKeys = Object.keys(source);
        for(i = 0; i < sourceKeys.length; i++)key = sourceKeys[i], excluded.indexOf(key) >= 0 || (target[key] = source[key]);
        return target;
    }(_param, [
        "animate",
        "className",
        "children"
    ]), tabsBody = useTheme().tabsBody, defaultProps = tabsBody.defaultProps, base = tabsBody.styles.base, _$ref = useTabs(), tab = _$ref.tab, setTab = _$ref.setTab;
    className = null != className ? className : defaultProps.className, animate = null != animate ? animate : defaultProps.animate;
    var tabsBodyClasses = classnames(objectsToString(base), className), appliedAnimation = merge({
        unmount: {
            opacity: 0,
            position: "absolute",
            top: "0",
            left: "0",
            transition: {
                duration: 0.5,
                times: [
                    0.4,
                    0,
                    0.2,
                    1
                ]
            }
        },
        mount: {
            opacity: 1,
            position: "relative",
            transition: {
                duration: 0.5,
                times: [
                    0.4,
                    0,
                    0.2,
                    1
                ]
            }
        }
    }, animate);
    return React.useEffect(function() {
        setTab(_extends({}, tab, {
            appliedAnimation: appliedAnimation
        }));
    }, [
        animate
    ]), React.createElement("div", _extends({}, rest, {
        ref: ref,
        className: tabsBodyClasses
    }), children);
});
TabsBody.propTypes = {
    animate: propTypesAnimate,
    className: propTypesClassName,
    children: propTypesChildren
}, TabsBody.displayName = "MaterialTailwind.TabsBody";
export default TabsBody;
export { TabsBody };
