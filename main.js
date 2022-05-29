function start(){
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/5fRag6KTX/model.json',modelready);
}

function modelready(){
    classifier.classify(gotresults);
}

function gotresults(error,results)
{
if(error)
{
    console.error(error);
}
else
{
    console.log(results);
    random_number_r=Math.floor(Math.random() * 255)+1;
    random_number_g=Math.floor(Math.random() * 255)+1;
    random_number_b=Math.floor(Math.random() * 255)+1;

    document.getElementById("result_label").innerHTML='I can hear:' +results[0].label;
    document.getElementById("result_confidence").innerHTML='Accuracy : '+(results[0].confidence*100).toFixed(2)+"%";
    document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
    document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
    img1=document.getElementById('dog_bark.gif');
    img2=document.getElementById('meow_cat.gif');
    img3=document.getElementById('lion-roar.gif');
    img4=document.getElementById('duck_quack.gif');
    img5=document.getElementById('bird_chirp.gif');
    img6=document.getElementById('listen.gif');


    
      if (results[0].label =="barking")
    {
        img1.src='dog_bark.gif';
    }

    else  if (results[0].label =="meow")
    {
        img2.src='meow_cat.gif';
    }

    else  if (results[0].label =="roar")
    {
        img3.src='lion-roar.gif';
    }

    else  if (results[0].label =="quack")
    {
        img4.src='duck_quack';
    }

    else  if (results[0].label =="chirping")
    {
        img5.src='bird_chirp';
    }
    
    else
    {
      img6.src='listen.gif';  
    }
}

}
