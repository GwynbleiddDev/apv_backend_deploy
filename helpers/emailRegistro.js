import nodemailer from "nodemailer";


const emailRegistro = async (datos) => {
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
        subject: 'Comprueba tu cuenta en APV',
        text: 'Comprueba tu cuenta en APV',
        html: `<p>Hola: ${nombre}, compruba tu cuenta en APV</p>
            <p>Tu Cuenta ya esta lista, solo debes comprobarla en el siguiente enlace: <a href="${process.env.FRONTEND_URL}/confirmar/${token}">Comprobar Cuenta</a> </p>
            <p>Si tu no creaste esta cuenta, ignora este mensaje</p>
        `
    });

    console.log("mensaje enviado: %s", info.messageId);
}




export default emailRegistro;