fetch("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1 ")
    .then(responce => responce.json())
    .then(data => {
        mainarr = data.results
            // console.log(mainarr)
        mainarr.map((item) => {
            let pathlink = "https://image.tmdb.org/t/p/w1280"
            document.getElementById('showimg').innerHTML += `<div class="card mb-3" style="max-width: 540px;">
                                                             <div class="row g-0">
                                                             <div class="col-md-4">
                                                             <img src="${pathlink+item.poster_path}" class="img-fluid rounded-start" alt="...">
                                                             </div>
                                                             <div class="col-md-8">
                                                             <div class="card-body">
                                                             <h5 class="card-title">${item.title}</h5>
                                                             <p class="card-text"><small class="text-muted">${item.release_date}</small></p>
                                                             </div>
                                                            </div>
                                                          </div>
                                                        </div> <br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp`
        })
    })


// `<div class="card"> <a>
//             <h6>${item.release_date}</h6>
//             <img src="${pathlink+item.poster_path}">
//            </a>
//            <h6>${item.title}</h6>
//                                                             </div>`