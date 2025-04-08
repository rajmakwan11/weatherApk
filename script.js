    const form = document.getElementById("form");
    
    form.addEventListener("submit",(event)=>{
    
        event.preventDefault();
        const loc = document.getElementById("location").value;
        localStorage.setItem("userLocation", loc);
        window.location.href = "./weather.html"

        
    })

    