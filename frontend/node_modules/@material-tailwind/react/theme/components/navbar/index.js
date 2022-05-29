import navbarFilled from "./navbarFilled";
import navbarGradient from "./navbarGradient";
import { propTypesVariant, propTypesColor } from "../../../types/components/navbar";
export var navbar = {
    defaultProps: {
        variant: "filled",
        color: "white",
        shadow: !0,
        blurred: !0,
        fullWidth: !1,
        className: ""
    },
    valid: {
        variants: propTypesVariant,
        colors: propTypesColor
    },
    styles: {
        base: {
            initial: {
                display: "flex",
                flexWrap: "flex-nowrap",
                justifyContent: "justify-start",
                width: "w-full",
                maxWidth: "max-w-screen-2xl",
                borderRadius: "rounded-xl",
                py: "py-4",
                px: "px-8"
            },
            shadow: {
                boxShadow: "shadow-md"
            },
            blurred: {
                backdropFilter: "backdrop-saturate-200 backdrop-blur-2xl",
                bgOpacity: "bg-opacity-80",
                borderWidth: "border",
                borderColor: "border-white/80"
            },
            fullWidth: {
                width: "w-full",
                maxWidth: "max-w-full",
                rounded: "rounded-none",
                px: "px-4"
            }
        },
        variants: {
            filled: navbarFilled,
            gradient: navbarGradient
        }
    }
};
export default navbar;
