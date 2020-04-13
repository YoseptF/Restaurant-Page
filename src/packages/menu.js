import { $, bling } from './bling';
import menuBckground from '../images/menu.jpg';
import Nigirizushi from '../images/food/Nigirizushi.jpg';
import Oshizushi from '../images/food/Oshizushi.jpg';
import Narezushi from '../images/food/Narezushi.jpg';
import Inarizushi from '../images/food/Inarizushi.jpg';
import Chirashizushi from '../images/food/Chirashizushi.jpg';
import Uramaki from '../images/food/Uramaki.jpg';

bling();

const createItem = (name, description, background) => {
  const item = document.createElement('div');
  item.classList += 'item';

  const left = document.createElement('div');
  left.classList += 'left';
  left.style.background = `url(${background}) no-repeat center/cover`;

  const innerItem = `
    <div class="right">
      <h1>${name}</h1>
      </p>${description}</p>
    </div>
  `;

  item.append(left);
  item.innerHTML += innerItem;

  return item;
};

const createMenu = () => {
  const homeDiv = `
  <div class="tab">
    <input type="radio" name="css-tabs" id="tab-2" checked class="tab-switch">
    <label for="tab-2" class="tab-label"><span>Menu</span></label>
    <div class="tab-content menuContent">
      <div class="menu">
      </div>
    </div>
  </div>
`;


  $('.tabs').innerHTML += homeDiv;
  $('.menuContent').style.background = `url(${menuBckground}) no-repeat center/cover`;

  const item1 = createItem('Nigirizushi', 'Nigirizushi (握り寿司, "hand-pressed sushi") consists of an oblong mound of sushi rice that the chef presses between the palms of the hands to form an oval-shaped ball, and a topping (the neta) draped over the ball. It is usually served with a bit of wasabi; neta are typically fish such as salmon, tuna or other seafood.', Nigirizushi);
  const item2 = createItem('Oshizushi', 'Oshizushi (押し寿司, "pressed sushi"), also known as hako-zushi (箱寿司, "box sushi"), is a pressed sushi from the Kansai region, a favorite and specialty of Osaka. A block-shaped piece is formed using a wooden mold, called an oshibako. The chef lines the bottom of the oshibako with the toppings, covers them with sushi rice, and then presses the lid of the mold down to create a compact, rectilinear block.', Oshizushi);
  const item3 = createItem('Narezushi', 'Narezushi (熟れ寿司, "matured sushi") is a traditional form of fermented sushi. Skinned and gutted fish are stuffed with salt, placed in a wooden barrel, doused with salt again, then weighed down with a heavy tsukemonoishi (pickling stone). As days pass, water seeps out and is removed', Narezushi);
  const item4 = createItem('Inarizushi', 'Inarizushi (稲荷寿司) is a pouch of fried tofu typically filled with sushi rice alone. Tales tell that inarizushi is named after the Shinto god Inari. Foxes, messengers of Inari, are believed to have a fondness for fried tofu, and an Inari-zushi roll has pointed corners that resemble fox ears', Inarizushi);
  const item5 = createItem('Chirashizushi', 'Chirashizushi (ちらし寿司, "scattered sushi", also referred to as barazushi) serves the rice in a bowl and tops it with a variety of raw fish and vegetable garnishes. It is commonly eaten because it is filling, fast and easy to make.[citation needed] It is eaten annually on Hinamatsuri in March.', Chirashizushi);
  const item6 = createItem('Uramaki', 'Uramaki (裏巻, "inside-out roll") is a medium-sized cylindrical piece with two or more fillings, and was developed as a result of the creation of the California roll, as a method originally meant to hide the nori. Uramaki differs from other makimono because the rice is on the outside and the nori inside.', Uramaki);
  $('.menu').append(item1);
  $('.menu').append(item2);
  $('.menu').append(item3);
  $('.menu').append(item4);
  $('.menu').append(item5);
  $('.menu').append(item6);
};

export default createMenu;
