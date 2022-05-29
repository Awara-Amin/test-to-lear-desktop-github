import alertFilled from "./alertFilled";
import alertGradient from "./alertGradient";
import { propTypesVariant, propTypesColor } from "../../../types/components/alert";
export var alert = {
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
            display: "block",
            width: "w-full",
            fontFamily: "font-sans",
            fontSize: "text-base",
            fontWeight: "font-regular",
            px: "px-4",
            py: "py-4",
            borderRadius: "rounded-lg"
        },
        variants: {
            filled: alertFilled,
            gradient: alertGradient
        }
    }
};
export default alert;
