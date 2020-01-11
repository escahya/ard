
function Biodata(name,age){
	let Bio={
      name: name,
      age:age,
      address:"",
      hobbies:["reading","gaming"],
      is_maried:false,
      list_school:[
        {
          name:"SMKN 1 Katapang",
          year_in:"2015",
          year_out:"2018",
          major:null
        }
      ],
      skills:[
        {
          skill_name:"Java Script",
          level:"beginner"
        }
      ],
      interest_in_coding:true
      
    }
    let sss = JSON.stringify(Bio);
console.log(sss)
}
let name ="Bagoes Cahya Ardhana" ,
    age =19;

Biodata(name,age)