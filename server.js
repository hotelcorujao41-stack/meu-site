const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  const ip =
    req.headers["x-forwarded-for"]?.split(",")[0]?.trim() ||
    req.socket.remoteAddress;

  console.log("Acesso:", {
    ip: ip,
    horario: new Date().toISOString(),
    navegador: req.get("user-agent")
  });

  res.send(`
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>Meu site</title>
    </head>
    <body>
      <h1>Bem-vindo ao meu site</h1>
      <p>Este site registra dados técnicos de acesso para segurança e funcionamento.</p>
    </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log("Servidor iniciado na porta " + PORT);
});
