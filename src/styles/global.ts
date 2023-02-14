import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
:root {
        --font-Roboto: 'Roboto', sans-serif;
        --color-brand-1: #4529E6;
        --color-brand-2: #5126EA;
        --color-brand-3: #B0A6F0;
        --color-brand-4: #EDEAFD;
        --color-gray-0: #0B0D0D;
        --color-gray-1: #212529;
        --color-gray-2: #495057;
        --color-gray-3: #868E96;
        --color-gray-4: #ADB5BD;
        --color-gray-5: #CED4DA;
        --color-gray-6: #DEE2E6;
        --color-gray-7: #E9ECEF;
        --color-gray-8: #F1F3F5;
        --color-gray-9: #F8F9FA;
        --color-gray-10: #FDFDFD;
        --color-whiteFixed: #FFFFFF;
        --color-alert-1: #CD2B31;
        --color-alert-2: #FDD8D8;
        --color-alert-3: #FFE5E5;
        --color-sucess-1: #18794E;
        --color-sucess-2: #CCEBD7;
        --color-sucess-3: #DDF3E4;
        --color-random-1: #E34D8C;
        --color-random-2: #C04277;
        --color-random-3: #7D2A4D;
        --color-random-4: #7000FF;
        --color-random-5: #6200E3;
        --color-random-6: #36007D; 
        --color-random-7: #349974;
        --color-random-8: #2A7D5F;
        --color-random-9: #153D2E;
        --color-random-10: #6100FF;
        --color-random-11: #5700E3;
        --color-random-12: #30007D;
    }

    * {
        box-sizing: border-box;
        font-family: var(--font-Roboto);

        ::-webkit-scrollbar{
            width:10px;
            background-color: transparent;
        }
        ::-webkit-scrollbar-thumb{
            width:10px;
            border-radius: 4px;
            background-color:rgba(63,61,86, 85%);
        }

    }

    /* http://meyerweb.com/eric/tools/css/reset/
        v2.0 | 20110126
        License: none (public domain)
    */

    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed,
    figure, figcaption, footer, header, hgroup,
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        vertical-align: baseline;
    }
    article, aside, details, figcaption, figure,
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        line-height: 1;
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }

`;
