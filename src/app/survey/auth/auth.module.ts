import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { ModelModule } from "../../model/model.module";
import { PartialsModule } from '../partials/partials.module';
import { SignInComponent } from "./signin.component";
import { SignUpComponent } from "./signup.component";
import { UserprofileComponent } from './userprofile/userprofile.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { RouterModule } from "@angular/router";

@NgModule({
    imports: [ModelModule, BrowserModule, FormsModule, PartialsModule, RouterModule],
    declarations: [SignInComponent, SignUpComponent, UserprofileComponent, EditprofileComponent],
    exports : [SignInComponent, SignUpComponent, UserprofileComponent, EditprofileComponent]
})

export class AuthModule {}