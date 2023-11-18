var paulo = {
    name:'Paul',
    vitories : 0,
    draws: 0,
    loss: 0,
    points: 0
};

var rafa = {
    name:'Rafa2',
    vitories : 0,
    draws: 0,
    loss: 0,
    points: 0
};

// alert (first.vitories);

var table = document.getElementById('playersTable');

showTable();

function showTable () {
    // for (var i = 0; i<3; i++) {
        table.innerHTML =  `
        <tr>
            <td>`+ paulo.name +`</td>
            <td>${paulo.vitories}</td>
            <td>${paulo.draws}</td>
            <td>${paulo.loss}</td>
            <td>${paulo.points}</td>
            <td><button onClick="addVictory(paulo)">Vitória</button></td>
            <td><button onClick="addDraw(paulo)">Empate</button></td>
            <td><button onClick="addLoss(paulo)">Derrota</button></td>
        </tr>
    
    `
    // }



};



function addVictory(player) {
    player.vitories ++;
    player.points += 3;
    console.log(player);
    showTable();

}
function addDraw(player) {
    player.draws ++;
    player.points += 1;
    console.log(player);
    showTable();

}
function addLoss(player) {
    player.loss ++;
    console.log(player);
    showTable();
    
}