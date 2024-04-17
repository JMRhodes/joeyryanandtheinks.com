// This is all you.
import Alpine from 'alpinejs'
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import glaze from "glazejs";
import morph from '@alpinejs/morph'
import intersect from '@alpinejs/intersect'

gsap.registerPlugin(ScrollTrigger);
glaze({
    lib: {
        gsap: {
            core: gsap,
        },
    },
});

window.Alpine = Alpine

Alpine.plugin(morph)
Alpine.plugin(intersect)
Alpine.start()
