import { TailwindIcon } from './src/TailwindIcon';

// Load tailwind icon resolver as a side effect
import './src/resolver.js';

customElements.define('tailwind-icon', TailwindIcon);
