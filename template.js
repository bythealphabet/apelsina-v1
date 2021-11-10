export default (development) => {
  return `<!DOCTYPE html>
<html>
  <head>
    <!-- Meta Tag -->
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <!-- SEO -->
    <meta name="keywords" content="Willemstad, Curacao, business, Negoshi" />
    <meta name="description" content="Buy Products or Sell Products online, Start today For free. Kumpra of Bende Produkto riba internet Pa korsou, kuminsa awe gratis " />
    <meta name="author" content="bythealphabet.com" />
    <meta name="url" content="https://www.apelsina.com" />
    <meta name="copyright" content="bythealphabet" />
    <title>Apelsina, shop bai gol</title>
    <link rel="icon" 
      type="image/png" 
      href="https://bythe-market.s3.amazonaws.com/default-logo.svg">
    ${development ? "" : '<link rel="stylesheet" href="/dist/main.css">'}
  </head>
  <body>
    <div id="root"></div>
    <script type="text/javascript" src="/dist/bundle.js"></script>
  </body>
</html>`;
};