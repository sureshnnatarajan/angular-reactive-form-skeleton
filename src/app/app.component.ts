import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

  trackPortfolioForm: FormGroup;
  formValue: any;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.trackPortfolioForm = this.fb.group({
      currentDate: [''],
      investedAmount: [''],
      closingValue : [''],
      closingPercentage: ['']
    });
  }
 
  onSubmit() {
    console.log("--->" + this.trackPortfolioForm.controls);
    for (let key in this.trackPortfolioForm.controls) {
      console.log(key);
    }
    this.formValue = JSON.stringify(this.trackPortfolioForm.value);
    console.log(this.formValue);
  }
}
