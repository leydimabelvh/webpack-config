import '../css/get-greeting.css';

export const getGreeting = ( name ) => {
    const h2 = document.createElement( 'h2' );
    h2.innerText = ` Hello, ${ name } `;
    
    document.body.append( h2 );
}