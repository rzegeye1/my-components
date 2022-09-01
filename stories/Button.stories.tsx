import React from 'react';
import { Meta, Story } from '@storybook/react'
import { Button, Props } from '../src/Button'

const meta: Meta = { //information about the component 
    title: 'Button',
    component: Button,
    argTypes: {
        children: {
            defaultValue: 'Default Text'
        }
    }

}

export default meta;

// args used to dynamically change props, slots, styles, inputs 
// it allows storybook and its addons to live edit components 
// args are a property for each story 
const Template: Story<Props> = (args) => <Button {...args} />

// Button stories 
export const Default = Template.bind({});
export const Secondary = Template.bind({})

Secondary.args = {
    variant: 'secondary',
    children: 'I am secondary',

}
