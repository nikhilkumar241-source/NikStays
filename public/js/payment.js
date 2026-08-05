document.addEventListener("DOMContentLoaded", () => {

    const paymentModalElement = document.getElementById("paymentModal");

    if (!paymentModalElement) return;

    const paymentModal = new bootstrap.Modal(paymentModalElement);

    const reserveBtn = document.getElementById("reserveBtn");
    const payNowBtn = document.getElementById("payNowBtn");
    const paymentAmount = document.getElementById("paymentAmount");

    const totalPrice = document.getElementById("totalPrice");

    if (reserveBtn) {

        reserveBtn.addEventListener("click", function (e) {

            e.preventDefault();

            const checkIn = document.getElementById("checkIn");
            const checkOut = document.getElementById("checkOut");

            if (!checkIn.value || !checkOut.value) {
                alert("Please select Check-in and Check-out dates");
                return;
            }

            paymentAmount.innerHTML = totalPrice.innerHTML;

            paymentModal.show();

        });

    }

    if (payNowBtn) {

        payNowBtn.addEventListener("click", async function () {

            const method = document.querySelector(
                'input[name="paymentMethod"]:checked'
            ).value;

            payNowBtn.disabled = true;

            payNowBtn.innerHTML = `
                <span class="spinner-border spinner-border-sm"></span>
                Processing Payment...
            `;

            await new Promise(resolve => setTimeout(resolve, 2500));

            paymentModal.hide();

            const event = new CustomEvent("paymentSuccess", {
                detail: {
                    paymentMethod: method
                }
            });

            document.dispatchEvent(event);

            payNowBtn.disabled = false;

            payNowBtn.innerHTML = "Pay Now";

        });

    }

});


