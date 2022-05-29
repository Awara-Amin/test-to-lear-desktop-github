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
import { propTypesVariant, propTypesColor, propTypesSize, propTypesLabel, propTypesError, propTypesSuccess, propTypesIcon, propTypesLabelProps, propTypesClassName } from "../../types/components/input";
var Input = React.forwardRef(function(_param, ref) {
    var _obj, _obj1, _obj2, _obj3, _obj4, _obj5, _obj6, variant = _param.variant, color = _param.color, size = _param.size, label = _param.label, error = _param.error, success = _param.success, icon = _param.icon, labelProps = _param.labelProps, className = _param.className, rest = function(source, excluded) {
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
        "icon",
        "labelProps",
        "className"
    ]), input = useTheme().input, defaultProps = input.defaultProps, valid = input.valid, styles = input.styles, base = styles.base, variants = styles.variants;
    variant = null != variant ? variant : defaultProps.variant, size = null != size ? size : defaultProps.size, color = null != color ? color : defaultProps.color, label = null != label ? label : defaultProps.label, labelProps = null != labelProps ? labelProps : defaultProps.labelProps, className = null != className ? className : defaultProps.className, icon = null != icon ? icon : defaultProps.icon;
    var inputVariant = variants[findMatch(valid.variants, variant, "outlined")], inputSize = inputVariant.sizes[findMatch(valid.sizes, size, "md")], inputError = objectsToString(inputVariant.error.input), inputSuccess = objectsToString(inputVariant.success.input), inputColor = objectsToString(inputVariant.colors.input[findMatch(valid.colors, color, "blue")]), labelError = objectsToString(inputVariant.error.label), labelSuccess = objectsToString(inputVariant.success.label), labelColor = objectsToString(inputVariant.colors.label[findMatch(valid.colors, color, "blue")]), containerClasses = classnames(objectsToString(base.container), objectsToString(inputSize.container)), inputClasses = classnames(objectsToString(base.input), objectsToString(inputVariant.base.input), objectsToString(inputSize.input), ((_obj = {})[objectsToString(inputVariant.base.inputWithIcon)] = icon, _obj), ((_obj1 = {})[inputColor] = !error && !success, _obj1), ((_obj2 = {})[inputError] = error, _obj2), ((_obj3 = {})[inputSuccess] = success, _obj3), className), labelClasses = classnames(objectsToString(base.label), objectsToString(inputVariant.base.label), objectsToString(inputSize.label), ((_obj4 = {})[labelColor] = !error && !success, _obj4), ((_obj5 = {})[labelError] = error, _obj5), ((_obj6 = {})[labelSuccess] = success, _obj6), null == labelProps ? void 0 : labelProps.className), iconClasses = classnames(objectsToString(base.icon), objectsToString(inputVariant.base.icon), objectsToString(inputSize.icon));
    return React.createElement("div", {
        ref: ref,
        className: containerClasses
    }, icon && React.createElement("div", {
        className: iconClasses
    }, icon), React.createElement("input", _extends({}, rest, {
        className: inputClasses,
        placeholder: (null == rest ? void 0 : rest.placeholder) || " "
    })), React.createElement("label", {
        className: labelClasses
    }, label));
});
Input.propTypes = {
    variant: PropTypes.oneOf(propTypesVariant),
    size: PropTypes.oneOf(propTypesSize),
    color: PropTypes.oneOf(propTypesColor),
    label: propTypesLabel,
    error: propTypesError,
    success: propTypesSuccess,
    icon: propTypesIcon,
    labelProps: propTypesLabelProps,
    className: propTypesClassName
}, Input.displayName = "MaterialTailwind.Input";
export default Input;
export { Input };
