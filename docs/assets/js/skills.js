const clientWindow = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const tar = entry.target.querySelector('.bar');
        if (entry.isIntersecting){
            entry.target.classList.add('bar-animation');
            return;
        }
        
        entry.classList.remove('bar-animation');
    })
});
// console.log(clientWindow);

clientWindow.observe(document.querySelector('#VBA'));
clientWindow.observe(document.querySelector('#MiniTab'));
clientWindow.observe(document.querySelector('#Tableau'));
clientWindow.observe(document.querySelector('#PowerBI'));
clientWindow.observe(document.querySelector('#Laravel'));
clientWindow.observe(document.querySelector('#Drupal'));
clientWindow.observe(document.querySelector('#HTML'));
clientWindow.observe(document.querySelector('#CSS'));
clientWindow.observe(document.querySelector('#JS'));
clientWindow.observe(document.querySelector('#PHP'));
clientWindow.observe(document.querySelector('#SQL'));
clientWindow.observe(document.querySelector('#Python'));
clientWindow.observe(document.querySelector('#SharePoint'));
clientWindow.observe(document.querySelector('#Vue'));
clientWindow.observe(document.querySelector('#Wordpress'));
clientWindow.observe(document.querySelector('#Twig'));