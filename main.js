https://teachablemachine.withgoogle.com/models/LVm-7XKJp/
function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/LVm-7XKJp/model.json',modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}
function gotResults(error,results){
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) +1;
        random_number_g = Math.floor(Math.random() * 255) +1;
        random_number_b = Math.floor(Math.random() * 255) +1;

        document.getElementById("result_label").innerHTML = 'I can hear - ' + results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Accuracy - ' + (results[0].confidence*100).toFixed(2)+"%";
        document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        
        img = document.getElementById('Animal_kingdom');
        img1 = document.getElementById('Animal_kingdom');
        img2 = document.getElementById('Animal_kingdom');
        img3 = document.getElementById('Animal_kingdom');

        if (results[0].label == "bark") {
            img.src = '78069-dog-tail-wag (1).gif';
            
        } else if (results[0].label == "meow") {
            img1.src = '96843-sleepy-cat (1).gif';
        } else if (results[0].label == "moo") {
            img2.src = '7248-vaca-h (1).gif';
            
        } else  {
            img3.src = '36352-lion-running (1).gif';      
        }
    }
}
