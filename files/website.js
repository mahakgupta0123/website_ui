// navbar code
document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.getElementById('menu');
    const closeIcon = document.getElementById('close');
    const navMenu = document.querySelector('.menu ul');

    function toggleMenu() {
        const isMenuVisible = navMenu.classList.contains('active');
        
        if (isMenuVisible) {
           
            navMenu.classList.remove('active');
            menuIcon.style.display = 'block';
            closeIcon.style.display = 'none';
        } else {
            
            navMenu.classList.add('active');
            menuIcon.style.display = 'none';
            closeIcon.style.display = 'block';
        }
    }
    
   
    menuIcon.addEventListener('click', toggleMenu);
    closeIcon.addEventListener('click', toggleMenu);
    
  
    const menuItems = document.querySelectorAll('.menu ul li a');
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                toggleMenu();
            }
        });
    });
    

    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
           
            navMenu.classList.remove('active');
            menuIcon.style.display = 'none';
            closeIcon.style.display = 'none';
        } else {
          
            if (!navMenu.classList.contains('active')) {
                menuIcon.style.display = 'block';
                closeIcon.style.display = 'none';
            } else {
                menuIcon.style.display = 'none';
                closeIcon.style.display = 'block';
            }
        }
    });
});

// navbar code ended

// card scroll code start

function enableSwipe(wrapperClass) {
    const wrapper = document.querySelector(wrapperClass);

    if (!wrapper) return;

    let isDragging = false;
    let startX, scrollLeft;

    // Mouse Events
    wrapper.addEventListener("mousedown", (e) => {
        isDragging = true;
        startX = e.pageX - wrapper.offsetLeft;
        scrollLeft = wrapper.scrollLeft;
    });

    wrapper.addEventListener("mouseleave", () => {
        isDragging = false;
    });

    wrapper.addEventListener("mouseup", () => {
        isDragging = false;
    });

    wrapper.addEventListener("mousemove", (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - wrapper.offsetLeft;
        const walk = (x - startX) * 2; 
        wrapper.scrollLeft = scrollLeft - walk;
    });

    let touchStartX = 0, touchEndX = 0;

    wrapper.addEventListener("touchstart", (e) => {
        touchStartX = e.touches[0].clientX;
    });

    wrapper.addEventListener("touchmove", (e) => {
        touchEndX = e.touches[0].clientX;
        let diff = touchStartX - touchEndX;
        wrapper.scrollLeft += diff;
        touchStartX = touchEndX;
    });
}

enableSwipe(".wrapper");
enableSwipe(".wrapper1");
