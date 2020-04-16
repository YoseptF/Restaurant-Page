import { $, bling } from './bling';
import createHome from './home';
import createMenu from './menu';
import createContact from './contact';

bling();

window.onload = () => {
  const tabs = document.createElement('div');
  tabs.classList.add('tabs');
  $('#content').append(tabs);

  createContact();
  createMenu();
  createHome();
};
