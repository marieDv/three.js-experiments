varying vec2 vUv;
		varying float noise;
		varying float displacement;
		varying float time;
		uniform sampler2D texture;
		uniform sampler2D texturedetails;
		varying float DEPTH ;
		#define TWO_PI 6.28318530718




		float random( vec3 scale, float seed ){
			return fract( sin( dot( gl_FragCoord.xyz + seed, scale ) ) * 43758.5453 + seed ) ;
		}
		vec3 hsb2rgb( in vec3 c ){
			vec3 rgb = clamp(abs(mod(c.x*6.0+vec3(0.0,4.0,2.0),
															 6.0)-3.0)-1.0,
											 0.0,
											 1.0 );
			rgb = rgb*rgb*(3.0-2.0*rgb);
			return c.z * mix( vec3(1.0), rgb, c.y);
	}



		void main() {
			vec2 st = gl_FragCoord.xy/(((1700.2)));
			vec3 red = vec3(0.5, 0.09, 0.0);
			vec3 green = vec3(0.0, 1.0, 0.0);
			vec3 blue = vec3(0.0, 0.0, 1.0);
			vec2 toCenter = vec2(0.5)-st;

			float angle = atan(toCenter.y,toCenter.x);
			float radius = length(toCenter)*2.0;
		

			float r = .01 * random( vec3( 12.9898, 78.233, 151.7182 ), 0.0 );

		//	float percent = abs(sin(vUv.x * 3.1415 * 120.0)); // Abstufungen
			float percent = smoothstep(0.27, 0.27, 12.0);
			vec3 color = vec3(0.5, 0.5, 0.5);
			vec3 violet = mix(red, blue, 0.5);
			//vec3 violet = mix(red, blue, 0.5);

			color /= vec3((20.0 * 1.0 * 900.0) / (900.0 + 1.0 - DEPTH * (900.0 - 1.0))) / vec3(850.0);
			vec3 gradient = mix(red, blue, percent);
			vec3 rainbowGradient = hsb2rgb(vec3((angle/TWO_PI)+0.5,radius,1.0));

		vec2 tPos = vec2( 0, 29.3 * displacement + r ); //1.3
	//	vec4 text = texture2D( texture, vUv + (displacement / 10.0) * - displacement );

		vec4 text = vec4((rainbowGradient /  noise ) + (displacement / 10.0) * - displacement, 2.0);
		text -= vec4((20.0 * 9.0 * 900.0) / (900.0 + 1.0 - DEPTH * (900.0 - 1.0))) / vec4(850.0);
		text *= texture2D(texturedetails, vUv + displacement);
		gl_FragColor =  text, 1.0 ;
		}