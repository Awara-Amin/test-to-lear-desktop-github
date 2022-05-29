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
import classnames from "classnames";
import findMatch from "../../utils/findMatch";
import objectsToString from "../../utils/objectsToString";
import { useTheme } from "../../context/theme";
import { propTypesVariant, propTypesColor, propTypesValue, propTypesLabel, propTypesBarProps, propTypesClassName } from "../../types/components/progress";
var Progress = React.forwardRef(function(_param, ref) {
    var _obj, variant = _param.variant, color = _param.color, value = _param.value, label = _param.label, className = _param.className, barProps = _param.barProps, rest = function(source, excluded) {
        if (null == source) return {};
        var key, i, target = {}, sourceKeys = Object.keys(source);
        for(i = 0; i < sourceKeys.length; i++)key = sourceKeys[i], excluded.indexOf(key) >= 0 || (target[key] = source[key]);
        return target;
    }(_param, [
        "variant",
        "color",
        "value",
        "label",
        "className",
        "barProps"
    ]), progress = useTheme().progress, defaultProps = progress.defaultProps, valid = progress.valid, styles = progress.styles, base = styles.base, variants = styles.variants;
    variant = null != variant ? variant : defaultProps.variant, color = null != color ? color : defaultProps.color, label = null != label ? label : defaultProps.label, className = null != className ? className : defaultProps.className, barProps = null != barProps ? barProps : defaultProps.barProps;
    var progressVariant = objectsToString(variants[findMatch(valid.variants, variant, "filled")][findMatch(valid.colors, color, "blue")]), progressContainer = objectsToString(base.container.initial), progressWithLabel = objectsToString(base.container.withLabel), progressBar = objectsToString(base.bar), containerClasses = classnames(progressContainer, ((_obj = {})[progressWithLabel] = label, _obj), className), barClasses = classnames(progressBar, progressVariant, null == barProps ? void 0 : barProps.className);
    return React.createElement("div", _extends({}, rest, {
        ref: ref,
        className: containerClasses
    }), React.createElement("div", _extends({}, barProps, {
        className: barClasses,
        style: {
            width: "" + value + "%"
        }
    }), label && value + "% " + ("string" == typeof label ? label : "")));
});
Progress.propTypes = {
    variant: PropTypes.oneOf(propTypesVariant),
    color: PropTypes.oneOf(propTypesColor),
    value: propTypesValue,
    label: propTypesLabel,
    barProps: propTypesBarProps,
    className: propTypesClassName
}, Progress.displayName = "MaterialTailwind.Progress";
export default Progress;
export { Progress };
