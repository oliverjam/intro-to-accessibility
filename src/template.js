module.exports = ({ content }) => `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="/assets/style.css">
    <title>Intro to Accessibility</title>

    <!-- Favicon/PWA stuff -->
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
    <link rel="manifest" href="/manifest.json">
    <meta name="theme-color" content="#db7093">
  </head>
  <body class="language-javascript">
  <main class="container">
    <section class="slide">
    ${content}
    </section>
  </main>
  <svg class="progress">
    <circle
    class="progress-ring__circle"
    stroke="white"
    stroke-width="4"
    fill="transparent"
    r="52"
    cx="60"
    cy="60"/>
  </svg>
    <script src='/assets/index.js'></script>
    <script src='/assets/prism.js'></script>
    <script>
// if ('serviceWorker' in navigator) {
//    navigator.serviceWorker
//    .register('/service-worker.js')
//    .then(() => {
//      console.log('Service worker registered');
//    })
//    .catch(err => {
//      console.log('Service worker registration failed: ' + err);
//    });
// }
</script>
  </body>
  </html>
`;
