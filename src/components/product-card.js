import {Badge} from './badge.js' 

export function ProductCard (cardData, badge = null) {


    const degaultImg = '/correct adress'
    const imgUrl = cardData.imgUrl || degaultImg
    const imgAlt = cardData.imgAlt || 'Изображение товара'

    const productUrl = cardData.url || './'
    const productTitle = cardData.title || 'Название товара'
    const productPrice = cardData.price || '0'

    const bageHtml = badge ? Badge(badge.text, badge.color, badge.url) : ''


    return `
        <div class="card">

            <div class="card__img">
                <picture>
                    <source srcset="${imgUrl}" type="image/webp">
                    <source srcset="${imgUrl}" type="image/jpeg">
                    <img src="${imgUrl}" srcset="${imgUrl}" alt="${imgAlt}" loading="lazy">
                </picture>
            </div>

        
            <div class="card__desc">
                <a href="${productUrl}" class="card__title link-to-page block__text">
                    <h4 class="h4 block__desc">${productTitle}</h4>
                </a>
                ${bageHtml}
                
                <div class="card__price">
                    <span>${productPrice}&nbsp;€</span>
                </div>
        
            </div>
        </div>
    `
}