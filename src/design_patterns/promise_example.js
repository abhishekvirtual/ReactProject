// clean room --> throw srap --> get reward.


var CleanRoom = (message) =>{
 return new Promise((resolve, reject)=>{
    let logic = true;     
    if(logic){
            resolve(message);
        }
        reject('some error');
    });
};

var throwScrap = (message)=>{
  
    return new Promise((resolve, reject)=>{
        let logic = true;  
        if(logic){
            resolve(message);
        }
        reject('screb not throw');
    });
}

var getRevard =(message)=>{ 
   // console.log(message);
   return new Promise((resolve, reject)=>{
        let logic = true; 
        if(logic){
          resolve(message);
        }
        reject('not done');
    })
}

CleanRoom("room clean").then((result)=>{
    console.log(result);
    return throwScrap("scrap throw");
}).then((result)=>{
    console.log(result);
   return getRevard("reward getted")
}).then((result)=>{
    console.log(result);
})