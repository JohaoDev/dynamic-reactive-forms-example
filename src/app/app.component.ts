import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  rubric: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder) {
    this.rubric = this.fb.group({
      criteria: this.fb.array([]),
      // parameters: new FormArray([]),
      parameter: [''],
    });
    this.addCriteria();
    // this.addParameter();
  }

  get criteria(): FormArray {
    return this.rubric.get('criteria') as FormArray;
  }

  addCriteria() {
    const criteria = this.fb.group({
      criteria: new FormControl(''),
    });

    this.criteria.push(criteria);
  }

  deleteCriteria(index: number) {
    this.criteria.removeAt(index);
  }

  // get parameters(): FormArray {
  //   return this.rubric.get('parameters') as FormArray;
  // }

  // addParameter() {
  //   const parameter = this.fb.group({
  //     parameter: new FormControl(''),
  //   });

  //   this.parameters.push(parameter);
  // }

  // deleteParameter(index: number) {
  //   this.parameters.removeAt(index);
  // }

  showForm() {
    console.log(this.rubric.getRawValue());
  }
}
