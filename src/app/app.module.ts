import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { WrapperComponent } from "./components/wrapper/wrapper.component";
import { InputfieldComponent } from "./components/inputfield/inputfield.component";
import { ButtonComponent } from "./components/button/button.component";
import { DisplayinfoComponent } from "./components/displayinfo/displayinfo.component";


@NgModule({
    declarations: [
        AppComponent,
        WrapperComponent,
        InputfieldComponent,
        ButtonComponent,
        DisplayinfoComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule {};