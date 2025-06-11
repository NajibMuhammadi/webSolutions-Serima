import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    try {
        const body = await req.json();

        const { name, email, message } = body;

        const { error } = await resend.emails.send({
            from: "Acme <onboarding@resend.dev>",
            to: ["najibmuhammadi003@gmail.com"],
            subject: `New message from ${name}`,
            html: `
            <div style="font-family: Arial, sans-serif; background-color: #f4f4f7; padding: 20px;">
                <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);">
                <tr>
                    <td style="padding: 20px; background-color: #4f46e5; color: #ffffff; text-align: center;">
                    <h2 style="margin: 0; font-size: 24px;">Nytt meddelande från din hemsida</h2>
                    </td>
                </tr>
                <tr>
                    <td style="padding: 30px;">
                    <p style="font-size: 16px; color: #333;"><strong>Avsändare:</strong> ${name}</p>
                    <p style="font-size: 16px; color: #333;"><strong>E-post:</strong> ${email}</p>
                    <p style="font-size: 16px; color: #333;"><strong>Meddelande:</strong></p>
                    <div style="font-size: 15px; color: #555; background-color: #f9f9f9; padding: 15px; border-radius: 6px; margin-top: 10px; white-space: pre-line;">
                        ${message}
                    </div>
                    </td>
                </tr>
                <tr>
                    <td style="padding: 20px; background-color: #f0f0f0; text-align: center; font-size: 13px; color: #888;">
                    Det här meddelandet skickades via kontaktformuläret på din hemsida.
                    </td>
                </tr>
                </table>
            </div>
            `,
        });

        if (error) {
            return new Response(JSON.stringify({ error }), {
                status: 500,
                headers: { "Content-Type": "application/json" },
            });
        }

        return new Response(JSON.stringify({ success: true }), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    } catch (error) {
        return new Response(JSON.stringify({ error: "Something went wrong" }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }
}
