import { LightningElement, track } from 'lwc';

export default class ContainerLWC extends LightningElement {
    insertDOM() {
        this.template.querySelector('c-notification-message').showToast(null, 'info', null, null, 5000);
    }

}