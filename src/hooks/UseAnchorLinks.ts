/**
 * Custom React hook that adds smooth scrolling behavior to anchor links on the page.
 *
 * This hook will run once when the component it's used in is mounted, due to the empty dependency array [] passed to useEffect.
 * It doesn't return anything, so it won't provide any values or functions to the component that uses it, but it will have the side effect of modifying the behavior of anchor links on the page.
 */
import { useEffect } from 'react';

const UseAnchorLinks = (data: any) => {
    useEffect(() => {
        const links = document.querySelectorAll("a[href*='#']:not([href='#'])");

        links.forEach(link => {
            link.addEventListener('click', function (e) {
                if (
                    // @ts-ignore
                    location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') &&
                    // @ts-ignore
                    location.hostname === this.hostname
                ) {
                    // @ts-ignore
                    let target = document.querySelector(this.hash);
                    // @ts-ignore
                    target = target ? target : document.querySelector('[name=' + this.hash.slice(1) + ']');

                    if (target) {
                        e.preventDefault();
                        window.scrollTo({
                            top: target.offsetTop,
                            behavior: 'smooth',
                        });

                        // Remove the hash from the URL without affecting the browser history
                        history.pushState('', document.title, window.location.pathname + window.location.search);
                    }
                }
            });
        });
    }, [data]);

    return;
};

export default UseAnchorLinks;
