import express from 'express'
import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'

dotenv.config()


const verifyAuthToken = (req: express.Request, res: express.Response,next: Function)=> {
try{
    //Get Token Befor proceed
   const authorizationHeader = req.headers.authorization;
    // @ts-ignore
    const token =authorizationHeader.split(' ')[1];
    const decoded=jwt.verify(token, String(process.env.TOKEN_SECRET));
    console.log(`the auth has been `)
    next();
 } catch(err) {
    res.status(401)
    res.json('Access denied, invalid token')
}
}
export default verifyAuthToken;