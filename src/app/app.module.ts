import { ErrorHandler , NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { Routes , RouterModule } from "@angular/router";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { ZippyComponent } from "./components/zippy/zippy.component";
import { TodosComponent } from "./components/todos/todos.component";

import { AppErrorHandler } from "./errors/app-error-handler";
import { NotFoundComponent } from "./errors/components/not-found/not-found.component";
import { NoAccessComponent } from "./errors/components/no-access/no-access.component";

const routes: Routes = [
    { path : "" , component: AppComponent },

    { path : "zippy" , component: ZippyComponent },
    { path : "todo" , component: TodosComponent },
    { path : "no-access" , component: NoAccessComponent },
    { path : "**" , component: NotFoundComponent }
];

@NgModule({
    declarations: [
        AppComponent,
        NoAccessComponent,
        NotFoundComponent,
        TodosComponent,
        ZippyComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(routes),
        BrowserAnimationsModule,
        ReactiveFormsModule,
    ],
    exports: [
        RouterModule
    ],
    providers: [
        { provide: ErrorHandler , useClass: AppErrorHandler }
    ],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule { 

}
