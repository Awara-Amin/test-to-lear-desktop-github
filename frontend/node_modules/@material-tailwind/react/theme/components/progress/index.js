import progressFilled from "./progressFilled";
import progressGradient from "./progressGradient";
import { propTypesVariant, propTypesColor } from "../../../types/components/progress";
export var progress = {
    defaultProps: {
        variant: "filled",
        color: "blue",
        value: 0,
        label: !1,
        className: "",
        barProps: {}
    },
    valid: {
        variants: propTypesVariant,
        colors: propTypesColor
    },
    styles: {
        base: {
            container: {
                initial: {
                    display: "flex",
                    justifyContent: "flex-start",
                    bg: "bg-blue-grey-50",
                    overflow: "overflow-hidden",
                    width: "w-full",
                    height: "h-1.5",
                    borderRadius: "rounded-sm",
                    fontFamily: "font-sans",
                    fontSize: "text-xs",
                    fontWeight: "font-medium"
                },
                withLabel: {
                    height: "h-4",
                    borderRadius: "rounded"
                }
            },
            bar: {
                display: "flex",
                justifyContent: "justify-center",
                alignItems: "items-center",
                height: "h-full"
            }
        },
        variants: {
            filled: progressFilled,
            gradient: progressGradient
        }
    }
};
export default progress;
