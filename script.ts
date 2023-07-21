interface smartphone{

  //proprieta
    carica:number
    numerochiamate:number
    costoMinuto:number

//metodi
    ricarica(euro:number):void
    numero404():string
    getNumeroChiamate():number
    chiamata(min:number):void
    azzeraChiamate():void

}
//creo una classe che implementa la mia interfaccia
 class SmartphoneX implements smartphone {
          
  constructor(public carica:number,public numerochiamate:number=0,public costoMinuto:number=0.20){

  }
  ricarica(euro:number):void{
      this.carica =this.carica+euro
  }
    numero404():string{
      return `${this.carica} £`
    }
    getNumeroChiamate():number{
  return this.numerochiamate
    }
    chiamata(min:number):void{
      if(this.carica>0){
            this.carica=this.carica-(min*this.costoMinuto)
            this.numerochiamate=this.numerochiamate+1
      }else {
       
         console.log('non hai credito,vai al bar e fai la ricarica')
      }
    }
    azzeraChiamate():void{
      this.numerochiamate=0
    }
  
}

//creo 3 istanze x,y,z e verifico che funziona

let x=new SmartphoneX(5)
x.ricarica(10)
console.log(x.numero404())


let y=new SmartphoneX(0)
y.chiamata(10)
console.log(y.numero404())


let z=new SmartphoneX(20)




