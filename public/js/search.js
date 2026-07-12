const searchInput = document.getElementById("searchInput");
const listingContainer = document.getElementById("listingContainer");

searchInput.addEventListener("input", async () => {

    const search = searchInput.value;

    const response = await fetch(`/listings/search?search=${encodeURIComponent(search)}`);

    const listings = await response.json();

    listingContainer.innerHTML = "";

    listings.forEach(listing => {

        listingContainer.innerHTML += `
            <div class="col-md-4 mb-4">

                <div class="card">

                    <img src="${listing.image.url}"
                         class="card-img-top">

                    <div class="card-body">

                        <h5>${listing.title}</h5>

                        <p>₹ ${listing.price.toLocaleString("en-IN")}</p>

                        <a href="/listings/${listing._id}">
                            View
                        </a>

                    </div>

                </div>

            </div>
        `;
    });

});