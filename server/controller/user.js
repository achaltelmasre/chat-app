import user from "./../model/User.js";
import md5  from "md5";

const  postApiSingup = async (req, res) => {
    const { email, password, name } = req.body;

    const newUser = new user({
        name,
        email,
        password: md5(password),
    })

    const saveUser = await newUser.save();
    try{
        res.json({
            success: true,
            data: saveUser,
            message: 'Signup successfully !'
        })
    }
    catch(e) {
        res.json({
            success:false,
            message: e.message
        })
    }
}

const postApiLogin = async (req, res) => {
    const {email, password } = req.body;
    const findUser = await user.findOne({ password:md5(password), email })

    if (findUser == null) {
        return res.json({
            success: false ,
            message: "invalid  password !"
        })
    }
    res.json({
        success: true,
        data: findUser,
        message: "Login successfully !"
    })
}

export { postApiSingup , postApiLogin }