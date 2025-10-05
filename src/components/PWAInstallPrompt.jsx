import { useState, useEffect } from 'react';
import './PWAInstallPrompt.css';

function PWAInstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      
      const dismissed = localStorage.getItem('pwa-dismissed');
      if (!dismissed) {
        setShowPrompt(true);
      }
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    // Fallback: Show prompt after 3 seconds if no native prompt
    const timer = setTimeout(() => {
      const dismissed = localStorage.getItem('pwa-dismissed');
      if (!dismissed && !deferredPrompt) {
        setShowPrompt(true);
      }
    }, 3000);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      clearTimeout(timer);
    };
  }, [deferredPrompt]);

  const handleInstall = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === 'accepted') {
        setDeferredPrompt(null);
      }
    }
    setShowPrompt(false);
  };

  const handleDismiss = () => {
    setShowPrompt(false);
    localStorage.setItem('pwa-dismissed', 'true');
  };

  if (!showPrompt) return null;

  return (
    <div className="pwa-prompt">
      <div className="pwa-content">
        <h3>📱 Add to Home Screen</h3>
        <p>Install GatePixels for quick access and offline practice!</p>
        <div className="pwa-buttons">
          <button onClick={handleInstall} className="install-btn">
            {deferredPrompt ? 'Install App' : 'Add to Home Screen'}
          </button>
          <button onClick={handleDismiss} className="dismiss-btn">
            Not Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default PWAInstallPrompt;
