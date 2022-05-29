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
import { useFloating, offset as fuiOffset, flip, useListNavigation, useTypeahead, useInteractions, useRole, useClick, useDismiss, FloatingFocusManager, autoUpdate, size as fuiSize, FloatingOverlay } from "@floating-ui/react-dom-interactions";
import { AnimatePresence, motion, useIsomorphicLayoutEffect } from "framer-motion";
import classnames from "classnames";
import merge from "deepmerge";
import findMatch from "../../utils/findMatch";
import objectsToString from "../../utils/objectsToString";
import { useTheme } from "../../context/theme";
import { SelectContextProvider, usePrevious, useSelect } from "./SelectContext";
import { propTypesVariant, propTypesColor, propTypesSize, propTypesLabel, propTypesError, propTypesSuccess, propTypesArrow, propTypesValue, propTypesOnChange, propTypesSelected, propTypesOffset, propTypesDismiss, propTypesAnimate, propTypesLockScroll, propTypesLabelProps, propTypesMenuProps, propTypesClassName, propTypesDisabled, propTypesChildren } from "../../types/components/select";
import SelectOption from "./SelectOption";
var Select = React.forwardRef(function(_param, ref) {
    var _$ref10, _$ref1, _obj, _obj1, _obj2, _obj3, _obj4, _className, _obj5, _obj6, _obj7, _obj8, _obj9, _obj10, _className1, variant = _param.variant, color = _param.color, size = _param.size, label = _param.label, error = _param.error, success = _param.success, arrow = _param.arrow, value = _param.value, onChange = _param.onChange, selected = _param.selected, offset = _param.offset, dismiss = _param.dismiss, animate = _param.animate, lockScroll = _param.lockScroll, labelProps = _param.labelProps, menuProps = _param.menuProps, className = _param.className, disabled = _param.disabled, children = _param.children, rest = function(source, excluded) {
        if (null == source) return {};
        var key, i, target = {}, sourceKeys = Object.keys(source);
        for(i = 0; i < sourceKeys.length; i++)key = sourceKeys[i], excluded.indexOf(key) >= 0 || (target[key] = source[key]);
        return target;
    }(_param, [
        "variant",
        "color",
        "size",
        "label",
        "error",
        "success",
        "arrow",
        "value",
        "onChange",
        "selected",
        "offset",
        "dismiss",
        "animate",
        "lockScroll",
        "labelProps",
        "menuProps",
        "className",
        "disabled",
        "children"
    ]), select = useTheme().select, defaultProps = select.defaultProps, valid = select.valid, styles = select.styles, base = styles.base, variants = styles.variants, _$ref2 = React.useState("close"), state = _$ref2[0], setState = _$ref2[1];
    variant = null != variant ? variant : defaultProps.variant, color = null != color ? color : defaultProps.color, size = null != size ? size : defaultProps.size, label = null != label ? label : defaultProps.label, error = null != error ? error : defaultProps.error, success = null != success ? success : defaultProps.success, arrow = null != arrow ? arrow : defaultProps.arrow, value = null != value ? value : defaultProps.value, onChange = null != onChange ? onChange : defaultProps.onChange, selected = null != selected ? selected : defaultProps.selected, offset = null != offset ? offset : defaultProps.offset, dismiss = null != dismiss ? dismiss : defaultProps.dismiss, animate = null != animate ? animate : defaultProps.animate, labelProps = null != labelProps ? labelProps : defaultProps.labelProps, menuProps = null != menuProps ? menuProps : defaultProps.menuProps, className = null != className ? className : defaultProps.className;
    var listItemsRef = React.useRef([]), listContentRef = React.useRef([].concat(null != (_$ref1 = React.Children.map(children, function(child) {
        var props = child.props;
        return null == props ? void 0 : props.value;
    })) ? _$ref1 : [])), _$ref3 = React.useState(!1), open = _$ref3[0], setOpen = _$ref3[1], _$ref4 = React.useState(null), activeIndex = _$ref4[0], setActiveIndex = _$ref4[1], _$ref5 = React.useState(0), selectedIndex = _$ref5[0], setSelectedIndex = _$ref5[1], _$ref6 = React.useState(!1), controlledScrolling = _$ref6[0], setControlledScrolling = _$ref6[1], prevActiveIndex = usePrevious(activeIndex);
    React.useEffect(function() {
        setSelectedIndex(Math.max(0, listContentRef.current.indexOf(value) + 1));
    }, [
        value
    ]);
    var _$ref7 = useFloating({
        open: open,
        onOpenChange: setOpen,
        middleware: [
            fuiOffset(offset),
            flip({
                padding: 8
            }),
            fuiSize({
                apply: function(param) {
                    var _$ref, _$ref9, reference = param.reference;
                    param.height, Object.assign(null != (_$ref9 = null == (_$ref = refs.floating.current) ? void 0 : _$ref.style) ? _$ref9 : {}, {
                        width: "" + reference.width + "px",
                        zIndex: 99
                    });
                },
                padding: 20
            }), 
        ]
    }), x = _$ref7.x, y = _$ref7.y, reference1 = _$ref7.reference, floating1 = _$ref7.floating, strategy = _$ref7.strategy, context = _$ref7.context, refs = _$ref7.refs, middlewareData = _$ref7.middlewareData, update = _$ref7.update, floatingRef = refs.floating, _$ref8 = useInteractions([
        useClick(context),
        useRole(context, {
            role: "listbox"
        }),
        useDismiss(context, _extends({}, dismiss)),
        useListNavigation(context, {
            listRef: listItemsRef,
            activeIndex: activeIndex,
            selectedIndex: selectedIndex,
            onNavigate: setActiveIndex
        }),
        useTypeahead(context, {
            listRef: listContentRef,
            onMatch: open ? setActiveIndex : setSelectedIndex,
            activeIndex: activeIndex,
            selectedIndex: selectedIndex
        }), 
    ]), getReferenceProps = _$ref8.getReferenceProps, getFloatingProps = _$ref8.getFloatingProps, getItemProps = _$ref8.getItemProps;
    React.useEffect(function() {
        if (refs.reference.current && refs.floating.current && open) return autoUpdate(refs.reference.current, refs.floating.current, update);
    }, [
        refs.reference,
        refs.floating,
        open,
        update
    ]), useIsomorphicLayoutEffect(function() {
        var floating = floatingRef.current;
        if (open && controlledScrolling && floating) {
            var item = null != activeIndex ? listItemsRef.current[activeIndex] : null != selectedIndex ? listItemsRef.current[selectedIndex] : null;
            if (item && null != prevActiveIndex) {
                var _$ref, _$ref11, itemHeight = null != (_$ref11 = null == (_$ref = listItemsRef.current[prevActiveIndex]) ? void 0 : _$ref.offsetHeight) ? _$ref11 : 0, floatingHeight = floating.offsetHeight, top = item.offsetTop, bottom = top + itemHeight;
                top < floating.scrollTop ? floating.scrollTop -= floating.scrollTop - top + 5 : bottom > floatingHeight + floating.scrollTop && (floating.scrollTop += bottom - floatingHeight - floating.scrollTop + 5);
            }
        }
    }, [
        open,
        controlledScrolling,
        prevActiveIndex,
        activeIndex
    ]), useIsomorphicLayoutEffect(function() {
        var floating = refs.floating.current;
        if (open && floating && floating.offsetHeight < floating.scrollHeight) {
            var item = listItemsRef.current[selectedIndex];
            item && (floating.scrollTop = item.offsetTop - floating.offsetHeight / 2 + item.offsetHeight / 2);
        }
    }, [
        open,
        selectedIndex,
        refs.floating,
        refs.reference,
        middlewareData
    ]);
    var contextValue = React.useMemo(function() {
        return {
            selectedIndex: selectedIndex,
            setSelectedIndex: setSelectedIndex,
            listRef: listItemsRef,
            setOpen: setOpen,
            onChange: onChange || function() {},
            activeIndex: activeIndex,
            setActiveIndex: setActiveIndex,
            getItemProps: getItemProps,
            dataRef: context.dataRef
        };
    }, [
        selectedIndex,
        onChange,
        activeIndex,
        getItemProps,
        context.dataRef
    ]);
    React.useEffect(function() {
        open ? setState("open") : !open && selectedIndex ? setState("withValue") : setState("close");
    }, [
        open,
        selectedIndex
    ]);
    var selectVariant = variants[findMatch(valid.variants, variant, "outlined")], selectSize = selectVariant.sizes[findMatch(valid.sizes, size, "md")], selectError = selectVariant.error.select, selectSuccess = selectVariant.success.select, selectColor = selectVariant.colors.select[findMatch(valid.colors, color, "blue")], labelError = selectVariant.error.label, labelSuccess = selectVariant.success.label, labelColor = selectVariant.colors.label[findMatch(valid.colors, color, "blue")], stateClasses = selectVariant.states[state], containerClasses = classnames(objectsToString(base.container), objectsToString(selectSize.container)), selectClasses = classnames(objectsToString(base.select), objectsToString(selectVariant.base.select), objectsToString(stateClasses.select), objectsToString(selectSize.select), ((_obj = {})[objectsToString(selectColor[state])] = !error && !success, _obj), ((_obj1 = {})[objectsToString(selectError.initial)] = error, _obj1), ((_obj2 = {})[objectsToString(selectError.states[state])] = error, _obj2), ((_obj3 = {})[objectsToString(selectSuccess.initial)] = success, _obj3), ((_obj4 = {})[objectsToString(selectSuccess.states[state])] = success, _obj4), className), labelClasses = classnames(objectsToString(base.label), objectsToString(selectVariant.base.label), objectsToString(stateClasses.label), objectsToString(selectSize.label.initial), objectsToString(selectSize.label.states[state]), ((_obj5 = {})[objectsToString(labelColor[state])] = !error && !success, _obj5), ((_obj6 = {})[objectsToString(labelError.initial)] = error, _obj6), ((_obj7 = {})[objectsToString(labelError.states[state])] = error, _obj7), ((_obj8 = {})[objectsToString(labelSuccess.initial)] = success, _obj8), ((_obj9 = {})[objectsToString(labelSuccess.states[state])] = success, _obj9), null != (_className = labelProps.className) ? _className : ""), arrowClasses = classnames(objectsToString(base.arrow.initial), ((_obj10 = {})[objectsToString(base.arrow.active)] = open, _obj10)), menuClasses = classnames(objectsToString(base.menu), null != (_className1 = menuProps.className) ? _className1 : ""), buttonContentClasses = classnames("absolute top-2/4 -translate-y-2/4", "outlined" === variant ? "left-3 pt-0.5" : "left-0 pt-3"), appliedAnimation = merge({
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
    }, animate), selectMenu = React.createElement(FloatingFocusManager, {
        context: context,
        preventTabbing: !0
    }, React.createElement(motion.ul, _extends({}, getFloatingProps(_extends({}, menuProps, {
        ref: floating1,
        role: "listbox",
        className: menuClasses,
        style: {
            position: strategy,
            top: null != y ? y : "",
            left: null != x ? x : "",
            overflow: "auto"
        },
        onPointerEnter: function(e) {
            var onPointerEnter = null == menuProps ? void 0 : menuProps.onPointerEnter;
            "function" == typeof onPointerEnter && (onPointerEnter(e), setControlledScrolling(!1)), setControlledScrolling(!1);
        },
        onPointerMove: function(e) {
            var onPointerMove = null == menuProps ? void 0 : menuProps.onPointerMove;
            "function" == typeof onPointerMove && (onPointerMove(e), setControlledScrolling(!1)), setControlledScrolling(!1);
        },
        onKeyDown: function(e) {
            var onKeyDown = null == menuProps ? void 0 : menuProps.onKeyDown;
            "function" == typeof onKeyDown && (onKeyDown(e), setControlledScrolling(!0)), setControlledScrolling(!0);
        }
    })), {
        initial: "unmount",
        exit: "unmount",
        animate: open ? "mount" : "unmount",
        variants: appliedAnimation
    }), React.Children.map(children, function(child, index) {
        var _$ref;
        return React.isValidElement(child) && React.cloneElement(child, _extends({}, child.props, {
            index: (null == (_$ref = child.props) ? void 0 : _$ref.index) || index + 1,
            id: "material-tailwind-select-" + index
        }));
    })));
    return React.createElement(SelectContextProvider, {
        value: contextValue
    }, React.createElement("div", {
        ref: ref,
        className: containerClasses
    }, React.createElement("button", _extends({
        type: "button"
    }, getReferenceProps(_extends({}, rest, {
        ref: reference1,
        className: selectClasses,
        disabled: disabled
    }))), "function" == typeof selected ? React.createElement("span", {
        className: buttonContentClasses
    }, selected(children[selectedIndex - 1], selectedIndex - 1)) : React.createElement("span", _extends({
        className: buttonContentClasses
    }, null == (_$ref10 = children[selectedIndex - 1]) ? void 0 : _$ref10.props)), React.createElement("div", {
        className: arrowClasses
    }, null != arrow ? arrow : React.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 20 20",
        fill: "currentColor"
    }, React.createElement("path", {
        fillRule: "evenodd",
        d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",
        clipRule: "evenodd"
    })))), React.createElement("label", _extends({}, labelProps, {
        className: labelClasses
    }), label), React.createElement(AnimatePresence, null, open && React.createElement(React.Fragment, null, lockScroll ? React.createElement(FloatingOverlay, {
        lockScroll: !0
    }, selectMenu) : selectMenu))));
});
Select.propTypes = {
    variant: PropTypes.oneOf(propTypesVariant),
    color: PropTypes.oneOf(propTypesColor),
    size: PropTypes.oneOf(propTypesSize),
    label: propTypesLabel,
    error: propTypesError,
    success: propTypesSuccess,
    arrow: propTypesArrow,
    value: propTypesValue,
    onChange: propTypesOnChange,
    selected: propTypesSelected,
    offset: propTypesOffset,
    dismiss: propTypesDismiss,
    animate: propTypesAnimate,
    lockScroll: propTypesLockScroll,
    labelProps: propTypesLabelProps,
    menuProps: propTypesMenuProps,
    className: propTypesClassName,
    disabled: propTypesDisabled,
    children: propTypesChildren
}, Select.displayName = "MaterialTailwind.Select";
export default Object.assign(Select, {
    Option: SelectOption
});
export { Select, SelectOption as Option, useSelect, usePrevious };
