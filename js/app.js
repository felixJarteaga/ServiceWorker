// if ('serviceWorker' in navigator) {
//   console.log('Podemos usarlo');
// }

// Confirmar que podemos usar ServiceWorker
if (navigator.serviceWorker) {
  navigator.serviceWorker.register('/sw.js')
}