import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonService } from '../../../service/common.service';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrl: './add-book.component.scss'
})
export class AddBookComponent {

  bookForm: FormGroup;
  back = faArrowLeft;

  constructor(private fb: FormBuilder, private commonService: CommonService) {
    this.bookForm = this.fb.group({
      isbn: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(50)]],
      name: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(50)]],
      auth: ['', [Validators.required, Validators.maxLength(50)]],
      public: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(50)]],
      details: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(250)]],
      qty: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(5)]],
      price: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(10)]],
      branch: ['', [Validators.required]]
    })
  }

  save() {
    if (this.bookForm.valid) {
      const data = this.bookForm.getRawValue();
      const oldValue = this.commonService.getLocal('book');
      oldValue.push(data)
      this.commonService.saveLocal('book', oldValue);
      this.bookForm.clearValidators();
      this.bookForm.reset();
    }
  }


}
