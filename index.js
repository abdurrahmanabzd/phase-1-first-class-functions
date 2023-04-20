
function receivesAFunction (thing) {
    return thing();
  }

 function returnsANamedFunction(){
    function insider(names){
        return 0;
    };
    return insider;
 }

 function returnsAnAnonymousFunction(){

    return function (){return 0;};
 }