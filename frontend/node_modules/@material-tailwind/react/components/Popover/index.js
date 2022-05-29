import React from "react";
import PropTypes from "prop-types";
import { offset as fuiOffset, flip, shift, autoUpdate, useFloating, useInteractions, useRole, useDismiss, useId, useClick } from "@floating-ui/react-dom-interactions";
import merge from "deepmerge";
import { useTheme } from "../../context/theme";
import { PopoverContextProvider, usePopover } from "./PopoverContext";
import { propTypesOpen, propTypesHandler, propTypesPlacement, propTypesOffset, propTypesDismiss, propTypesAnimate, propTypesChildren } from "../../types/components/popover";
import PopoverHandler from "./PopoverHandler";
import PopoverContent from "./PopoverContent";
var Popover = function(param) {
    var open = param.open, handler = param.handler, placement = param.placement, offset = param.offset, dismiss = param.dismiss, animate = param.animate, children = param.children, defaultProps = useTheme().popover.defaultProps, ref = React.useState(!1), internalOpen = ref[0], setInternalOpen = ref[1];
    open = null != open ? open : internalOpen, handler = null != handler ? handler : setInternalOpen, placement = null != placement ? placement : defaultProps.placement, offset = null != offset ? offset : defaultProps.offset, dismiss = null != dismiss ? dismiss : defaultProps.dismiss, animate = null != animate ? animate : defaultProps.animate;
    var appliedAnimation = merge({
        unmount: {
            opacity: 0
        },
        mount: {
            opacity: 1
        }
    }, animate), ref1 = useFloating({
        open: open,
        onOpenChange: handler,
        middleware: [
            fuiOffset(offset),
            flip(),
            shift()
        ],
        placement: placement
    }), x = ref1.x, y = ref1.y, reference = ref1.reference, floating = ref1.floating, strategy = ref1.strategy, refs = ref1.refs, update = ref1.update, context = ref1.context, id = useId(), labelId = "" + id + "-label", descriptionId = "" + id + "-description", ref2 = useInteractions([
        useClick(context),
        useRole(context),
        useDismiss(context, dismiss), 
    ]), getReferenceProps = ref2.getReferenceProps, getFloatingProps = ref2.getFloatingProps;
    React.useEffect(function() {
        if (refs.reference.current && refs.floating.current && open) return autoUpdate(refs.reference.current, refs.floating.current, update);
    }, [
        open,
        update,
        refs.reference,
        refs.floating
    ]);
    var contextValue = React.useMemo(function() {
        return {
            open: open,
            strategy: strategy,
            x: x,
            y: y,
            context: context,
            reference: reference,
            floating: floating,
            getReferenceProps: getReferenceProps,
            getFloatingProps: getFloatingProps,
            appliedAnimation: appliedAnimation,
            labelId: labelId,
            descriptionId: descriptionId
        };
    }, [
        open,
        strategy,
        x,
        y,
        context,
        reference,
        floating,
        getFloatingProps,
        getReferenceProps,
        appliedAnimation,
        labelId,
        descriptionId, 
    ]);
    return React.createElement(PopoverContextProvider, {
        value: contextValue
    }, children);
};
Popover.propTypes = {
    open: propTypesOpen,
    handler: propTypesHandler,
    placement: PropTypes.oneOf(propTypesPlacement),
    offset: propTypesOffset,
    dismiss: propTypesDismiss,
    animate: propTypesAnimate,
    children: propTypesChildren
}, Popover.displayName = "MaterialTailwind.Popover";
export default Object.assign(Popover, {
    Handler: PopoverHandler,
    Content: PopoverContent
});
export { Popover, PopoverHandler, PopoverContent, usePopover };
