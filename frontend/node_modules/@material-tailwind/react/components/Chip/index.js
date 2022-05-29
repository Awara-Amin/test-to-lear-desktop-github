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
import { AnimatePresence, motion } from "framer-motion";
import Ripple from "material-ripple-effects";
import classnames from "classnames";
import merge from "deepmerge";
import findMatch from "../../utils/findMatch";
import objectsToString from "../../utils/objectsToString";
import { useTheme } from "../../context/theme";
import { propTypesVariant, propTypesColor, propTypesIcon, propTypesShow, propTypesDismissible, propTypesAnimate, propTypesClassName, propTypesValue } from "../../types/components/chip";
var Chip = React.forwardRef(function(_param, ref) {
    var variant = _param.variant, color = _param.color, icon = _param.icon, show = _param.show, dismissible = _param.dismissible, animate = _param.animate, className = _param.className, value = _param.value, rest = function(source, excluded) {
        if (null == source) return {};
        var key, i, target = {}, sourceKeys = Object.keys(source);
        for(i = 0; i < sourceKeys.length; i++)key = sourceKeys[i], excluded.indexOf(key) >= 0 || (target[key] = source[key]);
        return target;
    }(_param, [
        "variant",
        "color",
        "icon",
        "show",
        "dismissible",
        "animate",
        "className",
        "value"
    ]), chip = useTheme().chip, defaultProps = chip.defaultProps, valid = chip.valid, styles = chip.styles, base = styles.base, variants = styles.variants, closeButtonColor = styles.closeButtonColor, rippleEffect = new Ripple();
    variant = null != variant ? variant : defaultProps.variant, color = null != color ? color : defaultProps.color, className = null != className ? className : defaultProps.className, animate = null != animate ? animate : defaultProps.animate, show = null != show ? show : defaultProps.show;
    var chipVariant = objectsToString(variants[findMatch(valid.variants, variant, "filled")][findMatch(valid.colors, color, "blue")]), chipCloseButton = objectsToString(closeButtonColor[findMatch(valid.colors, color, "blue")]), classes = classnames(objectsToString(base), chipVariant, className), chipCloseButtonClasses = classnames("absolute top-1 right-1 mt-[0.5px] mx-px w-max rounded-md", chipCloseButton, "transition-colors"), appliedAnimation = merge({
        unmount: {
            opacity: 0
        },
        mount: {
            opacity: 1
        }
    }, animate), iconTemplate = React.createElement("div", {
        className: "w-5 h-5 absolute top-2/4 left-1 -translate-y-2/4"
    }, icon);
    return React.createElement(AnimatePresence, null, show && React.createElement(motion.div, _extends({}, rest, {
        ref: ref,
        className: classes,
        initial: "unmount",
        exit: "unmount",
        animate: show ? "mount" : "unmount",
        variants: appliedAnimation
    }), icon && iconTemplate, React.createElement("div", {
        className: (icon ? "ml-4" : "") + " " + (dismissible ? "mr-5" : "") + " mt-px"
    }, value), dismissible && React.createElement("div", {
        className: chipCloseButtonClasses
    }, React.createElement("div", {
        role: "button",
        onClick: dismissible.onClose,
        onMouseDown: function(e) {
            return !dismissible.action && rippleEffect.create(e, "light");
        },
        className: "w-5 h-5 " + (dismissible.action ? "" : "p-1")
    }, dismissible.action || React.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        strokeWidth: 3
    }, React.createElement("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M6 18L18 6M6 6l12 12"
    }))))));
});
Chip.propTypes = {
    variant: PropTypes.oneOf(propTypesVariant),
    color: PropTypes.oneOf(propTypesColor),
    icon: propTypesIcon,
    show: propTypesShow,
    dismissible: propTypesDismissible,
    animate: propTypesAnimate,
    className: propTypesClassName,
    value: propTypesValue
}, Chip.displayName = "MaterialTailwind.Chip";
export default Chip;
export { Chip };
