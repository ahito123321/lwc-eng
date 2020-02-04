import { LightningElement } from 'lwc';

export default class LightningElementSLDS extends LightningElement {
  constructor() {
    super();
    let _sldsPath = "https://cdnjs.cloudflare.com/ajax/libs/design-system/2.5.0/styles/salesforce-lightning-design-system.min.css";
    const styles = document.createElement("link");
    styles.href = _sldsPath;
    styles.rel = "stylesheet";
    this.template.appendChild(styles);
  }
}