'use strict';
(function() {


	//?redirect=sam&ph=Type%20cv/resume,%20blog,%20portfolio,%20git/github,%20in/linkedin%20cq/cinequilt%20to%20go..%20&i=Hi,%20I%20am%20Samet%20Bayat.

	// var DEFAULT_PLACEHOLDER = `Type cv or resume, portfolio, mail, byte-sized adventures. or blog, legacy blog, git or github, in or linkedin, cq or cinequilt, project frame to go.`;
	
		var DEFAULT_PLACEHOLDER = 
`Type to go:            
cv / resume
portfolio
mail
blog
byte-sized adventures.
legacy blog
git / github
in / linkedin
cq / cinequilt
frame / project frame
about
contact
`.trim()
	
		var DEFAULT_PLACEHOLDER_TR = 
`ilerlemek icin yazın:             
cv / resume / özgecmis 
portfolio / portföy / portfolyo
mail / e-posta / eposta
blog 
byte-sized adventures.
legacy blog / eski blog
git / github
in / linkedin
cq / cinequilt
frame / project frame
kimdir / hakkında
iletisim
`.trim()

	
	const API_URL = 'https://g--s.vercel.app/api/v1?id=1QqdXSLg4lQoERzEDZOwgtMQSEPcnOdkW_cYzoTh08e8';
	
	const DEFAULT_INTRO = 'Hi, I am Samet Bayat.';
	const DEFAULT_INTRO_TR = 'Merhaba, ben Samet Bayat.';
	const DEFAULT_INTRO_BY_LANG = browserLanguage() === 'tr' ? DEFAULT_INTRO_TR : DEFAULT_INTRO;


	const urlParams = new URLSearchParams(window.location.search);
	const redirectText = urlParams.get('redirect') || urlParams.get('r')  || 'continue';
	
	const DEFAULT_PLACEHOLDER_BY_LANG = browserLanguage() === 'tr' ? DEFAULT_PLACEHOLDER_TR : DEFAULT_PLACEHOLDER;
	const placeholderText = urlParams.get('placeholder') || urlParams.get('ph') || DEFAULT_PLACEHOLDER_BY_LANG;
	
	const introText = urlParams.get('intro') || urlParams.get('i') || DEFAULT_INTRO_BY_LANG;



	function browserLanguage() {
		var lang =  navigator.language || navigator.userLanguage;
		if (lang.startsWith('tr')) {
			return 'tr';
		} else {
			return 'en';
		}
	}




	    // Array of image URLs
/*
https://sdk.bitmoji.com/render/panel/10227338-100025018093_13-s5-v1.png?transparent=1&palette=1&scale=2
https://sdk.bitmoji.com/render/panel/10224159-100025018093_13-s5-v1.png?transparent=1&palette=1&scale=2
https://sdk.bitmoji.com/render/panel/10222419-100025018093_13-s5-v1.png?transparent=1&palette=1&scale=2
'https://sdk.bitmoji.com/render/panel/10208518-100025018093_13-s5-v1.png?transparent=1&palette=1&scale=2'   
https://sdk.bitmoji.com/render/panel/10213080-100025018093_13-s5-v1.png?transparent=1&palette=1&scale=2
'https://sdk.bitmoji.com/render/panel/10222622-100025018093_13-s5-v1.png?transparent=1&palette=1&scale=2',
'https://sdk.bitmoji.com/render/panel/10217043-100025018093_13-s5-v1.png?transparent=1&palette=1&scale=2',
// 'https://sdk.bitmoji.com/render/panel/20053414-100025018093_13-s5-v1.png?transparent=1&palette=1&scale=2',
'https://sdk.bitmoji.com/render/panel/10230724-100025018093_13-s5-v1.png?transparent=1&palette=1&scale=2',
'https://sdk.bitmoji.com/render/panel/10219635-100025018093_13-s5-v1.png?transparent=1&palette=1&scale=2',
'https://sdk.bitmoji.com/render/panel/7834597-100025018093_13-s5-v1.png?transparent=1&palette=1&scale=2',
*/
	// // Function to get a random image URL from the array
	// function getRandomImageUrl() {
		// return backgroundImages[randomIndex];
		// }
		
	// Function to set the background image
	function setBackgroundImage() {
		const randomIndex = Math.floor(Math.random() * 33);
		// console.log(randomIndex);
		const img = `./img/image_${randomIndex}.jpg`;
		const backgroundImage = document.getElementById('background-image');
		// const randomImageUrl = getRandomImageUrl();
		// backgroundImage.style.backgroundImage = `url('${randomImageUrl}')`;
		backgroundImage.style.backgroundImage = `url('${img}')`;
		// backgroundImage.style.backgroundImage = `url('./img/image_3.jpg')`;
	}
	
	
	var redirectRoutes = [{"redirect":"https://sametb.com/cv","text":"cv"},{"redirect":"https://sametb.com/cv","text":"resume"},{"redirect":"https://sametb.com/cv","text":"özgeçmiş"},{"redirect":"https://cinequilt.netlify.app/","text":"cq"},{"redirect":"https://cinequilt.netlify.app/","text":"cinequilt"},{"redirect":"https://bytesizedadventures.onrender.com/","text":"blog"},{"redirect":"https://sametb.com/","text":"personnel"},{"redirect":"https://sametb.com/","text":"sam"},{"redirect":"http://sametb.com/frame","text":"frame"},{"redirect":"https://www.linkedin.com/in/sametbayat/","text":"in"},{"redirect":"https://www.linkedin.com/in/sametbayat/","text":"linkedin"},{"redirect":"https://github.com/samet-byte/","text":"github"},{"redirect":"https://github.com/samet-byte/","text":"git"},{"redirect":"https://bytesizedadventures.onrender.com/search/query?category=Portfolio","text":"portfolio"},{"redirect":"https://sametb.com/","text":"legacy blog"},{"redirect":"mailto:sametbayat@hotmail.com?subject=ABOUT%20..&body=Hello,%20I%20have%20a%20question%20about%20..","text":"mail"},{"redirect":"mailto:sametbayat@hotmail.com?subject=ABOUT%20..&body=Hello,%20I%20have%20a%20question%20about%20..","text":"eposta"},{"redirect":"mailto:sametbayat@hotmail.com?subject=ABOUT%20..&body=Hello,%20I%20have%20a%20question%20about%20..","text":"e-posta"},{"redirect":"https://sametb.com/about-me/","text":"about"},{"redirect":"https://sametb.com/about-me/contact/","text":"contact"},{"redirect":"https://bytesizedadventures.onrender.com/","text":"byte-sized adventures."},{"redirect":"https://bytesizedadventures.onrender.com/","text":"byte-sized adventures"},{"redirect":"https://bytesizedadventures.onrender.com/search/query?category=Portfolio","text":"portfolyo"},{"redirect":"https://sametb.com/cv","text":"özgeçmiş"},{"redirect":"https://sametb.com/about-me/","text":"hakkında"},{"redirect":"https://sametb.com/about-me/","text":"kimdir"},{"redirect":"https://sametb.com/about-me/contact/","text":"iletişim"}];


	async function fetchRedirectRoutes() {
        try {
            const response = await fetch(API_URL);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            if (data && data.data && Array.isArray(data.data)) {
                redirectRoutes = data.data;
				redirectRoutes.push(
					{"text": "refresh", "redirect": window.location.href}
				);
            }
        } catch (error) {
            console.error('Error fetching redirect routes:', error);
            // Use the default redirectRoutes if there's an error
        }
    }


	var
		$wrap = document.querySelector('#wrap'),
		$paper = document.querySelector('#paper'),
		$editor = document.querySelector('#editor'),
		$caret = document.createElement('i'),

		lasttext = [],
		numlasttext = 0;

		setPlaceholder(placeholderText);


	$paper.appendChild($caret);

	$editor.addEventListener('focus', function() {
		$paper.classList.add('ready');
	}, false);
	$editor.addEventListener('blur', function() {
		$paper.classList.remove('ready');
		setselected({start: 0, end: 0});
	}, false);
	$editor.addEventListener('keydown', function(e) {
		comparetext();
		if (e.keyCode == 13) {
			e.preventDefault();
		}
	}, false);
	$editor.addEventListener('keyup', comparetext, false);
	$editor.addEventListener('input', comparetext, false);

	$editor.addEventListener('mousedown', pointerdown, false);

	function setPlaceholder(text) {
        $paper.setAttribute('data-placeholder', text);
    }

	// Update the CSS for the placeholder
const style = document.createElement('style');
style.textContent = `
    #paper:before {
        position: absolute;
        content: attr(data-placeholder);
        opacity: 0.3;
        transition: opacity 0.15s 0.35s ease-out;
        white-space: pre-wrap;
        word-wrap: break-word;
        overflow-wrap: break-word;
        pointer-events: none;
    }
    #paper.has-text:before {
        opacity: 0;
        transition-delay: 0s;
    }
    #paper {
        white-space: pre-wrap;
        word-wrap: break-word;
        overflow-wrap: break-word;
    }
`;
document.head.appendChild(style);


	function comparetext() {

		var $killtargets = [],
			$killtarget = null,
			text = $editor.innerHTML.replace(/<[^<]+>/g, '').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&').replace(/\&nbsp;/g, ' '),
			selectionoffset = getselectionoffset(),
			paperheight = $paper.offsetHeight,
			i = 0, numtext = text.length,
			max = Math.max(numtext, numlasttext);

		if (text.toLowerCase().endsWith('nxx')) {
			insertLineBreak();
			return; // Exit the function early as we've handled the input
		}

		for (; i < max; i++) {
			if (text[i] != lasttext[i]) {
				if (numtext > numlasttext) {
					lasttext.splice(i, 0, text[i]);
					fire(text[i], selectionoffset.end);
					numlasttext++;
				} else {
					lasttext.splice(i, 1);
					$killtarget = $paper.querySelectorAll('span:not([class*="kill"])')[i];
					$killtarget.classList.add('kill-target');
					$killtarget.style.left = $killtarget.offsetLeft +'px';
					$killtarget.style.top = $killtarget.offsetTop +'px';
					$killtargets.push($killtarget);
					numlasttext--;
					i--;
				}
			}
		}

		$killtargets.map(function($target) {

			var fallingheight = Math.random()*paperheight/1.25+paperheight/1.25,
				csstext, transitiontimes;

			$target.addEventListener('transitionend', killed, false);
			$target.style.position = 'absolute';
			csstext = [
					'position: absolute;',
					'left: ', $target.offsetLeft, 'px;',
					'top: ', $target.offsetTop, 'px;',
					'text-shadow: none;',
					'color: inherit;',
					'background: none;',
					'opacity: 0;',
				];
			if ($target.classList.contains('placed')) {
				transitiontimes = fallingheight/paperheight +'s '+ 0.15*Math.random() +'s';
				csstext.push(
					'transform: translate3d(0, ', fallingheight, 'px, 0) rotateZ(', Math.random()*150-75, 'deg) !important;',
					'transition: transform ', transitiontimes, ' cubic-bezier(0.500, -0.030, 0.735, 0.045),',
								'color 0.25s ease-out,',
								'background 0.25s ease-out,',
								'opacity ', transitiontimes, ' ease-out;'
				);
			} else {
				transitiontimes = '0.1s',
				csstext.push(
					'transform: translate3d(0, 2em, 0) rotateZ(', Math.random()*360-180, 'deg) !important;',
					'transition: transform 0.15s ease-in,',
								'opacity 0.15 ease-out;'
				);
			}
			$target.style.cssText = csstext.join('');
			$target.classList.remove('selected');
		});

		lasttext = text.split('');
		numlasttext = numtext;

		var text = $editor.textContent;


		$paper.classList[$paper.querySelectorAll('span:not([class*="kill"])').length ? 'add' : 'remove']('has-text');

		setselected(selectionoffset);

		// check4Redirect(text, redirectText);
		redirectRoutes.forEach(route => {
			check4Redirect(text, route.text, route.redirect);
		});

	}

	function normalizeString(str) {
		return str
		  .toLowerCase()
		  .replace(/[àáâãäå]/g, "a")
		  .replace(/[èéêë]/g, "e")
		  .replace(/[ìíîï]/g, "i")
		  .replace(/[òóôõö]/g, "o")
		  .replace(/[ùúûü]/g, "u")
		  .replace(/[ýÿ]/g, "y")
		  .replace(/[ç]/g, "c")
		  .replace(/[ğ]/g, "g")
		  .replace(/[ı]/g, "i")
		  .replace(/[İ]/g, "i")
		  .replace(/[ş]/g, "s")
		  .replace(/[ö]/g, "o")
		  .replace(/[ü]/g, "u");
	  }

		
	function check4Redirect(text, routeText, redirect) {
		if (normalizeString(text).toLowerCase().trim() === normalizeString(routeText).toLowerCase().trim()) {
			$editor.innerHTML = '';
			setTimeout(() => {
				window.location.href = redirect;
			}, 1000);
		}
	}

		
	
	function setselected(_selectionoffset) {

		var $letters, $targetletter,
			selectionoffset = _selectionoffset || getselectionoffset(),
			i;

		$letters = $paper.querySelectorAll('span:not(.killed)');
		for (i = 0; i < numlasttext; i++) {
			$letters[i].classList.remove('start', 'end');
			if (i >= selectionoffset.start && selectionoffset.end > i) {
				if ($letters[i].classList.contains('placed')) {
					$letters[i].classList.add('selected');
					if (!$letters[i].style.background) {
						$letters[i].style.background = 'rgb('+ Math.floor(Math.random()*120+100) +', '+ Math.floor(Math.random()*120+100) +', '+ Math.floor(Math.random()*120+100) +')';
					}
				}
			} else {
				$letters[i].classList.remove('selected');
				$letters[i].style.background = '';
			}
		}

		if (selectionoffset.start == selectionoffset.end) {
			$caret.classList.remove('hide');
			$targetletter = $letters[selectionoffset.start-1];
			if ($targetletter) {
				$caret.style.left = $targetletter.offsetLeft+$targetletter.offsetWidth-1 +'px';
				$caret.style.top = $targetletter.offsetTop +'px';
				$caret.style.margin = 0;
			} else {
				$caret.style.cssText = '';
			}
		} else {
			$caret.classList.add('hide');
		}

		$letters = $paper.querySelectorAll('span.selected');
		if ($letters.length) {
			$letters[0].classList.add('start');
			$letters[$letters.length-1].classList.add('end');
		}

	}

	function fire(letter, letteroffset) {

		if (!letter) {
			return;
		}

		var $letter = document.createElement('span'),
			$children = $paper.querySelectorAll('span');

			if (letter === '\n') {
				$letter.innerHTML = '<br>';
				$letter.style.opacity = 1;
				$letter.classList.add('placed');
			} else

		if (letter != ' ') {
			$letter.style.transform = [
				'translate3d(', Math.random()*100-50, 'px, ', Math.random()*200-100, 'px, ', Math.random()*150+150, 'px) ',
				'rotateX('+ Math.random()*1800 +'deg) ',
				'rotateY('+ Math.random()*360 +'deg) ',
				'rotateZ('+ Math.random()*720 +'deg) ',
				'scale3d(2, 2, 1)'
			].join('');
			$letter.setAttribute('data-letter', letter);
			$letter.innerHTML = letter;
			$letter.addEventListener('transitionend', placed, false);
		} else {
			$letter.innerHTML = '&nbsp;';
			$letter.style.opacity = 1;
			$letter.classList.add('placed');
		}
		if ($children[letteroffset-1]) {
			$paper.insertBefore($letter, $children[letteroffset-1]);
		} else {
			$paper.appendChild($letter);
		}
		letter != ' ' && setTimeout(function() {
			$letter.classList.add('fired');
		}, 0);

		return $letter;

	}

	function placed(e) {
		if (e.propertyName == 'word-spacing') {
			this.classList.add('placed');
		} else if (e.propertyName == 'visibility') {
			this.removeAttribute('data-letter');
			this.removeEventListener('transitionend', placed, false);
		}
	}
	function killed(e) {
		if (e.propertyName == 'transform') {
			$paper.removeChild(this);
		}
	}

	function pointerdown() {
		setselected();
		document.addEventListener('mousemove', pointermove, false);
		document.addEventListener('mouseup', pointerup, false);
	}

	function pointermove() {
		setselected();
	}

	function pointerup() {
		setselected();
		document.removeEventListener('mousemove', pointermove, false);
		document.removeEventListener('mouseup', pointerup, false);
	}

	function getselectionoffset() {
		var selection = window.getSelection(),
			range, start, end;
		if (selection.rangeCount > 0) {
			range = window.getSelection().getRangeAt(0);
			start = range.startOffset;
			end = range.endOffset;
		}
		return {start: start || 0, end: end || 0};
	}

	async function intro() {
		// Call this function when you want to set or change the background image
		setBackgroundImage();
		await fetchRedirectRoutes();
		var delay;
		setPlaceholder(placeholderText);
		const chars = introText.split('');
		let totalDelay = 0;
		
		chars.forEach((char, index) => {
			delay = index * 100 + 100;
			setTimeout(() => {
				$editor.textContent += char;
				comparetext();
				setselected({ start: index + 1, end: index + 1 });
			}, delay);
			totalDelay = delay;
		});
	
		setTimeout(() => {
			setselected({ start: 0, end: chars.length });
		}, totalDelay + 1000);
	
		setTimeout(() => {
			$editor.textContent = '';
			$editor.focus();
			$wrap.classList.remove('intro');
			comparetext();
		}, totalDelay + 2500);
	}

    window.addEventListener('load', intro);



})();
	



function insertLineBreak() {
    // Remove "nxx" from the editor
    $editor.innerHTML = $editor.innerHTML.slice(0, -3);

    // Create a new line element
    var $lineBreak = document.createElement('br');
    $paper.appendChild($lineBreak);

    // Create a new span for the next line
    var $newLine = document.createElement('span');
    $newLine.innerHTML = '&nbsp;'; // Add a non-breaking space to ensure the line has height
    $paper.appendChild($newLine);

    // Update the editor content
    $editor.innerHTML += '\n';

    // Move the cursor to the new line
    var range = document.createRange();
    var sel = window.getSelection();
    range.setStartAfter($newLine);
    range.collapse(true);
    sel.removeAllRanges();
    sel.addRange(range);

    // Trigger comparetext to update the display
    comparetext();
}

