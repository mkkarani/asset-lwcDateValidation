import {
    LightningElement,
    track
} from 'lwc';
import dateMethod from '@salesforce/apex/testApex.dateMethod';


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
            //this.testDateMethod();
            /*if (this.fromDate != null) {
                var fromDateString = this.fromDate.toString();
                var splittedDate = this.splitDate(fromDateString);
                var fromDateYear = splittedDate[0];
                var fromDateMonth = splittedDate[1];
                var fromDateValue = splittedDate[2];

                if (fromDateYear > today.getFullYear() || (fromDateMonth > (today.getMonth() + 1) && (fromDateYear > today.getFullYear() || fromDateYear == today.getFullYear())) ||
                    (fromDateValue > today.getDate() && fromDateMonth > (today.getMonth() + 1) && fromDateYear > today.getFullYear()) ||
                    (fromDateValue > today.getDate() && fromDateMonth == (today.getMonth() + 1) && fromDateYear == today.getFullYear())) {
                    alert('From date is greater than today');
                } 
            }*/
        }
        if (event.target.name == 'toDate') {
            this.toDate = event.target.value;
             toDate = new Date(this.toDate);
            //this.testDateMethod();
            /* console.log('--'+this.toDate);
            if (this.toDate != null) {
                var toDateString = this.toDate.toString();
                var splittedDate = this.splitDate(toDateString);
                var toDateYear = splittedDate[0];
                var toDateMonth = splittedDate[1];
                var toDateValue = splittedDate[2];

                if (toDateYear > today.getFullYear() || (toDateMonth > (today.getMonth() + 1) && (toDateYear > today.getFullYear()|| toDateYear == today.getFullYear())) ||
                    (toDateValue > today.getDate() && toDateMonth > (today.getMonth() + 1) && toDateYear > today.getFullYear()) ||
                    (toDateValue > today.getDate() && toDateMonth == (today.getMonth() + 1) && toDateYear == today.getFullYear())) {
                    alert('To date is greater than today');
                }
            }
        }
        if(this.fromDate != null && this.fromDate > this.toDate){
            alert('From Date is greater than to date');
        }*/
        }
        if((this.fromDate > this.toDate) || (fromDate > today) || (toDate > today)){
                alert('Please enter appropiate dates');
        }
    }
    
}