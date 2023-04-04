
//code below loads consentManagerConfig object and specifies content popup contains. Need to update with your own writeKey and what container code should be injected to, I am using empyty div 

//note, may need to view demo in debug mode to save tracking preferences in browser
/*
<script>
window.consentManagerConfig = function(exports) {
    return {
     //Need to update with the container where you want Consent Manager to load
      container: '#consent-manager',
      //Need to update with you 
      writeKey: '338EFbDMpz7Sp9D4LCj2VLxoCbv4ixG5',
      bannerContent:
        'Consent manager is awesome! We use cookies (and other similar technologies) to collect data to improve your experience on our site. Also, Segment is Awesome',
      bannerSubContent: 'You can change your preferences at any time.',
      preferencesDialogTitle: 'Website Data Collection Preferences',
      preferencesDialogContent:
        'We use data collected by cookies and JavaScript libraries to improve your browsing experience, analyze site traffic, deliver personalized advertisements, and increase the overall performance of our site.',
      cancelDialogTitle: 'Are you sure you want to cancel?',
      cancelDialogContent:
        'Your preferences have not been saved. By continuing to use our website, you are agreeing to our Website Data Collection Policy',
      closeBehavior: 'accept',
    }
};


 </script>
 <!--script that loads Prebuilt Consent Manager UI via Preact-->
<script src="https://unpkg.com/@segment/consent-manager@5.0.0/standalone/consent-manager.js"> </script>

 <!--Load Analytics.js-->


<!--Javascript that controls form submits and mapping user input data to Segment Analytics.js methods-->
<script type="text/javascript">
  function identify(e){
    e.preventDefault();
    var form = e.target;
    var email = form["email"].value;
    var fullname = form["fullname"].value;
    var destination = form["destination"].value;
    var details = form["details"].value;
    var user = {
        email: email, 
        name: fullname, 
        destination: destination, 
        details: details
    };
    analytics.identify('1234', {
        email: email, 
        name: fullname
    });
    analytics.track('destination submitted', user, , function() {
        window.location.href = "";
    });
    analytics.page('Home', user, {
      url: "/" 
    });
    analytics.alias('507f191e81');
    analytics.group("0e8c78ea9d97a7b8185e8632", {
          name: "Initech", 
          industry: "Technology",
          employees: 329, 
          plan: "enterprise", 
          "total billed": 830
          });
  }
</script>
*/


