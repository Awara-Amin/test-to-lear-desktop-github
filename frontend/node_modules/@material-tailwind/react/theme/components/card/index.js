import cardFilled from "./cardFilled";
import cardGradient from "./cardGradient";
import { propTypesVariant, propTypesColor } from "../../../types/components/card";
export default {
    defaultProps: {
        variant: "filled",
        color: "white",
        shadow: !0,
        className: ""
    },
    valid: {
        variants: propTypesVariant,
        colors: propTypesColor
    },
    styles: {
        base: {
            initial: {
                position: "relative",
                display: "flex",
                flexDirection: "flex-col",
                backgroundClip: "bg-clip-border",
                borderRadius: "rounded-xl"
            },
            shadow: {
                boxShadow: "shadow-md"
            }
        },
        variants: {
            filled: cardFilled,
            gradient: cardGradient
        }
    }
};
