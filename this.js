var obj1={
    id:1,
    name:"bindu",
    sibling:true,
    state:"TS"
}
var obj2={
    id:2,
    name:"akhila",
    sibling:true,
    state:"TS"
}
var obj3={
    id:3,
    name:"vennela",
    sibling:true,
    state:"TS"
}
var obj4={
    id:4,
    name:"Meghna",
    sibling:true,
    state:"TS"
}
var obj5={
    id:5,
    name:"pujitha",
    sibling:true,
    state:"TS"
}
var obj6={
    id:6,
    name:"pavani",
    sibling:true,
    state:"TS"
}
var obj7={
    id:7,
    name:"sruthi",
    sibling:true,
    state:"TS"
}
var obj8={
    id:8,
    name:"rajitha",
    sibling:true,
    state:"TS"
}
var obj9={
    id:9,
    name:"Manisha",
    sibling:true,
    state:"TS"
}
var obj10={
    id:10,
    name:"Manaswini",
    sibling:true,
    state:"TS"
}
details=function(p,q){
    console.log(`A person with the name ${this.name} and with id ${this.id} and having siblings ${this.sibling}, came from ${this.state},${p} ${q}`)
}

details1=function(p,q){
    return `A person with the name ${this.name} and with id ${this.id} and having siblings ${this.sibling}, came from ${this.state},${p} ${q}`
}

details.call(obj1,"she want to join in 10kcoders","for becoming fullstack developer")
details.apply(obj1,["she want to join in 10kcoders","for becoming fullstack developer"])
let object1=details1.bind(obj1,"she want to join in 10kcoders","for becoming fullstack developer")
console.log(object1())

details.call(obj2,"she want to join in 10kcoders ","for becoming full sack developer")
details.apply(obj2,["she want to join in 10kcoders","for becoming full stack developer"])
let object2=details1.bind(obj2,"she want to join in 10kcoders","for becoming fullstack developer")
console.log(object2())

details.call(obj3,"she want to join in 10kcoders ","for becoming full sack developer")
details.apply(obj3,["she want to join in 10kcoders","for becoming full stack developer"])
let object3=details1.bind(obj3,"she want to join in 10kcoders","for becoming fullstack developer")
console.log(object3())

details.call(obj4,"she want to join in 10kcoders ","for becoming full sack developer")
details.apply(obj4,["she want to join in 10kcoders","for becoming full stack developer"])
let object4=details1.bind(obj4,"she want to join in 10kcoders","for becoming fullstack developer")
console.log(object4())

details.call(obj5,"she want to join in 10kcoders ","for becoming full sack developer")
details.apply(obj5,["she want to join in 10kcoders","for becoming full stack developer"])
let object5=details1.bind(obj5,"she want to join in 10kcoders","for becoming fullstack developer")
console.log(object5())

details.call(obj6,"she want to join in 10kcoders ","for becoming full sack developer")
details.apply(obj6,["she want to join in 10kcoders","for becoming full stack developer"])
let object6=details1.bind(obj6,"she want to join in 10kcoders","for becoming fullstack developer")
console.log(object6())

details.call(obj7,"she want to join in 10kcoders ","for becoming full sack developer")
details.apply(obj7,["she want to join in 10kcoders","for becoming full stack developer"])
let object7=details1.bind(obj7,"she want to join in 10kcoders","for becoming fullstack developer")
console.log(object7())

details.call(obj8,"she want to join in 10kcoders ","for becoming full sack developer")
details.apply(obj8,["she want to join in 10kcoders","for becoming full stack developer"])
let object8=details1.bind(obj8,"she want to join in 10kcoders","for becoming fullstack developer")
console.log(object8())

details.call(obj9,"she want to join in 10kcoders ","for becoming full sack developer")
details.apply(obj9,["she want to join in 10kcoders","for becoming full stack developer"])
let object9=details1.bind(obj9,"she want to join in 10kcoders","for becoming fullstack developer")
console.log(object9())

details.call(obj10,"she want to join in 10kcoders ","for becoming full sack developer")
details.apply(obj10,["she want to join in 10kcoders","for becoming full stack developer"])
let object10=details1.bind(obj10,"she want to join in 10kcoders","for becoming fullstack developer")
console.log(object10())