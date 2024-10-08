
import {verify} from 'jsonwebtoken'
import cookie, { serialize } from 'cookie'

export default function logoutHandler(req,res){
    const {myTokenName} = req.cookies

    if(!myTokenName){
        return res.status(401).json({error: 'no-token'})
    }
    
    try {
        
        verify(myTokenName, process.env.NEXT_PUBLIC_JWT_SECRET)
        const serialized = serialize('myTokenName',null, {
            httpOnly: true,
            sameSite: 'strict',
        maxAge: 0,
        path: '/'
        })
        res.setHeader('Set-Cookie', serialized)
        res.status(200).json('logout succesfully')
    } catch (error) {
        return res.status(401).json({error:'invalid token'})
    }


}