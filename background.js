// custom javascript using the bvambient framework to set up the specific background used on my webpage
document.addEventListener("DOMContentLoaded", function(){
    var webpageBackground = new BVAmbient({
        selector: '#ambient',
        fps: 60,
        max_transition_speed: 12000,
        min_transition_speed: 8000,
        particle_number: 60,
        particle_maxwidth: 60,
        particle_minwidth: 10,
        particle_radius: 50,
        particle_opacity: true,
        particle_colision_change: true,
        particle_background: '#663399',
        refresh_onfocus: true,
        particle_image:{
            image: false,
            src: '',
        },
        responsive:[
            {
                breakpoint: 768,
                settings: {
                    particle_number: '45'
                }
            },
            {
                breakpoint: 480,
                settings: {
                    particle_number: '30',
                }
            }
        ]
    });
});