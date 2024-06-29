/*#(48)loop
for(let i=0;i<10;i++){
    console.log(i)
}
*/
/*#49
let nasr=["osama","nasr","gamal","ali","yaser"];//كون تنح لخر تجي في بلاصتو undefined 
//console.log(0);
//console.log(1);
//console.log(2);
//console.log(3);
//console.log(4);
for(let i=0;i<nasr.length;i++){// ndiro ismha m3a length bah m3ach tgi undifend 
    console.log(nasr[i]);//afficher element
} */
//afficher le string fkt
/*let main=[1,2,"nasr","adem","lamin"];
let margin=[];
for(i=0;i<main.length;i++){
    if(typeof main[i] === "string"){
        margin.push(main[i])
    }
}
console.log(margin)//afficher*/
/*if(typeof main[0] === "string"){
    margin.push(main[0])
}
if(typeof main[1] === "string"){
    margin.push(main[1])
}
if(typeof main[2] === "string"){
    margin.push(main[2])
}
if(typeof main[3] === "string"){
    margin.push(main[3])
}
console.log(margin)//afficher
*/
/*#50 loop nested 
let nasr =["mdc","adel","brhim","chiko"]// كل وحدة فيهم تجي وسطها الالوان والاعوام
let color =["red","green","blue"]
let models =[2023,2024]
for(let i=0;i<nasr.length;i++){
    console.log("#".repeat(15));
    console.log(`# ${nasr[i]}`);
    console.log("#".repeat(15));
    console.log("colors:")
    for(let j=0;j<color.length;j++){
        console.log(`- ${color[j]}`)
    }
    console.log("models: ")
    for(c=0;c<models.length;c++){
        console.log(`* ${models[c]}`)
    }
}*/
//#51 loop Controle break - contunie - lapal
/*
let nasr =["mdc","adel","brhim","chiko"];
let color =["red","green","blue"];
for(let i=0;i<nasr.length;i++){
    if(nasr[i] === "brhim"){
       break;
    }
    console.log(nasr[i])// كون نديروه قبل لشرط يطبع حتى برهيم 
    
}
*/
//continue
   /* let nasr =["mdc","adel",12,44,"brhim",22,108,"chiko"];
      for(i=0;i<nasr.length;i++){
   if(typeof nasr[i]==="number"){
    continue;// تنح الارقام
   }
   console.log(nasr[i]);// قبل الشرط يطبعهملك كل 
  
}*/

//label
/*
let nasr =["mdc","adel","brhim","chiko"];
let color =["red","green","blue"];
 mainloop:for(i=0;i<nasr.length;i++){
   console.log(nasr[i]);
 Nestedlloop:  for(j=0;j<color.length;j++){
     console.log(`-${color[j]}`);
    if(color[j]==="green"){
    break;
    //  break Nestedloop; كي اديرها ادير المنتاجات والالوان بصح الون قرين تكبتو وتحبس عندو
    // break mainloop;المنتج الاول برك ومعاه الالوان ويكتب الفرين ويحبس
}
}
 }
 */

/* //#52 loop For Advenced Example
 let Ex=["adel","salah","adnan","tabet","hasan","karabika"]
 i=0
 for(;;){
     // i++;كي اديرها هنا تبدا من صلاح والاخير undifend
     console.log(Ex[i]);
     // i++; وهادي تعرضهم عادي
    //  i=i+2 ==> adel adnan hasan
    i++;  //=>i=i+1 
     if(i===Ex.length){
        break;
     }
     // if(i===Ex.length)break

 } */
 /*//#53 product practice
  let product=["sabon","hôzzoh","mayloud","hamed","salim","fateh"];
  let color=["red","blue","green"];
  let count=5
  document.write(`<h1>show ${count} prouct</h1>`);
  for(let i=0;i<count;i++){
    document.write(`<div>`);
    document.write(`<h3>[${i+1}]${product[i]}</h3>`);
    for(let j=0;j<color.length;j++){
        document.write(`<p>-${color[j]}</p>`);
        //document.write(`<p>-${color.join("|")}</p>`);// الا انحبو نحطوهم حدا بعضاهم 
    }
    document.write(`</div>`);
  }
  */
  
  /* //#54 while
 let product=["sabon","hôzzoh","mayloud","hamed","salim","fateh"];
 let i=0;
 while(i<product.length){// طول ماهذا الشرط متحقق يبفي الوب يمشي
    console.log(product[i])
    i++;
   // if(i===3) break;
    
} 
*/
  /* //#55 Do while 
let product=["sabon","hôzzoh","mayloud","hamed","salim","fateh"];
i=0;
do{// الحجة الولى ديرها بغض النظر على الشرط
    console.log(i);
    i++;
}while(i<5);
// لازالت متواصلة 
*/
/*    #56 ..............
.................
..............*/
/*   #57
function Name(userName){
    console.log(hellow ${userName})
}
Name("Nasr");
Name("Adnan");
Name("salah");
*/

/*   #58
function Name(userName,age){
    if(20<age){
        console.log(hellow ${userName} is age in ${age})
    }else{
        console.log(App is not suitable for you )
     }
}
Name("Nasr",24);
Name("Adnan",14);
Name("salah",21);
function genereteyears(start,end,exclude){
    for(let i = start ; i <= end ; i++){
        if(i === exclude){
            continue;//باه نحذف الرقم 2008
        }
        console.log(i);
    }
}
genereteyears(2003,2023,2008);
*/
/*  #59
function name(nom){
    console.log(hellow ${nom})
 }
 name("nasr")

 function name(nom){
    return hellow ${nom}
 }
 console.log(name("nasr"))

 function name(nom){
    return hellow ${nom}
 }
 let result = name("djaber")
 console.log(result)

 function calc(num1,num2){
    return num1+num2;
 }
 let result = calc(10,10)
 console.log(result)*/
 
 /* automatic simicolon insersion 
 function calc(num1,num2){
    return num1+num2;
 }
 let result = calc(10,10)
 console.log(result + 100) */
 /*interuptting 
 function generete(start,end){
    for(i=start;i<=end; i++){
        console.log(i)
        if(i===15)
        return`interuppting`
    }
 }
 generete(10,20)*/
 /* default value #60
 function sayhello(name="unknown",age="unknown"){
   // if(age===undefined){
   //     age="unknown";}
   // age=age || "unknown"
    return hellow ${name} your age is ${age}
 }
 console.log(sayhello("ana",12))  */
 /* Function Rest #61
 function clac(...numbers){
   // console.log(Array.isArray(numbers))
   let Result = 0;
   for(i=0;i<numbers.length;i++){
       Result+= numbers[i];// Result = Result + numbers[i]
    }
    return Final result is ${Result}
 }
 console.log(clac(12,23,33,28))
 */  
