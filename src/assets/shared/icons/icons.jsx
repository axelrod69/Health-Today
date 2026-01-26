import { ICONS } from "./iconMap";

export const Icon = ({
    name,
    size = 18,
    color = "currentColor",
    ...props
}) => {
    const IconComponent = ICONS[name]

    if (!IconComponent) return null;

    return (
        <IconComponent
            width={size}
            height={size}
            style={{ color }}
            {...props}
        />
    );
}