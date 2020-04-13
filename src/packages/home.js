import { $, bling } from './bling';
import dogo from '../images/back.jpg';

bling();

const createHome = () => {
  const homeDiv = `
  <div class="tab">
    <input type="radio" name="css-tabs" id="tab-1" checked class="tab-switch">
    <label for="tab-1" class="tab-label"><span>Home</span></label>
    <div class="tab-content homeContent">
      <div class="greeting">
        <h1>Delicious Breakfast</h1>
        <p>Eating healthy and delicious it's no longer an "either/or" situation<p>
      </div>
    </div>
  </div>
`;

  $('.tabs').innerHTML += homeDiv;
  $('.homeContent').style.background = `url(${dogo})  no-repeat center/cover`;
};

export default createHome;