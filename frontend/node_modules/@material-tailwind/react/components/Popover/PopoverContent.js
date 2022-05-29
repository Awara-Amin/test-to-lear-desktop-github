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
import { FloatingPortal, FloatingFocusManager } from "@floating-ui/react-dom-interactions";
import { AnimatePresence, motion } from "framer-motion";
import mergeRefs from "react-merge-refs";
import classnames from "classnames";
import objectsToString from "../../utils/objectsToString";
import { useTheme } from "../../context/theme";
import { usePopover } from "./PopoverContext";
import { propTypesClassName, propTypesChildren } from "../../types/components/popover";
var PopoverContent = React.forwardRef(function(_param, ref) {
    var children = _param.children, className = _param.className, rest = function(source, excluded) {
        if (null == source) return {};
        var key, i, target = {}, sourceKeys = Object.keys(source);
        for(i = 0; i < sourceKeys.length; i++)key = sourceKeys[i], excluded.indexOf(key) >= 0 || (target[key] = source[key]);
        return target;
    }(_param, [
        "children",
        "className"
    ]), popover = useTheme().popover, defaultProps = popover.defaultProps, base = popover.styles.base, _$ref = usePopover(), open = _$ref.open, strategy = _$ref.strategy, x = _$ref.x, y = _$ref.y, context = _$ref.context, floating = _$ref.floating, getFloatingProps = _$ref.getFloatingProps, appliedAnimation = _$ref.appliedAnimation, labelId = _$ref.labelId, descriptionId = _$ref.descriptionId;
    className = null != className ? className : defaultProps.className;
    var popoverClasses = classnames(objectsToString(base), className), mergedRef = React.useMemo(function() {
        return mergeRefs([
            ref,
            floating
        ]);
    }, [
        floating,
        ref
    ]);
    return React.createElement(FloatingPortal, null, React.createElement(AnimatePresence, null, open && React.createElement(FloatingFocusManager, {
        context: context
    }, React.createElement(motion.div, _extends({}, getFloatingProps(_extends({}, rest, {
        ref: mergedRef,
        className: popoverClasses,
        style: {
            position: strategy,
            top: null != y ? y : "",
            left: null != x ? x : ""
        },
        "aria-labelledby": labelId,
        "aria-describedby": descriptionId
    })), {
        initial: "unmount",
        exit: "unmount",
        animate: open ? "mount" : "unmount",
        variants: appliedAnimation
    }), children))));
});
PopoverContent.propTypes = {
    className: propTypesClassName,
    children: propTypesChildren
}, PopoverContent.displayName = "MaterialTailwind.PopoverContent";
export default PopoverContent;
export { PopoverContent };
