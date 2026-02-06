document.addEventListener('DOMContentLoaded', () => {
  const toggleAreaBtns = document.querySelectorAll('button[data-toggle-area]');
  const mainArea = document.querySelector('div[data-area="main"]');
  const leftSidebar = document.querySelector('div[data-area="left"]');
  const rightSidebar = document.querySelector('div[data-area="right"]');

  // Load preferences from localStorage
  let isLeftSidebarVisible = localStorage.getItem('leftSidebarVisible') !== 'false';
  let isRightSidebarVisible = localStorage.getItem('rightSidebarVisible') !== 'false';

  function updateMainAreaCols() {
    if (!isLeftSidebarVisible && !isRightSidebarVisible) {
      mainArea.classList.remove('col-lg-7', 'col-lg-9');
      mainArea.classList.add('col-lg-12');
    } else if (!isLeftSidebarVisible || !isRightSidebarVisible) {
      mainArea.classList.remove('col-lg-7', 'col-lg-12');
      mainArea.classList.add('col-lg-9');
    } else {
      mainArea.classList.remove('col-lg-9', 'col-lg-12');
      mainArea.classList.add('col-lg-7');
    }
  }

  function updateSidebarVisibility() {
    if (isLeftSidebarVisible) {
      leftSidebar.classList.remove('d-none');
      leftSidebar.classList.add('d-lg-block');
    } else {
      leftSidebar.classList.remove('d-lg-block');
      leftSidebar.classList.add('d-none');
    }
    if (isRightSidebarVisible) {
      rightSidebar.classList.remove('d-none');
      rightSidebar.classList.add('d-lg-block');
    } else {
      rightSidebar.classList.remove('d-lg-block');
      rightSidebar.classList.add('d-none');
    }
  }

  toggleAreaBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const areaName = btn.getAttribute('data-toggle-area');
      const areaElement = document.querySelector(`div[data-area="${areaName}"]`);
      const icon = btn.querySelectorAll('span');
      if (areaElement.classList.contains('d-lg-block')) {
        areaElement.classList.remove('d-lg-block');
        areaElement.classList.add('d-none');
        if (areaName === 'left') {
          isLeftSidebarVisible = false;
          localStorage.setItem('leftSidebarVisible', 'false');
        } else if (areaName === 'right') {
          isRightSidebarVisible = false;
          localStorage.setItem('rightSidebarVisible', 'false');
        }
      } else {
        areaElement.classList.remove('d-none');
        areaElement.classList.add('d-lg-block');
        if (areaName === 'left') {
          isLeftSidebarVisible = true;
          localStorage.setItem('leftSidebarVisible', 'true');
        } else if (areaName === 'right') {
          isRightSidebarVisible = true;
          localStorage.setItem('rightSidebarVisible', 'true');
        }
      }
      updateMainAreaCols();
      // Optionally toggle icons here
      icon[0].classList.toggle('d-none');
      icon[1].classList.toggle('d-none');
    });
  });

  // Initial setup
  updateSidebarVisibility();
  updateMainAreaCols();
});