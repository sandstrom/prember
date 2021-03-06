import Route from '@ember/routing/route';
import fetch from 'fetch';
import { inject } from '@ember/service';

export default Route.extend({
  fastboot: inject(),

  async model() {
    let url;
    if (this.fastboot.isFastBoot) {
      url = `http://${this.fastboot.request.host}/static.json`;
    } else {
      url = '/static.json';
    }
    let response = await fetch(url);
    let json = await response.json();
    return json;
  }
});
