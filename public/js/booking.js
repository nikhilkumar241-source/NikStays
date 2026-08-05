document.addEventListener("DOMContentLoaded",()=>{


const checkIn = document.getElementById("checkIn");
const checkOut = document.getElementById("checkOut");

const listingPrice = document.getElementById("listingPrice");

const priceBreakdown = document.getElementById("priceBreakdown");
const nightPrice = document.getElementById("nightPrice");
const totalPrice = document.getElementById("totalPrice");

const guests = document.getElementById("guests");

const reserveBtn = document.getElementById("reserveBtn");



if(
    !checkIn ||
    !checkOut ||
    !listingPrice
){

    return;

}




const nightlyPrice = Number(
    listingPrice.dataset.price
);




const today = new Date()
.toISOString()
.split("T")[0];


checkIn.min = today;




// ================= DATE EVENTS =================


checkIn.addEventListener(
"change",
()=>{


    checkOut.min = checkIn.value;

    calculatePrice();


});



checkOut.addEventListener(
"change",
calculatePrice
);



if(guests){

    guests.addEventListener(
    "change",
    calculatePrice
    );

}



// ================= PRICE CALCULATION =================


function calculatePrice(){


    if(
        !checkIn.value ||
        !checkOut.value
    ){

        return;

    }



    const start = new Date(
        checkIn.value
    );


    const end = new Date(
        checkOut.value
    );



    const nights = Math.ceil(
        (end-start) /
        (1000*60*60*24)
    );



    if(nights <= 0){


        alert(
            "Checkout must be after check-in"
        );


        checkOut.value="";


        return;

    }




    const roomPrice =
    nightlyPrice * nights;




    const total =
    roomPrice + 500 + 350;




    if(priceBreakdown){

        priceBreakdown.innerHTML =
        `₹ ${nightlyPrice.toLocaleString("en-IN")} × ${nights} night${nights>1?"s":""}`;

    }




    if(nightPrice){

        nightPrice.innerHTML =
        `₹ ${roomPrice.toLocaleString("en-IN")}`;

    }




    if(totalPrice){

        totalPrice.innerHTML =
        `₹ ${total.toLocaleString("en-IN")}`;

    }



}




// ================= RESERVE BUTTON =================


if(reserveBtn){

document.addEventListener("paymentSuccess", async (e) => {

    reserveBtn.disabled = true;

    reserveBtn.innerHTML = `
    <span class="spinner-border spinner-border-sm"></span>
    Confirming Booking...
    `;

    try {

        const response = await fetch(`/booking/${listing._id}`, {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({

                checkIn: checkIn.value,

                checkOut: checkOut.value,

                guests: guests.value,

                paymentMethod: e.detail.paymentMethod

            })

        });

        if (response.redirected) {
            window.location.href = response.url;
            return;
        }

        const data = await response.json();

        if (!data.success) {
            alert(data.error || "Booking failed");
        }

    }
    catch (err) {

        console.log(err);

        alert("Something went wrong");

    }
    finally {

        reserveBtn.disabled = false;

        reserveBtn.innerHTML = "Reserve";

    }

});

}


});