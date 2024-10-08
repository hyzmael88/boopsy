import { verify } from 'jsonwebtoken'

export default function profileHandler(req, res) {
    const { myTokenName } = req.cookies
    if (!myTokenName) {
        return res.status(401).json({ error: 'no-token' })
    }
    try {
        //console.log(process.env.NEXT_PUBLIC_JWT_SECRET)
        const user = verify(myTokenName, process.env.NEXT_PUBLIC_JWT_SECRET)
        //console.log(user)
        return res.json({
            name: user.name,
            email: user.email

        })

    } catch (error) {
        return res.status(401).json({ error: 'invalid token' })
    }
}