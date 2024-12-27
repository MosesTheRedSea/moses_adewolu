document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll('.navbar a');
    const homepage = document.querySelector('.home-frame');
    const skills = document.querySelector('.skills-frame');
    const projects = document.querySelector('.projects-frame');
    const experience = document.querySelector('.experience-frame');
    const education = document.querySelector('.education-frame');
    const artworks = document.querySelector('.artworks-frame');
    const contacts = document.querySelector('.contacts-frame');
    const research = document.querySelector('.research-frame');


    function hideAllSections() {
        const sections = [homepage, skills, projects, experience, education, artworks, contacts, research]; 
        sections.forEach(section => {
            section.style.display = 'none';
        });
    }

    function handleNavClick(e) {
        e.preventDefault(); 

        hideAllSections();

        const targetId = e.target.getAttribute('data-target');
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            targetSection.style.display = 'flex';
        }
    }

    if (links.length > 0) {
        links.forEach(link => {
            link.addEventListener('click', handleNavClick);
            console.log('Event listener added to:', link); 
        });
    } else {
        console.log('No links found in the navbar!');
    }

    /*
    ░█▀▀▄ ░█▀▀▀ ░█▀▀▀ ─█▀▀█ ░█─░█ ░█─── ▀▀█▀▀ 
    ░█─░█ ░█▀▀▀ ░█▀▀▀ ░█▄▄█ ░█─░█ ░█─── ─░█── 
    ░█▄▄▀ ░█▄▄▄ ░█─── ░█─░█ ─▀▄▄▀ ░█▄▄█ ─░█──
    */
    
    window.onload = () => {
        hideAllSections();
        homepage.style.display = 'flex'; 
    };
});


