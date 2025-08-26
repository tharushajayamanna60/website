fetch('pages.json')
    .then(response => response.json())
    .then(pages => {
        const navbar = document.getElementById('navbar');
        const iframe = document.getElementById('contentFrame');

        pages.forEach((page, index) => {
            const btn = document.createElement('button');
            btn.textContent = page.name;
            btn.addEventListener('click', () => {
                iframe.src = page.url;
            });
            navbar.appendChild(btn);

            if(index === 0) {  // first page loaded by default
                iframe.src = page.url;
            }
        });
    })
    .catch(err => console.error('Error loading pages.json:', err));
