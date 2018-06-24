import { Component } from '@angular/core';
import { Repository } from "../models/repository";
@Component({
    templateUrl: "categoryFilter.component.html",
    selector: "store-categoryfilter"
})
export class CategoryFilterComponent {
    constructor(private repo: Repository) { }
}