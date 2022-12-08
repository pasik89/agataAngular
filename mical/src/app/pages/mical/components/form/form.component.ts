import { Component } from '@angular/core';
import { faUser } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  faUser = faUser

}