/* function ultiamte practice #62
function showprint(us = "un", age= "un",rt = 0, show = "yes",...sk){
document.write(<div>);
document.write(<h2>hello,${us}</h2>);
document.write(<p>my age is ,${age}</p>);
document.write(<p>hour rate is,${rt}</p>);
if(show === "yes"){
    if(sk.length > 0){
        document.write(<p> skills:${sk.join(" | ")}</p>)
    }else{
        document.write(<p> skills: no skills)
    }
}else{
    document.write(<h3>skills is hidden </h3>);
   // if(sk.length > 0){كاينة سكيلز بصح هو مش حاب يظهرها 
    //    document.write(<h3> skills : no skills</h3>) }
   
}
document.write(</div>);
}
showprint("adnan",33,12,"no",45,33);
*/  
/* #064 - Anonymous Function And Practice
let calculator = function (num1,num2){
    return num1+num2;
}
console.log(calculator(10,23))


//function shyhello(){
   // console.log("hellow nasr")}
//document.getElementById("show").onclick = shyhello(); 
//setTimeout(shyhello(),3000);

document.getElementById("show").onclick = function() { //كي تضغط علة شاوو تجي في كونسول شاوو 
   console.log("show");
}
setTimeout(function(){  // بعد ثانيتين تافيشي في كونسول قود
    console.log("Good")
},2000)
*/
/*  #065 - Return Nested Function
// Exemple 01
function saymessage(fname,lname){
  let message = hello;
  // Nested function
  function concatmsg(){
    massage = ${message} ${fname} ${lname}
  }
  concatmsg();
  return massage;
}
console.log(saymessage("ali","ahmed"))

// Exemple 02
function saymessage(fname,lname){
    let message = hello;
    // Nested function
    function concatmsg(){
      return ${message} ${fname} ${lname}
    }
    return concatmsg();
    
  }
  console.log(saymessage("ali","ahmed"))

  // Exemple 03
function saymessage(fname,lname){
    let message = hello;
    // Nested function
    function concatmsg(){
        function getfullname(){
            return ${fname} ${lname}
        }
      return ${message} ${getfullname()}
    }
    return concatmsg();
    
  }
  console.log(saymessage("ali","ahmed"))
  */
    
 /*    #066 - Arrow Function Syntax
  // let print =()=> 10; ==== let print =_=> 10;
  // console.log(print())

   //  function print(num) {
     //   return num ;}
    // console.log(print(155))

    //function somme(num,nam) {
      //    return num + nam;}
       //console.log(somme(155,123))

       let somme =(num,nam)=>num+nam;
       console.log(somme(12,12))

    let print = (num)=>num;  // قادر نيم مديرلهاش قوسين لانها براميتار وحدة 
    console.log(print(1213))
    */
     
    /*    #067 - Scope - Global And Local
  //  let a=1;
    //var b=3;

    //function show(){
       // console.log(`Function - from glopale ${a}`)
        //console.log(`Function - from glopale ${b}`)
    //}
    //console.log(`from glopale ${a}`)
    //console.log(`from glopale ${b}`)
    //show();

     let a=1;
    var b=3;

    function show(){
        let a=23;
        var b=30;
        console.log(`Function - from local ${a}`)  // اهز من داحل الفونكسيو 

        console.log(`Function - from local ${b}`)
    } 
    console.log(` from glopale ${a}`)  // هذا ميقدرش يجيب من لوكال من وسط الفونكسيو ولا تجي انديفايند
    console.log(` from glopale ${b}`)
    show();
    */   
        /*  #068 - Scope - Bloc
     
    var x = 4;

    if(10===10){ // كي تعود في لفار اهز للداخل 
        var x = 45;
    }
    console.log(x)

    var x = 4;

    if(10===10){ 
        let x = 45;
    }
    console.log(x) // اما كي تعود ليت اهز للبر 

    */
  /*  - Scope - Lexical (Static) #069
    function parent(){
       let a=12
        function child(){
          //  console.log(b)// يحدث خطا 
            console.log(a)

            function grand(){
                let b=123;
                console.log(a)
                console.log(b)
            }
            grand();
        }
        child();
    }
    parent();
    /*
    #071 - Higher Order Functions - Map
    */

    /*   #072 - Higher Order Functions - Map
    let swappingCasses = "elZERo"
    let invertedNembers = [1,-10,-20,15,-100,-30]
    let ignorbeleans =  "Elz123er4o"

        //Arrow function version 
        let w = swappingCasses.split("").map(a => a === a.toUpperCase() ? a.toLowerCase() :a.toUpperCase()).join("")
        console.log(w)
     
    let sw = swappingCasses.split("").map(function(ele){// split باه نحولها لاغاي
        //condition = ? true : false
        return ele === ele.toUpperCase() ? ele.toLowerCase() :ele.toUpperCase()
    })
    .join("")// join باه تنح اغاي
    console.log(sw)

    let inv = invertedNembers.map(function(ele){  // map باه تعوداغاي
        return -ele
    } )
    console.log(inv)

    let ign =  ignorbeleans.split("").map(function(ele){
        return isNaN(parseInt(ele)) ? ele : "" ;//isNAN تعطينا لي مهوش رقم  parentInt تحلل العنصر تشوفو رقم ولا حرف 
    }).join("")// باه انح اغاي
    console.log(ign)
    */

    /*   #073 - Higher Order Functions - Filter

    map = ارحع كلش لي فاتت ترو ولا فولس ارجعهم في زوج 
    filter = ارجع غير لي فاتت من ترو 
   let string =["amin","naism","aser","awin"]

   let st =string.filter(function(el){
    return el.startsWith("a") ? true : false  // قادر اديرها ترو وفلسو قادر ماديرهاش
   })
   console.log(st)

   let numbers =[88,20,34,2,60,66,79,101]
   let nu = numbers.filter(function (el){
    return el % 2 === 0 ? true : false // قادر اديرها ترو وفلسو قادر ماديرهاش
   })
   console.log(nu)
   */
    /* #074 - Higher Order Functions - Filter
   let sentence = "a love foood code to plating Much"
    let small = sentence.split(" ").filter(function (el){
        return el.length <= 4;
    }).join(" ")
    console.log(small)

    // ignore numbre 
    let ignorbeleans =  "Elz123er4o"

    let ign =  ignorbeleans.split("").filter(function(ele){
        return isNaN(parseInt(ele));//   اما في الماب الفريفيهم كل بالحرف ودير ترو للحرف وفولس للرقم ..كي تنح ترو والفولس في فلتر تبقى عاذي انقي انح لي الرقام وخلاص 
    }).join("")// باه انح اغاي
    console.log(ign)

    let mix = "A12BS2Z4"
    let m = mix.split("").filter(function(ele){
        return !isNaN(parseInt(ele))
    })
    .map(function (ele){
        return ele*ele
    })
    .join("")
console.log(m)
*/

 /*   #075- Higher Order Functions - Reduce

let nums = [1,2,3,4]
   // reduce(function(acc,current,index,arr),intialvalue)
 let add = nums.reduce(function(acc,current,index,arr){
    console.log(`accent ${acc}`)
    console.log(`current ${current}`)
    console.log(`index ${index}`)
    console.log(`Array ${arr}`)
    console.log(`la somme est  ${acc + current}`)
    console.log(`#####################`)
    return acc + current
 },5)
console.log(add)
*/
  /*   #076 - Higher Order Functions - Reduce
  // reduce  افوت على اغاي كل اخرج وحدة في اغاي لي مطلوبة
  let array = ["adana","fiso","bedock","nono","z","qsgdpgfsipGSPMPMZ"]

let len = array.reduce(function(acc,current){
    console.log(`accent => ${acc}`)
    console.log(`current element => ${current}`)
    console.log(`################`)
    console.log( acc.length > current.length ? acc : current)
    return acc.length > current.length ? acc : current
})
console.log(len)

let remove = ["n","@","a","@","s","@","r"]
   let re = remove.filter(function(ele){
    return !ele.startsWith("@")
   }).reduce(function(acc,current){
   // return acc + current
   return `${acc}${current}`
   })
   console.log(re)
*/
  /*
   #077 - Higher Order Functions - ForEach
     // الفور ادج تبع اغاي بصح النتيجة مادير والو للاغاي تستعملها في ديكومنت ولا  الخ
//  let allLis = document.querySelectorAll("ul li");
  //allLis.forEach(function(ele){
    //console.log(ele.classList);
  //})
  //console.log(allLis);

  let allLis = document.querySelectorAll("ul li");// ky ya5ta anaser li auezha ana 
  let allDiv = document.querySelectorAll(".content div")// adna div samoh content fi wsto div
  allLis.forEach(function(ele){
   ele.onclick = function(){  // bah tkdr tdgat 3la ensor dpucument 
    // console.log(this)   // li tld 3lih fi doucment one wla two wla tree igi fi console 
   // this.classList.add("active")// hada fi element talga li tld 3lih fi doucment one wla two wla tree talgah fih active
 
   // remove active class from All elements 
   allLis.forEach(function(ele){
      ele.classList.remove("active")
    })
    // add active class to this elements
    this.classList.add("active")
    // Hide All Divs
    allDiv.forEach(function(ele){
        ele.style.display = "none" // sma i3od fihm display none fl element bah maydhrosh fl document
    })
    }
  })
  */

