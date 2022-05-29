import selectOutlined from "./selectOutlined";
import selectStandard from "./selectStandard";
import selectStatic from "./selectStatic";
import { propTypesVariant, propTypesSize, propTypesColor } from "../../../types/components/select";
export var select = {
    defaultProps: {
        variant: "outlined",
        color: "blue",
        size: "md",
        label: "",
        error: !1,
        success: !1,
        arrow: void 0,
        value: "select",
        onChange: void 0,
        selected: void 0,
        offset: 5,
        dismiss: {},
        animate: {
            unmount: {},
            mount: {}
        },
        autoHeight: !1,
        lockScroll: !1,
        labelProps: {},
        menuProps: {},
        className: "",
        disabled: !1
    },
    valid: {
        variants: propTypesVariant,
        sizes: propTypesSize,
        colors: propTypesColor
    },
    styles: {
        base: {
            container: {
                position: "relative",
                width: "w-full",
                minWidth: "min-w-[200px]"
            },
            select: {
                peer: "peer",
                width: "w-full",
                height: "h-full",
                bg: "bg-transparent",
                color: "text-blue-grey-700",
                fontFamily: "font-sans",
                fontWeight: "font-normal",
                textAlign: "text-left",
                outline: "outline-0 focus:outlined-0",
                disabled: "disabled:bg-blue-grey-50 disabled:border-0",
                transition: "transition-all"
            },
            arrow: {
                initial: {
                    display: "grid",
                    placeItems: "place-items-center",
                    position: "absolute",
                    top: "top-2/4",
                    right: "right-2",
                    pt: "pt-px",
                    width: "w-5",
                    height: "h-5",
                    color: "text-blue-grey-400",
                    transform: "rotate-0 -translate-y-2/4",
                    transition: "transition-all"
                },
                active: {
                    transform: "rotate-180",
                    mt: "mt-px"
                }
            },
            label: {
                display: "flex",
                width: "w-full",
                height: "h-full",
                userSelect: "select-none",
                pointerEvents: "pointer-events-none",
                position: "absolute",
                left: "left-0",
                fontWeight: "font-normal",
                transition: "transition-all"
            },
            menu: {
                width: "w-full",
                maxHeight: "max-h-96",
                bg: "bg-white",
                p: "p-3",
                border: "border border-blue-grey-50",
                borderRadius: "rounded-md",
                boxShadow: "shadow-lg shadow-blue-grey-500/10",
                fontFamily: "font-sans",
                fontSize: "text-sm",
                fontWeight: "font-normal",
                color: "text-blue-grey-500",
                overflow: "overflow-auto",
                outline: "focus:outline-none"
            },
            option: {
                initial: {
                    pt: "pt-[9px]",
                    pb: "pb-2",
                    px: "px-3",
                    borderRadius: "rounded-md",
                    lightHeight: "leading-tight",
                    cursor: "cursor-pointer",
                    userSelect: "select-none",
                    background: "hover:bg-blue-grey-50 focus:bg-blue-grey-50",
                    opacity: "hover:bg-opacity-80 focus:bg-opacity-80",
                    color: "hover:text-blue-grey-900 focus:text-blue-grey-900",
                    transition: "transition-all"
                },
                active: {
                    bg: "bg-blue-grey-50 bg-opacity-80",
                    color: "text-blue-grey-900"
                },
                disabled: {
                    opacity: "opacity-50",
                    cursor: "cursor-not-allowed",
                    userSelect: "select-none"
                }
            }
        },
        variants: {
            outlined: selectOutlined,
            standard: selectStandard,
            static: selectStatic
        }
    }
};
export default select;
