// Script to clear the guide flag
localStorage.removeItem('itemSelectionGuideShown');
console.log('Guide flag cleared. The guide will show on next visit to Step 2.');
console.log('Current flag value:', localStorage.getItem('itemSelectionGuideShown'));