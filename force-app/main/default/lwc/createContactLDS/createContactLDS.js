import { LightningElement,track,wire } from 'lwc';
import{createRecord,getRecord} from 'lightning/uiRecordApi';

const fieldArray=['contact.LastName','contact.Phone','contact.Email'];

export default class CreateContactLDS extends LightningElement {
    @track contactName;
    @track contactPhone;
    @track contactEmail;

    @track recordId;

    @wire(getRecord,{recordId:'$recordId',fields:fieldArray})contactRecord;

    createNameHandler(event){
        this.contactName=event.target.value;
    }
    createEmailHandler(event){
        this.contactEmail=event.target.value;
    }
    createPhoneHandler(event){
        this.contactPhone=event.target.value;
    }
    createContact(){
        const fields={'LastName':this.contactName,'Email':this.contactEmail,'Phone':this.contactPhone};
        const recordInput={apiName:'Contact',fields};
        createRecord(recordInput).then(response=>{
            console.log('New record has been created',response.id);
            this.recordId=response.id;
        }).catch(error=>{
            console.error('error in creating a record',error.body.message);
        });
    }
    get retContactName(){
        if(this.contactRecord.data){
            return this.contactRecord.data.fields.LastName.value;
        }
        return undefined
    }
        get retContactPhone(){
            if(this.contactRecord.data){
                return this.contactRecord.data.fields.Phone.value;
        }
        return undefined
    }
        get retContactEmail(){
            if(this.contactRecord.data){
                return this.contactRecord.data.fields.Email.value;
        }
        return undefined
    }
}