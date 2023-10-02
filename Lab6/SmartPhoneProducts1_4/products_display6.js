
const store_name = "Christopher";
top_title.innerHTML = (store_name + "'s Used Smart Phone Store");

bottom_title.innerHTML = ("Your one stop shop for used phones - " + store_name + "'s");

let hits = 0;
let spins = 0;
let over_half = false; 
hits_span.innerHTML = hits;
spins_span.innerHTML = spins;

function changeClassName(element) {
    if (element.className == 'item') {
        spins = spins + 1
        element.className = 'item rotate';
    } 

    //spins = spins + 1;
    if (spins < 2 * hits && hits < spins) {
        //wins = true;
        over_half = true;
    } else {
        //wins = false
    }
    //win_span.innerHTML = wins;
    win_span.innerHTML = over_half;
    spins_span.innerHTML = spins;
    hits_spin_span.innerHTML = (hits_span.innerHTML / spins_span.innerHTML).toFixed(2);
    // -- Winning progress depends on hits/spins
    let hits_spins_ratio = hits/spins;
    let progress;
    /*if (hits_spins_ratio > 0) {
        progress = 'On your way!';
        if (hits_spins_ratio >= 0.25) {
            progress = 'Almost there!';
            if (hits_spins_ratio >= 0.5 ) {
                if (hits < spins) { 
                    progress = 'You win!';
                }
            }
        }
    }
    else {
        progress = 'Get going!' ;
    }
    win_span.innerHTML = progress;
}*/

// -- Winning progress depends on hits/spins

    if (hits_spins_ratio > 0) {
        if (hits_spins_ratio >= 0.5 && hits < spins) {
            progress = 'You win!';
    }   else if (hits_spins_ratio >= 0.25) {
            progress = 'Almost there!';
    }   else {
            progress = 'On your way!';
    }
} else {
    progress = 'Get going!';
}
win_span.innerHTML = progress;
}

function resetClassName(element) {
    if (element.className == 'item rotate') {
        hits = hits += 2;
        element.className = 'item';
    } else {
        changeClassName(element)
    }
    
    if (spins < 2 * hits && hits < spins) {
        //wins = true
        over_half = true;
    } else {
        //wins = false
    }
    //win_span.innerHTML = wins
    win_span.innerHTML = over_half;
    hits_span.innerHTML = hits;
    hits_spin_span.innerHTML = (hits_span.innerHTML/spins_span.innerHTML).toFixed(2);
}