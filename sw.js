
self.addEventListener('fetch', event =>{

  // FORMAS DE LLAMAR A UNA IMAGEN

  // if ( event.request.url.includes('.jpg') ) {
  //   console.log(event.request.url);
  //   // let fotoReq = fetch( 'img/main.jpg' );
  //   // let fotoReq = fetch( event.request.url );
  //   let fotoReq = fetch( event.request );

  //   event.respondWith( fotoReq )
  // }

  // PARA MODIFICAR EL CSS DESDE EL SW
  // if (event.request.url.includes( 'style.css' )) {
  // let respuesta = new Response(`
  // body {
  //   background-color: red !important;
  //   color: pink;
  // }
  // `,{
  //   headers: {
  //     'Content-Type': 'text/css'
  //   }
  // });
  // event.respondWith( respuesta );
  // }

  // PARA RETORNA LA IMG PATAS ARRIBA
  
  // if ( event.request.url.includes('.jpg') ) {
  //   let fotoReq = fetch( 'img/main-patas-arriba.jpg' );

  //   event.respondWith( fotoReq )
  // }

  const respuesta = fetch( event.request )
    .then( resp =>{

      // if (resp.ok) {
      //   return resp;
      // }else{
      //   return fetch('img/main.jpg');
      // }

      return resp.ok ? resp : fetch( 'img/main.jpg' );

    } ) 

  event.respondWith( respuesta );



});