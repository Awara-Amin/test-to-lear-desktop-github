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
import mergeRefs from "react-merge-refs";
import { usePopover } from "./PopoverContext";
import { propTypesChildren } from "../../types/components/popover";
var PopoverHandler = React.forwardRef(function(_param, ref) {
    var children = _param.children, rest = function(source, excluded) {
        if (null == source) return {};
        var key, i, target = {}, sourceKeys = Object.keys(source);
        for(i = 0; i < sourceKeys.length; i++)key = sourceKeys[i], excluded.indexOf(key) >= 0 || (target[key] = source[key]);
        return target;
    }(_param, [
        "children"
    ]), _$ref = usePopover(), getReferenceProps = _$ref.getReferenceProps, reference = _$ref.reference, mergedRef = React.useMemo(function() {
        return mergeRefs([
            ref,
            reference
        ]);
    }, [
        ref,
        reference
    ]);
    return React.cloneElement(children, _extends({}, getReferenceProps(_extends({}, rest, {
        ref: mergedRef
    }))));
});
PopoverHandler.propTypes = {
    children: propTypesChildren
}, PopoverHandler.displayName = "MaterialTailwind.PopoverHandler";
export default PopoverHandler;
export { PopoverHandler };
