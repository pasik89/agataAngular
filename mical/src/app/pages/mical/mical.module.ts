import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { SharedModule } from "src/app/shared/shared.module";
import { BannerComponent } from "./components/banner/banner.component";
import { CarouselItemComponent } from "./components/carousel-item/carousel-item.component";
import { CarouselComponent } from "./components/carousel/carousel.component";
import { ChildComponent } from "./components/child/child.component";
import { FormComponent } from "./components/form/form.component";
import { ParentComponent } from "./components/parent/parent.component";
import { TableComponent } from "./components/table/table.component";
import { ContainerComponent } from './container/container.component';
import { MicalRoutingModule } from "./mical-routing.module";

@NgModule({
    declarations: [
        ParentComponent,
        ChildComponent,
        BannerComponent,
        CarouselComponent,
        CarouselItemComponent,
        TableComponent,
        FormComponent,
        ContainerComponent,
    ],
    imports: [
        MicalRoutingModule,
        CommonModule,
        FormsModule,
        HttpClientModule,
        SharedModule
    ]
})
export class MicalModule {}