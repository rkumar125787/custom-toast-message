import { LightningElement, api } from 'lwc';
var timeout = null;
export default class NotificationMessage extends LightningElement {
    @api disabled = false;
    @api timeDelay;
    @api mode = 'dismiss';
    @api type = 'info';
    @api message = 'Sample Information Message';
    @api messageHeader = 'Information'
    messageLink;
    closeToast() {
        this.disabled = true;
    }
    renderedCallback() {

    }
    clearTostMessage() {
        this.timeDelay = isNaN(parseInt(this.timeDelay)) ? 5000 : this.timeDelay;
        if (this.mode != 'sticky') {
            clearTimeout(timeout);
            timeout =
                setTimeout(() => {
                    this.closeToast();
                }, this.timeDelay);
        }
    }
    @api showToast(mode, type, header, message, timedelay) {
        this.disabled = false;
        this.mode = mode || this.mode;
        this.messageHeader = header || this.messageHeader;
        this.message = message || this.message;
        this.timeDelay = timedelay || this.timeDelay;
        this.type = type || this.type;
        console.log('mode:::' + this.mode);
        this.clearTostMessage();
    }
}