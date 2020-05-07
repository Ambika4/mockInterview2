//home page for sign-in and sign-up
module.exports.home=function(req,res)
{
    return res.render('home', {
        title: "Carrier Camp | Home"
    });
}