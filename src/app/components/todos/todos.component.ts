import { Component } from "@angular/core";
import { AnimationEvent } from "@angular/animations";
import { title , todos } from "./todos.component.animation";

@Component({
    selector: "todos",
    templateUrl: "./todos.component.html",
    styleUrls: ["./todos.component.css"],
    animations: [ title , todos ]
})

export class TodosComponent {

    items: string[] = [
        "Wash the dishes", 
        "Call the accountant", 
        "Apply for a car insurance"];

    addItem(input: HTMLInputElement): void {

        this.items.splice(0 , 0 , input.value);
        input.value = ""; 

    }

    removeItem(item: string): void {

        const index = this.items.indexOf(item);
        this.items.splice(index , 1);

    }

    animationStarted($event: AnimationEvent): void { 

        console.log($event); 

    }

    animationDone($event: AnimationEvent): void { 

        console.log($event); 

    }

}
