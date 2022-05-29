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
import { FloatingPortal, FloatingOverlay, FloatingFocusManager } from "@floating-ui/react-dom-interactions";
import { AnimatePresence, motion } from "framer-motion";
import mergeRefs from "react-merge-refs";
import classnames from "classnames";
import objectsToString from "../../utils/objectsToString";
import { useTheme } from "../../context/theme";
import { useMenu } from "./MenuContext";
import { propTypesClassName, propTypesChildren } from "../../types/components/menu";
var MenuList = React.forwardRef(function(_param, ref) {
    var children = _param.children, className = _param.className, rest = function(source, excluded) {
        if (null == source) return {};
        var key, i, target = {}, sourceKeys = Object.keys(source);
        for(i = 0; i < sourceKeys.length; i++)key = sourceKeys[i], excluded.indexOf(key) >= 0 || (target[key] = source[key]);
        return target;
    }(_param, [
        "children",
        "className"
    ]), menu = useTheme().menu;
    menu.defaultProps;
    var base = menu.styles.base, _$ref1 = useMenu(), open = _$ref1.open, handler = _$ref1.handler, setInternalOpen = _$ref1.setInternalOpen, strategy = _$ref1.strategy, x = _$ref1.x, y = _$ref1.y, floating = _$ref1.floating, listItemsRef = _$ref1.listItemsRef, getFloatingProps = _$ref1.getFloatingProps, getItemProps = _$ref1.getItemProps, appliedAnimation = _$ref1.appliedAnimation, lockScroll = _$ref1.lockScroll, context = _$ref1.context;
    className = null != className ? className : "";
    var menuClasses = classnames(objectsToString(base.menu), className), mergedRef = React.useMemo(function() {
        return mergeRefs([
            ref,
            floating
        ]);
    }, [
        ref,
        floating
    ]), menuComponent = React.createElement(motion.ul, _extends({}, getFloatingProps(_extends({}, rest, {
        ref: mergedRef,
        className: menuClasses,
        style: {
            position: strategy,
            top: null != y ? y : "",
            left: null != x ? x : ""
        }
    })), {
        initial: "unmount",
        exit: "unmount",
        animate: open ? "mount" : "unmount",
        variants: appliedAnimation
    }), React.Children.map(children, function(child, index) {
        return React.isValidElement(child) && React.cloneElement(child, getItemProps(_extends({}, child.props, {
            onClick: function(e) {
                var _$ref, onClickFunction = null == (_$ref = child.props) ? void 0 : _$ref.onClick;
                "function" == typeof onClickFunction && handler ? onClickFunction(e) : "function" == typeof onClickFunction && (setInternalOpen(!1), onClickFunction(e)), setInternalOpen(!1);
            },
            ref: function(nodeElement) {
                listItemsRef.current[index] = nodeElement;
            }
        })));
    }));
    return React.createElement(FloatingPortal, null, React.createElement(AnimatePresence, null, open && React.createElement(React.Fragment, null, lockScroll ? React.createElement(FloatingOverlay, {
        lockScroll: !0
    }, React.createElement(FloatingFocusManager, {
        context: context,
        preventTabbing: !0
    }, menuComponent)) : React.createElement(FloatingFocusManager, {
        context: context,
        preventTabbing: !0
    }, menuComponent))));
});
MenuList.propTypes = {
    className: propTypesClassName,
    children: propTypesChildren
}, MenuList.displayName = "MaterialTailwind.MenuList";
export default MenuList;
export { MenuList };
