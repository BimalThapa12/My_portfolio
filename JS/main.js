
  // Scroll-based horizontal movement
  window.addEventListener('scroll', () => {
    const scrollValue = window.scrollY;
    const text = document.getElementById('scrollText');
    text.style.transform = `translateX(${-scrollValue * 0.5}px)`;
  });

  // Navbar hover effect
  const navItems = document.querySelectorAll('.navigationbar ul li');
  navItems.forEach(item => {
    item.addEventListener('mousemove', (e) => {
      const rect = item.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      item.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px) rotate(${x * 0.05}deg)`;
    });
    item.addEventListener('mouseleave', () => {
      item.style.transform = 'translate(0, 0)';
    });
  });

  // Popup scroll animation (applies to container1 & container3)
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
      } else {
        entry.target.classList.remove('animate'); // So animation repeats
      }
    });
  }, { threshold: 0.3 });

  document.querySelectorAll('.container1, .container3').forEach(el => observer.observe(el));

  
  document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.getElementById('menu-button');
    const menuBar = document.getElementById('menu-bar');
  
    menuButton.addEventListener('click', () => {
      menuBar.classList.toggle('show');
    });
  });
  
// for the menu bar
const menuButton = document.getElementById('menu-button');
const menuOverlay = document.getElementById('menu-overlay');
const circle = document.querySelector('.circle-expansion');
let isMenuOpen = false;

// Show menu button after scroll
window.addEventListener('scroll', () => {
  if (window.scrollY > 500) {
    menuButton.style.display = 'block';
  } else {
    menuButton.style.display = 'none';
    closeMenu();
  }
});

// Open/close toggle
menuButton.addEventListener('click', () => {
  isMenuOpen ? closeMenu() : openMenu();
});

function openMenu() {
  menuOverlay.classList.remove('closing');
  menuOverlay.classList.add('active');
  menuOverlay.style.visibility = 'visible';
  menuOverlay.style.pointerEvents = 'auto';
  isMenuOpen = true;
}

function closeMenu() {
  menuOverlay.classList.remove('active');
  menuOverlay.classList.add('closing');
  isMenuOpen = false;
}

// Wait for the circle to shrink before hiding overlay
circle.addEventListener('transitionend', (e) => {
  if (!isMenuOpen && e.propertyName === 'transform') {
    menuOverlay.classList.remove('closing');
    menuOverlay.style.visibility = 'hidden';
    menuOverlay.style.pointerEvents = 'none';
  }
});

const pageContent = document.getElementById('page-content');

function openMenu() {
  menuOverlay.classList.remove('closing');
  menuOverlay.classList.add('active');
  menuOverlay.style.visibility = 'visible';
  menuOverlay.style.pointerEvents = 'auto';

  pageContent.classList.add('blurred'); // <-- ADD BLUR
  isMenuOpen = true;
}

function closeMenu() {
  menuOverlay.classList.remove('active');
  menuOverlay.classList.add('closing');

  pageContent.classList.remove('blurred'); // <-- REMOVE BLUR
  isMenuOpen = false;
}







let menuVisible = false;

window.addEventListener('scroll', () => {
  if (window.scrollY > 500) {
    if (!menuVisible) {
      menuButton.style.display = 'block';
      void menuButton.offsetWidth; // force reflow
      menuButton.classList.add('show-animation');

      setTimeout(() => {
        menuButton.classList.remove('show-animation');
      }, 500);

      menuVisible = true;
    }
  } else {
    if (menuVisible) {
      menuButton.style.display = 'none';
      menuVisible = false;
    }
  }

  if (!menuVisible && isMenuOpen) {
    closeMenu();
  }
});

// for the menu buttton

const menbutton = document.querySelectorAll('.menmain');

menbutton.forEach(item => {
  let animationFrameId;

  item.addEventListener('mousemove', (e) => {
    if (animationFrameId) cancelAnimationFrame(animationFrameId);

    animationFrameId = requestAnimationFrame(() => {
      const rect = item.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      // Keep translateY(-50%) to preserve vertical centering
      item.style.transform = `translateY(-50%) translate(${x * 0.3}px, ${y * 0.3}px)`;
    });
  });

  item.addEventListener('mouseleave', () => {
    if (animationFrameId) cancelAnimationFrame(animationFrameId);
    // Reset to original transform including translateY(-50%)
    item.style.transform = 'translateY(-50%) rotate(0deg)';
  });
});


//for the menu elements Home 
const navItemsss = document.querySelectorAll('.men ul li');

navItemsss.forEach(item => {
  let animationFrameId;

  item.addEventListener('mousemove', (e) => {
   
    if (animationFrameId) cancelAnimationFrame(animationFrameId);

    animationFrameId = requestAnimationFrame(() => {
      const rect = item.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      item.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
    });
  });

  item.addEventListener('mouseleave', () => {
    if (animationFrameId) cancelAnimationFrame(animationFrameId);
    item.style.transform = 'translate(0, 0) rotate(0deg)';
  });
});



// for the myWork section magic movements
const button = document.querySelectorAll('.mmyWorks');

button.forEach(item => {
  let animationFrameId;

  item.addEventListener('mousemove', (e) => {
    
    if (animationFrameId) cancelAnimationFrame(animationFrameId);

    animationFrameId = requestAnimationFrame(() => {
      const rect = item.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      item.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px) `;
    });
  });

  item.addEventListener('mouseleave', () => {
    if (animationFrameId) cancelAnimationFrame(animationFrameId);
    item.style.transform = 'translate(0, 0) rotate(0deg)';
  });
});


