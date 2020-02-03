import { App } from "hadal";

export const Hadal = (function() {
  const hadal = new App("abc", true);

  function Crate(crate) {
    Hadal.Connect(crate);
    return crate;
  }

  function debounce(func, wait, immediate) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };

  async function Connect(component) {
    let app = await hadal;

    const handler = {
      get: function(obj, prop) {
        return Reflect.get(...arguments)
      },
      set: function(newData, prop, value) {
        let oldData = {...newData};
        let status = Reflect.set(...arguments);
        try {
          component.onLocalChange(oldData, newData);
        } catch(err) {};
        debounce(function() {
          app.tx().merge_put(component.route, JSON.stringify(newData));
        }, 250)();
        return status;
      }
    };

    const onRemoteChange = (event) => {
      let detail = JSON.parse(event.detail);
      let newData = JSON.parse(detail.value);
      let oldData = {...component.rawData};
      Object.assign(component.rawData, newData);
      try {
        component.onRemoteChange(oldData, newData);
      } catch(err)  {};
    };

    // Creates a proxy
    component.rawData = component.data;
    let proxy = app.connect(component.route, component.data, handler, onRemoteChange);
    component.data = proxy;
    app.tx().get(component.route).then(answer => {
      let newData = JSON.parse(answer);
      let oldData = {...component.rawData};
      Object.assign(component.rawData, newData);
      try {
        component.onRemoteChange(oldData, newData);
      } catch(err) {};
    }, error => {});
  }

  return {
    Crate: (Crate),
    Connect: (Connect),
    debounce: (debounce),
  }
})()