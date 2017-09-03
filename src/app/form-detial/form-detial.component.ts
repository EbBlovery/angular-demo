import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-form-detial',
  templateUrl: './form-detial.component.html',
  styleUrls: ['./form-detial.component.css']
})
export class FormDetialComponent implements OnInit {


  formModel:FormGroup = new FormGroup({
     username: new FormControl('aaa'),
  	 dateRange: new FormGroup({
		form: new FormControl(),
		to: new FormControl()
  	 }),
  	 emails: new FormArray([
	     new FormControl('aaa@a.com'),
	     new FormControl('bbb@b.com')
	 ])
  });


  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
  	console.log(this.formModel.value)
  }
  addEmail(){
  	let emails = this.formModel.get('emails') as FormArray;
  	emails.push(new FormControl())
  }

}

// 响应式表单

// FormControl , FormGroup , FormArray

//FormControl 最基本的组成单位,不能用在formGroup内部，需要和外部绑定，用formControlName绑定

//FormGroup 代表多个FormControl组成的

//FormArray 代表一个可以增长的字段集合 ，用户输入可以随之增加


// form 表单的指令都是来自ReactiveFormsModule，

//指令：

//  类名                     指令

// FormGroup           formGroup         FormGroupName

// FormControl         formControl       formControlName

// FormArray                              formArrayName

//              属性绑定的指令（no name）  可以使用属性的名字来绑定dom元素  响应式表单均已form开头

//[formGroup]="formModel"  变成响应式

// formControlName 和 formArrayName 必须在formGroupName 之内