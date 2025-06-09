import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    try {
        console.log("API: Request received");

        const body = await req.json();
        console.log("API: Parsed body:", body);

        const { name, email, message } = body;

        const { error } = await resend.emails.send({
            from: "Acme <onboarding@resend.dev>",
            to: ["najibmuhammadi003@gmail.com"],
            subject: `New message from ${name}`,
            html: `
        <div style="font-family: sans-serif; color: #333;">
          <h2>New message from ${name}</h2>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        </div>
      `,
        });

        console.log("API: Email send result error:", error);

        if (error) {
            console.log("API: Sending error response");
            return new Response(JSON.stringify({ error }), {
                status: 500,
                headers: { "Content-Type": "application/json" },
            });
        }

        console.log("API: Sending success response");
        return new Response(JSON.stringify({ success: true }), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    } catch (error) {
        console.error("API: Exception caught:", error);
        return new Response(JSON.stringify({ error: "Something went wrong" }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }
}
