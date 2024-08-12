import {renderMidgets} from './midget.js';
import './img-load-modal.js';
import {getData} from './api.js';
import {showAlert} from './util.js';

const getContent = async () => {
  try {
    const response = await getData();
    renderMidgets(response);
  } catch (err) {
    showAlert(err.message);
  }
};

getContent();
