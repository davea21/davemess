import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Order } from "../../models/order.model";
@Component({
    templateUrl: "checkoutConfirmation.component.html"
})
export class CheckoutConfirmationComponent {
    constructor(private router: Router, public order: Order) {
        if (!order.submitted) {
            router.navigateByUrl("/checkout/step3");
        }
    }

}