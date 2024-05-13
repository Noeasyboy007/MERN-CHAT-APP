export const signup =async(req,res)=>{
    try {
        const{fullName,username,password,confirmPassword,gender} = req.body;
    } 
    catch (error) {
        
    }
}

export const login = (req,res)=>{
    res.send('Login Page')
    console.log('Login User');
}

export const logout =(req,res)=>{
    res.send('Logout Page')
    console.log('Logout User');
}