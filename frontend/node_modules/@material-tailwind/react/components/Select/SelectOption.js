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
import classnames from "classnames";
import objectsToString from "../../utils/objectsToString";
import { useTheme } from "../../context/theme";
import { useSelect } from "./SelectContext";
import { propTypesValue, propTypesIndex, propTypesDisabled, propTypesClassName, propTypesChildren } from "../../types/components/select";
var SelectOption = function(props) {
    var _obj, handleSelect = function() {
        setSelectedIndex(index), onChange(value), setOpen(!1), setActiveIndex(null);
    }, handleKeyDown = function(event) {
        "Enter" !== event.key && (" " !== event.key || dataRef.current.typing) || (event.preventDefault(), handleSelect());
    }, value = props.value, index = props.index, disabled = props.disabled, className = props.className, children = props.children, rest = function(source, excluded) {
        if (null == source) return {};
        var key, i, target = {}, sourceKeys = Object.keys(source);
        for(i = 0; i < sourceKeys.length; i++)key = sourceKeys[i], excluded.indexOf(key) >= 0 || (target[key] = source[key]);
        return target;
    }(props, [
        "value",
        "index",
        "disabled",
        "className",
        "children"
    ]), select = useTheme().select, styles = select.styles, base = styles.base, ref = useSelect(), selectedIndex = ref.selectedIndex, setSelectedIndex = ref.setSelectedIndex, listRef = ref.listRef, setOpen = ref.setOpen, onChange = ref.onChange, activeIndex = ref.activeIndex, setActiveIndex = ref.setActiveIndex, getItemProps = ref.getItemProps, dataRef = ref.dataRef, optionBaseClasses = objectsToString(base.option.initial), optionActiveClasses = objectsToString(base.option.active), optionDisabledClasses = objectsToString(base.option.disabled), classes = classnames(optionBaseClasses, ((_obj = {})[optionActiveClasses] = selectedIndex === index, _obj[optionDisabledClasses] = disabled, _obj), null != className ? className : "");
    return React.createElement("li", _extends({}, rest, {
        role: "option",
        ref: function(node) {
            return listRef.current[index] = node;
        },
        className: classes,
        tabIndex: activeIndex === index ? 0 : 1,
        "aria-selected": activeIndex === index && selectedIndex === index,
        "data-selected": selectedIndex === index
    }, getItemProps({
        onClick: function(e) {
            var onClick = null == rest ? void 0 : rest.onClick;
            "function" == typeof onClick && (onClick(e), handleSelect()), handleSelect();
        },
        onKeyDown: function(e) {
            var onKeyDown = null == rest ? void 0 : rest.onKeyDown;
            "function" == typeof onKeyDown && (onKeyDown(e), handleKeyDown(e)), handleKeyDown(e);
        }
    })), children);
};
SelectOption.defaultProps = {
    value: "",
    index: 0,
    className: "",
    disabled: !1
}, SelectOption.propTypes = {
    value: propTypesValue,
    index: propTypesIndex,
    disabled: propTypesDisabled,
    className: propTypesClassName,
    children: propTypesChildren
}, SelectOption.displayName = "MaterialTailwind.SelectOption";
export default SelectOption;
export { SelectOption };
