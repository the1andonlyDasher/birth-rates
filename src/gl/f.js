export default `
varying vec2 vUv; 
uniform sampler2D iChannel0;
uniform float iTime;
uniform float iProg;



float density = 0.9;
float opacityScanline = .1;
float opacityNoise = 0.2;
float flickering = 0.1;

float random (vec2 st) {
    return fract(sin(dot(st.xy,
                         vec2(12.9898,78.233)))*
        43758.5453123);
}

float blend(const in float x, const in float y) {
  return (x < 0.5) ? (2.0 * x * y) : (1.0 - 2.0 * (1.0 - x) * (1.0 - y));
}

vec3 blend(const in vec3 x, const in vec3 y, const in float opacity) {
  vec3 z = vec3(blend(x.r, y.r), blend(x.g, y.g), blend(x.b, y.b));
  return z * opacity + x * (1.0 - opacity);
}

void main( )
{
    vec2 uv = -1.0 + 1.0 *vUv;
    vec3 col = texture(	iChannel0,uv).rgb;
    
    float count = uv.y * density * iProg;
    vec2 sl = vec2(sin(uv.y * count), cos(uv.y * count) + (iProg * 0.05));
    vec3 scanlines = vec3(sl.x, sl.y, sl.x) ;

    col += col * (scanlines) * opacityScanline * (0.015 * iProg) ;
    col += col * vec3(random(uv*iTime)) * opacityNoise * (0.05 * iProg) ;
    col += col * sin(110.0*iTime) * flickering * (0.015 * iProg) ;


    gl_FragColor = vec4(col,1);
}`;
