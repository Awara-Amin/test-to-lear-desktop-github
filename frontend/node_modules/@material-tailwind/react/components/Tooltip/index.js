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
import PropTypes from "prop-types";
import { offset as fuiOffset, flip, shift, autoUpdate, useFloating, useInteractions, useRole, useDismiss, useClick, useHover, useFocus, FloatingPortal } from "@floating-ui/react-dom-interactions";
import { AnimatePresence, motion } from "framer-motion";
import mergeRefs from "react-merge-refs";
import classnames from "classnames";
import merge from "deepmerge";
import objectsToString from "../../utils/objectsToString";
import { useTheme } from "../../context/theme";
import { propTypesOpen, propTypesHandler, propTypesContent, propTypesInteractive, propTypesPlacement, propTypesOffset, propTypesDismiss, propTypesAnimate, propTypesClassName, propTypesChildren } from "../../types/components/popover";
var Tooltip = React.forwardRef(function(_param, ref) {
    var open = _param.open, handler = _param.handler, content = _param.content, interactive = _param.interactive, placement = _param.placement, offset = _param.offset, dismiss = _param.dismiss, animate = _param.animate, className = _param.className, children = _param.children, rest = function(source, excluded) {
        if (null == source) return {};
        var key, i, target = {}, sourceKeys = Object.keys(source);
        for(i = 0; i < sourceKeys.length; i++)key = sourceKeys[i], excluded.indexOf(key) >= 0 || (target[key] = source[key]);
        return target;
    }(_param, [
        "open",
        "handler",
        "content",
        "interactive",
        "placement",
        "offset",
        "dismiss",
        "animate",
        "className",
        "children"
    ]), tooltip = useTheme().tooltip, defaultProps = tooltip.defaultProps, base = tooltip.styles.base, _$ref = React.useState(!1), internalOpen = _$ref[0], setInternalOpen = _$ref[1];
    open = null != open ? open : internalOpen, handler = null != handler ? handler : setInternalOpen, interactive = null != interactive ? interactive : defaultProps.interactive, placement = null != placement ? placement : defaultProps.placement, offset = null != offset ? offset : defaultProps.offset, dismiss = null != dismiss ? dismiss : defaultProps.dismiss, animate = null != animate ? animate : defaultProps.animate, className = null != className ? className : defaultProps.className;
    var tooltipClasses = classnames(objectsToString(base), className), appliedAnimation = merge({
        unmount: {
            opacity: 0
        },
        mount: {
            opacity: 1
        }
    }, animate), _$ref1 = useFloating({
        open: open,
        onOpenChange: handler,
        middleware: [
            fuiOffset(offset),
            flip(),
            shift()
        ],
        placement: placement
    }), x = _$ref1.x, y = _$ref1.y, reference = _$ref1.reference, floating = _$ref1.floating, strategy = _$ref1.strategy, refs = _$ref1.refs, update = _$ref1.update, context = _$ref1.context, _$ref2 = useInteractions([
        useClick(context, {
            enabled: interactive
        }),
        useFocus(context),
        useHover(context),
        useRole(context, {
            role: "tooltip"
        }),
        useDismiss(context, dismiss), 
    ]), getReferenceProps = _$ref2.getReferenceProps, getFloatingProps = _$ref2.getFloatingProps;
    React.useEffect(function() {
        if (refs.reference.current && refs.floating.current && open) return autoUpdate(refs.reference.current, refs.floating.current, update);
    }, [
        open,
        update,
        refs.reference,
        refs.floating
    ]);
    var mergedRef = React.useMemo(function() {
        return mergeRefs([
            ref,
            floating
        ]);
    }, [
        floating,
        ref
    ]), childMergedRef = React.useMemo(function() {
        return mergeRefs([
            ref,
            reference
        ]);
    }, [
        reference,
        ref
    ]);
    return React.createElement(React.Fragment, null, "string" == typeof children ? React.createElement("span", _extends({}, getReferenceProps({
        ref: childMergedRef
    })), children) : React.cloneElement(children, _extends({}, getReferenceProps(_extends({}, null == children ? void 0 : children.props, {
        ref: childMergedRef
    })))), React.createElement(FloatingPortal, null, React.createElement(AnimatePresence, null, open && React.createElement(motion.div, _extends({}, getFloatingProps(_extends({}, rest, {
        ref: mergedRef,
        className: tooltipClasses,
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
    }), content))));
});
Tooltip.propTypes = {
    open: propTypesOpen,
    handler: propTypesHandler,
    content: propTypesContent,
    interactive: propTypesInteractive,
    placement: PropTypes.oneOf(propTypesPlacement),
    offset: propTypesOffset,
    dismiss: propTypesDismiss,
    animate: propTypesAnimate,
    className: propTypesClassName,
    children: propTypesChildren
}, Tooltip.displayName = "MaterialTailwind.Tooltip";
export default Tooltip;
export { Tooltip };
