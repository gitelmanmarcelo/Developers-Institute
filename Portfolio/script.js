const anchors = document.querySelectorAll('a[href*="#"');

for(let anchor of anchors){
  anchor.addEventListener('click', smoother);
  function smoother (e){
    e.preventDefault();
    const getId = anchor.getAttribute('href');
    document.querySelector('' + getId).scrollIntoView({
      behavior:"smooth",
      block: "start"

    });

  }
};
// /---------------smoothy scrol
let popupBg = document.querySelector('.pop-up');
let popup = document.querySelector('.pop__ap-body');
let popupOpenButton = document.querySelector('.btn');
let popupCloseBtn = document.querySelector('.image__pop')

popupOpenButton.addEventListener('click', popupFunc);
function popupFunc(e){
  e.preventDefault();
  popupBg.classList.add('active');
};

popupCloseBtn.addEventListener("click", closePopup);
function closePopup(e){
  e.preventDefault();
  popupBg.classList.remove('active');

};  


// /---------------popup window

function app(){

  const buttons =document.querySelectorAll('.items-works__type');
  const cards = document.querySelectorAll('.items-works__item')

  function filter(category, items){
    items.forEach((item) => {
      const isItemFiltered = !item.classList.contains(category)
      const isShownAll = category.toLowerCase() === 'all'
      if(isItemFiltered && !isShownAll){
        item.classList.add('hide')
      } else{
        item.classList.remove('hide')
      }
    });

  }


  buttons.forEach((button) => {
    button.addEventListener('click', () =>{
      const currentCategory = button.dataset.filter;
      filter(currentCategory, cards)
    })
  });

}


app();
