import { Component } from "@angular/core";
import { Contact } from "./data";
import { contacts as sampleContacts } from "./data";


interface PendingSelection {
	[ key: number ]: boolean;
}

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css']
})
export class ListViewComponent {

	public contacts: Contact[];
	public pendingSelection: PendingSelection;
	public selectedContacts: Contact[];
	public unselectedContacts: Contact[];

	constructor() {
		this.contacts = sampleContacts;
		this.unselectedContacts = this.contacts.slice().sort( this.sortContactOperator );
    console.log('this.unselectedContacts : ',this.unselectedContacts)
		this.selectedContacts = [];
		this.pendingSelection = Object.create( null );

	}

	public addToSelectedContacts( contact?: Contact ) : void {

		var changeContacts = ( contact )? [ contact ]: this.getPendingSelectionFromCollection( this.unselectedContacts );
		this.pendingSelection = Object.create( null );
		this.unselectedContacts = this.removeContactsFromCollection( this.unselectedContacts, changeContacts );
		this.selectedContacts = changeContacts.concat( this.selectedContacts );

	}

  moveAllContacts(actionType:string) {
    let arr = this.selectedContacts.concat(this.unselectedContacts);
    arr= arr.filter((item,index)=>{
      return (arr.indexOf(item) == index)
    })
    if(actionType === 'add') {
      this.selectedContacts = arr;
      this.unselectedContacts = []
    } else {
      this.unselectedContacts = arr;
      this.selectedContacts = []
    }
    this.pendingSelection = Object.create( null );

  }


	// I remove the selected contact or contacts from the selected contacts collection.
	public removeFromSelectedContacts( contact?: Contact ) : void {
		var changeContacts = ( contact ) ? [ contact ] : this.getPendingSelectionFromCollection( this.selectedContacts );
		this.pendingSelection = Object.create( null );
		this.selectedContacts = this.removeContactsFromCollection( this.selectedContacts, changeContacts );
		this.unselectedContacts = changeContacts
			.concat( this.unselectedContacts )
			.sort( this.sortContactOperator );
	}

	//toggle the pending selection for the given contact.
	public togglePendingSelection( contact: Contact ) : void {
		this.pendingSelection[ contact.id ] = ! this.pendingSelection[ contact.id ];
    if(! this.pendingSelection[ contact.id ]) {
      delete this.pendingSelection[ contact.id ]
    }
	}

	// gather the contacts in the given collection that are part of the current pending
	// selection.
	private getPendingSelectionFromCollection( collection: Contact[] ) : Contact[] {
		var selectionFromCollection = collection.filter(
			( contact ) => {
				return( contact.id in this.pendingSelection );
			}
		);
		return( selectionFromCollection );
	}


	// remove the given contacts from the given collection. Returns a new collection.
	private removeContactsFromCollection(
		collection: Contact[],
		contactsToRemove: Contact[]
		) : Contact[] {
		var collectionWithoutContacts = collection.filter(
			( contact ) => {
				return( ! contactsToRemove.includes( contact ) );
			}
		);
		return( collectionWithoutContacts );
	}


	// Sort operator for the contacts collection.
	private sortContactOperator( a: Contact, b: Contact ) : number {
		return( a.name.localeCompare( b.name ) );
	}

  allowDrop(event:DragEvent,list:string){
    console.log('allowDrop',list)
  }

  drop(event:DragEvent,list:string){
    console.log('drop',list)
  }

  dragLeave(list:string){
    console.log('dragLeave')
  }
  drag(event:DragEvent,list:string){
    console.log('drag',list)
  }
  dragEnd(list:string){
    console.log('dragLeave',list)
  }

}
