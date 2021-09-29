var skills = ['#VBA','#MiniTab','#Tableau','#PowerBI','#Laravel','#Drupal','#HTML','#CSS','#JS',
'#PHP','#SQL','#Python','#SharePoint','#Vue','#Wordpress','#Twig'];

for (let index = 0; index < skills.length; index++) {

    const clientWindow = new IntersectionObserver(entries => {
        entries.forEach(entry => {

                const tar = entry.target.querySelector(skills[index]);

                if (entry.isIntersecting){
                    tar.classList.add('bar-animation');
                    return;
                }
                tar.classList.remove('bar-animation');
            
        });
    });

clientWindow.observe(document.querySelector('.skills-wrapper'));

}
// console.log(clientWindow);
// clientWindow.observe(document.querySelector('#VBA'));
// clientWindow.observe(document.querySelector('#MiniTab'));
// clientWindow.observe(document.querySelector('#Tableau'));
// clientWindow.observe(document.querySelector('#PowerBI'));
// clientWindow.observe(document.querySelector('#Laravel'));
// clientWindow.observe(document.querySelector('#Drupal'));
// clientWindow.observe(document.querySelector('#HTML'));
// clientWindow.observe(document.querySelector('#CSS'));
// clientWindow.observe(document.querySelector('#JS'));
// clientWindow.observe(document.querySelector('#PHP'));
// clientWindow.observe(document.querySelector('#SQL'));
// clientWindow.observe(document.querySelector('#Python'));
// clientWindow.observe(document.querySelector('#SharePoint'));
// clientWindow.observe(document.querySelector('#Vue'));
// clientWindow.observe(document.querySelector('#Wordpress'));
// clientWindow.observe(document.querySelector('#Twig'));