import { trigger , transition , state , animate , style , keyframes , animation , useAnimation} from "@angular/animations";

export const bounceOutLeftAnimation = animation([

    animate("{{ duration }} {{ delay }} {{ easing }}" , keyframes([

        style({
            offset: 0,
            transform: "translateX(0)"
        }),

        style({ 
            offset: .2,
            transform: "translateX(20px)"
        }),

        style({ 
            offset: 1,
            transform: "translateX(-100%)"
        })

    ]))

], 
{
    params: {
        duration: "1000ms",
        delay: "0ms",
        easing: "ease-in"
    }
});

export const bounceInRightAnimation = animation([

    animate("{{ duration }} {{ delay }} {{ easing }}" , keyframes([

        style({ 
            offset: 0,
            transform: "translateX(-100%)"
        }),

        style({
            offset: .8,
            transform: "translateX(20px)"
        }),

        style({
            offset: 1,
            transform: "translateX(0)"
        })

    ]))

], 
{
    params: {
        duration: "1000ms",
        delay: "0ms",
        easing: "ease-out"
    }
});

export const fadeInAnimation = animation([

    style({ opacity: 0 }),
    animate("{{ duration }} {{ delay }} {{ easing }}")

], 
{
    params: {
        duration: "1000ms",
        delay: "0ms",
        easing: "ease-out"
    }
});

export const fadeOutAnimation = animation([

    animate("{{ duration }} {{ delay }} {{ easing }}" , style({ opacity: 0 }))

], 
{
    params: {
        duration: "1000ms",
        delay: "0ms",
        easing: "ease-in"
    }
});

export const flashRedAnimation = animation([

    style({ backgroundColor: "red" }),
    animate("{{ duration }} {{ delay }} {{ easing }}")

], 
{
    params: {
        duration: "1000ms",
        delay: "0ms",
        easing: "ease"
    }
});

export const slideInTopAnimation = animation([

    animate("{{ duration }} {{ delay }} {{ easing }}" , keyframes([

        style({
            offset: 0,
            transform: "translateY(-100%)"
        }),

        style({ 
            offset: 1,
            transform: "translateY(0)"
        })

    ]))

], 
{
    params: {
        duration: "1000ms",
        delay: "0ms",
        easing: "ease-out"
    }
});

export const slideOutTopAnimation = animation([

    animate("{{ duration }} {{ delay }} {{ easing }}" , keyframes([

        style({
            offset: 0,
            transform: "translateX(0)"
        }),

        style({ 
            offset: 1,
            transform: "translateX(-100%)"
        })

    ]))

], 
{
    params: {
        duration: "1000ms",
        delay: "0ms",
        easing: "ease-in"
    }
});

export const fade = trigger("fade" , [

    transition("void => *" , [

        useAnimation(fadeInAnimation)

    ]),

    transition("* => void" , [

        useAnimation(fadeOutAnimation)

    ]),

]);

export const slide = trigger("slide" , [

    state("void" , style({ transform: "translateX(-100%)" })),

    transition("* => void" , [

        useAnimation(bounceOutLeftAnimation)
        
    ]),

    transition("void => *" , [

        useAnimation(bounceInRightAnimation)
        
    ])

]);


