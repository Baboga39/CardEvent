import nodemailer from "nodemailer";

export async function POST() {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, 
      },
    });

    await transporter.sendMail({
      from: `"Dinner Invite 💖" <${process.env.EMAIL_USER}>`,
      to: [
        "ngochai06122002@gmail.com",
        "phannhung05121999@gmail.com",
      ],
      subject: "Dinner Confirmation 💌",
      html: `
        <div style="font-family: sans-serif; line-height: 1.6">
          <h2>💖 Someone accepted your invitation!</h2>
          <p>The dinner date has been confirmed.</p>
          <p>Time: 7:00 PM</p>
          <p>Location: Ruby Koi Bistro</p>
          <br/>
          <p style="color: #888">Sent with love 💕</p>
        </div>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error(error);
    return new Response("Error sending mail", { status: 500 });
  }
}