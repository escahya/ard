function formatInput(A,B,C){

    // console.log(A)
    // console.log(B)
    // console.log(C)

    let Ary=[B,C];
    // console.log(Ary)

    let AA = A.match(/[0-9]/g);
    // console.log("asdasda "+AA.length)
    


    let AAA0 = AA[0].toString();
    let AAA1 = AA[1].toString();

    let Av1 = A.match(/[a-zA-z]/g);

    // console.log(AAA0)
    // console.log(AAA1)

    let Hasil = Av1.join("") +" "+ Ary[0] + " " + Ary [1];
    console.log(Hasil)

    

}


formatInput("Hello {0} {1}" , "Arkademian" , "Fighters!" );
