import Button from './index'


export default {
    title: "Button",
    component: Button
}

const SkeletonButton = (args) => <Button { ...args} />


export const Default = SkeletonButton.bind({})
Default.args = {
    children: "Default",
    className: "default",
    variant: "default"
}

export const Pill = SkeletonButton.bind({});
Pill.args = {
    children: "Pill",
    className: "pill",
    variant: "pill"
}


export const Standard = SkeletonButton.bind({});
Standard.args = {
    children: "Standard",
    className: "standard",
    variant: "standard"
}

