function showName(first, last){
    var nameIntro = 'Your name is';
    function makeFullName(){
        return nameIntro + first + ' ' + last;
    }
    
    return makeFullName();   
}

// Example 2
showName('Eduardo', 'Oviedo');

function celebrityID(){
    var celebrityID = 999;
    
    return{
        getID: function(){
            return celebrityID;
        },
        setID: function(id){
            celebrityID = id;
        }
    };
}

var celebrity = celebrityID();
console.log(celebrity.getID());
celebrity.setID(666);
console.log(celebrity.getID());