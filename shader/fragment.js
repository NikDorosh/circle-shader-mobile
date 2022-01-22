const fragmentShader = `
#define PI 3.1415926535
uniform float iTime;
uniform vec2 iResolution;
uniform float iScale;
mat2 scale(vec2 scale){
    return mat2(scale.x,0.0,0.0,scale.y);
}
void mainImage(out vec4 fragColor, in vec2 fragCoord){
    vec2 uv = (gl_FragCoord.xy*2.-iResolution.xy)/min(iResolution.x,iResolution.y);
    //uv = uv*2.-1.;
    float color = 0.0;
    uv = scale(vec2(sin(iScale)))*uv; 
    color +=0.1+0.1/length(uv);
    fragColor = vec4(vec3(color),1.0);
}
void main(){
    mainImage(gl_FragColor, gl_FragCoord.xy);
}`
export default fragmentShader;