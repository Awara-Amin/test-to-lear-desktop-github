import cardFilled from "./cardFilled";
import cardGradient from "./cardGradient";
import { propTypesVariant, propTypesColor } from "../../../types/components/card";
export default {
    defaultProps: {
        variant: "filled",
        color: "white",
        shadow: !0,
        floated: !0,
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
                backgroundClip: "bg-clip-border",
                mt: "mt-4",
                mx: "mx-4",
                borderRadius: "rounded-xl",
                overflow: "overflow-hidden"
            },
            shadow: {
                boxShadow: "shadow-lg"
            },
            floated: {
                mt: "!-mt-6"
            }
        },
        variants: {
            filled: cardFilled,
            gradient: cardGradient
        }
    }
};
