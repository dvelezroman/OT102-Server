exports.template = (subject, message) => `<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Document</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
    crossorigin="anonymous"></script>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.1/font/bootstrap-icons.css">

  <style>
    .container {
      width: 100%;
      margin: 0 auto;
      padding: 0;
    }

    .row {
      width: 100%;
      margin: 0 auto;
      padding: 0;
    }

    .col-md-12 {
      width: 100%;
      margin: 0 auto;
      padding: 0;
    }

    .col-md-6 {
      width: 50%;
      margin: 0 auto;
      padding: 0;
    }

    .col-md-4 {
      width: 33.33333333%;
      margin: 0 auto;
      padding: 0;
    }

    .col-md-3 {
      width: 25%;
      margin: 0 auto;
      padding: 0;
    }

    .col-md-2 {
      width: 16.66666667%;
      margin: 0 auto;
      padding: 0;
    }

    .col-md-1 {
      width: 8.33333333%;
      margin: 0 auto;
      padding: 0;
    }

    .title {
      font-size: 1.5em;
      font-weight: bold;
      text-align: center;
    }

    .content {
      font-size: 1.2em;
      text-align: center;
    }

    .footer {
      font-size: 1.2em;
      text-align: center;
    }
  </style>
</head>

<body>
  <div class="container">
    <div class="row title">
      <div class="col-md-12">
        <h1>${subject}</h1>
      </div>
    </div>
    <div class="row content">
      <div class="col-md-12">
        <p>${message}</p>
      </div>
    </div>


    <!-- social icons bootstrap -->
    <div class="container">
      <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div class="col-md-4 d-flex align-items-center">
          <a href="/" class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
            <svg class="bi" width="30" height="24">
              <use xlink:href="#bootstrap"></use>
            </svg>
          </a>
          <span class="text-muted">© 2021 SomosMAS</span>
        </div>
        <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <rect width="200" height="200" fill="url(#pattern0)"/>
          <defs>
          <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlink:href="#image0_10_168" transform="scale(0.005)"/>
          </pattern>
          <image id="image0_10_168" width="200" height="200" xlink:href="data:image/png;base64,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"/>
          </defs>
        </svg>
          
        <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li class="ms-3"> <a href="https://www.facebook.com/"><i class="bi bi-facebook"></i></a>
          </li>
          <li class="ms-3"><a href="https://twitter.com/"><i class="bi bi-twitter"></i></a></li>
          <li class="ms-3"><a href="https://www.instagram.com/"><i class="bi bi-instagram"></i></a></li>
          <li class="ms-3"> <a href="https://www.linkedin.com/"><i class="bi bi-linkedin"></i></a></li>
        </ul>
      </footer>
    </div>
</body>

</html>`
