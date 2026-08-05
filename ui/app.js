const fileInput = document.getElementById("fileInput");
const dropArea = document.getElementById("dropArea");
const previewImage = document.getElementById("previewImage");
const predictBtn = document.getElementById("predictBtn");

const loader = document.getElementById("loader");
const resultCard = document.getElementById("resultCard");

const celebName = document.getElementById("celebName");
const confidence = document.getElementById("confidence");
const progressBar = document.getElementById("progressBar");

dropArea.addEventListener("click", () => {
    fileInput.click();
});

fileInput.addEventListener("change", previewImageFile);

dropArea.addEventListener("dragover", (e) => {
    e.preventDefault();
    dropArea.style.borderColor = "#8b5cf6";
});

dropArea.addEventListener("dragleave", () => {
    dropArea.style.borderColor = "rgba(255,255,255,.2)";
});

dropArea.addEventListener("drop", (e) => {

    e.preventDefault();

    fileInput.files = e.dataTransfer.files;

    previewImageFile();

});

function previewImageFile(){

    const file = fileInput.files[0];

    if(!file) return;

    const reader = new FileReader();

    reader.onload = function(e){

        previewImage.src = e.target.result;

        previewImage.style.display="block";

    }

    reader.readAsDataURL(file);

}

predictBtn.addEventListener("click", uploadImage);

function uploadImage(){

    if(fileInput.files.length==0){

        alert("Please upload an image.");

        return;

    }

    loader.style.display="block";

    document.querySelector(".prediction-container").style.display="none";
    resultCard.style.display="none";

    const reader = new FileReader();

    reader.onload=function(){

        fetch("http://127.0.0.1:5000/classify_image",{

            method:"POST",

            headers:{
                "Content-Type":"application/x-www-form-urlencoded"
            },

            body:`image_data=${encodeURIComponent(reader.result)}`

        })

        .then(res=>{

            if(!res.ok){

                throw new Error("Server Error");

            }

            return res.json();

        })

        .then(data=>{

            loader.style.display="none";

            if(!data.length){

                throw new Error("No face detected");

            }

            const prediction=data[0];

            const max=Math.max(...prediction.class_probability);

            celebName.innerText=prediction.class;

            confidence.innerText=max.toFixed(2)+"%";

            progressBar.style.width=max+"%";

            document.querySelector(".prediction-container").style.display="flex";
            resultCard.style.display="block";

        })

        .catch(err=>{

            loader.style.display="none";

            alert(err.message);

        });

    }

    reader.readAsDataURL(fileInput.files[0]);

}