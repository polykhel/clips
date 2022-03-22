import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthModalComponent } from './auth-modal/auth-modal.component';
import { SharedModule } from '../shared/shared.module';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [AuthModalComponent, RegisterComponent, LoginComponent],
    exports: [AuthModalComponent],
    imports: [CommonModule, SharedModule, ReactiveFormsModule, FormsModule],
})
export class UserModule {}
