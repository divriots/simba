import React from 'react';
import { Button } from '../index';

export default {
  parameters: {
    layout: "centered",
  },
};

export const small_button = () => <Button size="small" onPress={() => alert('Button pressed!')}>Test</Button>;

export const medium_button = () => <Button size="medium" onPress={() => alert('Button pressed!')}>Test</Button>;

export const large_button = () => <Button size="large" onPress={() => alert('Button pressed!')}>Test</Button>;

