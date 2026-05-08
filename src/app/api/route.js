const { NextResponse } = require("next/server");

const post = function(req,res){
 console.log('data::',req.body);
return NextResponse(req.body)
}