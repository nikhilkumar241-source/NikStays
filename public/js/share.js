// public/js/share.js

const shareBtn = document.getElementById("shareBtn");

if (shareBtn) {

    shareBtn.addEventListener("click", async () => {

        const url = window.location.href;

        // Mobile Share API
        if (navigator.share) {

            try {

                await navigator.share({
                    title: document.title,
                    text: "Check out this amazing stay on NiksStays!",
                    url: url
                });

            } catch (err) {
                console.log("Share cancelled.");
            }

        } else {

            // Desktop Copy Link
            try {

                await navigator.clipboard.writeText(url);

                shareBtn.innerHTML = `
                    <i class="fa-solid fa-check text-success"></i>
                    Link Copied
                `;

                setTimeout(() => {

                    shareBtn.innerHTML = `
                        <i class="fa-solid fa-arrow-up-from-bracket"></i>
                        Share
                    `;

                }, 2000);

            } catch (err) {

                alert("Unable to copy link.");

            }

        }

    });

}

document.addEventListener("DOMContentLoaded",()=>{

    const shareBtn = document.getElementById("shareBtn");


    if(shareBtn){

        shareBtn.addEventListener("click", async()=>{


            let url = window.location.href;


            // Mobile share popup
            if(navigator.share){

                try{

                    await navigator.share({

                        title: document.title,

                        text:"Check out this amazing stay 🏡",

                        url:url

                    });


                }catch(err){

                    console.log(err);

                }


            }else{


                // Copy link for desktop

                navigator.clipboard.writeText(url);


                alert(
                    "Listing link copied 🔗"
                );


            }


        });

    }


});