import { expandCollapse } from "./zippy.component.animations";
import { Component, Input } from "@angular/core";

@Component({
    selector: "zippy",
    templateUrl: "./zippy.component.html",
    styleUrls: ["./zippy.component.css"],
    animations: [ expandCollapse ]
})

export class ZippyComponent {

    @Input("title") title = "Shipping Address";
    isExpanded = false;

    toggle(): void {

        this.isExpanded = !this.isExpanded;

    }

}