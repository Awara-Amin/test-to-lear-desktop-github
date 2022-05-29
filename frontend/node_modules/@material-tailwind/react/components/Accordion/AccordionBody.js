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
import { motion } from "framer-motion";
import classnames from "classnames";
import merge from "deepmerge";
import objectsToString from "../../utils/objectsToString";
import { useAccordion } from "./AccordionContext";
import { useTheme } from "../../context/theme";
import { propTypesClassName, propTypesChildren } from "../../types/components/accordion";
var AccordionBody = React.forwardRef(function(_param, ref) {
    var _$ref, className = _param.className, children = _param.children, rest = function(source, excluded) {
        if (null == source) return {};
        var key, i, target = {}, sourceKeys = Object.keys(source);
        for(i = 0; i < sourceKeys.length; i++)key = sourceKeys[i], excluded.indexOf(key) >= 0 || (target[key] = source[key]);
        return target;
    }(_param, [
        "className",
        "children"
    ]), _$ref1 = useAccordion(), open = _$ref1.open, animate = _$ref1.animate, accordion = useTheme().accordion, base = accordion.styles.base, bodyEl = React.useRef(null);
    className = null != className ? className : "";
    var bodyClasses = classnames(objectsToString(base.body), className), heightAnimation = {
        unmount: {
            height: "0px",
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
            height: "" + (null == (_$ref = bodyEl.current) ? void 0 : _$ref.scrollHeight) + "px",
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
    }, appliedAnimation = merge({
        unmount: {
            opacity: 0,
            transition: {
                duration: 0.3,
                ease: "linear"
            }
        },
        mount: {
            opacity: 1,
            transition: {
                duration: 0.3,
                ease: "linear"
            }
        }
    }, animate);
    return React.createElement(motion.div, {
        className: "overflow-hidden",
        ref: bodyEl,
        initial: "unmount",
        exit: "unmount",
        animate: open ? "mount" : "unmount",
        variants: heightAnimation
    }, React.createElement(motion.div, _extends({}, rest, {
        ref: ref,
        className: bodyClasses,
        initial: "unmount",
        exit: "unmount",
        animate: open ? "mount" : "unmount",
        variants: appliedAnimation
    }), children));
});
AccordionBody.propTypes = {
    className: propTypesClassName,
    children: propTypesChildren
}, AccordionBody.displayName = "MaterialTailwind.AccordionBody";
export default AccordionBody;
export { AccordionBody };
