var button_before=document.querySelector(".range__button--before"),button_after=document.querySelector(".range__button--after"),img_before=document.querySelector(".example__img-mobile--before"),img_after=document.querySelector(".example__img-mobile--after");button_before.addEventListener("click",(function(){img_before.classList.contains("visually-hidden")&&img_before.classList.remove("visually-hidden"),img_before.classList.add("example__img-mobile"),img_after.classList.remove("example__img-mobile"),img_after.classList.add("visually-hidden")})),button_after.addEventListener("click",(function(){img_after.classList.contains("visually-hidden")&&img_after.classList.remove("visually-hidden"),img_after.classList.add("example__img-mobile"),img_before.classList.remove("example__img-mobile"),img_before.classList.add("visually-hidden")}));
//# sourceMappingURL=slider.js.map
