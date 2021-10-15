var skills = ['#VBA','#MiniTab','#Tableau','#PowerBI','#Laravel','#Drupal',
              '#HTML','#CSS','#JS','#PHP','#SQL','#Python','#SharePoint',
              '#Vue','#Wordpress','#Twig'];

for (let index = 0; index < skills.length; index++) {

    const clientWindow = new IntersectionObserver(entries => {
        entries.forEach(entry => {

                const tar = entry.target.querySelector(skills[index]);

                if (entry.isIntersecting){
                    tar.classList.add('bar-animation');
                    return;
                }
                // tar.classList.remove('bar-animation');
            
        });
    });

clientWindow.observe(document.querySelector('.skills-wrapper'));
}