/*   learn JavaScript In Arabic 2021 - #079 - Object - Introduction
  let user = { 
    // properties 
    thename:"ossama",
    theage:21,
    // motheds
     sayhello:function(){
        return `hello`
     },
  }
  console.log(user.thename)
  console.log(user.theage)
  console.log(user.sayhello())
  */


  /*
Learn JavaScript In Arabic 2021 - # 80


     let myvar = "country"
    let user = {
        thename:"bellatrache",
      "the'name":"nasr",// ki t3od fiha num or caractre mch rygal ndiroha fi "" w fi console ndirolha [  ] fi blast n9ta
        "country-of":"Egypt",
         country:"mesr"
    }
    console.log(user.thename)
    console.log(user["the'name"])
    console.log(user["country-of"])
    console.log(user[myvar]) // ki t"od da4l varaible ndira hadina 
    */
 
     /*  81/188
Learn JavaScript In Arabic 2021 - #081 - Nested Object And Advanced Trainings

    let user = {
        thename:"nasreddine",
        age:21,
        skills:["html","css","JS"],
        availeble:true,
        addresses:{
            country:"alg",
            state:{
                one:"ourgla",
                two:"ELhjira",
            },
        },
          checAV:function(){
           if(user.availeble === true){
            return `free for work`
           }else{
            return`not free`
           }
          }
   
    }
    console.log(user.thename)
    console.log(user.age)
    console.log(user.skills.join(" | "))
    console.log(user.addresses)
    console.log(user.addresses.state.one)
    console.log(user["addresses"].state.one)
    console.log(user["addresses"]["state"].one)
    console.log(user["addresses"]["state"]["one"])
    console.log(user.checAV())

    */
   
       /*   Learn JavaScript In Arabic 2021 - #082 - Create Object With New Keyword

    let user = new Object({
        age: 44,
    })
   // let user = {
     //   age:20,
    //   }
      console.log(user)
    user.age = 21;
    user["country"] = "algerai";
    user.sayhello = function(){
        return `hello`
    }
    console.log(user)
    console.log(user.age)
    console.log(user["country"])
    console.log(user.sayhello())
    */


        /* Learn JavaScript In Arabic 2021 - #083 - this Keyword

    console.log(this)
    console.log(this === window)

     myvar = 1000

    console.log(window.myvar)
    console.log(this.myvar)

    function sayhello(){
        console.log(this)
        return this
    }
    sayhello();
    console.log(sayhello() === window)
     
     document.getElementById("cl").onclick = function(){// kl ma nld 3la click tgi fi console nta"ha
        console.log(this)
     }


     let user = {
        age:38,
        ageinday:function(){
          return  this.age * 365
        }
     }
     console.log(user.age)
     console.log(user.ageinday())
     */
        /*     /* Learn JavaScript In Arabic 2021 - #084 - create object with create method 
     
     let user = {
        age:38,
        doublage:function(){
          return  this.age * 2// ki hak ttbadl natiga ki dir this
          //  return  user.age * 2  // ki tn7 this tb9a wdir ism object = "user" ytbadl age f9t natiga la tatabadl 
                }
     }
     console.log(user)
     console.log(user.age)
     console.log(user.doublage())

     let obj = Object.create({})
     obj.a = 122;
     console.log(obj)

     let copyobj= Object.create(user)
       
     copyobj.age = 33

     console.log(copyobj)
     console.log(copyobj.age)
     console.log(copyobj.doublage())
      */
         
     /*    Learn JavaScript In Arabic 2021 - #085 - Create Object With Assign Method
     let object1 = {
        pro1:1,
        meth1:function(){
            return this.pro1
        }
     }
     let object2 = {
        pro2:2,
        meth2:function(){
            return this.pro2
        }
     }
     let targetobject = {
        pro1:100,
        pro2:122
     }

     let finalobject = Object.assign(targetobject,object1,object2)
     finalobject.pro1 = 200
     finalobject.pro4 = 4343
     console.log(finalobject)
      let newobject = Object.assign({},object2,{pro5:6777,pro4:3333})
      console.log(newobject)
      */
         
      /*   86/188
Learn JavaScript In Arabic 2021 - #086 - What Is DOM And Select Elements

      let muIdelements = document.getElementById("my-span")

      let myTagElement = document.getElementsByTagName("p")

      let myclassElement = document.getElementsByClassName("my-div")

      let myquerysellector = document.querySelector(".spechail")
      let myqueryID = document.querySelector("#my-span")

      let myquerysellectorAll = document.querySelectorAll(".my-div")




      console.log(muIdelements)
      console.log(myTagElement[1])
      myTagElement[1].innerHTML = "salat kayr mina enwm"  
      console.log(myclassElement)

      console.log(myquerysellector )
      console.log(myqueryID )

      console.log(myquerysellectorAll[1] )

      console.log(document.title)
      console.log(document.body)
      console.log(document.forms[0].one.value)
      console.log(document.links[1].href)

      */
       /*Learn JavaScript In Arabic 2021 - #087 - Get Set Elements Content And Attributes
     let myhtml = document.querySelector(".js")

     console.log(myhtml.innerHTML)
     console.log(myhtml.textContent)
     
     myhtml.innerHTML = "text from <span>Main.js</span> Fille "
    myhtml.textContent = "text from <span>Main.js </span> Fille "

    document.images[0].src= "https://google.com"
    document.images[0].alt= "Alternate"
    document.images[0].title= "picture"
    document.images[0].id = "pic"
    document.images[0].className= "img"

    let mylink = document.querySelector(".link")
     
    console.log(mylink.getAttribute("class"))
    console.log(mylink.getAttribute("href"))

     mylink.setAttribute("href", "https://Twitter.com")
     mylink.setAttribute("title", "Twitter")
     */
     
      /* Learn JavaScript In Arabic 2021 - #088 - Check Attributes And Examples
     console.log(document.getElementsByTagName("p")[0].attributes)

     let myp = document.getElementsByTagName("p")[0]

     // if (myp.hasAttribute("data-src")){
      //console.log(`Found`)
    //}else{
       // console.log(`Not Found`)
    //}

   // if (myp.hasAttribute("data-src")){
      //myp.removeAttribute("data-src")
      //}else{
       //  console.log(`Not Found`)
    //}
        

      if (myp.hasAttribute("data-src")){
      if (myp.getAttribute("data-src") === ""){
        myp.removeAttribute("data-src")
    }else{
        myp.setAttribute("data-src","new-value")
    }
        }else{
            console.log(`Not Found`)
        }

        if(myp.hasAttributes()){
            console.log(`has attributes`)
        }
        if(document.getElementsByTagName("div")[0].hasAttributes()){
            console.log(`has attributes`)
        }else{
            console.log(`Div has no Attributes`)
        }
        */

        /*    Learn JavaScript In Arabic 2021 - #089 - Create And Append Elements
       
let myeElement = document.createElement("div")
let myattr = document.createAttribute("data-custom") 
let mytext = document.createTextNode("text my adnan is correct in djaber ")
let myComm = document.createComment("This is Div")

myeElement.className = "product"
myeElement.setAttributeNode(myattr)
myeElement.setAttribute("test","testing")
myeElement.appendChild(mytext) // izid fi a4r div text 
myeElement.appendChild(myComm) // izid fi a4r div comment
document.body.appendChild(myeElement) // izid fi a4r body text

console.log(myeElement)

*/
/*   Learn JavaScript In Arabic 2021 - #090 - Product With Title And Description Practice

let myMainelement = document.createElement("div")
let myheadin = document.createElement("h2")
let myparagraph = document.createElement("p")

let mytextheading = document.createTextNode("Product text heading")
let mytextparagraph = document.createTextNode("Heading text Product ")

// add text in heading 
 myheadin.appendChild(mytextheading)
// add heading in element 
myMainelement.appendChild(myheadin)
// add text in paragraph 
myparagraph.appendChild(mytextparagraph)
// add paragraph in element
myMainelement.appendChild(myparagraph)
 myMainelement.className = "product"

document.body.appendChild(myMainelement)
   */ 
  /*      Learn JavaScript In Arabic 2021 - #091 - Deal With Children's
  let myElement = document.querySelector("div")

  console.log(myElement)
  console.log(myElement.children)
  console.log(myElement.children[0])
  console.log(myElement.childNodes[0])

  console.log(myElement.firstChild)
  console.log(myElement.lastChild)

  console.log(myElement.firstElementChild)
  console.log(myElement.lastElementChild)
    */
        /*    Learn JavaScript In Arabic 2021 - #092 

         let mybtn = document.getElementById("btn")
          mybtn.onclick = function(){
            console.log("clicked")
          }

          window.onscroll = function(){
            console.log("Scroll")
          }
          */
            
          
         // document.links[0].onmouseenter = function(Event){
           // console.log(Event)
         //}

         /*   Learn JavaScript In Arabic 2021 - #093
          
         let userName = document.querySelector("[name='userNAme']")
         let useage = document.querySelector("[age='age']")

         document.forms[0].onsubmit = function(e){
            let uservalid = false ;
            let agevalid = false ;
    
            if(userName.value !=="" && userName.value.length < 10){
                uservalid = true
            }
            if(userage.value !== ""){
                agevalid = true
            }

            if (uservalid === false || agevalid === false){
            e.preventDefault()
        }
         }

         document.links[0].onclick = function(event){
            console.log(event)
            event.preventDefault();
         }
         */

        /*   Learn JavaScript In Arabic 2021 - #094 - Event Simulation - Click Focus Blur
         let one = document.querySelector(".one")
         let two = document.querySelector(".two")

         window.onload = function(){
            two.focus();
         } 

         one.onblur = function(){
           document.links[0].click();
         }
         */

        /*  95/188
Learn JavaScript In Arabic 2021 - #095 - Class List Object And Methods

         let mydiv = document.getElementById("my-div")
         console.log(mydiv.classList)
         console.log(typeof mydiv.classList)
         console.log(mydiv.classList.contains("ossama"))
         console.log(mydiv.classList.contains("one"))
         console.log(mydiv.classList.item("1"))

         //mydiv.onclick = function(){
           // mydiv.classList.add("onddd","twonnd")
         //}
         // mydiv.onclick = function(){
          // mydiv.classList.remove("one")
         //}
          mydiv.onclick = function(){
            mydiv.classList.toggle("onddd")  // li makach izidha w li kyna ina7ha 
         }
         */
         
         /*  96/188
Learn JavaScript In Arabic 2021 - #096 - CSS Styling And Stylesheets

         let element = document.getElementById("my-div")
         element.style.color = "red";
         element.style.backgroundColor ="green"
         element.style.fontWeight = "bold"
         // هنا نكتبو جميع الخواص في سطر واجد 
         element.style.cssText = "font-weight:bold;color:green;opacity:0.9;background-color:red"
         // الحذف و التغيير في انلاين ستايل 
         element.style.removeProperty("color")
         element.style.setProperty("font-size","40px","importent")
         // الحذف و التغيير في ستايل اكسترنال
        document.styleSheets[0].rules[0].style.removeProperty("line-height")
        document.styleSheets[0].rules[0].style.setPropertyProperty("background-color","red")

        */

       /*  97/188
Learn JavaScript In Arabic 2021 - #097 - Before, After, Prepend, Append, Remove

       let element = document.getElementById("my-div")
       let create = document.createElement("p")
     // element.before("HELLO My friend")
    // element.before(create)
   // element.after("HELLO My friend")
    //element.after(create)
   // element.append("Hello nasr")
    // element.append(create)
   // element.prepend("hello adanan ")
   //element.prepend(create)
   //element.remove()
   */

  /* Learn JavaScript In Arabic 2021 - #098 - DOM Traversing
  let span = document.querySelector(".two")
  //         console.log(span.nextSibling)
    //      console.log(span.nextElementSibling)
     //     console.log(span.nextElementSibling.remove())

    // console.log(span.previousSibling)
    //console.log(span.previousElementSibling)
    //console.log(span.previousElementSibling.remove())

   // console.log(span.parentElement)


   //span.onclick = function (){
    //span.parentElement.style.opacity = '0'
     //}
     
   span.onclick = function (){
    span.parentElement.remove()
     }
    
*/
/*  Learn JavaScript In Arabic 2021 - #099 -  Dom cloning
//let myp =document.querySelector("p")
//let myp =document.querySelector("p").cloneNode() //false
let myp =document.querySelector("p").cloneNode(true)
let mydiv = document.querySelector("div") 
myp.id = `${myp.id}-clone`
mydiv.appendChild(myp)
*/

//let myp = document.querySelector("p")

