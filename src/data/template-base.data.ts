export const templateBase = `
<!doctype html>
<html lang="en">
<head>

    <title>{{ projectName }}</title>

    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">

    <style type="text/css" id="hs-inline-css">
        /*<![CDATA[*/

        /* CLIENT-SPECIFIC STYLES */
        body, table, td, a {
            -webkit-text-size-adjust: 100%;
            -ms-text-size-adjust: 100%;
            -webkit-font-smoothing: antialiased;
        }

        table, td {
            mso-table-lspace: 0pt;
            mso-table-rspace: 0pt;
        }

        img {
            -ms-interpolation-mode: bicubic;
        }

        /* RESET STYLES */
        img {
            border: 0;
            height: auto;
            line-height: 100%;
            outline: none;
            text-decoration: none;
        }

        table {
            border-collapse: collapse !important;
        }

        body {
            height: 100% !important;
            margin: 0 !important;
            padding: 0 !important;
            width: 100% !important;
        }

        /* iOS BLUE LINKS */
        a[x-apple-data-detectors] {
            color: inherit !important;
            text-decoration: none !important;
            font-size: inherit !important;
            font-family: inherit !important;
            font-weight: inherit !important;
            line-height: inherit !important;
        }

        body a {
            color: #6644ff;
            text-decoration: none;
        }

        hr {
            width: 66%;
            margin: 40px auto;
            border: 1px solid #d3dae4;
        }

        /* MOBILE STYLES */
        @media screen and (max-width: 600px) {
            .img-max {
                width: 100% !important;
                max-width: 100% !important;
                height: auto !important;
            }

            .max-width {
                max-width: 100% !important;
            }

            #content {
                padding-left: 5% !important;
                padding-right: 5% !important;
                padding-top: 30px !important;
                padding-bottom: 30px !important;
            }
        }

        /* DARK MODE */
        @media (prefers-color-scheme: dark) {
            #background {
                background-color: #172940 !important;
            }

            #content {
                background-color: #071930 !important;
                color: #FFFFFF !important;
            }

            .link {
                color: #6644ff !important;
            }

            .button {
                background-color: #0BA582 !important;
            }

            hr {
                border: 1px solid #172940 !important;
            }
        }

        /* ANDROID CENTER FIX */
        div[style*="margin: 16px 0;"] {
            margin: 0 !important;
        }

        blockquote {
            background: #f0f4f9 !important;
            border-radius: 4px !important;
            margin: 0 !important;
            padding: 24px !important;
        }

        blockquote > p {
            margin: 0 !important;
        }

        body {
            -webkit-text-size-adjust: 100%;
            -ms-text-size-adjust: 100%;
            height: 100% !important;
            width: 100% !important;
            margin: 0 !important;
            padding: 0 !important;
            background-color: #f6f6f6
        }

        /*]]>*/
    </style>

    <meta name="generator" content="Directus">
    <meta name="x-apple-disable-message-reformatting">
    <meta name="robots" content="noindex,follow">

</head>
<body style="">
{{html}}
</body>
</html>`