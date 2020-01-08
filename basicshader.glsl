#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
// uniform float iTime;

void main(){


  vec2 st = gl_FragCoord.xy / 900.0;
  float value = st.x;
  // value += step(0.9, value);
  // value += smoothstep(0.2, 0.27, value);
  //value = pow(value, 0.24);
//value = mod(value, 0.14);
// value += fract(value * 2.0);


// value = sin(value * 0.24 * 8.0);
// value = abs(sin(value * 0.9 * 190.0));
  // vec3 color = vec3(gradient, 2.0, 1.5);


vec3 red = vec3(1.0, 0.0, 0.0);
vec3 green = vec3(0.0, 1.0, 0.0);
vec3 blue = vec3(0.0, 0.0, 1.0);
float precent = abs(sin(st.x * 3.1415 * 200.0));
float precentY = abs(sin(st.y * 3.1415 * step(abs(sin(iTime)), 10.0)));

vec3 gradient = mix(green, red, precentY);
vec3 gradientTwo = mix(green, red, precent);

vec3 finalOutput = mix(gradient, gradientTwo,abs(cos(iTime)));

  vec3 color = finalOutput;
  gl_FragColor = vec4(color, 1.0);
}