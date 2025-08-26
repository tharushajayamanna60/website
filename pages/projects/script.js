fetch('projects.json')
    .then(res => res.json())
    .then(projects => {
        const container = document.getElementById('projectsContainer');

        projects.forEach(project => {
            const tablet = document.createElement('div');
            tablet.classList.add('tablet');

            // Add photo or iframe preview
            if(project.photo) {
                const img = document.createElement('img');
                img.src = project.photo;
                tablet.appendChild(img);
            } else {
                const iframe = document.createElement('iframe');
                iframe.src = project.link;
                tablet.appendChild(iframe);
            }

            // Add project name
            const name = document.createElement('p');
            name.textContent = project.name;
            tablet.appendChild(name);

            // Open in new tab on click
            tablet.addEventListener('click', () => {
                window.open(project.link, '_blank');
            });

            container.appendChild(tablet);
        });
    })
    .catch(err => console.error('Error loading projects.json:', err));
