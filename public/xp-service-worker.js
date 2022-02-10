importScripts('/service-worker.js');

importScripts('decodeURIComponent(\n' +
    '  location.search.substring(location.search.indexOf(\'ref=\')+4)\n' +
    ')');