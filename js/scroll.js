const $text = document.querySelector('#textMove');

        function updateOffset(offset) {
            $text.setAttribute('startOffset', -offset)
        }

        function onScroll() {
            requestAnimationFrame(() => {
                updateOffset(window.scrollY * 0.5)
            })
        }

        window.addEventListener('scroll', onScroll);

        const titles = document.querySelectorAll('.anim');

        observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting == true) {
                    entry.target.classList.add('animate');
                } else {
                    entry.target.classList.remove('animate');
                }
            })
        })

        titles.forEach(title => {
            observer.observe(title);
        })