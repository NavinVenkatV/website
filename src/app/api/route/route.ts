import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "navinvenkatv@gmail.com",
    pass: "nbtngmghheazdrzj"
  },
});

export async function POST(request: any) {
  try {
    console.log("Entered api")
    // Parse the request body as JSON
    const { name, email, message } = await request.json();

    // Check if all required fields are present
    if (!name || !email || !message)
      return NextResponse.json(
        { error: "Name, Email, and Message are required!" },
        { status: 400 }
      );

    // Set up the email options
    const mailOption = {
      from:  "navinvenkatv@gmail.com",
      to: "navinvenkatv@gmail.com",
      subject: "New contact form submission",
      text: `name: ${name}, email: ${email}, message: ${message}`,
    };

    // Send the email
    await transporter.sendMail(mailOption);

    // Return a success response
    return NextResponse.json(
      { message: "Contact form submitted successfully!" },
      { status: 200 }
    );
  } catch (e) {
    console.log("Something went wrong", e);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
