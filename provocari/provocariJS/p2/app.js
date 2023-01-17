
// eTags(data)
// function eTags(result){
//     result.forEach(element => {
//         let a = element.tags;
//         // for(i = 0; i <= a.length; i++){
//         //     if(i == a.length){
//         //         document.write('<br>')
//         //     }
//         // }
//         document.write(a,'<br>')
//     });
//     document.write('----------------------------------------','<br>')
// }


cePlm('paid')
function cePlm(key){
    data.forEach(element =>{
        let a = element[key];
        if(Array.isArray(a)){
            let a = element[key].join(", ")
            document.write(a, '<br>')
        }
        else{
            document.write(a,"<br>")
        }
    })
}

