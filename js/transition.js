document.querySelectorAll('.resume-wrap').forEach(item => {
    item.addEventListener('click', event => {
        const url = item.getAttribute('data-url');
        if (url) {
            window.location.href = url;
        }
    });
});
