importScripts(decodeURIComponent(
    location.search.substring(location.search.indexOf('ref=')+4)
));

importScripts('./service-worker.js');