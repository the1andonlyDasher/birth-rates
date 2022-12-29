import * as THREE from "three";
import { extend, Color } from "@react-three/fiber";
import f from "../gl/gradient_f";
import v from "../gl/v";








export default class Button extends THREE.ShaderMaterial {
  constructor() {
    super({
      uniforms: {
        iProg: { type: "f", value: 0 },
        iTime: { type: "f", value: 0.0 },
        uColorA: { value: undefined },
        uColorB: { value: undefined },
      },
      vertexShader: v,
      fragmentShader: f,
    });
  }
  get uColorA(){
    return  this.uniforms.uColorA.value
  }

  set uColorA(v){
    this.uniforms.uColorA.value = v
  }
  get uColorB(){
    return  this.uniforms.uColorB.value
  }

  set uColorB(v){
    this.uniforms.uColorB.value = v
  }
}

// register element in r3f (<buton />)
extend({ Button });
