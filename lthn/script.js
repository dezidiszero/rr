document.addEventListener('DOMContentLoaded', function() {
    const generateBtn = document.getElementById('generateBtn');
    const linkNameInput = document.getElementById('linkName');
    const resultContainer = document.getElementById('result');
    const generatedLinkInput = document.getElementById('generatedLink');
    const copyBtn = document.getElementById('copyBtn');
    
    generateBtn.addEventListener('click', function() {
        const linkName = linkNameInput.value.trim();
        if (!linkName) {
            alert('Silakan masukkan nama untuk tautan');
            return;
        }
        
        // Buat ID unik berdasarkan waktu dan nama
        const trackId = Date.now().toString(36) + '-' + linkName.toLowerCase().replace(/\s+/g, '-');
        const baseUrl = window.location.origin + window.location.pathname.replace('index.html', '');
        const trackerUrl = `${baseUrl}tracker.html?id=${trackId}`;
        
        // Tampilkan hasilnya
        generatedLinkInput.value = trackerUrl;
        resultContainer.classList.remove('hidden');
    });
    
    copyBtn.addEventListener('click', function() {
        generatedLinkInput.select();
        document.execCommand('copy');
        
        const originalText = copyBtn.textContent;
        copyBtn.textContent = 'Tersalin!';
        setTimeout(() => {
            copyBtn.textContent = originalText;
        }, 2000);
    });
});
