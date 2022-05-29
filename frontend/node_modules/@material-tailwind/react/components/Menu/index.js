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
import { FloatingTree, useFloatingParentNodeId } from "@floating-ui/react-dom-interactions";
import { useMenu } from "./MenuContext";
import MenuCore from "./MenuCore";
import MenuHandler from "./MenuHandler";
import MenuList from "./MenuList";
import MenuItem from "./MenuItem";
var Menu = React.forwardRef(function(param, ref) {
    var open = param.open, handler = param.handler, placement = param.placement, offset = param.offset, dismiss = param.dismiss, animate = param.animate, lockScroll = param.lockScroll, children = param.children, parentId = useFloatingParentNodeId(), props = {
        open: open,
        handler: handler,
        placement: placement,
        offset: offset,
        dismiss: dismiss,
        animate: animate,
        lockScroll: lockScroll
    };
    return null == parentId ? React.createElement(FloatingTree, null, React.createElement(MenuCore, _extends({
        ref: ref
    }, props), children)) : React.createElement(MenuCore, _extends({
        ref: ref
    }, props), children);
});
Menu.propTypes = MenuCore.propTypes, Menu.displayName = "MaterialTailwind.Menu";
export default Object.assign(Menu, {
    Handler: MenuHandler,
    List: MenuList,
    Item: MenuItem
});
export { Menu, MenuHandler, MenuList, MenuItem, useMenu };
