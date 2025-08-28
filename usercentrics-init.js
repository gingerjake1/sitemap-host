// usercentrics-init.js
(function() {
    // 1. Inject autoblocker.js to block scripts until consent
    var autoblocker = document.createElement('script');
    autoblocker.src = 'https://web.cmp.usercentrics.eu/modules/autoblocker.js';
    autoblocker.type = 'text/javascript';
    autoblocker.async = true;
    document.head.appendChild(autoblocker);

    // 2. Inject the main Usercentrics loader.js for the consent banner
    var loader = document.createElement('script');
    loader.id = 'usercentrics-cmp';
    loader.src = 'https://web.cmp.usercentrics.eu/ui/loader.js';
    loader.type = 'text/javascript';
    loader.async = true;
    loader.setAttribute('data-settings-id', 'vafXRLnK5f2D4i'); // replace with your Usercentrics ID
    document.head.appendChild(loader);

    // 3. Example: Load Google Analytics after consent
    function loadAnalytics() {
        var ga = document.createElement('script');
        ga.src = 'https://www.googletagmanager.com/gtag/js?id=UA-XXXXXX-X'; // replace with your GA ID
        ga.async = true;
        document.head.appendChild(ga);

        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'UA-XXXXXX-X');
    }

    // 4. Wait until Usercentrics is initialized and check consent
    window.addEventListener('UC_UI_INITIALIZED', function() {
        if(window.UsercentricsConsent && window.UsercentricsConsent.given('analytics')) {
            loadAnalytics();
        }
    });
})();

