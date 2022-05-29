import chipFilled from "./chipFilled";
import chipGradient from "./chipGradient";
import chipCloseButtonColors from "./chipCloseButtonColors";
import { propTypesVariant, propTypesColor } from "../../../types/components/chip";
export var chip = {
    defaultProps: {
        variant: "filled",
        color: "blue",
        icon: void 0,
        show: !0,
        dismissble: {
            action: "",
            onClose: function() {}
        },
        animate: {
            unmount: {},
            mount: {}
        },
        className: ""
    },
    valid: {
        variants: propTypesVariant,
        colors: propTypesColor
    },
    styles: {
        base: {
            position: "relative",
            display: "inline-block",
            align: "align-baseline",
            fontFamily: "font-sans",
            fontSize: "text-xs",
            fontWeight: "font-bold",
            textTransform: "uppercase",
            textAlign: "center",
            lineHeight: "leading-none",
            whiteSpace: "whitespace-nowrap",
            py: "py-2",
            px: "px-3.5",
            borderRadius: "rounded-lg",
            userSelect: "select-none"
        },
        variants: {
            filled: chipFilled,
            gradient: chipGradient
        },
        closeButtonColor: chipCloseButtonColors
    }
};
export default chip;
