import nodemailer from "nodemailer";


const emailOlvidePassword = async (datos) => {
    var transport = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });


    // Enviar el Email
    const { email, nombre, token } = datos;

    const info = await transport.sendMail({
        
        from: 'APV - Administrador de Pacientes de Veterinario',
        to: email,
        subject: 'Reestablece tu Password',
        text: 'Reestablece tu Password',
        html: `<p>Hola: ${nombre}, Has solicitado reestablecer tu password</p>
            
            <p>Sigue el siguiente enlace para generar tu nuevo Password:<a href="${process.env.FRONTEND_URL}/olvide-password/${token}">Reestablecer Password</a> </p>
            <p>Si no solicitaste el cambio de password, ignora este mensaje</p>
        `
    });

    console.log("mensaje enviado: %s", info.messageId);
}




export default emailOlvidePassword;