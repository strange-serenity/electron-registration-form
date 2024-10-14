window.addEventListener('DOMContentLoaded', () => {
    const { ipcRenderer } = require('electron');
    window.localStorage = ipcRenderer.invoke('get-local-storage');
  });
  