import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
import { registerServiceWorker } from './serviceWorker';

const PUBLIC_VAPID_KEY = 'BGD4pr49QBxBPgQsZECnjeyHsa3GifYRh049IH-sf4wnkjSIz6sXrEvMDk8azZ7gPjsMF2r49bYPvh42rihxSf4';

const subscribeToPushNotifications = async (register) => {
  const subscription = await register.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey: urlBase64ToUint8Array(PUBLIC_VAPID_KEY),
  });

  await fetch('http://localhost:3000/subscription', {
    method: 'POST',
    body: JSON.stringify(subscription),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  console.log('Subscribed to push notifications!');
};

const urlBase64ToUint8Array = (base64String) => {
  const padding = '='.repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/');
  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);
  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
};

registerServiceWorker().then((register) => {
  if (register) {
    subscribeToPushNotifications(register);
  }
});