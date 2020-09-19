import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shoppingCart2';
  // create formgroup object and add formcontrol to perform validations
form = new FormGroup({
  username: new FormControl('', Validators.required),
  password: new FormControl('', Validators.required)
});
login()
{
console.log(this.form.value);
}

}

