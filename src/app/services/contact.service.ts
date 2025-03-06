import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, addDoc, CollectionReference, DocumentReference, doc } from '@angular/fire/firestore';
import { Contact } from '../models/contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private contactCollection: CollectionReference;

  constructor(private firestore: Firestore) {
    this.contactCollection = collection(this.firestore, 'messages');
  }
  
  sendMessage(message: Contact): Promise<DocumentReference> {
    return this.addMessage(message)
    .then((docRef) => {
      return docRef;
    })
    .catch((error) => {
      console.log(error);
      throw error;
    });
  }

  addMessage(message: Contact): Promise<DocumentReference> {
    return addDoc(this.contactCollection, message);
  }
}
