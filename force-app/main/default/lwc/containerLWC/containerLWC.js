import { LightningElement, track } from 'lwc';

export default class ContainerLWC extends LightningElement {
    insertDOM() {
        this.template.querySelector('c-notification-message').showToast(null, 'success', 'ERROR !', 'Error Message Goes here', 5000, 'Here is The Link', 'https://www.google.com');
    }

}