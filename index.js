//how to use filter in js?
let total = ["10%", "1000", "5%", "2000"];
let percentage = total.filter(function(item){
  return typeof item == 'string' && item.includes('%');
});
console.log(percentage);
let absolute = total.filter(function(item){
  return typeof item == 'number' || !isNaN(item);
});
console.log(absolute);


