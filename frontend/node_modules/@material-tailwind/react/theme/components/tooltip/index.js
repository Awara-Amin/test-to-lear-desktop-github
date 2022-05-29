export var tooltip = {
    defaultProps: {
        interactive: !1,
        placement: "top",
        offset: 5,
        dismiss: {},
        animate: {
            unmount: {},
            mount: {}
        },
        className: ""
    },
    styles: {
        base: {
            bg: "bg-black",
            py: "py-1.5",
            px: "px-3",
            borderRadius: "rounded-lg",
            fontFamily: "font-sans",
            fontSize: "text-sm",
            fontWeight: "font-normal",
            color: "text-white",
            outline: "focus:outline-none",
            overflowWrap: "break-words",
            zIndex: "z-[999]",
            whiteSpace: "whitespace-normal"
        }
    }
};
export default tooltip;
