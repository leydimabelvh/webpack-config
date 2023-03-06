import webpackLogo from '../assets/images/webpack-logo.png';
import '../css/get-greeting.css';

export const getGreeting = ( name ) => {
    const h2 = document.createElement( 'h2' );
    h2.innerText = ` Hello, ${ name } `;
    
    document.body.append( h2 );

    /** Images **/
    const img = document.createElement( 'img' );
    img.src = webpackLogo;
    img.alt = 'Webpack logo';
    img.width = 200;

    document.body.append( img );
}