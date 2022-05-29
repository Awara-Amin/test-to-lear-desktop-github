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
import { useFloating, useInteractions, useClick, useRole, useDismiss, useId, FloatingPortal, FloatingOverlay, FloatingFocusManager } from "@floating-ui/react-dom-interactions";
import { AnimatePresence, motion } from "framer-motion";
import mergeRefs from "react-merge-refs";
import classnames from "classnames";
import merge from "deepmerge";
import findMatch from "../../utils/findMatch";
import objectsToString from "../../utils/objectsToString";
import { useTheme } from "../../context/theme";
import { propTypesOpen, propTypesHandler, propTypesSize, propTypesDismiss, propTypesAnimate, propTypesClassName, propTypesChildren } from "../../types/components/dialog";
import DialogHeader from "./DialogHeader";
import DialogBody from "./DialogBody";
import DialogFooter from "./DialogFooter";
var Dialog = React.forwardRef(function(_param, ref) {
    var open = _param.open, handler = _param.handler, size = _param.size, dismiss = _param.dismiss, animate = _param.animate, className = _param.className, children = _param.children, rest = function(source, excluded) {
        if (null == source) return {};
        var key, i, target = {}, sourceKeys = Object.keys(source);
        for(i = 0; i < sourceKeys.length; i++)key = sourceKeys[i], excluded.indexOf(key) >= 0 || (target[key] = source[key]);
        return target;
    }(_param, [
        "open",
        "handler",
        "size",
        "dismiss",
        "animate",
        "className",
        "children"
    ]), dialog = useTheme().dialog, defaultProps = dialog.defaultProps, valid = dialog.valid, _styles = dialog.styles, base = _styles.base, sizes = _styles.sizes;
    handler = null != handler ? handler : void 0, size = null != size ? size : defaultProps.size, dismiss = null != dismiss ? dismiss : defaultProps.dismiss, animate = null != animate ? animate : defaultProps.animate, className = null != className ? className : defaultProps.className;
    var backdropClasses = classnames(objectsToString(base.backdrop)), dialogClasses = classnames(objectsToString(base.container), objectsToString(sizes[findMatch(valid.sizes, size, "md")]), className), appliedAnimation = merge({
        unmount: {
            opacity: 0,
            y: -50,
            transition: {
                duration: 0.3
            }
        },
        mount: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.3
            }
        }
    }, animate), _$ref = useFloating({
        open: open,
        onOpenChange: handler
    }), floating = _$ref.floating, context = _$ref.context, id = useId(), getFloatingProps = useInteractions([
        useClick(context),
        useRole(context),
        useDismiss(context, dismiss), 
    ]).getFloatingProps, mergedRef = React.useMemo(function() {
        return mergeRefs([
            ref,
            floating
        ]);
    }, [
        floating,
        ref
    ]);
    return React.createElement(FloatingPortal, null, React.createElement(AnimatePresence, null, open && React.createElement(FloatingOverlay, {
        style: {
            zIndex: 9999
        },
        lockScroll: !0
    }, React.createElement(FloatingFocusManager, {
        context: context
    }, React.createElement(motion.div, {
        className: "xxl" === size ? "" : backdropClasses,
        initial: "unmount",
        exit: "unmount",
        animate: open ? "mount" : "unmount",
        variants: {
            unmount: {
                opacity: 0,
                transition: {
                    delay: 0.2
                }
            },
            mount: {
                opacity: 1
            }
        },
        transition: {
            duration: 0.2
        }
    }, React.createElement(motion.div, _extends({}, getFloatingProps(_extends({}, rest, {
        ref: mergedRef,
        className: dialogClasses,
        "aria-labelledby": "" + id + "-label",
        "aria-describedby": "" + id + "-description"
    })), {
        initial: "unmount",
        exit: "unmount",
        animate: open ? "mount" : "unmount",
        variants: appliedAnimation
    }), children))))));
});
Dialog.propTypes = {
    open: propTypesOpen,
    handler: propTypesHandler,
    size: PropTypes.oneOf(propTypesSize),
    dismiss: propTypesDismiss,
    animate: propTypesAnimate,
    className: propTypesClassName,
    children: propTypesChildren
}, Dialog.displayName = "MaterialTailwind.Dialog";
export default Object.assign(Dialog, {
    Header: DialogHeader,
    Body: DialogBody,
    Footer: DialogFooter
});
export { Dialog, DialogHeader, DialogBody, DialogFooter };
