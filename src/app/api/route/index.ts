import { NextResponse } from "next/server";
import nodemailer from "nodemailer"
import { NextApiRequest, NextApiResponse } from 'next';


const transporter = nodemailer.createTransport({
    service : "gmail",
    auth :{
        user : process.env.NEXT_PUBLIC_SENDER_USER,
        pass : process.env.NEXT_PUBLIC_SENDER_PASS
    }
})

export async function POST(request: any) {
    try {
        const [name, email, message] = await request.json

        if (!name || !email || !message)
            return NextResponse.json(
                { error: "Name, Email and Message are required!" },
                { status : 400}
            )

        const mailOption = {
            from: process.env.NEXT_PUBLIC_SENDER_USER,
            to: process.env.NEXT_PUBLIC_RECIEVER_USER,
            subject : "new contact form submission",
            text : `name : ${name}, email : ${email}, message : ${message}`
        }

        await transporter.sendMail(mailOption)

        return NextResponse.json(
            { error: "Contact form submitted!" },
            { status : 200}
        )

    } catch (e) {
        console.log("Something wrong",e)
        return NextResponse.json(
            { error: "Something went wrong" },
            { status : 500}
        )
    }
}
