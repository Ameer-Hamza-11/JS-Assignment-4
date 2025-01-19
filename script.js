function otp() {
    console.clear();
console.log(Math.trunc(Math.random(4) *11111))
// alert(Math.trunc(Math.random() *10000))
}



















const stds = ["Hamza","Aman","muied","sufyan","ayan","muteeb","rehman","anas","idrees","adnan","owais",'furqan','saifi','Bahis','saad','wasay','basit','sanaullah']


function gen() {
    console.clear()
    const index = Math.trunc(Math.random() * stds.length);
    console.log(stds[index]);

}