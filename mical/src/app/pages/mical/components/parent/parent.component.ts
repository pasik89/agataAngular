import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  stringToPass: string = 'Wyślij';
  recivedText: string = 'przed emitem';
  defaultFormValue: string = '';

  ngOnInit() {
    this.getInputValueFromHTTP();
  }

  getText(wartosc: string) {
    this.recivedText = wartosc;
  }

  getInputValueFromHTTP() {
      this.defaultFormValue = 'wartosc domyslna z backendu'
  }
}
