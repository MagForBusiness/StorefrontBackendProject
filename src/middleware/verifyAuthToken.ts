import express from 'express'


export const verifyAuthToken = (req: express.Request, res: express.Response,next: Function
    ): void => {
try{
    //Get Token Befor proceed
   const authorizationHeader = req.headers.authorization;
    // @ts-ignore
    const token =authorizationHeader.split(' ')[1];
    // @ts-ignore
    const decoded=jwt.verify(token, process.env.TOKEN_SECRET);
    console.log(`the auth has been ${decoded}`)
    next();
 } catch(err) {
    res.status(401)
    res.json('Access denied, invalid token')
}
}