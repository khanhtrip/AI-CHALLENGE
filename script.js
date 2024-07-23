document.getElementById('upload').addEventListener('change', function(event) {  
    const gallery = document.getElementById('gallery');  
    const files = event.target.files;  

    for (let i = 0; i < files.length; i++) {  
        const file = files[i];  
        const img = document.createElement('img');  
        img.src = URL.createObjectURL(file);  
        img.alt = file.name;  
        gallery.appendChild(img);  
    }  
});  

document.getElementById('search').addEventListener('input', function(event) {  
    const searchText = event.target.value.toLowerCase();  
    const images = document.querySelectorAll('.gallery img');  

    images.forEach(img => {  
        const imageName = img.alt.toLowerCase();  
        if (imageName.includes(searchText)) {  
            img.style.display = 'block';  
        } else {  
            img.style.display = 'none';  
        }  
    });  
});