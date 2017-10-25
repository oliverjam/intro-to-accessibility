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
  <nav class="nav">
    <button class="nav__button" data-direction="37" disabled>
      <svg class="icon" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
            <path d="M20 30 L8 16 20 2"></path>
        </svg>
    </button>
    <div class="progress"></div>
    <button class="nav__button" data-direction="39" disabled>
      <svg class="icon" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
            <path d="M12 30 L24 16 12 2"></path>
        </svg>
    </button>
  </nav>
    <script src='/assets/index.js'></script>
    <script src='/assets/prism.js'></script>
    <script>
if ('serviceWorker' in navigator) {
   navigator.serviceWorker
   .register('/service-worker.js')
   .then(() => {
     console.log('Service worker registered');
   })
   .catch(err => {
     console.log('Service worker registration failed: ' + err);
   });
}
</script>
  </body>
  </html>
`;
