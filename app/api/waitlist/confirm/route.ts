import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { google } from "googleapis";
import mongoose from "mongoose";
import SMTPTransport from "nodemailer/lib/smtp-transport";

interface CustomSMTPTransportOptions extends SMTPTransport.Options {
  pool?: boolean;
  maxConnections?: number;
  maxMessages?: number;
  rateLimit?: number;
  rateDelta?: number;
}

const OAuth2 = google.auth.OAuth2;

const oauth2Client = new OAuth2(
  process.env.CLIENT_ID!,
  process.env.CLIENT_SECRET!,
  "https://developers.google.com/oauthplayground"
);

oauth2Client.setCredentials({
  refresh_token: process.env.REFRESH_TOKEN!,
});

const WaitlistSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String },
  excitedAbout: { type: String },
  createdAt: { type: Date, default: Date.now },
});

const Waitlist =
  mongoose.models.Waitlist || mongoose.model("Waitlist", WaitlistSchema);

const connectToDB = async () => {
  if (mongoose.connection.readyState >= 1) return;
  if (!process.env.MONGODB_URI) {
    throw new Error("Missing MONGODB_URI in environment variables");
  }
  await mongoose.connect(process.env.MONGODB_URI);
};

async function sendWaitlistEmail(to: string, fullName: string) {
  try {
    const accessTokenResponse = await oauth2Client.getAccessToken();
    const accessToken = accessTokenResponse.token as string;

    const transportOption: CustomSMTPTransportOptions = {
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: process.env.EMAIL!,
        clientId: process.env.CLIENT_ID!,
        clientSecret: process.env.CLIENT_SECRET!,
        refreshToken: process.env.REFRESH_TOKEN!,
        accessToken,
      },
      pool: true,
      maxConnections: 5,
      rateDelta: 1000,
      rateLimit: 30,
    };
    const transporter = nodemailer.createTransport(transportOption);

    const mailHTML = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Welcome to the Waitlist!</title>
        <style>
          body {
            margin: 0;
            padding: 0;
            background-color: #e6ffea;
            font-family: Arial, sans-serif;
          }
          .container {
            background: linear-gradient(135deg, #00d959, #009d65);
            padding: 40px;
            text-align: center;
          }
          .content {
            background-color: #ffffff;
            color: #0a2b1e;
            margin: 20px auto;
            padding: 30px;
            border-radius: 8px;
            max-width: 600px;
            box-shadow: 0 4px 8px rgba(0,0,0,0.1);
          }
          .button {
            background-color: #00d959;
            color: #ffffff;
            text-decoration: none;
            padding: 12px 24px;
            border-radius: 4px;
            font-weight: bold;
            display: inline-block;
            margin-top: 20px;
          }
          .footer {
            font-size: 12px;
            color: #555555;
            margin-top: 20px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>Welcome, ${fullName}!</h1>
          <div class="content">
            <h2>Thanks for joining the WePay Waitlist</h2>
            <p>
              We’re thrilled to have you onboard. Your journey towards a seamless payment experience starts here.
              Stay tuned for the latest updates and exclusive sneak peeks.
            </p>
            <a href="https://wepay.com/updates" class="button">View Updates</a>
          </div>
          <div class="footer">
            <p>If you did not sign up for this waitlist, please ignore this email.</p>
          </div>
        </div>
      </body>
      </html>
    `;

    const mailOptions = {
      from: `"WePay Waitlist" <${process.env.EMAIL}>`,
      to,
      subject: "Welcome to the WePay Waitlist!",
      html: mailHTML,
    };

    const result = await transporter.sendMail(mailOptions);
    console.log({ result });
    return result;
  } catch (error) {
    console.error("Error sending waitlist email:", error);
    throw error;
  }
}

export async function POST(request: Request) {
  try {
    await connectToDB();

    const { email, fullName, phone, excitedAbout } = await request.json();
    if (!email || !fullName) {
      return NextResponse.json(
        { error: "Missing required fields: email and fullName" },
        { status: 400 }
      );
    }

    const existingUser = await Waitlist.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { error: "You have already joined the waitlist" },
        { status: 409 }
      );
    }

    const newEntry = new Waitlist({ email, fullName, phone, excitedAbout });
    await newEntry.save();

    await sendWaitlistEmail(email, fullName);

    return NextResponse.json(
      { message: "Waitlist email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error in POST /api/waitlist/confirm:", error);
    return NextResponse.json(
      { error: "Failed to send waitlist email" },
      { status: 500 }
    );
  }
}