/* myp.onclick = function(){
  console.log("satora hbibi")
}

myp.onclick = one;
myp.onclick = two;

function one (){
  console.log("nasr eddie chi4")
}
function two (){
  console.log("salah hbibi")
}

myp.addEventListener("click",function(){
  console.log("Message from Onclick 1 Events")
})

// myp.addEventListener("click", object //ou js fuction )
// myp.addEventListener("click","string")// Erour 
myp.addEventListener("click",one)
myp.addEventListener("click",two)*/
/*
myp.onclick = function(){
  let newp = myp.cloneNode(true);
    newp.className ="clone"
  document.body.appendChild(newp)
}
//let cloned = document.querySelector(".clone")  // eror

//cloned.onclick = function (){
  //console.log("i am clone ")
//}

//document.addEventListener("click", function (e) {
  //if(e.target){
 //  console.log(e.target);// العنصر لي ندوسو عليه يكتبو في الكونصول 
 // }
//});

/*document.addEventListener("click",  function (e) {
  if(e.target.className === "clone"){
    console.log("iam cloned");// العنصر لي ندوسو عليه يكتبو في الكونصول 
  }
});*/



/*    
Learn JavaScript In Arabic 2021 - #103 - Alert, Confirm, Prompt

// window.alert("nasreddine test")
// this.alert("djeber test")
 // nalert("adanan test")
 // console.log("vHHZ")
// let confirmMsg = confirm("Are you sure?")
 //console.log(confirmMsg)
 // if(confirmMsg === true){
  //console.log("item deleted")
 //}else
 //{
  //console.log("item Not deleted")
//  }
 
 let promptMsg = prompt("the day that help you","Today there are at least three letters")
 console.log(promptMsg)

*/
/*  setTimeout and clearTimeout # 104

//setTimeout(function(){
//  console.log(`Msg`)
//},3000)

 //setTimeout(syMsg,3000)
// function syMsg(){
  //console.log("Iam message")
//}

// setTimeout(syMsg,3000,"nasr",20)

//function syMsg(user,age){
//console.log(`Iam message for ${user} his age is ${age}`)
//}

let couter = setTimeout(syMsg,3000,)

function syMsg(){
console.log(`Iam message `)
}
let clear = document.querySelector("button")
clear.onclick = function(){
    clearTimeout(couter)
  }
  */

  /*   #105 setInterval and clearInterval 
// setInterval(function(){
  //console.log(`Msg`)
//},1000)

 //setInterval(syMsg,1000)
 // function syMsg(){
 // console.log("Iam message")
//}

//setInterval(syMsg,1000,"nasr",20)

//function syMsg(user,age){
//console.log(`Iam message for ${user} his age is ${age}`)
//}

let div = document.querySelector("div")
function counter (){
  div.innerHTML -= 1
  if (div.innerHTML === "0"){
    console.log("stop")
    clearInterval(count)
  }
}

let count = setInterval(counter,1000)
*/ 


/*   107/188
Learn JavaScript In Arabic 2021 - #107 - Window Open And Close

setTimeout (function (){
  window.open("https://google.com","_blank","width=400,height=400")
},2000)
*/ 
  
/*  108/188
Learn JavaScript In Arabic 2021 - #108 - Window History Object

console.log(history)
------properties
        length
------Methods
        back()
        forward()
        go(Delta) => positionIn History
        */ 
/*   #109 scroolTO scrollBy 
       //  let mynewindow = window.open("https://google.com","","width=400,height=400")

    */
 
       /* Learn JavaScript In Arabic 2021 - #110 - Scroll To Top Using Y Practic

       let btn = document.querySelector("button")

       window.onscroll = function(){
        if(window.scrollY >= 600){
       btn.style.display = "block"
        }else{
          btn.style.display = "none"
        }
       }

       btn.onclick = function(){
        window.scrollTo({
          left:0,
          top:0 ,
          behavior: "smooth",
   
        })
       }
       */
     /* 
Learn JavaScript In Arabic 2021 - #111 - Local Storage

       // set
       window.localStorage.setItem ("color","#F00")
       window.localStorage.fontWeight = "bold"
       window.localStorage["fontSize"] = "30px"

       // get 
       console.log(window.localStorage.getItem("color"))
       console.log(window.localStorage.color)
       console.log(window.localStorage["color"])
       
       //  get key 
       console.log(window.localStorage.key(0))

       // remove one
       //window.localStorage.removeItem ("color")
       
       // remove All
       //window.localStorage.clear()

        // color set In page 

        document.body.style.backgroundColor = window.localStorage.getItem("color")
        
       console.log(window.localStorage)
       console.log(typeof window.localStorage)

      */
     
  /* earn JavaScript In Arabic 2021 - #112 - Local Storage Color Application Practice
       let lis = document.querySelectorAll("ul li")
       let exp = document.querySelector(".expremient")

       if(window.localStorage.getItem("color")){
        // add color div
        exp.style.backgroundColor = window.localStorage.getItem("color")
       //  remove Actieve Class From All lis 
       lis.forEach((li) => {
        li.classList.remove("active")
        }
        )
        // add active locastorage 
          document.querySelector(`[data-color="${window.localStorage.getItem("color")}"]`).classList.add("active");
       }else{
        console.log("No")
       }


  lis.forEach((li) => {  // loop
    li.addEventListener("click", (e) => { // click 
        //   console.log(e.currentTarget.dataset.color) // print 
       //  remove Actieve Class From All lis 
       lis.forEach((li) => {
       li.classList.remove("active")
       }
       )
       // add Active to class Current element
       e.currentTarget.classList.add("active")
       // add Current color To local Storage
       window.localStorage.setItem("color",e.currentTarget.dataset.color)
          
       // Change Div background color
       exp.style.backgroundColor = e.currentTarget.dataset.color;
    }
    )
  });
           */ 
     /* 
Learn JavaScript In Arabic 2021 - #113 - Session Storage And Use Cases

         // window.localStorage.setItem("color","red")
          // window.sessionStorage.setItem("color","blue")
          document.querySelector(".name").onblur = function(){
            window.sessionStorage.setItem("input-name",this.value)
          }
          */

          /* #115
          destruction array 
             
          let a = 1;
          let b = 2;
          let c = 3;
          let myfriend = ["fff","ooo","llll"]

          let [a,b,c] = myfriend;
          console.log(a);
          console.log(b);
          console.log(c);
          */  

         /* #116 destruction array advenced 
         let myfriend = ["fff","ooo","llll",["ali","salah",["Djaber","jamal"]]];
         // console.log(myfriend[3][2][1]);
         let [ , , ,[a, ,[ ,b]]] = myfriend;
         console.log(a)//ali
         console.log(b)// jamal
         */ 
        /* #117 destruction swapig */ 
          
      /*#118 
        const user = {
          thename :"naer",
          theage :21,
          //thetitle:"devoloper",
          thecountry:"alg",
        }
      
         
        const { thename,theage,thetitle,thecountry} = user ;

         console.log(thename)
         console.log(theage)
         console.log(thetitle)
         console.log(thecountry)
         */ 
        /* #119
         const user = {
          thename :"naer",
          theage :21,
          thetitle:"devoloper",
          thecountry:"alg",
          thecolor:"black",
          skills:{
            html:60,
            css :44,
          }
        }
      
         
        const { thename:n,theage:a,thetitle,thecolor:co="red",skills:{html,css}} = user ;

         console.log(n)
         console.log(a)
         console.log(thetitle)
         console.log(`skills html ${html}`)
         console.log(`skills html ${css}`)
         
const { html:skillone,css:skilltwo} = user.skills;
 
console.log(`skills html ${skillone}`)
         console.log(`skills html ${skilltwo}`)
         */
        /* #120
         const user = {
          thename :"naer",
          theage :21,
          thetitle:"devoloper",
          thecountry:"alg",
          thecolor:"black",
          skills:{
            html:60,
            css :44,
          }
        }
       // show(user);
       // function show(obj){
         //console.log(obj.thename)
         //console.log(obj.theage)
        // console.log(obj.skills.html)
        //}
        show(user);
        function show({thename:n,theage:a,skills:{html:h}}=user){
         console.log(n)
         console.log(a)
         console.log(html)
        }
        */ 
       /* #121
        const user = {
          thename :"naer",
          theage :21,
          skills:["html","css","Js"],
          addres:{
           country:"alg",
           from:"lhjira",
           },
        }
const {thename:n,theage:g,skills:[,,three],addres:{country:a}}=user;
console.log(n)
console.log(g)
console.log(three)
console.log(a)
*/ 
/* #123 set 
let mydata= [1,1,1,2,3,"A"]
//let myuniquedata = new Set([1,1,1,2,3])
//let myuniquedata = new Set(mydata)
//let myuniquedata = new Set().add(1).add(1).add(1).add(2).add(3)
let myuniquedata = new Set();// store data 
myuniquedata.add(1).add(1).add(1);
myuniquedata.add(2).add(3).add("A")
console.log(`is set has =>${myuniquedata.has("A")}`)
      // =====//
console.log(`is set has =>${myuniquedata.has("a".toUpperCase())}`)      

console.log(mydata)
console.log(myuniquedata)
console.log(myuniquedata.size)
console.log(mydata[0])
console.log(myuniquedata[0])

// myuniquedata.delete(2)
console.log(myuniquedata.delete(2))// true مثل انها تبحث عليها


console.log(myuniquedata.size)
console.log(myuniquedata)

 myuniquedata.clear() //هاذي تحبس  myuniquedata
console.log(myuniquedata.size)
console.log(myuniquedata.has("A"))
*/
/*    124/188
Learn JavaScript In Arabic 2021 - #124 - Set vs WeakSet And Garbage Collector
// type of data
let myset = new Set([1,1,1,2,3,"A","B","B"])
console.log(myset)
// size 
console.log(myset.size)

let iteretor =  myset.keys()
/// value + keys alias 
console.log(iteretor.next().value)
console.log(iteretor.next().value)
console.log(iteretor.next().value)
console.log(iteretor.next().value)
console.log(iteretor.next().value)
console.log(iteretor.next())
// forEach 
myset.forEach((el)=>console.log(el))

// type of data weakset
let myweak = new WeakSet([{A:0,B:1}])// weakset object // not size and keys and values 
console.log(myweak)
*/ 
/* Learn JavaScript In Arabic 2021 - #125 - Map Data Type Vs Object
let myobject = {};
let mymap = new Map();
console.log(myobject)
console.log(mymap)

let mynewobject = {
  10:"Nember",
  "10":"string",
}
console.log(mynewobject[10])
let mynewmap = new Map();
mynewmap.set(10,"Nember")  // 
mynewmap.set("10","string")// set تحط قيمة
mynewmap.set(true,"boolen")
mynewmap.set({a:1,B:2},"object")
mynewmap.set(function dosomthing(){},"function")

console.log(mynewmap.get(10))// 
console.log(mynewmap.get("10"))// get تحيب قيمة  
console.log("######")
console.log(mynewmap)
*/
/*    
Learn JavaScript In Arabic 2021 - #126 - Map Methods

let mymap = new Map([
[10,"Number"],
["name","string"],
[false,"Boolean"]
]);
mymap.set(10,"Number")
mymap.set("name","string")
console.log(mymap)
console.log(mymap.get(10))
console.log(mymap.get("name"))
console.log(mymap.get(false))
// delete
console.log("########")
console.log(mymap.has(false))
console.log(mymap.has("name"))
console.log("########")

console.log(mymap.size)
console.log(mymap.delete("name")) 
console.log(mymap.size)
console.log(mymap.clear())
console.log(mymap.size)
*/
/* Learn JavaScript In Arabic 2021 - #127 - Map Vs WeakMap

let mapUser = { thename : "NasrEddine"}
let myMap = new Map();
 myMap.set(mapUser,"Object Value")
 mapUser = null //  override the reference  
 console.log(myMap)
 console.log("#".repeat(20))

 let wmapuser = { thename : "Nasreddine"}

 let myweakmap = new WeakMap();
 myweakmap.set(wmapuser,"object Value")
 wmapuser = null //  override the reference  
 console.log(myweakmap)
*/ 

 /* # 127 Array.from
console.log(Array.from("nasreddine"))
console.log(Array.from("12345"))
console.log(Array.from("12345",(function(n){
  return +n + +n
})))

console.log(Array.from("12345",(n) => +n + +n))  // aro function 

let myarray = [1 ,1 ,1 ,2 ,3 ,4]
 myset =  new Set(myarray); // ta3tik num momayaza 
 console.log(myset)
   // "
   // \/
 console.log(Array.from(myset))

// console.log([...new Set(myarray)]) // future

function testarg(){// بدون Array
  return arguments
}
console.log(testarg("adnan","nasr","djaber"))


function af(){
  return Array.from(arguments)// ب Array
}
console.log(af("adnan","nasr","djaber",1,2,3))
*/
/*   
Learn JavaScript In Arabic 2021 - #129 - Array.copyWithin Method
let myarray = [10,20,30,40,50,"a","b"]
// myarray.copyWithin(3) // [10,20,30,10,20,30,40]
// myarray.copyWithin(4,6)   // [10,20,30,40,"b","a","b"]  trget : لي دار نحطو فيه start : بدايةةنسخ end :نهاية نسخ 
// myarray.copyWithin(4,-1)   // [10,20,30,40,"b","a","b"]
// myarray.copyWithin(1,-2)     // [10,"a","b",40,"b","a","b"]
myarray.copyWithin(1,-2,-1)     // [10,"a",30,40,"b","a","b"] // الاخير لي نديروه ميتحسبش
 console.log(myarray)
 */ 
