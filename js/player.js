var iframeElement   = document.querySelector('iframe');
//var iframeElementID = iframeElement.id;
var widget1         = SC.Widget(iframeElement);
//var widget2         = SC.Widget(iframeElementID);
var url				= 'https://soundcloud.com/batone-neto/sets/lixo-extraordinario';

widget1.load(url);