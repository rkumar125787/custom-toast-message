import { LightningElement } from 'lwc';
var timeout = null;
export default class NotificationMessage extends LightningElement {
    disabled = false;
    timeDelay;
    mode = 'sticky';
    type;
    message = 'Please not this is sample model for updating record we are discovering more on theprocess';
    messageHeader = 'Record updated successfully.'
    messageLink;
    closeToast() {
        this.disabled = true;
    }
    connectedCallback() {
        this.clearTostMessage();
    }
    renderedCallback() {
        if (this.type) {

        }
        //this.template.querySelector('.adc-notifications-toast-icon').classList.remove('adc-notifications-toast-icon--success');
    }
    clearTostMessage() {
        this.timeDelay = isNaN(parseInt(this.timeDelay)) ? 5000 : this.timeDelay;
        if (this.mode != 'sticky') {
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                this.closeToast();
            }, this.timeDelay);
        }
    }
}