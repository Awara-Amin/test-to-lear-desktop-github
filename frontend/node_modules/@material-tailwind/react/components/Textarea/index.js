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
import { propTypesVariant, propTypesColor, propTypesSize, propTypesLabel, propTypesError, propTypesSuccess, propTypesResize, propTypesLabelProps, propTypesClassName } from "../../types/components/input";
var Textarea = React.forwardRef(function(_param, ref) {
    var _obj, _obj1, _obj2, _obj3, _obj4, _obj5, variant = _param.variant, color = _param.color, size = _param.size, label = _param.label, error = _param.error, success = _param.success, resize = _param.resize, labelProps = _param.labelProps, className = _param.className, rest = function(source, excluded) {
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
        "resize",
        "labelProps",
        "className"
    ]), textarea = useTheme().textarea, defaultProps = textarea.defaultProps, valid = textarea.valid, styles = textarea.styles, base = styles.base, variants = styles.variants;
    variant = null != variant ? variant : defaultProps.variant, size = null != size ? size : defaultProps.size, color = null != color ? color : defaultProps.color, label = null != label ? label : defaultProps.label, labelProps = null != labelProps ? labelProps : defaultProps.labelProps, className = null != className ? className : defaultProps.className;
    var textareaVariant = variants[findMatch(valid.variants, variant, "outlined")], textareaError = objectsToString(textareaVariant.error.textarea), textareaSuccess = objectsToString(textareaVariant.success.textarea), textareaColor = objectsToString(textareaVariant.colors.textarea[findMatch(valid.colors, color, "blue")]), labelError = objectsToString(textareaVariant.error.label), labelSuccess = objectsToString(textareaVariant.success.label), labelColor = objectsToString(textareaVariant.colors.label[findMatch(valid.colors, color, "blue")]), containerClasses = classnames(objectsToString(base.container)), textareaClasses = classnames(objectsToString(base.textarea), objectsToString(textareaVariant.base.textarea), objectsToString(textareaVariant.sizes[findMatch(valid.sizes, size, "md")].textarea), ((_obj = {})[textareaColor] = !error && !success, _obj), ((_obj1 = {})[textareaError] = error, _obj1), ((_obj2 = {})[textareaSuccess] = success, _obj2), resize ? "" : "!resize-none", className), labelClasses = classnames(objectsToString(base.label), objectsToString(textareaVariant.base.label), objectsToString(textareaVariant.sizes[findMatch(valid.sizes, size, "md")].label), ((_obj3 = {})[labelColor] = !error && !success, _obj3), ((_obj4 = {})[labelError] = error, _obj4), ((_obj5 = {})[labelSuccess] = success, _obj5), null == labelProps ? void 0 : labelProps.className);
    return React.createElement("div", {
        ref: ref,
        className: containerClasses
    }, React.createElement("textarea", _extends({}, rest, {
        className: textareaClasses,
        placeholder: (null == rest ? void 0 : rest.placeholder) || " "
    })), React.createElement("label", {
        className: labelClasses
    }, label));
});
Textarea.propTypes = {
    variant: PropTypes.oneOf(propTypesVariant),
    size: PropTypes.oneOf(propTypesSize),
    color: PropTypes.oneOf(propTypesColor),
    label: propTypesLabel,
    error: propTypesError,
    success: propTypesSuccess,
    resize: propTypesResize,
    labelProps: propTypesLabelProps,
    className: propTypesClassName
}, Textarea.displayName = "MaterialTailwind.Textarea";
export default Textarea;
export { Textarea };
