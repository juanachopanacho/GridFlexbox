const photoContainer = document.getElementById("photo-container");

//Añadir imagenes por id imagen**
// photoContainer.innerHTML = getPhotoElement(19);
// photoContainer.innerHTML += getPhotoElement(11);

//Se quita columnas
// let content = "<div class='column'>";
let content ="";

for(let i=0;i<20;i++){
    
    // cruzar imagen con id imagen
    // photoContainer.innerHTML += getPhotoElement(i+1);

    //Se quita columnas
    // if(i!=0 && (i%5==0)){
    //     content += `</div><div class="column">
    //     ${getPhotoElement(i+1)}`

    // }else{
        content += getPhotoElement(i+1);
    // }

}

//Quitar columnas
// content += "</div>";

// console.log(content);

photoContainer.innerHTML = content;

getPhotoElement(photo_id);

function getPhotoElement(photo_id){
    return `<a href="#" class="photo">
    <img alt="Photo ${photo_id}" src="img/photo_${photo_id}.jpg"/>
    </a>`;

}