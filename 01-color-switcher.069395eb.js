const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),o=document.body;function d(){return`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}t.addEventListener("click",(function(){o.style.backgroundColor=d(),t.disabled=!0,e.disabled=!1,colorizeTimerId=setInterval((()=>{o.style.backgroundColor=d()}),1e3)})),e.addEventListener("click",(function(){t.disabled=!1,e.disabled=!0,clearInterval(colorizeTimerId)})),e.disabled=!0;
//# sourceMappingURL=01-color-switcher.069395eb.js.map