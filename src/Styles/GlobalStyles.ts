import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    :root {
        --color-brand100:   #27AE60;
        --color-brand200:   #93D7AF;
        --color-red:        #E60000;
        --color-orange:     #ff6d17;
        --color-blue:       #0b8af7;
        
        --color-white:      #FFFFFF;
        --color-black:      #000000;

        --color-gray0:      #F5F5F5;
        --color-gray100:    #ebebeb;
        --color-gray200:    #E0E0E0;
        --color-gray300:    #CECECE;
        --color-gray400:    #BDBDBD;
        --color-gray500:    #828282;
        --color-gray600:    #333333;

        --title-1:  1.125rem;
        --title-2:      1rem;
        --title-3:  0.875rem;
        --title-4:   0.75rem;
        --title-5:  1.125rem;

        --fontWeigth-1: 700;
        --fontWeigth-2: 600;
        --fontWeigth-3: 500;
        --fontWeigth-4: 400;
    }

    .App {
        font-family: 'Inter', sans-serif;
    }

    .ShowInput {
        display: flex;
    }

    .RemoveInput {
        display: none
    }

    .FormField {
        display: flex;
        flex-direction: column;
        
        gap: 0.5rem;
    }

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
    	font: inherit;
    	vertical-align: baseline;
    }
    /* HTML5 display-role reset for older browsers */
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
