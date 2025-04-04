export const registerServiceWorker = async () => {
    if ('serviceWorker' in navigator) {
      try {
        const register = await navigator.serviceWorker.register('/worker.js', {
          scope: '/',
        });
        console.log('Service Worker registered:', register);
        return register;
      } catch (error) {
        console.error('Service Worker registration failed:', error);
      }
    }
  };