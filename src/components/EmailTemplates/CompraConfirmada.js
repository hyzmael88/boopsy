// templates/purchaseConfirmationTemplate.js

export const compraConfirmada = (packageLink) => `
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Compra Confirmada</title>
    <style>
        body {
            font-family: Gabarito, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
        }
        .container {
            background-color: #ffffff;
            padding: 20px;
            border-radius: 10px;
            max-width: 600px;
            margin: 20px auto;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .header {
            font-family: Anton, sans-serif;
            text-align: center;
            padding-bottom: 20px;
        }
        .header img {
            width: 150px;
        }
        .content {
            font-size: 16px;
            line-height: 1.6;
            color: #333333;
        }
        .content p {
            margin: 20px 0;
        }
        .btn {
            display: block;
            width: fit-content;
            margin: 20px auto;
            padding: 10px 20px;
            background-color: #FF66AE;
            color: #ffffff;
            text-decoration: none;
            border-radius: 25px;
            font-weight: bold;
        }
        .footer {
            margin-top: 30px;
            text-align: center;
            font-size: 12px;
            color: #777777;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <img src="https://www.selvedgeshop.com/logo.svg" alt="Logo">
        </div>
        <div class="content">
            <h2>Compra Confirmada</h2>
            <p>Hola, tu compra ha sido confirmada. Gracias por tu compra.  </p>
            <p>Empezaremos a procesar tu pedido de inmediato. Te estaremos enviando el estado de tu pedido.</p>
        </div>
        <div class="footer">
            <p>&copy; Todos los derechos reservados.</p>
        </div>
    </div>
</body>
</html>
`;