/*  
Learn JavaScript In Arabic 2021 - #130 - Array.some Method

 let nums = [1,2,3,4,5,6,7,8,9,10]
 let mynumber = 5;
 let check = nums.some(function(e){
  //console.log("test")
  //console.log(this)
 // return e > 5
 return e > this 
 },mynumber)

// let check = nums.some((e) => e > 5)
 console.log(check)

   function checkValue (arr,val){
    return arr.some(function(e){
      return e === val
    })
 }
 console.log(checkValue(nums,20))
 console.log(checkValue(nums,5))

// range 

 let range = {
  min:10,
  max:20,
 }
 let checkinrange = nums.some(function(e){
  return e >= this.min && e <= this.max;
  
 },range)
 console.log(checkinrange)
 */
/* 
Learn JavaScript In Arabic 2021 - #131 - Array.every Method
 const locations = {
  20:"place 1",
  30:"place 2",
  17:"place 3",
  40:"place 4",
 }
 let mainlocation = 15;

 let locationArray = Object.keys(locations)// ترجع Array 

 console.log(locationArray)

 let locationArrayNumber = locationArray.map((n) => +n )// ترجع number not string 

 console.log(locationArrayNumber)

 let check = locationArrayNumber.every(function(e){
  return e > this ;
 },mainlocation)  // mainlocation  حطيناه في this 

 console.log(check)
 */
/* 
Learn JavaScript In Arabic 2021 - #132 - Spread Syntax And Use Cases
 console.log("nasr")// باه نفرقوهم
 console.log(..."nasr")
 console.log([..."nasr"])

 // concataination Arrays
  let Array1 = [1,2,3]
  let Array2 = [4,5,6]

  let AllArray = [...Array1,...Array2]// concataination two array 
  console.log(AllArray)
  // copy Array
  let cpooiedArray =  [...Array1]
  console.log(cpooiedArray)
  // push inside Array 
  let myfriend = ["soheyb","saif","salah"]
  let myyearfriend = ["oday","ALi"]
   myfriend.push(...myyearfriend)// egal myfriend.push("oday","ALi")
  console.log(myfriend)
  // use with Math Object
  let myObject = [10,20,1000,-100,40,555,133423]
  console.log(Math.max(...myObject))// egal  => console.log(Math.max(10,20,1000,-100,40,555,133423))
  // spread with object => Merge object 

  let Object1= {
   a:1,
   b:2,
  } 
  let Object2= {
    c:3,
    d:4,
   } 
 console.log({...Object1,...Object2,e:5})
 */ 
