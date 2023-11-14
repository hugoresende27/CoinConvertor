var secret = parseInt(Math.random() * 101);



var count = 0;

console.log(secret)


while (secret != read && count <= 3) {
    count++;
    var read = prompt('Insert a number between 1 and 100');
    if (read == secret) {
        alert('You are correct in ' + count + ' chances')
    } else if (read < secret) {
        alert('It is bigger')
    } else if (read > secret) {
        alert('It is smaller')
    } 
    console.log('count :: '+count)
} 

if (count >= 3) {
    alert('YOU LOOSE');
}

