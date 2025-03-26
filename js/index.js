let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "";  
  dots[slideIndex-1].className += " active";
}

const locations = [
  {
      name: "Shida Kartli",
      description: "Shida Kartli is a central region of Georgia, known for its historical and cultural significance. It is home to Gori, the birthplace of Joseph Stalin, and the ancient cave city of Uplistsikhe, which dates back to the early Iron Age. The region is famous for its fertile lands, producing high-quality fruits and vegetables, especially apples. Shida Kartli also holds strategic importance, with key trade routes passing through its territory.",
      image: "./assets/map9.jpg"
  },
  {
      name: "Abkhazia",
      description: "Abkhazia is a region on the eastern coast of the Black Sea, known for its stunning mountains, lush forests, and subtropical climate. It has a rich cultural heritage, ancient historical sites, and beautiful seaside resorts. The region is famous for its diverse landscapes, including Lake Ritsa and the picturesque Gagra and Sukhumi areas. Despite political complexities, Apkhazeti remains an important part of Georgia's history and identity.",
      image: "./assets/map1.jpg"
  },
  {
    name: "Samegrelo-Zemo Svaneti",
    description: "Samegrelo-Zemo Svaneti is a diverse region in western Georgia, known for its stunning mountains, rich culture, and ancient traditions. It consists of Samegrelo, famous for its delicious cuisine (like elarji and sulguni cheese), and Zemo Svaneti, home to the breathtaking Ushguli, one of Europe's highest settlements. The region boasts Mestia, a hub for Svan culture, with medieval Svan towers and dramatic landscapes. With its Black Sea coastline in Anaklia and the rugged peaks of the Caucasus, it is one of Georgia’s most scenic and historically significant regions.",
    image: "./assets/map2.jpg"
  },
  {
    name: "Guria",
    description: "Guria is a small but vibrant region in western Georgia, known for its tea plantations, rich folklore, and hospitality. It has a subtropical climate and is famous for producing high-quality tea and citrus fruits. The region is also known for its unique traditions, including the fast-paced Gurian polyphonic singing, recognized by UNESCO. Guria’s Black Sea resort town of Ureki is famous for its magnetic black sand beaches, believed to have therapeutic properties. The region also offers beautiful mountain landscapes, mineral springs, and a strong equestrian culture, with traditional horse racing festivals being a local highlight.",
    image: "./assets/map3.jpg"
  },
  {
    name: "Adjara",
    description: "Adjara is a picturesque region in southwestern Georgia, located along the Black Sea coast. It is famous for its subtropical climate, beautiful beaches, and lush green mountains. The regional capital, Batumi, is a vibrant seaside city known for its modern architecture, historic old town, and lively nightlife. Adjara is also rich in culture and history, with landmarks like the Gonio Fortress, which dates back to Roman times, and the scenic Machakhela and Mtirala National Parks. The region is well known for its unique cuisine, especially Adjarian khachapuri, a boat-shaped cheese-filled bread topped with a runny egg.",
    image: "./assets/map6.jpg"
  },
  {
    name: "Kvemo Kartli",
    description: "Kvemo Kartli is a diverse region in southern Georgia, known for its multicultural population, historical landmarks, and rich agriculture. The regional center, Rustavi, is an important industrial city, while the surrounding areas are famous for fertile lands that produce a variety of crops. Kvemo Kartli is home to several ancient and medieval sites, including Birtvisi Canyon, a stunning natural fortress, and Bolnisi Sioni, one of Georgia’s oldest churches with inscriptions in the ancient Georgian script. The region’s mix of cultures, beautiful landscapes, and historical significance make it a unique part of Georgia.",
    image: "./assets/map10.jpg"
  },
  {
    name: "Samtskhe Javakheti",
    description: "Samtskhe-Javakheti is a historical and geographical region in southern Georgia, known for its rich cultural heritage, diverse landscapes, and historical significance. The region is characterized by mountainous terrain, including the Lesser Caucasus mountain range, and is home to several natural landmarks such as lakes, rivers, and forests. Samtskhe-Javakheti also boasts significant architectural sites, including ancient fortresses, monasteries, and churches, reflecting the area's long history. The region is predominantly inhabited by Georgians, Armenians, and other ethnic groups, making it culturally diverse. It offers opportunities for tourism, especially for those interested in nature, history, and traditional Georgian culture.",
    image: "./assets/map7.jpg"
  },
  {
    name: "Kakheti",
    description: "Kakheti is an eastern Georgian region known for its ancient wine-making tradition, scenic vineyards, and historic sites. Famous for its beautiful landscapes and towns like Telavi and Sighnaghi, Kakheti is a cultural hub with landmarks such as the Alaverdi Cathedral and Gremi Fortress. It’s a popular destination for wine lovers and those seeking a blend of nature and history.",
    image: "./assets/map12.jpg"
  },
  {
    name: "Imereti",
    description: "Imereti is a region in western Georgia, known for its lush landscapes, rich cultural heritage, and historical sites. Located between the Greater Caucasus and Lesser Caucasus mountain ranges, Imereti is famous for its fertile plains, picturesque rivers, and the beautiful city of Kutaisi, which is one of Georgia’s oldest cities. The region is also home to significant historical and architectural landmarks, including the Bagrati Cathedral and Gelati Monastery, both UNESCO World Heritage Sites. Imereti is celebrated for its delicious cuisine, including traditional dishes such as khachapuri (cheese-filled bread) and mtsvadi (grilled meat).",
    image: "./assets/map8.jpg"
  },
  {
    name: "Racha-Lechkhumi and Kvemo Svaneti",
    description: "Racha-Lechkhumi and Kvemo Svaneti is a mountainous region in northwestern Georgia, known for its stunning natural landscapes, ancient villages, and cultural heritage. The area is characterized by its rugged terrain, with the Greater Caucasus mountains creating dramatic scenery, and is home to deep forests, fast-flowing rivers, and high-altitude meadows.",
    image: "./assets/map5.jpg"
  },
  {
    name: "Mtskheta-Mtianeti",
    description: "Mtskheta-Mtianeti is a historical and geographical region in central and northeastern Georgia, known for its rich cultural heritage, historical landmarks, and beautiful landscapes. The region combines the ancient city of Mtskheta, a UNESCO World Heritage Site, with the mountainous areas of Mtianeti, offering a diverse range of experiences.",
    image: "./assets/map11.jpg"
  }
  
];

function showInfo(index) {
  document.getElementById("infoCard").style.display = "block";
  document.getElementById("infoTitle").innerText = locations[index].name;
  document.getElementById("infoDesc").innerText = locations[index].description;
  document.getElementById("infoImage").src = locations[index].image;
}

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}