/* chellege map and set */
/* 135/188
Learn JavaScript In Arabic 2021 - #135 - Regular Expressions - Modifiers

let mystring = "hello elzero web school I love ELzero"
let regex = /elzero/ig;//i معناها ميهمش حرف كيبر ولا صغير كل كيف كيف // g معناها اعطيني واش كاين من كلمة حروف كبيرة ولا صغيرة 
console.log(mystring.match(regex))
*/ 
/* 136/188
Learn JavaScript In Arabic 2021 - #136 - Regular Expressions - Ranges Part 1

let tld = "com net org info code io"
let tldRe = /(info|org|io)/ig;// i ترحع index // g ترجع كاينين 
console.log(tld.match(tldRe))

let num = "12345678910"
// let numsRe = /[0-9]/ //   لان اول حاحة قابلها ارجع 1 
// let numsRe = /[0-9]/g // ارجع كل ال اعداد 
let numsRe = /[0-2]/g  // renge هو المجال "   خنا ارجع 1 2 1 0 
console.log(num.match(numsRe))

let Notnum = "12345678910"
let NotnumsRe = /[^0-2]/g   // اعطني جميع لارقام ماعدامجال  0-2
console.log(Notnum.match(NotnumsRe))

let specialNums = "1/2!,,?345*#^@678910"
let specialNumsRe = /[^0-9]/g   // ^=>not معناها نهز غير لي مهومش ارقام 
console.log(specialNums.match(specialNumsRe))

let practice = "Os1 Os2 Os1Os Os8 Os8Os "
let practiceRe = /Os[5-9]Os/g  
console.log(practice.match(practiceRe))
*/ 
/* 137/188
Learn JavaScript In Arabic 2021 - #137 - Regular Expressions - Ranges Part 2

let mystring = "AaBbcde1234C°+^"
let atozsmall = /[a-z]/g // glopale Flag 
let Notatozsmall = /[^a-z]/g // معطاتناش small 
let atozsCapital = /[A-Z]/g 
let NotatozCapital = /[^A-Z]/g  
let aAndcAndd= /[acd]/g
let NotaAndcAndd= /[^acd]/g
let capitalsmall= /[a-zA-Z]/g
let Notcapitalsmall = /[^a-zA-Z]/g
let special = /[^a-zA-Z0-9]/g
console.log(mystring.match(atozsmall))
console.log(mystring.match(Notatozsmall))
console.log(mystring.match(atozsCapital))
console.log(mystring.match(NotatozCapital))
console.log(mystring.match(aAndcAndd))
console.log(mystring.match(NotaAndcAndd))
console.log(mystring.match(capitalsmall))
console.log(mystring.match(Notcapitalsmall))
console.log(mystring.match(special))
*/ 
/* Learn JavaScript In Arabic 2021 - #138 - Regular Expressions - Character Classes Part 1

let email = "O@@@g...com.O@g.com O@g.net A@Y.com O@s.org 1@1.com"
let dot = /./g
let word = /\w/g
let notword = /\W/g
let valid = /\w@\w.(com|net)/g
console.log(email.match(dot))
console.log(email.match(word))
console.log(email.match(notword))
console.log(email.match(valid))
*/ 
/* Learn JavaScript In Arabic 2021 - #139 - Regular Expressions - Character Classes Part 2

let noms = "Sated 1Spam 2Spam 3Spam Spam4 Spam5 Osama Ahmed Aspamo"
//let reguler = /(spam\b)/ig // الكلمات التي تنتهي بكلمة spam 
// let reguler =  /(\bspam)/ig  // الكلمات التي تبدا بكلمة spam 
let reguler =  /(\bspam|spam\b)/ig // تبدا ولا تنتهي بكلمة spam 
console.log(noms.match(reguler))
console.log(reguler.test(noms))
console.log(/(\bspam|spam\b)/ig.test(noms))
console.log(/(\bspam|spam\b)/ig.test("ossama"))
*/ 
/* 140/188
Learn JavaScript In Arabic 2021 - #140 - Regular Expressions - Quantifiers Part 1

let mails = "o@nn.sa ossama@gmail.com elzero@gmail.net ossama@mail.ru"// All mails 
// let maillre = /\w+@\w+.(com|net)/ig
let maillre = /\w+@\w+.\w+/ig
console.log(mails.match(maillre))

let nums = " 0110 10 150 05120 0560 350 00 " // 0 numbers Or No 0
// let numsre =/0\d+0/ig //\d معناها رقم  // \d+ no 0 
let numsre =/0\d*0/ig // \d* with 0
console.log(nums.match(numsre))
let urls = "https://google.com http://www.website.net web.com"// https + http
let urlsRe =/https?:\/\/(www.)?\w+.\w+/ig  // ? كاينة ولا مكانش عادي كيما هنا ال (s  هنا متتحسبش تجي ولا متجيش كيف كيف )
console.log(urls.match(urlsRe))
*/ 
/* Learn JavaScript In Arabic 2021 - #141 - Regular Expressions - Quantifiers Part 2

let serials = "S100S S3000S S50000S S950000S"

console.log(serials.match(/S\d{3}S/ig))// S[Three number ]S
console.log(serials.match(/S\d{4,5}S/ig))// S[Four or five number ]S
console.log(serials.match(/S\d{4,}S/ig))// S[ At least four ]S
*/ 
/* 142/188
Learn JavaScript In Arabic 2021 - #142 - Regular Expressions - Quantifiers Part 3 

let mystring = "We love programming";
let names = "10samsZ 2AhmedZ 3Mohammed 4MoustafaZ 5GamalZ";
console.log(/ing$/ig.test(mystring)) // $ end somthing نهاية الجملة 
console.log(/^We/ig.test(mystring))// ^ start somthing  بداية الجملة 
console.log(/^2/ig.test(names)) // false
console.log(/z$/ig.test(names))
console.log(/^\s/ig.test(names)) // \s sapceمعناها هل يبدا بفراغ     فراغ 
console.log(names.match(/\d\w{5}(?=z)/ig)) // followed by solthing *
console.log(names.match(/\d\w{8}(?!z)/ig)) // not followed by somthing 
*/ 
/* Learn JavaScript In Arabic 2021 - #143 - Regular Expressions - Replace With Pattern

let txt = "learning @ at zero web school @  "
console.log(txt.replace("@","javascript"))// ط 1 
console.log(txt.replaceAll("@","javascript")) // All
let re = /@/ig
console.log(txt.replaceAll(re,"javascript")) 
console.log(txt.replaceAll(/@/ig,"javascript"))
*/ 
/* 144/188
Learn JavaScript In Arabic 2021 - #144 - Regular Expressions - Form Validation

document.getElementById("regester").onsubmit = function(){
  let phoneInput = document.getElementById("phone").value;
  let phoneRe = /\(\d{4}\)\s\d{3}-\d{4}/; //(1234) 567-8910   // \(\) معناها الاقواس يتحسبو 
  let validationResult = phoneRe.test(phoneInput)
  if(validationResult === false){
    return false;
  }
  return true
}
*/ 
/* 148/188
Learn JavaScript In Arabic 2021 - #148 - Constructor Function Introduction
function User(id,username,salary) {
this.i= id ;
this.u=username;
// this.s=salary ;// normal 
this.s=salary + 1000; 
}


 let Userone =new User(100,"nasr",5000);
 let UserTwo =new User(200,"Adann",6000);
 let UserThree =new User(300,"HASSAN",7000);

 console.log(Userone.i)
 console.log(Userone.u)
 console.log(Userone.s)

 console.log(UserTwo.i)
 console.log(UserTwo.u)
 console.log(UserTwo.s)

 console.log(UserThree.i)
 console.log(UserThree.u)
 console.log(UserThree.s)

*/ 
/* 149/188
Learn JavaScript In Arabic 2021 - #149 - Constructor Function New Syntax

class User {
  constructor(id, username, salary) {
    this.i = id;
    this.u = username;
    this.s = salary + 1000;
  }
}

  let Userone =new User(100,"nasr",5000);
 
  console.log(Userone.i)
  console.log(Userone.u)
  console.log(Userone.s)
  console.log(Userone instanceof User)
  console.log(Userone.constructor === User)
*/ 

/* Learn JavaScript In Arabic 2021 - #150 - Deal With Properties And Methods
class User {
  constructor(id, username, salary) {
    // propity 
    this.i = id;
    this.u = username || "Unknown";
    this.s = salary < 6000 ?  salary+500 : 6000// شرط ? true : false;
    this.msg = function(){
      return `hello ${this.u} your salry is ${this.s} `
    }
  }
   // method // خار constractor 
  writemsg(){
      return `hello ${this.u} your salry is ${this.s} `
    }
}
let Userone = new User(100,"nasr",5000)
let UserTwo = new User(200,"",6000)
console.log(Userone.u)
console.log(Userone.s)
console.log(Userone.msg())
console.log(Userone.writemsg())

console.log(UserTwo.u)
console.log(UserTwo.s)
console.log(UserTwo.msg) // NAtive code
console.log(Userone.writemsg) // NAtive code
*/ 
/* 151/188
Learn JavaScript In Arabic 2021 - #151 - Update Properties And Built In Constructors

class User {
  constructor(id, username, salary) {
    this.i = id;
    this.u = username;
    this.s = salary + 1000;
  }
  // update 
  updateName(newname){
  this.u = newname;
  }
}
let Userone =new User(100,"nasr",5000);
 
console.log(Userone.u)
Userone.updateName("NAsreddien")
console.log(Userone.u)

// build in contractor 
let strone = "NAssr"
let strTwo = new String ("NAssr")

console.log(typeof strone)// type string
console.log(typeof strTwo)// type Object 

console.log(strone instanceof String) // false
console.log(strTwo instanceof String) // true    

console.log(strone.constructor === String)   // strone تم استخدام string constructor حتى تم انشاؤهم 
console.log(strTwo.constructor === String)  // strTwo تم استخدام string constructor حتى تم انشاؤهم
*/ 
/*
152/188
Learn JavaScript In Arabic 2021 - #152 - Class Static Properties And Methods

class User {
  // static propete
 static count = 0;
  // count = 0;
  constructor(id, username, salary) {
    this.i = id;
    this.u = username;
    this.s = salary + 1000;
    User.count++;
  }
  // static Method 
    static syHello(){
    return `hello froù school `
  }
  static countMembers (){
    return `${this.count}members count`
  }
} 

let Userone =new User(100,"nasr",5000);
let UserTwo =new User(200,"Adann",6000);
let UserTrhee =new User(300,"Adann",6000);
let Userfour =new User(400,"Adann",6000);
let Userfive =new User(600,"Adann",6000);
let Usersex =new User(700,"Adann",6000);
let Userseven =new User(800,"Adann",6000);

// console.log(Userone.i)
// console.log(Userone.u)

// console.log(UserTwo.i)
// console.log(UserTwo.u)


console.log(Userone.count) // access  مش static لانها 
console.log(User.count) // مقدرش يوصلها لانها مش static 
// static proprite
console.log(Userone.count) // مقدرش يوصلها لانها static
console.log(User.count) //وصلها لانها  static 
 


// console.log(Userone.syHello())// access
//console.log(User.syHello()) // not access
// static method 
// console.log(Userone.syHello()) // not access
console.log(User.syHello())  // access 

console.log(User.countMembers())
*/ 

