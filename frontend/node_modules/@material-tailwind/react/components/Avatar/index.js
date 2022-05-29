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
import { propTypesVariant, propTypesSize, propTypesClassName } from "../../types/components/avatar";
var Avatar = React.forwardRef(function(_param, ref) {
    var variant = _param.variant, size = _param.size, className = _param.className, rest = function(source, excluded) {
        if (null == source) return {};
        var key, i, target = {}, sourceKeys = Object.keys(source);
        for(i = 0; i < sourceKeys.length; i++)key = sourceKeys[i], excluded.indexOf(key) >= 0 || (target[key] = source[key]);
        return target;
    }(_param, [
        "variant",
        "size",
        "className"
    ]), avatar = useTheme().avatar, valid = avatar.valid, defaultProps = avatar.defaultProps, styles = avatar.styles, base = styles.base, variants = styles.variants, sizes = styles.sizes;
    variant = null != variant ? variant : defaultProps.variant, size = null != size ? size : defaultProps.size, className = null != className ? className : defaultProps.className;
    var avatarVariant = objectsToString(variants[findMatch(valid.variants, variant, "rounded")]), avatarSize = objectsToString(sizes[findMatch(valid.sizes, size, "md")]), classes = classnames(objectsToString(base), avatarVariant, avatarSize, className);
    return React.createElement("img", _extends({}, rest, {
        ref: ref,
        className: classes
    }));
});
Avatar.propTypes = {
    variant: PropTypes.oneOf(propTypesVariant),
    size: PropTypes.oneOf(propTypesSize),
    className: propTypesClassName
}, Avatar.displayName = "MaterialTailwind.Avatar";
export default Avatar;
export { Avatar };
