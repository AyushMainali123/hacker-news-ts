import Button from './index'


export default {
    title: "Button",
    component: Button
}

const SkeletonButton = (args) => <Button { ...args} />


// For default variant
export const Default = SkeletonButton.bind({})
Default.args = {
    children: "Default",
    className: "default",
    variant: "default",
}

// For Pill Variant
export const Pill = SkeletonButton.bind({});
Pill.args = {
    children: "Pill",
    className: "pill",
    variant: "pill",
}

// For Standard Button
export const Standard = SkeletonButton.bind({});
Standard.args = {
    children: "Standard",
    className: "standard",
    variant: "standard",
}



