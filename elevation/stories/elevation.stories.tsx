import React from 'react';
import '~/all/dist/all.css';
import { StyleShowcases } from '@divriots/dockit-react/style-showcases';
import './stories.css';

export const color = () => (
  <StyleShowcases
    prefix="--aria-shadow"
    styleKey="boxShadow"
    componentProps={{ className: 'box' }}
  />
);
