import { buildCustomElementConstructor } from 'lwc';
import App from 'components/app';

customElements.define('main-app', buildCustomElementConstructor(App));
