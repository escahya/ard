
//Username Validation
function valid_username(usr){
    
    let str = usr.slice(0,1);
 
    

    if ( str.match(/[A-Z]/g) != null || usr.match(/[@./#&+-]/g) != null){
        console.log("Username tidak boleh di awali huruf besar dan symbol selain _")
        
        return false;
    }else {
        if(usr.length <5 || usr.length >12) {
        console.log("Username, minimal 5 karakter dan maksimal 12 karakter")
        
        return false;
        }else{
            console.log("Username tervalidasi")
            
            
            return true;

            }
     }
    
}
// Password validation
function valid_password(pwd){
    let patt1= /[!@#$%^&*(),.?":{}|<>_\-]/g;
    let patt2= /[A-Za-z]/g;
    let patt3= /[0-9]/g;

    let sym=pwd.match(patt1);
    let huruf=pwd.match(patt2);
    let num=pwd.match(patt3);

    let huruf2=huruf.join();
    // console.log(sym)
    // console.log(huruf)
    // console.log(num)

    let lgs = sym.length;
    let lgh = huruf.length;
    let lgn = num.length;
    // console.log(lg)

    if (lgs != 1 || lgn != 1 || lgh != 5 || huruf2.match(/[A-Z]/g) == null  ){
        console.log("Password harus terdiri dari 7 digit karakter dengan kombinasi 1 simbol, 1 angka dan 5 huruf besar")
        return false;
    }else{
        console.log("Password tervalidasi")
        return true;
    }
}

const username ="aaaaaa_aaS";
const password = "1AAAAA#"
valid_username(username)
valid_password(password)