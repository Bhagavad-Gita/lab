//only shit nothing here

function translateText() {
    const translationSelect = document.getElementById('lang');
    const selectedLanguage = translationSelect.value;

    if (selectedLanguage === 'sn') {
        document.getElementById('api-response-text').innerHTML = 'धृतराष्ट्र उवाच : <br> धर्मक्षेत्रे कुरुक्षेत्रे समवेता युयुत्सवः |  <br> मामकाः पाण्डवाश्चैव किमकुर्वत सञ्जय ||१||.';
    } else{
        document.getElementById('api-response-text').innerText = 'Dhritarashtra said: O Sanjay, after gathering on the holy field of Kurukshetra, and desiring to fight, what did my sons and the sons of Pandu do?';
    }
  }

  function sendRandomRequest() {
    document.getElementById('api-response-text').innerText = 'न काङ्क्षे विजयं कृष्ण न च राज्यं सुखानि च | \n किं नो राज्येन गोविन्द किं भोगैर्जीवितेन वा || 32||';
  }

  function sendSequentialRequest() {
    document.getElementById('api-response-text').innerText = 'सञ्जय उवाच। \n दृष्ट्वा तु पाण्डवानीकं व्यूढं दुर्योधनस्तदा। \n आचार्यमुपसङ्गम्य राजा वचनमब्रवीत् ॥2॥'; //here works api
  }