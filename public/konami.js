document.addEventListener("DOMContentLoaded", () => {
    const konamiSequence = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];
    let position = 0;
    let isArrowKeyActive = false;
  
    const disableScroll = () => {
      window.addEventListener("keydown", preventArrowScroll);
    };
  
    const enableScroll = () => {
      window.removeEventListener("keydown", preventArrowScroll);
    };
  
    const preventArrowScroll = (e) => {
      if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(e.key)) {
        e.preventDefault();
      }
    };
  
    const showPopupWithDelay = () => {
      setTimeout(() => {
        alert("hi");
      }, 400);
    };
  
    const showPopupInstantly = () => {
      alert("hi");
    };
  
    const handleKeydown = (e) => {
      if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(e.key)) {
        isArrowKeyActive = true;
        disableScroll();
      }
  
      if (e.key === konamiSequence[position]) {
        document.getElementById(`k${position}`)?.classList.add("active");
        position++;
  
        if (position === konamiSequence.length) {
          position = 0;
          isArrowKeyActive = false;
          enableScroll();
          showPopupWithDelay();
        }
      } else {
        position = 0;
        document.querySelectorAll("#konami > kbd").forEach((key) => key.classList.remove("active"));
        isArrowKeyActive = false;
        enableScroll();
      }
    };
  
    const handleKeyup = (e) => {
      if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(e.key)) {
        isArrowKeyActive = false;
        enableScroll();
      }
    };
  
    const handleLazyButtonClick = (e) => {
      e.preventDefault();
      showPopupInstantly();
    };
  
    document.addEventListener("keydown", handleKeydown);
    document.addEventListener("keyup", handleKeyup);
    document.querySelector("#lazy").addEventListener("click", handleLazyButtonClick);
  });  