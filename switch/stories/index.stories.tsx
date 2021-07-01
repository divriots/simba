import React from 'react';
import { Switch } from '../index';

export default {
  parameters: {
    layout: "centered",
  },
};

export const small_switch = () => <Switch size="small">Test</Switch>;

export const medium_switch = () => <Switch size="medium">Test</Switch>;

export const large_switch = () => <Switch size="large">Test</Switch>;
