import { Component } from "@angular/core";
import { File } from "./data";
import { files as sampleFiles } from "./data";
interface PendingSelection {
	[ key: number ]: boolean;
}

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css']
})
export class ListViewComponent {

	files: File[];
	pendingSelection: PendingSelection;
	selectedFiles: File[];
	unselectedFiles: File[];

  dragVal:number = 1;
  dropped:Boolean = true;

	constructor() {
		this.files = sampleFiles;
		this.unselectedFiles = this.files;
    //console.log('this.unselectedFiles : ',this.unselectedFiles)
		this.selectedFiles = [];
		this.pendingSelection = Object.create( null );

	}

 // add the selected file or files from the selected files collection.
	public addToselectedFiles( file?: File ) : void {
		var changeFiles = ( file )? [ file ]: this.getPendingSelectionFromCollection( this.unselectedFiles );
		this.pendingSelection = Object.create( null );
		this.unselectedFiles = this.removeFilesFromCollection( this.unselectedFiles, changeFiles );
		this.selectedFiles = changeFiles.concat( this.selectedFiles );

	}

  // remove the selected file or files from the selected files collection.
	public removeFromselectedFiles( file?: File ) : void {
		var changeFiles = ( file ) ? [ file ] : this.getPendingSelectionFromCollection( this.selectedFiles );
		this.pendingSelection = Object.create( null );
		this.selectedFiles = this.removeFilesFromCollection( this.selectedFiles, changeFiles );
		this.unselectedFiles = changeFiles
			.concat( this.unselectedFiles );
	}


  // gather the files in the given collection that are part of the current pending selection.
	private getPendingSelectionFromCollection( collection: File[] ) : File[] {
		var selectionFromCollection = collection.filter(
			( file ) => {
				return( file.id in this.pendingSelection );
			}
		);
		return( selectionFromCollection );
	}

  
	// remove the given files from the given collection. Returns a new collection.
	private removeFilesFromCollection(collection: File[],filesToRemove: File[]) : File [] {
		var collectionWithoutFiles = collection.filter(
			( file ) => {
				return( ! filesToRemove.includes( file ) );
			}
		);
		return( collectionWithoutFiles );
	}

  
	//toggle the pending selection for the given file.
	public togglePendingSelection( file: File ) : void {
		this.pendingSelection[ file.id ] = ! this.pendingSelection[ file.id ];
    if(! this.pendingSelection[ file.id ]) {
      delete this.pendingSelection[ file.id ]
    }
	}

  // Move all files from or to
  moveAllFiles(actionType:string) {
    let arr = this.selectedFiles.concat(this.unselectedFiles);
    arr= arr.filter((item,index)=>{
      return (arr.indexOf(item) == index)
    })
    if(actionType === 'add') {
      this.selectedFiles = arr;
      this.unselectedFiles = []
    } else {
      this.unselectedFiles = arr;
      this.selectedFiles = []
    }
    this.pendingSelection = Object.create( null );

  }

  // Drag & Drop action 
  allowDrop(ev:DragEvent,listVal:number) {
    ev.preventDefault();
    //console.log('allowDrop',listVal)
  }

  drag(ev:DragEvent,listVal:number) {
    if(ev.dataTransfer && ev.target)
    //console.log('drag',listVal,' : ',ev.dataTransfer)
    this.dragVal = listVal;
    this.dropped = false;
  }

  drop(ev:DragEvent,listVal:number) {

    if(ev.dataTransfer){
      // console.log('drop',listVal,' : ',ev.dataTransfer)
      // console.log('pending list',this.pendingSelection)
      ev.preventDefault();
      this.checkDragDropAndMove(this.dragVal,listVal)
    }

  }
  checkDragDropAndMove(dragVal:number,dropVal:number){
    this.dropped = true;
    //console.log(dragVal,dropVal)
    if(dragVal===1 && dropVal===2) {
      //console.log('from 1 to 2 dropped')
      this.addToselectedFiles();
    } else if (dragVal===2 && dropVal===1){
      //console.log('from 2 to 1 dropped')
      this.removeFromselectedFiles();
    }
  }
}
