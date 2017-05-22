/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//Vídeo 05
function getTasks() {
    this.items = [
        {nome: "Item 1", finalizada: false}, //Vídeo 06
        {nome: "Item 2", finalizada: false},
        {nome: "Item 3", finalizada: false},
        {nome: "Item 4", finalizada: false}
    ];
    
    this.add = function (item) {// Vídeo 09
        this.items.push(item);
    };
    
    this.remove = function (item){ //Vídeo 08
        var pos = this.items.indexOf(item);
        this.items.splice(pos, 1);
    };
}

