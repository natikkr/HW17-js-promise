function delay(){
    return new Promise(function(resolve, reject){

    setTimeout(() => resolve("result"), 2000);
    }) 
   
.then (
        (result) => {
            console.log("Hello! ");
        },
        (error) => {
            console.log("Error "); 
        }
    
    )

}
delay()

function getUserInfo(){
    return new Promise(function(resolve, reject){
        setTimeout(()=>resolve({name:'Vic', age:21, id:1}),1000);
    })
.then(
    function getUserAvatar(userInfo) {
        return new Promise(function(resolve,reject){
            userInfo.avatar = 'https://previews.123rf.com/images/stockgiu/stockgiu1708/stockgiu170802061/83728179-avatar-sketch-of-a-funny-man-s-haed-with-sunglasses-and-hairstyle-design.jpg'
            setTimeout(() => resolve(userInfo), 1000);
          });
        })
.then(
    function getUserAdditionalInfo(userInfo) {
        return new Promise(function(resolve, reject) {
        userInfo.interests = ['sport', 'books'];
        setTimeout(() => resolve(userInfo), 1000);
        });
    })      
}
console.log(getUserInfo())  

new Promise(function(resolve, reject) {
    setTimeout(() => resolve({ name: 'Vic', age: 21, id: 1 } ), 1000);
  })
.then(function(userInfo) {
    return new Promise(function(resolve, reject) {
    setTimeout(() => reject(new Error('wrong data') ), 1000);
    })
.catch(function(error) {
    console.log(error)
})
})
