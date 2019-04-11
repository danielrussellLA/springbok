import { BASE_IMG_PATH } from './constants';

export default {
    items: [
        {
            title: 'Plan 1',
            imgPath: `${BASE_IMG_PATH}startpage-thumbnail.jpg`,
            link: 'https://startpage.com'
        },
        {
            title: 'Plan 2',
            imgPath: `${BASE_IMG_PATH}hsw-thumbnail.jpg`,
            link: 'https://play.howstuffworks.com'
        },
        {
            title: 'Plan 3',
            imgPath: `${BASE_IMG_PATH}zoo-thumbnail.jpg`,
            link: 'https://www.zoo.com'
        }
    ],

    createItem(title, imgPath, link) {
        const anchor = document.createElement('a');
        const el = document.createElement('div');
        anchor.href = link;
        anchor.target = '_blank';
        el.classList.add('portfolio-item');
        // el.style.backgroundImage = `url("${imgPath}")`;
        anchor.appendChild(el);
        return anchor;
    },

    generate(id) {
        this.items.forEach(item => {
            const portfolioContainer = document.querySelector(id);
            const { title, imgPath, link } = item;
            const el = this.createItem(title, imgPath, link);
            portfolioContainer.appendChild(el)
        });
    },

    init(id) {
        this.generate(id);
    }
}
