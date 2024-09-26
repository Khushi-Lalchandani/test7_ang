import { Component, Input, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { QuestionService } from '../question.service';
import { dynamicJson } from '../dynamicJson.model';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
})
export class DynamicFormComponent implements OnInit {
  constructor(
    private questionService: QuestionService,
    private fb: FormBuilder
  ) {}
  @Input() questions!: dynamicJson[];
  show = false;
  form: FormGroup = this.fb.group({});
  ngOnInit(): void {
    this.questions = this.questionService.questions;
    this.createForm();
  }
  createForm() {
    this.questions.forEach((question) => {
      if (question.isVisible) {
        const validators = question.isRequired ? [Validators.required] : [];

        if (question.type === 'number') {
          this.form.addControl(
            question.label,
            this.fb.control('', [...validators, Validators.pattern(/^\d+$/)])
          );
        } else if (question.type === 'slider') {
          this.form.addControl(question.label, this.fb.control('', validators));
        } else if (question.type === 'dropdown') {
          this.form.addControl(
            question.label,
            this.fb.control('Female', validators)
          );
        } else if (question.type === 'checkbox') {
          this.form.addControl(
            question.label,
            this.fb.control(false, validators)
          );
        } else if (question.type === 'textarea') {
          this.form.addControl(question.label, this.fb.control('', validators));
        } else {
          this.form.addControl(question.label, this.fb.control('', validators));
        }
      }
    });
  }
  onSubmit() {
    this.form.reset();
  }
}
