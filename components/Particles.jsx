import Particles from 'react-particles-js';

const Particle = () => {
    return (
        <>
     <Particles
	 className="absolute z-10 h-full w-full"
    params={{
	    "particles": {
	        "number": {
	            "value": 60,
	            "density": {
	                "enable": true,
	                "value_area": 1500
	            }
	        },
	        "line_linked": {
	            "enable": true,
	            "opacity": 0.3
	        },
	        "move": {
	            "direction": "right",
	            "speed": 1
	        },
	        "size": {
	            "value": 1
	        },
	        "opacity": {
	            "anim": {
	                "enable": true,
	                "speed": 1,
	                "opacity_min": 1
	            }
	        }
	    },
	    "interactivity": {
	        "events": {
	            "onclick": {
	                "enable": true,
	                "mode": "push"
	            }
	        },
	        "modes": {
	            "push": {
	                "particles_nb": 1
	            }
	        }
	    },
	    "retina_detect": true
	}} />
        
        </>
    );
}
 
export default Particle;