import { trigger , transition , useAnimation , query, animateChild, group, stagger} from "@angular/animations";
import { bounceInRightAnimation , bounceOutLeftAnimation , fadeInAnimation , fadeOutAnimation , flashRedAnimation, slideInTopAnimation } from "src/app/animations";

export const title = trigger ("todosAnimation" , [

    transition("void => *" , [

        group([

            query("h1" , [

                useAnimation(slideInTopAnimation , { params: { duration: "500ms" }}),

            ]),

            query("@todoAnimation" , [

                stagger( "400ms" , animateChild())

            ])

        ])
        
    ]),

]);

export const todos = trigger ("todoAnimation" , [
            
    transition("void => *" , [

        group([
            useAnimation(fadeInAnimation , { params: { duration: "500ms" }}),
            useAnimation(bounceInRightAnimation , { params: { duration: "1000ms" }})
        ])
        
    ]),

    transition("* => void" , [

        group([
            useAnimation(flashRedAnimation , { params: { duration: "500ms" }}),
            useAnimation(fadeOutAnimation , { params: { duration: "500ms" }}),
            useAnimation(bounceOutLeftAnimation , { params: { duration: "1000ms" }})
        ])
        
    ])

]);