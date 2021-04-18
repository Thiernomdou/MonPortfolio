const l1 = document.querySelector('.l1');
const l2 = document.querySelector('.l2');
const menus = document.querySelectorAll('.menu');
const nom = document.querySelectorAll('h2 span');
const portfolio = document.querySelector('.cta');
const medias = document.querySelectorAll('.bulle');




const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');


//Quand notre sotre aura bien chargé (load)
window.addEventListener('load', () => {

	/*timelime (TL), c'est l'endroit où y a 
    toutes les animations*/

    //création timeline et la mettre en pause au départ
	const TL = gsap.timeline({paused: true});

	/*staggerFrom permet d'animer quand on a 
    plusieurs éléments, les animer les uns
    à la suite des autres
    StagggerFrom va aller d'un endroit jusqu'à 
    l'endroit où c'est stylisé en CSS*/

    /* Les paramètres seront:
    ce qu'on veut animer (les titres span),
    la durée(1s),
    l'animation qu'on va mettre en place (top etc.),
    la manière dont l'animation va se faire(ease etc.)
    le temps qu'il y aura entre chaque animation (0,3s) 
    */
	TL
	.from(l1, 1.5, {width: 0, ease: "power.out"}, 0.3)
    
	.from(l2, 1.5, {width: 0, ease: "power.out"},0.3)
	

	/*-=1 permet de faire apparaitre les boutons 1s
   avant dans le timeline, c'est-à-dire elle se
   lancera quand la première timeline sera entrain
   de se lancer, c'est pour éviter que ça fasse,
   une animation, puis une autre, puis une autre
   */
  
  /*pour animer un seul élément, on utilise
    from et non staggerFrom qui permet d'animer
    plusieurs éléments*/
    .staggerFrom(menus, 1, {top: -50, opacity: 0, ease: "power2.out"}, 0.3, '-=1')
    
	.staggerFrom(nom, 1, {opacity: 0, ease: "power2.out"}, 0.3, '-=1')
	
	.from(portfolio, 1.5, {opacity: 0, transform: "scale(0)", ease: "power.out"}, 0.3, "-=2")
	
	.staggerFrom(medias, 1, {right: -200, ease: "power2.out"}, 0.3, '-=1');



	//activer la timeline
	TL.play();

});

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});