/* 153/188
Learn JavaScript In Arabic 2021 - #153 - Class Inheritance

class User {
  constructor(id, username) {
    this.i = id;
    this.u = username;
  }
     syHello(){
    return `hello ${this.u}`
  }
 } 
 class Admin extends User {
  constructor(id, username,permission) {
  super(id, username)  // this.i = id;
   // this.u = username;
    this.p = permission;
  }
     syHello(){
    return `hello ${this.u}`
  }
 } 
 class Superman extends Admin {
  constructor(id, username,permission,Ability) {
  super(id, username,permission)  
    this.A = Ability;
  }
     syHello(){
    return `hello ${this.u}`
  }
 } 

 let Userone =new User(100,"nasr");
 let Adminone = new Admin (3440,"Djaber",23455)

 console.log(Userone.i)
console.log(Userone.syHello())
console.log("########")
console.log(Adminone.i)
console.log(Adminone.u)
console.log(Adminone.p)
console.log(Adminone.syHello())

*/ 
/*  Learn JavaScript In Arabic 2021 - #154 - Class Encapsulation 
class User {
  // private proprirty 
  #e;
  constructor (id,username,eSalary){  // eSalary = expented salary 
  this.i = id ;
  this.u = username;
  this.#e = eSalary;   // درنا  # قبل  e   لكي نقرا رقم من stri,g 
  }
  getSalary() {
   return parseInt(this.#e) //   parseInt ترجع منو رقم 
  }
}
let userone =new User (122,"nasreddine","5000 delar")
console.log(userone.u)

console.log(userone.getSalary() * 0.3)
*/ 
/* 155/188
Learn JavaScript In Arabic 2021 - #155 - Prototype Introduction

// object تانهيرت او  تاخد السمات من بعضها 
*/ 
/*   
learn JavaScript In Arabic 2021 - #156 - Add To Prototype Chain And Extend Constructors Features

class User {
  constructor (id,username){  
  this.i = id ;
  this.u = username; 
  }
  sayhello() {
   return `Hello ${this.u}`
  }
}
let userone = new User (122,"nasreddine")


console.log(userone.u)

console.log(User.prototype)

console.log(userone)

User.prototype.sayWelcome = function(){
  return `Welcome ${this.u}`
}

Object.prototype.love = "zero web school "

String.prototype.adddotbeforeAndafter = function(val){
return `.${this}.`
}
let mystring = "ELZERo"
*/ 
/* 157/188
Learn JavaScript In Arabic 2021 - #157 - Object Meta Data And Descriptor Part 1

 const myobject  = {
   a:1,
   b:2
}

Object.defineProperty(myobject,"c",{
  writable:true,  //  myobject.c=100; :ex  كون تبدلها خطا معاش تغير قيمتها لي بدلتها بيها 
  enumerable:true, // كون تبدلها خطا معاش تقدر ادير لوب عليها معاش تدخل السي في لوب 
  configurable:false, // كون تبدلها خطا معاش تقدر تحذفها ومعاش تعاود الدالة *   defineProperty و تبدل قيمتها 
  value:3,
})
  
   // هاذي نتاع اعاودها كي تعود falseل
   // الالا كان عادت نفس ال object 
// Object.defineProperty(myobject,"c",{
//   writable:true,  //  myobject.c=100; :ex  كون تبدلها خطا معاش تغير قيمتها لي بدلتها بيها 
//   enumerable:true, // كون تبدلها خطا معاش تقدر ادير لوب عليها معاش تدخل السي في لوب 
//   configurable:true, // كون تبدلها خطا معاش تقدر تحذفها ومعاش تعاود الدالة *   defineProperty و تبدل قيمتها 
//   value:123,
// })


myobject.c=100; 
console.log(delete myobject.c)
for (let prop in myobject) {
  console.log(prop,myobject[prop])
  
}
console.log(myobject)
*/ 

/* Learn JavaScript In Arabic 2021 - #158 - Object Meta Data And Descriptor Part 2

const myObject = {
  a:1,
  b:2,
}
Object.defineProperties(myObject,{ // تزيد بالياسر 
  c:{
    configurable:true,
    value :3
  },
  d:{
    configurable:true,
    value :4
  },
  e:{
    configurable:true,
    value :5
  },
})
console.log(myObject)
console.log(Object.getOwnPropertyDescriptor(myObject,"d")) // تعطيك غير نتاع d 
console.log(Object.getOwnPropertyDescriptors(myObject))// تعطيك كلش 
*/ 
/* Learn JavaScript In Arabic 2021 - #159 - Date And Time Introduction

let datenow = new Date();
console.log(datenow)
console.log(Date.now()) // 1000 mill seconds = 1 Seconds 
let seconds = Date.now() / 1000 ; // number of secondes  
console.log(`Seconds ${seconds} `)
let munites = seconds / 60 ; // number of minutes 
console.log(`munites ${munites}`)
let hours  = munites / 60 ; // number of hours 
console.log(`hours ${hours}`)
let days = hours / 24 ; // number of days
console.log(`days ${days}`)
let years = days / 365 ; // number of minutes 
console.log(`years ${years}`)
*/ 
/* 160/188
Learn JavaScript In Arabic 2021 - #160 - Get Date And Time 

let datenow  = new Date();
let birthday = new Date("Oct 25, 82")
let daydeff = datenow - birthday ;
console.log(daydeff)
console.log(daydeff / 1000 / 60 / 60 / 24 / 365 )
console.log(datenow)
console.log(datenow.getTime()) // يعطيك الساعة وشحال 
console.log(datenow.getDate()) // يعطيك النهار وشحال 
console.log(datenow.getFullYear()) // year
console.log(datenow.getMonth()) // index month 
console.log(datenow.getDay()) // day of the week index 
console.log(datenow.getHours()) 
console.log(datenow.getMinutes()) 
console.log(datenow.getSeconds()) 
*/ 
/* Learn JavaScript In Arabic 2021 - #161 - Set Date And getTime

let datenow = new Date();
console.log(datenow)
console.log("#".repeat(66))
datenow.setTime(0)
console.log(datenow)
console.log("#".repeat(66))
datenow.setTime(10000)
console.log(datenow)
console.log("#".repeat(66))
datenow.setDate(1)
console.log(datenow)
console.log("#".repeat(66))
datenow.setFullYear(2022,)//setFullYear(2022,optinal حاجة مش اجبارية )
console.log(datenow)
// الباقي كل كيف كيف الشهر والبايقي 
*/ 

/* # 162 162/188
Learn JavaScript In Arabic 2021 - #162 - Formatting Date And Time

console.log(Date.parse("Oct 25 1982")) // يعطيك كم عمرك 

let date1 = new Date(1067036400000);
console.log(date1)
let date2 = new Date("19822 10 25 "); // 1982,9 : index,25  => سوايع 2, 10, 0
console.log(date2)
let date3 = new Date();
console.log(date3)
let date4 = new Date();
console.log(date4)
let date5 = new Date();
console.log(date5)
let date6 = new Date();
console.log(date6)
let date7 = new Date();
console.log(date7)
let date8 = new Date(1982, 9, 25, 2, 10, 10 );
console.log(date8)
*/ 

 /* 163/188
Learn JavaScript In Arabic 2021 - #163 - Tracking Operations Time

 // start Time
let start = new Date();

// operation 
for(let i=0;i<100000;i++){
 //  document.write(`<div>${i}</div>`)   // تساوي للتحت 
  let div = document.createElement("div"); // هاذي 
  div.appendChild(document.createTextNode(i)); // هاذي 
  document.body.appendChild(div) //  هاذي 
}

// Tiem end
let end = new Date();
// Operation Duration 
let duration = end - start ;
console.log(duration)
*/ 
/* 
164/188
Learn JavaScript In Arabic 2021 - #164 - Generator Function Introduction

function* GenerateNumbers(){
  yield 1;
  // alert("hello after Yield 1")
  console.log("hello after Yield 1")
  yield 2;
  yield 3;
  yield 4;
  yield 5;

}
let generater =  GenerateNumbers();
console.log(typeof generater)
console.log(generater)
console.log(generater.next())
console.log(generater.next())
console.log(generater.next())
console.log(generater.next())
console.log(generater.next())
console.log(generater.next())
for(let value of GenerateNumbers()){
 console.log(value) 
}
// for(let value of generater){ // هاذي متجيش لانا البيانات طلعت وخرجت خلاص 
  // console.log(value) 
 // }
 */ 
 /* 165/188
Learn JavaScript In Arabic 2021 - #165 - Delegate Generator Function
 */ 
/* 
166/188
Learn JavaScript In Arabic 2021 - #166 - Generate Infinite Numbers

 function* GenerateNumbers(){
//   yield 1;
//   yield 2;
//   return "A";
//   yield 3;
//   yield 4;
let index = 0 ;
while(true){
yield index++;
}
 }
let Generater = GenerateNumbers();
console.log(Generater.next())
console.log(Generater.next())
console.log(Generater.next())
console.log(Generater.next())
*/ 
/* Learn JavaScript In Arabic 2021 - #167 - Modules Import And Export 

  let a = 10;
 let arr = [10 ,22 ,55 , 123]
 function saysomthing(){
  return `somthing`
}
export {
  a ,arr ,saysomthing
}
console.log(a)

console.log(arr)

console.log(saysomthing)
*/ 

/* 168/188
Learn JavaScript In Arabic 2021 - #168 - Named vs Default Export And Import All 

let a = 10;
let arr = [10 ,22 ,55 , 123]
function saysomthing(){
 return `somthing`
}
export { a as myNumber ,arr ,saysomthing }
  
export default function syhello(){
  return `HELLO `
}
  */ 
 /* 172/188
Learn JavaScript In Arabic 2021 - #172 - Parse And Stringify

 const myJsonobjectfromserver ='{"username":"nasreddine","Age":21}'
 console.log(typeof myJsonobjectfromserver)
 console.log( myJsonobjectfromserver)

 const myJSobject = JSON.parse(myJsonobjectfromserver)
 console.log(typeof myJSobject)
 console.log(myJSobject)

 myJSobject["username"]="bellatrache"
 myJSobject["Age"]=20

 const myJsonobjecttoserver = JSON.stringify(myJSobject)
 console.log(typeof myJsonobjecttoserver)
 console.log( myJsonobjecttoserver)
 */ 

 /* Learn JavaScript In Arabic 2021 - #173 - Asynchronous vs Synchronous Programming

 // synchronous

//  console.log("1")
//  console.log("2")
//  window.alert("Operation")
//  console.log("3")

 // Asynchronous

 console.log("1")
 console.log("2")
setTimeout(() => console.log("Operation"),3000)
 console.log("3")
 */ 
/*
174/188
Learn JavaScript In Arabic 2021 - #174 - Call Stack And Web API

ذائما ال full stack   
يسبق web APi
يتافيشا الا ب ي بعد فوول ستاك 
*/ 
/* 175/188
Learn JavaScript In Arabic 2021 - #175 - Event Loop And Callback Queue


// console.log("one") 
// setTimeout(()=>{console.log("three")},0)// setTimeout Asynchronous function  تنفد الاخيرة 
// setTimeout(()=>{console.log("four")},0) // setTimeout تنفد الاخيرة 
// console.log("Two")
// let myvar = 100
// myvar += 100;
// console.log(myvar)


// console.log(myvar) // ERROR
// let myvar = 100
//  myvar += 100;

setTimeout(()=>{console.log(myvar)},0)
let myvar = 100
 myvar += 100;
 */ 
