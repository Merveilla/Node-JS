
// // (req ,res) => res.render('home.ejs')
// const homeController = {
//     // nom: "toto",
//     // age : 30,
//     // sayHello: () =>{
//     //     console.log("toto");


//     getHomePage : (req ,res) =>{
//         res.render('home.js')
        
//     },

// //page d'entrainement
//     // getTotPage : (req ,res) =>{
//     //     res.render('toto.js')
        
//     // }
// }



// module.exports = homeController




// // homeController.sayHello();



const  homeController = {
    getHomePage : (req ,res) =>{
        res.render('home.ejs')
    },
 
//entrainement
    // getTotoPage : (req ,res) =>{
    //     res.render('toto.ejs')
    // }
   
 
}
 
module.exports = homeController
 