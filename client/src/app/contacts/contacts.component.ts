import { Component, OnInit } from '@angular/core';
import {ContactService} from '../contact.service'; // importing contact service
import {Contact} from '../contact';                // importing contact class or Schema
//import { Subscription } from 'rxjs/Subscription';
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
  providers:[ContactService] // provide our service so as to use providers
})
export class ContactsComponent implements OnInit {
contacts: Contact[];
contact: Contact;
first_name:string;
last_name:string;
phone:string;


  //Now we'r going to initialize our service or we want an instance of that very contact service class so that
  // we can use the method that we have defined there.
  //For that we'll pass the argument as private contatservice of type contact service class
  //This very process is called dependency injection.Or this how we are injecting our services into our componet. 
  constructor(private contactService: ContactService)  { }

  addContact()
  {
    const newContact ={
      first_name: this.first_name,
      last_name:this.last_name,
      phone:this.phone
    }
   this.contactService.addContact(newContact)
   .subscribe(contact =>{ 
     this.contacts.push(this.contact);
     
     this.contactService.getContact()
     .subscribe(contacts =>
        this.contacts = contacts);   
   });     
  }

 deleteContact(id:any)
 {
   var contacts = this.contacts;
   this.contactService.deleteContact(id)
   .subscribe(data =>{
     if(data.n==1)
      {
        for(var i=0; i<contacts.length; i++)
          {
            if(contacts[i]._id==id)
              {
                contacts.splice(i,1);
              }
          }
      }
   })
 }


  ngOnInit() {
    this.contactService.getContact()
    .subscribe(contacts =>
        this.contacts = contacts);
  }

}
