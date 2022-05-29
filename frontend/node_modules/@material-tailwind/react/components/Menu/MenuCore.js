import React from "react";
import PropTypes from "prop-types";
import { useFloating, useFloatingTree, useFloatingNodeId, useFloatingParentNodeId, FloatingNode, useInteractions, offset as fuiOffset, flip, shift, useHover, useClick, useRole, useDismiss, safePolygon, useListNavigation, useTypeahead, autoUpdate } from "@floating-ui/react-dom-interactions";
import merge from "deepmerge";
import { useTheme } from "../../context/theme";
import { MenuContextProvider } from "./MenuContext";
import { propTypesOpen, propTypesHandler, propTypesPlacement, propTypesOffset, propTypesDismiss, propTypesAnimate, propTypesLockScroll, propTypesChildren } from "../../types/components/menu";
export var MenuCore = React.forwardRef(function(param1, ref) {
    var open = param1.open, handler = param1.handler, placement = param1.placement, offset = param1.offset, dismiss = param1.dismiss, animate = param1.animate, lockScroll = param1.lockScroll, children = param1.children, defaultProps = useTheme().menu.defaultProps, ref1 = React.useState(!1), internalOpen = ref1[0], setInternalOpen = ref1[1];
    open = null != open ? open : internalOpen, handler = null != handler ? handler : setInternalOpen, placement = null != placement ? placement : defaultProps.placement, offset = null != offset ? offset : defaultProps.offset, dismiss = null != dismiss ? dismiss : defaultProps.dismiss, animate = null != animate ? animate : defaultProps.animate, lockScroll = null != lockScroll ? lockScroll : defaultProps.lockScroll;
    var appliedAnimation = merge({
        unmount: {
            opacity: 0,
            transformOrigin: "top",
            transform: "scale(0.95)",
            transition: {
                duration: 0.2,
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
            transformOrigin: "top",
            transform: "scale(1)",
            transition: {
                duration: 0.2,
                times: [
                    0.4,
                    0,
                    0.2,
                    1
                ]
            }
        }
    }, animate), ref2 = React.useState(null), activeIndex = ref2[0], setActiveIndex = ref2[1], listItemsRef = React.useRef([]), listContentRef = React.useRef(React.Children.map(children, function(child) {
        return React.isValidElement(child) ? child.props.children : null;
    })), tree = useFloatingTree(), nodeId = useFloatingNodeId(), parentId = useFloatingParentNodeId(), nested = null != parentId, ref3 = useFloating({
        open: open,
        onOpenChange: handler,
        middleware: [
            fuiOffset(offset),
            flip(),
            shift()
        ],
        placement: placement,
        nodeId: nodeId
    }), x = ref3.x, y = ref3.y, reference = ref3.reference, floating = ref3.floating, strategy = ref3.strategy, refs = ref3.refs, update = ref3.update, context = ref3.context, ref4 = useInteractions([
        useHover(context, {
            handleClose: safePolygon(),
            enabled: nested
        }),
        useClick(context),
        useRole(context, {
            role: "menu"
        }),
        useDismiss(context, dismiss),
        useListNavigation(context, {
            listRef: listItemsRef,
            activeIndex: activeIndex,
            nested: nested,
            onNavigate: setActiveIndex
        }),
        useTypeahead(context, {
            listRef: listContentRef,
            onMatch: open ? setActiveIndex : void 0,
            activeIndex: activeIndex
        }), 
    ]), getReferenceProps = ref4.getReferenceProps, getFloatingProps = ref4.getFloatingProps, getItemProps = ref4.getItemProps;
    React.useEffect(function() {
        if (open && refs.reference.current && refs.floating.current) return autoUpdate(refs.reference.current, refs.floating.current, update);
    }, [
        open,
        nested,
        update,
        refs.reference,
        refs.floating
    ]), React.useEffect(function() {
        var onTreeOpenChange = function(param) {
            var openElement = param.openElement, referenceElement = param.referenceElement;
            param.parentElementId === nodeId && listItemsRef.current.forEach(function(item) {
                item && item !== referenceElement && (item.style.pointerEvents = openElement ? "none" : "");
            });
        };
        return tree.events.on("openChange", onTreeOpenChange), function() {
            tree.events.off("openChange", onTreeOpenChange);
        };
    }, [
        nodeId,
        tree.events,
        refs.reference,
        refs.floating
    ]), React.useEffect(function() {
        null == tree || tree.events.emit("openChange", {
            open: open,
            parentId: parentId,
            reference: refs.reference.current
        });
    }, [
        tree,
        open,
        parentId,
        refs.reference
    ]);
    var contextValue = React.useMemo(function() {
        return {
            open: open,
            handler: handler,
            setInternalOpen: setInternalOpen,
            strategy: strategy,
            x: x,
            y: y,
            reference: reference,
            floating: floating,
            listItemsRef: listItemsRef,
            getReferenceProps: getReferenceProps,
            getFloatingProps: getFloatingProps,
            getItemProps: getItemProps,
            appliedAnimation: appliedAnimation,
            lockScroll: lockScroll,
            context: context
        };
    }, [
        open,
        handler,
        setInternalOpen,
        strategy,
        x,
        y,
        reference,
        floating,
        getReferenceProps,
        getFloatingProps,
        getItemProps,
        appliedAnimation,
        lockScroll,
        context, 
    ]);
    return React.createElement(MenuContextProvider, {
        value: contextValue
    }, React.createElement(FloatingNode, {
        id: nodeId
    }, children));
});
MenuCore.propTypes = {
    open: propTypesOpen,
    handler: propTypesHandler,
    placement: PropTypes.oneOf(propTypesPlacement),
    offset: propTypesOffset,
    dismiss: propTypesDismiss,
    animate: propTypesAnimate,
    lockScroll: propTypesLockScroll,
    children: propTypesChildren
}, MenuCore.displayName = "MaterialTailwind.MenuCore";
export default MenuCore;
