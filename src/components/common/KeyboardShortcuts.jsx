import React, { useEffect } from 'react';

const KeyboardShortcuts = () => {
  useEffect(() => {
    const handleKeyPress = (event) => {
      // Check if Ctrl (or Cmd on Mac) is pressed
      if (event.ctrlKey || event.metaKey) {
        switch (event.key.toLowerCase()) {
          case 'n':
            event.preventDefault();
            console.log('Quick action: Nova objava');
            // Trigger new post modal
            break;
          case 's':
            event.preventDefault();
            console.log('Quick action: Zakaži objavu');
            // Trigger schedule modal
            break;
          case 'd':
            event.preventDefault();
            console.log('Quick action: Kreiraj dizajn');
            // Open design tool
            break;
          case 'a':
            event.preventDefault();
            console.log('Quick action: AI sadržaj');
            // Open AI content generator
            break;
          case 'r':
            event.preventDefault();
            console.log('Quick action: Analitika');
            // Navigate to analytics
            break;
          case '/':
            event.preventDefault();
            console.log('Focus search');
            // Focus search input
            document.querySelector('input[placeholder*="Pretraži"]')?.focus();
            break;
          default:
            break;
        }
      }
      
      // ESC key to close modals/dropdowns
      if (event.key === 'Escape') {
        console.log('ESC pressed - close all modals');
        // Close any open modals or dropdowns
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, []);

  return null; // This component doesn't render anything
};

export default KeyboardShortcuts;