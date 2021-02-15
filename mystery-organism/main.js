// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}

const pAequorFactory = (num,arr) =>{
  return {
    specimenNum: num,
    dna: arr,
    mutate(){
      let changeindex = Math.floor(Math.random() * 15);
      let val = returnRandBase();
      while(this.dna[changeindex]==val){
        val = returnRandBase();
      }
      this.dna[changeindex] = val;
      return this.dna;
    },
    compareDNA(obj){
      let count =0;
      for(let i=0;i<15;i++){
        if(obj.dna[i]==this.dna[i]){
          count++;
        }
      }
      let perc = count/15 *100;
      console.log(`specimen #${this.specimenNum} and #${obj.specimenNum} have ${perc.toFixed(2)}% DNA in common`);
    },
    willLikelySurvive(){
      let count =0;
      for(let i=0;i<15;i++){
        if(this.dna[i]=="C" || this.dna[i]=="G"){
          count++;
        }
      }
      let perc = count/15 *100;
      return perc>=60;
    }
  }
}
let d1=pAequorFactory(1,mockUpStrand());
let d2=pAequorFactory(2,mockUpStrand());
console.log(d1.mutate());
d1.compareDNA(d2);
console.log(d1.willLikelySurvive());

let specs = [];
let specn=1;
while(specs.length<30){
  let dd = pAequorFactory(specn,mockUpStrand());
  if(dd.willLikelySurvive()){
    specs.push(dd);
  }
}
console.log(specs.length);