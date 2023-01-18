const newCartSide = ()=>{
    return {
        pegs: [1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1
        ]
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