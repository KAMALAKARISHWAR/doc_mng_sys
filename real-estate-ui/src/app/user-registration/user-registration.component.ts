// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { UserService } from '../services/user.service';

// @Component({
//   selector: 'app-user-registration',
//   templateUrl: './user-registration.component.html',
//   styleUrls: ['./user-registration.component.less']
// })
// export class UserRegistrationComponent implements OnInit {
//   registrationForm!: FormGroup;
//   message: string = '';
//   users: any[] = [];

//   constructor(private fb: FormBuilder, private userService: UserService) {}

//   ngOnInit(): void {
//     this.registrationForm = this.fb.group({
//       name: ['', Validators.required],
//       email: ['', [Validators.required, Validators.email]],
//       mobile: ['', [Validators.required]]
//     });

//     this.getAllUsers();
//   }

//   onSubmit(): void {
//     if (this.registrationForm.invalid) return;

//     this.userService.registerUser(this.registrationForm.value).subscribe({
//       next: (res) => {
//         this.message = 'User registered successfully!';
//         this.registrationForm.reset();
//         this.getAllUsers(); // Refresh list
//       },
//       error: (err) => {
//         this.message = 'Error occurred during registration.';
//         console.error(err);
//       }
//     });
//   }

//   getAllUsers(): void {
//     this.userService.getUsers().subscribe({
//       next: (data) => this.users = data,
//       error: (err) => console.error('Error fetching users:', err)
//     });
//   }
// }

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../services/user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-registration',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.less']
})
export class UserRegistrationComponent implements OnInit {
  registrationForm!: FormGroup;
  message: string = '';
  users: any[] = [];

  constructor(private fb: FormBuilder, private userService: UserService) {}

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', Validators.required]
    });

    this.getAllUsers();
  }

  onSubmit(): void {
    if (this.registrationForm.invalid) return;

    this.userService.registerUser(this.registrationForm.value).subscribe({
      next: () => {
        this.message = 'User registered successfully!';
        this.registrationForm.reset();
        this.getAllUsers();
      },
      error: (err) => {
        this.message = 'Error occurred during registration.';
        console.error(err);
      }
    });
  }

  getAllUsers(): void {
    this.userService.getUsers().subscribe({
      next: (data) => this.users = data,
      error: (err) => console.error('Error fetching users:', err)
    });
  }
}
