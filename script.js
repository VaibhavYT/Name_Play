
//<button onclick="myFunction()">Try it</button>
//document.getElementById('input-botton').onclick(myFunction());
function myFunction() {
    let person =document.getElementById("input-text").value;
    let person2 = document.getElementById("input-text2").value;
    if(person == null || person == ""){
        alert('Please Enter Your Name');
    }
    else if(person=='Vaibhav' && person2=='Riya' || person=='vaibhav' && person2=='riya'){
        window.alert('Ab itna bhi Khas nhi hu😁❤️');
    }
    else if(person2=='Riya' || person2=='riya'){
        window.alert('Bhabhi Hai Tumhari 😁✌️');
    }
    else if(person=='Arjun' && person2 == 'Palakh' || person == 'arjun' && person2 == 'palakh' || person=='Arjun' && person2=='Palak' || person=='arjun' &&  person2=='palak'){
        window.alert("Sallleeeh Nakli chapri berojgar");
    }
    
    else{
    //alert("I am an ${person} ");
    window.alert(person + " Padhai Kro 😑");
    }
  }

