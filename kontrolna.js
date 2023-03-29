

//1
//Napisi funkciju koja ispisuje neparne brojeve od 0 do 100
function neparni(){
    for (let i =0; i<100;i++){
        if(i%2!=0){
            console.log(i);
        }
    }
};
neparni();


//2 (3 BODA)
//Napisi funkciju koja koristi switch selekciju za pretvaranje numerickog unosa u godisnje u doba. Za neispravan unos ispisi prikladnu poruku.
//INPUT: 1; OUTPUT: "Jesen";
//INPUT: 3; OUTPUT: "Ljeto"; 

  switch(godisnje_doba)
  {
   case 1:
   
    console.log("jesen");
    break; 
  

 
  case 2:
  
    console.log("zima");
    break; 
  

  case 3:
  
    console.log("proljeće");
    break; 
  

  case 4:
  
    console.log("ljeto");
    break; 
  
};


​
//3 (4 BODA)
//Napisi funkciju koja okrece uneseni string i broji charactere uzimajuci u obzir prazna mjesta (eng. whitespaces)
//INPUT: "Pisanje zadataka nije jednostavan posao"
//OUTPUT: ("oasop navatsondej ejin akatadaz ejnasiP", 39)
function obrnuti(polje){
    let temp=[];

    for(let i of polje){
        let temp= polje.reverse();
    }
      return temp;
}
 obrnuti(polje["a","b"]);
​
//4 (4 BODA)
//Napisi funkciju koja odreduje najdulju vrijednostu u danom objektu
const peopleYouShouldKnow = {
    Donald: "Knuth",
    Bjarne: "Stroustrup",
    Ada: "Lovelace",
    Kent: "Beck",
    Martin: "Fowler",
    Erich: "Gamma"
}
    function najdulji(peopleYouShouldKnow){
        const temp =0;
        for (let i of peopleYouShouldKnow ){
            if( i.peopleYouShouldKnow >temp){
                temp = i.peopleYouShouldKnow;
            }
        }
        return temp;

    };
  console.log(Najdulji["a","sjdj","as"]);

//INPUT: somePeople
//OUTPUT: "Stroustrup"
​
//5 (4 BODA)
//Napisi funkciju u obliku function expressiona koja vraca neproste brojeve
//INPUT: [3, 4, 5, 8, 11]
//OUTPUT: [4, 5, 8]
    
  const polje=[];
function prosti(polje){

    for (let i of polje){
        if(polje[i]%2!= 0  && polje[i] !=3)
        return polje[i];
    }
     

    };

  console.log  (function prosti(polje [1,2,3,4,11]));



​
//ZAMJENA ZA 5 (4 BODA)
//Napisi funkciju u obliku arrow functiona koja pretvara mala slova danih inputa u velika slova
//INPUT: ["aa", "b1", "", null, "AAA"]
//OUTPUT: ["AA","B1", "", null, "AAA"]
​
//6 (4 BODA)
//Napisi funkciju koja vraca sve drzave koji su imali manju temperaturu od one iz ulaznog parametra
const someEvents = [
    {
        stateName: "SAD",
        measuredTemperature: 56.7,
    },
    {
        stateName: "Tunis",
        measuredTemperature: 55,
    },
    {
        stateName: "Irak",
        measuredTemperature: 53.9,
    },
    {
        stateName: "Argentina",
        measuredTemperature: 48.9,
    },
    {
        stateName: "Grcka",
        measuredTemperature: 48.0,
    },
];
  function vraca (someEvents){
    let nova[];
    let temp;

    nova= filter.someEvents(x=>x>temp);
    return nova;
  };
  vraca ();

//INPUT: (someStates, 48.5)
//OUTPUT: [{stateName: "Grcka", measuredTemperature: 48.0}]
 