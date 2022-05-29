import buttonFilled from "./buttonFilled";
import buttonGradient from "./buttonGradient";
import buttonOutlined from "./buttonOutlined";
import buttonText from "./buttonText";
import { propTypesVariant, propTypesSize, propTypesColor } from "../../../types/components/button";
export var button = {
    defaultProps: {
        variant: "filled",
        size: "md",
        color: "blue",
        fullWidth: !1,
        ripple: !0,
        className: ""
    },
    valid: {
        variants: propTypesVariant,
        sizes: propTypesSize,
        colors: propTypesColor
    },
    styles: {
        base: {
            initial: {
                display: "inline-block",
                verticalAlign: "middle",
                userSelect: "none",
                fontFamily: "font-sans",
                fontWeight: "font-bold",
                textAlign: "center",
                textTransform: "uppercase",
                transition: "transition-all"
            },
            fullWidth: {
                display: "block",
                width: "w-full"
            }
        },
        sizes: {
            sm: {
                fontSize: "text-xs",
                py: "py-2",
                px: "px-4",
                borderRadius: "rounded-lg"
            },
            md: {
                fontSize: "text-xs",
                py: "py-3",
                px: "px-6",
                borderRadius: "rounded-lg"
            },
            lg: {
                fontSize: "text-sm",
                py: "py-3.5",
                px: "px-7",
                borderRadius: "rounded-lg"
            }
        },
        variants: {
            filled: buttonFilled,
            gradient: buttonGradient,
            outlined: buttonOutlined,
            text: buttonText
        }
    }
};
export default button;
