import {
    LightningElement,
    track
} from 'lwc';

export default class LwcDateValidation extends LightningElement {

    @track fromDate;
    @track toDate;

    handleInputEvent(event) {
        var fromDate;
        var toDate;
        var today = new Date();
        if (event.target.name == 'fromDate') {
            this.fromDate = event.target.value;
            fromDate = new Date(this.fromDate);
        }
        if (event.target.name == 'toDate') {
            this.toDate = event.target.value;
             toDate = new Date(this.toDate);
        }
        if((this.fromDate > this.toDate) || (fromDate > today) || (toDate > today)){
                alert('Please enter appropriate dates');
        }
    }
    
}