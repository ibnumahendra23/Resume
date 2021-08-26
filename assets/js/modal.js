document
    .getElementById('dynamic-gallery-demo-load-more')
    .addEventListener('click', () => {
        const newItems = [
            {
                src: 'img/4.jpg',
                thumb: 'img/thumb-4.jpg',
                subHtml: '<h4>Image 4 title</h4><p>Image 4 descriptions.</p>',
            },
            {
                src: 'img/5.jpg',
                thumb: 'img/thumb-5.jpg',
                subHtml: '<h4>Image 5 title</h4><p>Image 5 descriptions.</p>',
            },
        ];
        const updatedDynamicElements = [...dynamicEl, ...newItems];
        dynamicGallery.refresh(updatedDynamicElements);

        // To open gallery after updating slides,
        dynamicGallery.openGallery();
    });