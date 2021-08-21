import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  signupForm: FormGroup = new FormGroup({
    'name': new FormControl(null, [Validators.required, Validators.minLength(3)]),
    'email': new FormControl(null, [Validators.required, Validators.email]),
    'password': new FormControl(null, [Validators.required, Validators.minLength(8)])
  })
  
  hide:Boolean = true

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() :void {
    this.router.navigate(['/home', 'dashboard']);
  }

}
