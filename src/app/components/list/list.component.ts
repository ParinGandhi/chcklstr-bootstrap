import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public showList = true;
  public itemToEdit: string;
  public originalItemToEdit: string;
  public indexOfItemToEdit: number;
  public editedItem: string;
  public list: string[] = [
    'Milk',
    'Cereal'
  ];
  public $: any;

  constructor() { }

  ngOnInit() {
  }

  addItem(event) {
    console.log(event);
    this.list.push(event.target.value);
    event.target.value = null;
  }

  editItem(index) {
    this.itemToEdit = this.list[index];
    this.editedItem = this.itemToEdit;
    this.originalItemToEdit = JSON.parse(JSON.stringify(this.itemToEdit));
    this.indexOfItemToEdit = index;
    // this.editedItem = null;
    this.$('#exampleModal').modal('show');
  }

  deleteItem(index) {
    this.list.splice(index, 1);
  }

  updatedItem() {
    this.list[this.indexOfItemToEdit] = this.editedItem;
    this.$('#exampleModal').modal('hide');
  }

  completeItem(index) {
    const completedItem = document.getElementById('item' + index);
    if (completedItem.classList.contains('completedItem')) {
      completedItem.classList.remove('completedItem');
    } else {
      completedItem.classList.add('completedItem');
    }
  }

}
