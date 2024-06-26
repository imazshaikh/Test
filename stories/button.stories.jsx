import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from './Button';
import { ArgTypes, Controls, Heading } from '@storybook/blocks';


// Controls
export default {
    component: Button,
        argTypes: {
            canRotate: {
                control: 'boolean',
            },
            width: {
                control: { type: 'number', min: 400, max: 1200, step: 50 },
            },
            height: {
                control: { type: 'range', min: 200, max: 1500, step: 50 },
            },
            rawData: {
                control: 'object',
            },
            coordinates: {
                control: 'object',
            },
            texture: {
                control: {
                    type: 'file',
                    accept: '.png',
                },
            },
            position: {
                control: 'radio',
                options: ['left', 'right', 'center'],
            },
            rotationAxis: {
                control: 'check',
                options: ['x', 'y', 'z'],
            },
            scaling: {
                control: 'select',
                options: [10, 50, 75, 100, 200],
            },
            label: {
                control: 'text',
            },
            meshColors: {
                control: {
                    type: 'color',
                    presetColors: ['#ff0000', '#00ff00', '#0000ff'],
                },
            },
            revisionDate: {
                control: 'date',
            },
        },
};

/*
 * Example Button story with React Hooks.
 * See note below related to this example.
 */
const ButtonWithHooks = () => {
    // Sets the hooks for both the label and primary props
    const [value, setValue] = useState('Secondary');
    const [isPrimary, setIsPrimary] = useState(false);

    // Sets a click handler to change the label's value
    const handleOnChange = () => {
        if (!isPrimary) {
            setIsPrimary(true);
            setValue('Primary');
        }
    };
    return <Button primary={isPrimary} onClick={handleOnChange} label={value} />;
};

export const Primary = {
    render:() => <ButtonWithHooks />,
    // 👇 Rename this story
    name:'New Primary Button',
    args:{
        label:'Button',
        primary:true,
        backgroundColor:PropTypes.string,
        variant:"primary",
        width:750
    },
};

