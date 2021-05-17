import { LightningElement, api } from 'lwc';
var timeout = null;
export default class NotificationMessage extends LightningElement {
    @api disabled = false;
    @api timeDelay;
    @api mode = 'dismiss';
    @api type = 'info';
    @api message = 'Sample Information Message';
    @api messageHeader = 'Information';
    @api linkTarget;
    @api navigatorLinkText;
    @api navigatorLinkTextTarget;
    get isSuccess() {
        return this.type == 'success' ? true : false;
    }
    get isInfo() {
        return this.type != 'error' && this.type != 'success' ? true : false;
    }
    get isError() {
        return this.type == 'error' ? true : false;
    }
    closeToast() {
        this.disabled = true;
    }
    removeClass() {
        this.template.querySelector('.adc-notifications-toast').classList.remove('adc-notifications-toast--success');
        this.template.querySelector('.adc-notifications-toast-icon').classList.remove('adc-notifications-toast-icon--success');
        this.template.querySelector('.adc-notifications-toast').classList.remove('adc-notifications-toast--error');
        this.template.querySelector('.adc-notifications-toast-icon').classList.remove('adc-notifications-toast-icon--error');
        this.template.querySelector('.adc-notifications-toast').classList.remove('adc-notifications-toast--info');
        this.template.querySelector('.adc-notifications-toast-icon').classList.remove('adc-notifications-toast-icon--info');
    }
    renderedCallback() {
        this.removeClass();
        if (this.type == 'success') {
            this.template.querySelector('.adc-notifications-toast').classList.add('adc-notifications-toast--success');
            this.template.querySelector('.adc-notifications-toast-icon').classList.add('adc-notifications-toast-icon--success');

        }
        else if (this.type == 'error') {
            this.template.querySelector('.adc-notifications-toast').classList.add('adc-notifications-toast--error');
            this.template.querySelector('.adc-notifications-toast-icon').classList.add('adc-notifications-toast-icon--error');
        }
        else {
            this.template.querySelector('.adc-notifications-toast').classList.add('adc-notifications-toast--info');
            this.template.querySelector('.adc-notifications-toast-icon').classList.add('adc-notifications-toast-icon--info');
        }
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
    @api showToast(mode, type, header, message, timedelay, navigatorLinkText, navigatorLinkTexttarget) {
        this.disabled = false;
        this.mode = mode || this.mode;
        this.messageHeader = header || this.messageHeader;
        this.message = message || this.message;
        this.timeDelay = timedelay || this.timeDelay;
        this.type = type || this.type;
        this.navigatorLinkText = navigatorLinkText || this.navigatorLinkText;
        this.navigatorLinkTextTarget = navigatorLinkTexttarget || this.navigatorLinkTextTarget;
        this.clearTostMessage();
    }
}