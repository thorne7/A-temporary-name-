console.log('Script loaded.');

//Gets main container that holds all bed cards.
const bedCardContainer = document.getElementById('bed-card-container');

bedCardContainer.addEventListener('click', displayBedPage);

//Gets the id of the bed that is clicked and loads beds/id page which displays patient details for ckicked bed.
function displayBedPage(event){

    event.preventDefault();

    //Gets the 'bed-card' element for the bed.
    let bedCardEl = getBedCardElement(event.target);
    if(bedCardEl === null) return;
    
    //Gets the ID of the bed from data-index attribute.
    let bedID = parseInt(bedCardEl.getAttribute('data-index')); 

    document.location.replace(`/beds/${bedID}`);
}

//Gets the 'bed-card' element for the bed.
function getBedCardElement(targetEl){

    //Loops through parent elements of the element that is clicked until 'bed-card' element is found.
    while (targetEl.className !== 'card bed-card mt-4 shadow') {

        targetEl = targetEl.parentElement;
        if(targetEl === null) return null;     
    }

    return targetEl;
}
