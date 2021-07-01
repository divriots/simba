import React from 'react';
import { Select, Item } from '../index';

export default {
  parameters: {
    layout: "centered",
  },
};

export const select = () => (
  <Select label="Favorite Color">
    <Item>Red</Item>
    <Item>Orange</Item>
    <Item>Yellow</Item>
    <Item>Green</Item>
    <Item>Blue</Item>
    <Item>Purple</Item>
  </Select>
);