window.addEventListener('scroll', () => {
  const scrollValue = window.scrollY;
  const text = document.getElementById('cards');
  text.style.transform = `translateX(${-scrollValue * 0.2}px)`;
});

window.addEventListener('scroll', () => {
  const scrollValue = window.scrollY; 
  const text = document.getElementById('cards2');
  text.style.transform = `translateX(${scrollValue * 0.2}px)`;
});


// for the footer animation 

// const path = document.getElementById('curvePath');
//     const container = document.getElementById('curveTarget');

//     window.addEventListener('scroll', () => {
//       const rect = container.getBoundingClientRect();
//       const windowHeight = window.innerHeight;

//       if (rect.top < windowHeight && rect.bottom > 0) {
//         // Calculate scroll progress (0 to 1)
//         const progress = Math.min(Math.max((windowHeight - rect.top) / windowHeight, 0), 1);

//         // Control the curve height morph
//         // Starts at 100 (curved), ends at 0 (flat)
//         const curveY = 100 - (progress * 140);

//         // The quadratic bezier control point y is set slightly above curveY to keep smoothness
//         // It moves from 0 (max curve) to curveY (flat)
//         const controlY = curveY * 3; 

//         const newPath = `
//           M0,300 
//           L0,${curveY} 
//           Q500,${controlY} 1000,${curveY} 
//           L1000,300 
//           Z`;

//         path.setAttribute('d', newPath);
//       }
//     });


const path = document.getElementById('curvePath');
const container = document.getElementById('curveTarget');

window.addEventListener('scroll', () => {
  const rect = container.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  if (rect.top < windowHeight && rect.bottom > 0) {
    const progress = Math.min(Math.max((windowHeight - rect.top) / windowHeight, 0), 1);
    const curveY = 100 - (progress * 140);
    const controlY = curveY * 3;

    const newPath = `
      M0,300 
      L0,${curveY} 
      Q500,${controlY} 1000,${curveY} 
      L1000,300 
      Z`;

    path.setAttribute('d', newPath);
  }
});


// for the get in touch button animation 

const get_in_touch = document.querySelectorAll('#mebutton');

get_in_touch.forEach(item => {
  let animationFrameId;

  item.addEventListener('mousemove', (e) => {
    if (animationFrameId) cancelAnimationFrame(animationFrameId);

    animationFrameId = requestAnimationFrame(() => {
      const rect = item.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 5;
      const y = e.clientY - rect.top - rect.height / 5;
      item.style.transform = `translate(${x * 0.04}px, ${y * 0.04}px)`;
    });
  });

  item.addEventListener('mouseleave', () => {
    if (animationFrameId) cancelAnimationFrame(animationFrameId);
    item.style.transform = 'translate(0, 0) rotate(0deg)';
  });
});

// for the contact buttons 

const contactButtons = document.querySelectorAll('#contacts button');

contactButtons.forEach(item => {
  let animationFrameId;

  item.addEventListener('mousemove', (e) => {
    if (animationFrameId) cancelAnimationFrame(animationFrameId);

    animationFrameId = requestAnimationFrame(() => {
      const rect = item.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 1;
      const y = e.clientY - rect.top - rect.height / 1;
      item.style.transform = `translate(${x * 0.04}px, ${y * 0.04}px)`;
    });
  });

  item.addEventListener('mouseleave', () => {
    if (animationFrameId) cancelAnimationFrame(animationFrameId);
    item.style.transform = 'translate(0, 0) rotate(0deg)';
  });
});


// for the get in touch button 
window.addEventListener('scroll', () => {
  const scrollValue = window.scrollY; 
  const text = document.getElementById('but');
  text.style.transform = `translateX(${scrollValue * 0.2}px)`; 
});