/* 177/188
Learn JavaScript In Arabic 2021 - #177 - Request And Response From Real API

let myrequst = new XMLHttpRequest();
myrequst.open("Get","https://api.github.com/users/elzerowebschool/repos",true)
myrequst.send()
//console.log(myrequst)

myrequst.onreadystatechange = function(){
  if(this.readyState === 4 && this.status === 200){
    console.log(this.responseText)
  }
}
*/
/* 178/188
Learn JavaScript In Arabic 2021 - #178 - Loop On Data

// بدلاً من استخدام require
import { myFunction } from './app.js';

myFunction();

let myrequst = new XMLHttpRequest();
myrequst.open("Get","https://api.github.com/users/elzerowebschool/repos",true)
myrequst.send()
//console.log(myrequst)

// تأكد من تعريف repoName قبل استخدامه
let repoName = 'example-repo';

let myRequest = new XMLHttpRequest();
myRequest.open("GET", "text.ajex", true);
myRequest.send();

myRequest.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    console.log(this.responseText);
  }
}

myrequst.onreadystatechange = function(){
  if(this.readyState === 4 && this.status === 200){
   //  console.log(this.responseText)
   let jsdata = JSON.parse(this.responseText)
   // console.log(jsdata)
   for(let i =0 ;i < jsdata.length ; i++){
    let div = document.createElement("div")
    repoName = document.createTextNode(jsdata[i].full_name)
    div.appendChild(repoName)
    document.body.appendChild(div)
   }
  }
}
////////
// webpack.config.js
const express = require('express');
const cors = require('cors');
const app = express();

// استخدم middleware لتجاهل طلبات favicon.ico
app.get('/favicon.ico', (req, res) => res.status(204).end());

app.use(cors({
  origin: 'http://example.com',
  methods: 'GET,POST',
  allowedHeaders: 'Content-Type',
}));

app.get('/data', (req, res) => {
  res.json({ message: 'This is CORS-enabled for a specific origin.' });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


///////
   
//  function CORSsolve(){
//   const xhttp = new XMLHttpRequest()
//   xhttp.onreadystatechange = function(){
//     if(this.readyState === 4 && this.status === 200){
//       document.getElementById
//     }
//   }
//  }
*/ 
/* Learn JavaScript In Arabic 2021 - #179 - Callback Hell Or Pyramid Of Doom

function makeItred(e){
  e.target.style.color = "red"
}
let p = document. querySelector(".text")
p.addEventListener("click",makeItred)
function iamcallback(){
console.log("i am call back function")
}
setTimeout(iamcallback,2000)

setTimeout(()=>{
  console.log("download photo from url")
  setTimeout(()=>{
   console.log("rezise photo")
   setTimeout(()=>{
    console.log("Add logo to the photo")
    setTimeout(()=>{
     console.log("show the photo in website ")
    },4000)
   },3000)
  },2000)
},1000)
*/ 
/* 180/188
Learn JavaScript In Arabic 2021 - #180 - Promise Intro And Syntax 

const mypromise = new Promise((resolvefunction,rejectefunction)=>{
  let connect = true ;
  if(connect){
  resolvefunction("Connection Established ")
  }else{
    rejectefunction(Error("Connection failed"))
  }
})
console.log(mypromise)
let res = (resolvefunction)=> console.log(`Good ${resolvefunction}`);
let rej =   (rejectefunction)=> console.log(`Bad ${rejectefunction}`);

mypromise.then(res,rej)

mypromise.then((resolvefunction)=> console.log(`Good ${resolvefunction}`),
(rejectefunction)=> console.log(`Bad ${rejectefunction}`))

mypromise.then((resolvefunction)=> console.log(`Good ${resolvefunction}`),
(rejectefunction)=> console.log(`Bad ${rejectefunction}`))
*/ 
/* 181/188
Learn JavaScript In Arabic 2021 - #181 - Promise - Then, Catch And Finally

const mypromise = new Promise((resolvefunction,rejectefunction)=>{
let emplayes = []
if (emplayes.length === 4){
  resolvefunction(emplayes)
}else{
  rejectefunction(Error`NO Number 4`)
}
}) 
mypromise.then((resolvefunction=>{
  resolvefunction.length = 2;
 return resolvefunction
   // console.log(resolvefunction)
})).then((resolvefunction=>{
  resolvefunction.length = 1;
  return resolvefunction
  // console.log(resolvefunction)
})).then((resolvefunction=>{
    // return resolvefunction
    console.log(`the chosse emplyes is ${resolvefunction}`)
})).catch((rejectedResion)=>console.log(rejectedResion)).finally(console.log("the operation is Done")) // finailly ديما كاينة 
*/ 
/* Learn JavaScript In Arabic 2021 - #182 - Promise And XHR



const getData = (apilink)=>{
  return new Promise((resolve,reject)=>{
  let myrequst = new XMLHttpRequest();
  myrequst.onload = function(){
    if(this.readyState === 4 && this.status === 200){
    resolve(JSON.parse(this.responseText))
    }else{
      reject(Error("No data found"))
    }
  }
  myrequst.open("GET",apilink)
  myrequst.send()
})
}
getData("https://api.github.com/users/elzerowebschool/repos").then((result)=> {
  result.length = 10;
  return result
}).then((result)=>console.log(result[0].name)).catch((rej)=>console.log(rej))


// "https://api.github.com/users/elzerowebschool/repos"

//  //  console.log(this.responseText)
//  let jsdata = JSON.parse(this.responseText)
//  // console.log(jsdata)
//  for(let i =0 ;i < jsdata.length ; i++){
//   let div = document.createElement("div")
//   repoName = document.createTextNode(jsdata[i].full_name)
//   div.appendChild(repoName)
//   document.body.appendChild(div)
//  }
*/ 
/* 
Learn JavaScript In Arabic 2021 - #183 - Fetch API

fetch("https://api.github.com/users/elzerowebschool/repos").then((result)=>{
  console.log(result)
  let myData = result.json();
  console.log(myData)
  return myData
}).then((myData)=>{
  myData.length = 10;
  return myData;
}).then((full)=>{ //  تقدر تسمي كيما تحب لانا ذن ترجع ابيانات للي بعدخها 
  console.log(full[0].name)
})
  */ 
 /*  184/188
Learn JavaScript In Arabic 2021 - #184 - Promise All And All Settled And Race 

 const myfirsrtPromise = new Promise((res,rej)=>{
   setTimeout(() => {
    rej("Iam the myfirsrtPromise ")
   }, 5000);
 })

 const mySecondPromise = new Promise((res,rej)=>{
  setTimeout(() => {
   res("Iam the mySecondPromise ")
  }, 1000);
})

const mythirdPromise = new Promise((res,rej)=>{
  setTimeout(() => {
   res("Iam the mythirdPromise ")
  }, 2000);
})
// Promise.all([myfirsrtPromise,mySecondPromise,mythirdPromise]) //    first rej     promiseall 
// .then((resolvevalues)=>console.log(resolvevalues),
//       (rejectedvalues)=>console.log(`Rejected:${rejectedvalues}`))

//       Promise.allSettled([myfirsrtPromise,mySecondPromise,mythirdPromise]) //  Promise.allSettled  يديرهم كل 
// .then((resolvevalues)=>console.log(resolvevalues),
//       (rejectedvalues)=>console.log(`Rejected:${rejectedvalues}`))

Promise.race([myfirsrtPromise,mySecondPromise,mythirdPromise]) //  Promise.race rej or res لي لقاخ لول اهزو وخلاص 
 .then((resolvevalues)=>console.log(resolvevalues),
     (rejectedvalues)=>console.log(`Rejected:${rejectedvalues}`))
     */ 
  //   function getData(){
  //  return new Promise((res,rej)=>{
  //   let users =["osama"];
  //   if(users.length > 0){
  //     res("Users found")
  //   }else{
  //     rej("No users found ")
  //   }
  //  })
  //   }
  //   getData().then(
  //     (resolvevalues)=>console.log(resolvevalues),
  //     (rejectedvalues)=>console.log("Rejected" + rejectedvalues)
  //   )
  /* 185/188
Learn JavaScript In Arabic 2021 - #185 - Async And Training 

    async function getData(){
      let users =["nasreddine"];
      if(users.length > 0){
        return "users found"
        }else{
         throw new Error("No users found")
         }
        }
        console.log(getData())
       getData().then(
         (resolvevalues)=>console.log(resolvevalues),
         (rejectedvalues)=>console.log("Rejected" + rejectedvalues)
       )
         */ 
        /* Learn JavaScript In Arabic 2021 - #186 - Await And Training

        const mypromise = new Promise((resolve,reject)=>{
          setTimeout(() => {
            // reject(Error("Iam the Bad Promise "))
              resolve("Iam the Good Promise ")
           }, 3000);
         })
      
         async function readdata(){
          console.log("Before Data")
         // mypromise.then((resolvedvalues)=>console.log(resolvedvalues))
         // console.log(await mypromise.catch((err)=>err)) // await اخليه يستنا تنفيد promise
         console.log(await mypromise)
         console.log("after Data")
         }
         readdata();
         */ 
        /* Learn JavaScript In Arabic 2021 - #187 - Try, Catch And Finally With Fetch

         const mypromise = new Promise((resolve,reject)=>{
          setTimeout(() => {
              resolve("Iam the Good Promise ")
           }, 3000);
         })
      
         async function readdata(){
          console.log("Before Data")
          try{
          let myData =await fetch("https://api.github.com/users/elzerowebschool/repos")
          console.log( await myData.json())
          //  console.log(await mypromise)
          }catch(reason){
           console.log(`Reason :${reason}`)
          }finally{
            console.log("after Data")

          }
         }
         readdata();
         */ 