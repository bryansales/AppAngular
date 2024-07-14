import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ui-button',
  templateUrl: './ui-button.component.html',
  styleUrls: ['./ui-button.component.css']
})
export class UiButtonComponent implements OnInit {

@Input() typeBtn: 'solid=primary' | 'outline-primary' | 'outline-secondary' = 'solid=primary'; 
@Input()  text:string = "seu texto";

constructor(){}

  ngOnInit(): void {
  
  }

}
