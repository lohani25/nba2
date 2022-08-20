async function nbaPlayerGenerator() {
    const response = await fetch('https://www.balldontlie.io/api/v1/players');
    // const data = await response.json();
    // const user = data.id[0];
    console.log(response);
    // displayUser(user);

}

// function displayUser(user) {
//     const name = document.getElementById('name');
//     const gender = document.getElementById('gender');
//     const weight= document.getElementById('weight');
//     const position= document.getElementById('position');
//     const location = document.getElementById('location');
//     // const image = document.getElementById('image');
    
//     name.innerText = ` ${first_name} ${last_name}`;
//     gender.innerText = `${user.gender}`;
//     position.innerText = `${position}`;
//     weight.innerText = `${weight}`;
//     location.innerText = `${city}`;
//     // image.setAttribute(`src`,`${user.picture.large}`);
// }

nbaPlayerGenerator();