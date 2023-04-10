
    function computer(){
        return  Math.floor((Math.random() *9) + 1);
    }

    function win(){
        if (tabla[0]==tabla[1] && tabla[1]==tabla[2] && tabla[2]!="?") return true;
        if (tabla[3]==tabla[4] && tabla[4]==tabla[5] && tabla[5]!="?") return true;
        if (tabla[6]==tabla[7] && tabla[7]==tabla[8] && tabla[8]!="?") return true;
        if (tabla[0]==tabla[3] && tabla[3]==tabla[6] && tabla[6]!="?") return true;
        if (tabla[1]==tabla[4] && tabla[4]==tabla[7] && tabla[7]!="?") return true;
        if (tabla[2]==tabla[5] && tabla[5]==tabla[8] && tabla[8]!="?") return true;
        if (tabla[0]==tabla[4] && tabla[4]==tabla[8] && tabla[8]!="?") return true;
        if (tabla[2]==tabla[4] && tabla[4]==tabla[6] && tabla[6]!="?") return true;
        return false;
    }
    
    function valid2(tabla, rasp){
        if(rasp>0 && rasp<10 && tabla[rasp-1]=="?") return true;
        return false;
    }

    function valid(tabla){
        for(var i=0; i<9; i++)
        {
            if(tabla[i]=="?") return true;
        }
        return false;
    }

    function alegere(tabla, semn){
        var x = prompt("Unde vrei sa pui urmatorul simbol?");
        if(valid2(tabla, x)) {
            if (runda%2==1) tabla[x-1] = semn;
            else{
                if(semn=="X") tabla[x-1] = "0";
                else tabla[x-1] = "X";
            }
            runda += 1;
        }
        else {
            alert("Pozitia nu e valida!");
            alegere(tabla,semn);
        }
    }
    function alegere_calculator(tabla, semn){
        var x = computer();
        if(valid2(tabla, x)) {
            if (runda%2==1) tabla[x-1] = semn;
            else{
                if(semn=="X") tabla[x-1] = "0";
                else tabla[x-1] = "X";
            }
            runda += 1;
        }
        else {
            alert("Pozitia nu e valida!");
            alegere_calculator(tabla,semn);
        }
    }
    function printtt(tabla){
        var ret = "";
        for( var i = 1; i<=3; i++){
            ret += "|";
            ret += tabla[(i-1)*3];
            ret +="|";
            ret += tabla[(i-1)*3+1];
            ret +="|";
            ret += tabla[(i-1)*3+2];
            ret +="|";
            ret +="\n";
        }
        return ret;

    }

    var runda = 1;

    var nume = prompt("Hai sa jucam X si 0 ! Cum te cheama?");
    var rasp = prompt("Buna "+nume+"! Cu ce vrei sa joci? X sau 0? X incepe primul.")
    var alegere_jucator = rasp;
    rasp = "X";
    var tabla = new Array();
    var blank = "?";
    for( var i = 1; i<=9; i++){
        tabla.push(blank)
    }

    var y = printtt(tabla);
    console.log(y);

    var remiza = true;

    if(alegere_jucator=="X"){
        
        while(valid(tabla)){

            if(runda%2==1){
                alegere(tabla, rasp, runda);
                var y = printtt(tabla);
                console.log(y);
            }
            else{
                alegere_calculator(tabla,rasp,runda);
                var y = printtt(tabla);
                console.log(y);
            }
        
        if(win()){
            if(runda%2==0) {
                if(alegere_jucator == "X" ) alert("Bravo, "+nume+" ,ai castigat!");
                else alert("Ai pierdut! :(");
            }
            else {
                if(alegere_jucator == "0" ) alert("Bravo, "+nume+" ,ai castigat!");
                else alert("Ai pierdut! :(");
            }
            remiza=false;
            break;
        }
        }
    }
    else{
        while(valid(tabla)){

            if(runda%2==1){
                alegere_calculator(tabla, rasp, runda);
                var y = printtt(tabla);
                console.log(y);
            }
            else{
                alegere(tabla,rasp,runda);
                var y = printtt(tabla);
                console.log(y);
            }
        
        if(win()){
            if(runda%2==0) {
                if(alegere_jucator == "X" ) alert("Bravo, "+nume+" ,ai castigat!");
                else alert("Ai pierdut! :(");
            }
            else {
                if(alegere_jucator == "0" ) alert("Bravo, "+nume+" ,ai castigat!");
                else alert("Ai pierdut! :(");
            }
            remiza=false;
            break;
        }
        }
    }

    
    
    if(remiza==true){
        alert("Remiza!");
    }