import { $, bling } from './bling';
import contact from '../images/contact.jpg';

bling();

const createContact = () => {
  const homeDiv = `
  <div class="tab">
    <input type="radio" name="css-tabs" id="tab-3" checked class="tab-switch">
    <label for="tab-3" class="tab-label"><span>contact</span></label>
    <div class="tab-content contactContent">
      <form>
        <h1>Contact us</h1>
        <label for="name">Name</label>
        <input type="text" id="name"></input>
        <label for="celphone">Cellphone</label>
        <input type="tel" id="celphone"></input>
        <label for="message">Message</label>
        <textarea id="message"></textarea>
        <input type="submit" value="Send now"></input>
      </form>
    </div>
  </div>
`;

  $('.tabs').innerHTML += homeDiv;
  $('.contactContent').style.background = `url(${contact})  no-repeat center/cover`;
};

export default createContact;