import { ICONS } from "./constants";

const toggleHightlighted = (icon, show) =>
  document
    .querySelector(`.${ICONS[icon]}-icon`)
    .classList.toggle("highlighted", show);

// toggleHighlighted('fish', true) = highlight fish item

export default function initButtons(handlerUserAction) {
  let selectedIcon = 0;

  function buttonClick({ target }) {
    if (target.classList.contains("middle-btn")) {
      handlerUserAction(ICONS[selectedIcon]);
    } else {
      toggleHightlighted(selectedIcon, false);
      if (target.classList.contains("left-btn")) {
        selectedIcon = (2 + selectedIcon) % ICONS.length;
      } else if (target.classList.contains("right-btn")) {
        selectedIcon = (1 + selectedIcon) % ICONS.length;
      }
      toggleHightlighted(selectedIcon, true);
    }
    /*
    if (target.classList.contains("left-btn")) {
      toggleHightlighted(selectedIcon, false);
      selectedIcon = (2 + selectedIcon) % ICONS.length;
      toggleHightlighted(selectedIcon, true);
    } else if(target.classList.contains("right-btn")){
      toggleHightlighted(selectedIcon,false);
      selectedIcon = (1+selectedIcon)%ICONS.length;
      toggleHightlighted(selectedIcon,true);
    } else {
      handlerUserAction(ICONS[selectedIcon]);
    }*/
  }

  document.querySelector(".buttons").addEventListener("click", buttonClick);
}
