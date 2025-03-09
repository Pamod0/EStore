import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { MaterialModule } from '../../../material.module';
import { MatButtonModule } from '@angular/material/button';
import { AuthenticationService } from '../authentication.service';

@Component({
    selector: 'app-side-login',
    standalone: true,
    imports: [RouterModule, MaterialModule, FormsModule, ReactiveFormsModule, MatButtonModule],
    templateUrl: './side-login.component.html'
})
export class AppSideLoginComponent {
    constructor(private router: Router, private authService: AuthenticationService) {}

    form = new FormGroup({
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required])
    });

    get f() {
        return this.form.controls;
    }

    login() {
        if (this.form.invalid) {
            return;
        }

        const userData = {
            email: this.form.value.email || '',
            password: this.form.value.password || ''
        };

        this.authService.login(userData).subscribe({
            next: (response) => {
                console.log('User registered:', response);
                this.router.navigate(['/']);
            },
            error: (error) => {
                console.error('Registration failed:', error);
            }
        });
    }
}
