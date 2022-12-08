import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { HeaderComponent } from "./components/header/header.component";
import { NaviItemComponent } from "./components/navigation/navi-item/navi-item.component";
import { NavigationComponent } from "./components/navigation/navigation.component";
import { HighlightDirective } from "./directives/highlight.directive";
import { PhoneNumberPipe } from "./pipes/phone-number.pipe";

@NgModule({
    declarations: [
        PhoneNumberPipe,
        HighlightDirective, 
        NavigationComponent,
        NaviItemComponent,
        HeaderComponent,
    ],
    imports: [
        CommonModule,
        RouterModule,
        FontAwesomeModule,
        HttpClientModule,
    ],
    exports: [
        PhoneNumberPipe,
        HighlightDirective, 
        NavigationComponent,
        NaviItemComponent,
        HeaderComponent,
        HttpClientModule,
        FontAwesomeModule,
    ]
})
export class SharedModule {}