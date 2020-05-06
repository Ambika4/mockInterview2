const passport=require('passport');
//importing jwt startegy
const JWTStrategy=require('passport-jwt').Strategy;
//It will help to extract jwt from header
const ExtractJWT=require('passport-jwt').ExtractJwt;

//we need user for authentication or establishing authentication
const Employee=require('../models/employee');

let opts={
    jwtFromRequest:ExtractJWT.fromAuthHeaderAsBearerToken,
    //key for encrypt and decrypt
    secretOrKey:'employee'
}

passport.use(new JWTStrategy(opts,function(jwtPayLoad,done){
    //it is storing user information in payload
   Employee.findById(jwtPayLoad._id,function(err,employee){
       if(err){console.log('Error in finding user in jwt');return;}
       if(employee){
           return done(null,employee);
       }else{
           return done(null,false);
       }
   }) 
}));

module.exports=passport;