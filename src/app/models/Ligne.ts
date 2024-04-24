import { Box } from "./Box"

export  class Ligne {
    qte:number
    box:Box

    constructor(qte:number,box:Box){
        this.qte=qte
        this.box=box
    }
}