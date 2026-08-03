const saveBtn = document.getElementById("saveBtn");

if (saveBtn) {

    saveBtn.addEventListener("click", async () => {

        const id = saveBtn.dataset.id;

        try {

            const response = await fetch(`/listings/${id}/save`, {
                method: "POST"
            });

            if (!response.ok) {
                alert("Please login to save listings.");
                return;
            }

            const data = await response.json();

            const icon = saveBtn.querySelector("i");
            const text = saveBtn.querySelector("span");

            if (data.saved) {

                icon.classList.remove("fa-regular");
                icon.classList.add("fa-solid");
                icon.style.color = "#ff385c";

                text.innerText = "Saved";

            } else {

                icon.classList.remove("fa-solid");
                icon.classList.add("fa-regular");
                icon.style.color = "";

                text.innerText = "Save";

            }

        } catch (err) {

            console.log(err);

        }

    });

}

document.addEventListener("DOMContentLoaded",()=>{

    const saveBtn = document.getElementById("saveBtn");


    if(saveBtn){

        saveBtn.addEventListener("click", async()=>{

            let listingId = saveBtn.dataset.id;


            try{

                let response = await fetch(`/wishlist/${listingId}`,{
                    method:"POST",
                    headers:{
                        "Content-Type":"application/json"
                    }
                });


                if(response.redirected){

                    window.location.href = response.url;
                    return;

                }


                alert("Added to wishlist ❤️");


                saveBtn.innerHTML = `
                <i class="fa-solid fa-heart text-danger"></i>
                Saved
                `;


            }catch(err){

                console.log(err);

            }

        });

    }

});