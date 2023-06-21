const searchBtn = document.querySelector('.btn__search');
const topInput = document.querySelector('.top__input')
$(searchBtn).on('click', function() {
    $(this).toggleClass('active');
    $(topInput).toggleClass('shown')
})
