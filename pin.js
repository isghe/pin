const newCartSide = ()=>{
    return {
        // https://stackoverflow.com/questions/4852017/how-to-initialize-an-arrays-length-in-javascript
        pegs: Array.apply (null, Array(14)).map (() => {return 1;})
    };
};
const main = ()=>{
    console.log ("pin");
    const cartA = [
        newCartSide (),
        newCartSide ()
    ];
    console.log (cartA);
};
main ();
