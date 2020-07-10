import { LightningElement,wire,track } from 'lwc';
import getAllContacts from '@salesforce/apex/ConManager.getCon';
export default class FetchContactViaApex extends LightningElement {
    @track numberOfRecords;
    @track contacts;
    get responseReceived(){
        if(this.contacts){
            return true;
        }
            return false;
    }
    numberOfChange(event){
       this.numberOfRecords=event.target.value; 
    }
    getContact(){
        getAllContacts({numberOfRecords:this.numberOfRecords}).then(response=>
            {this.contacts=response;
        }).catch(error=>{
            console.log('error in retrieving contact record',error.body.message);
        });
    }
}