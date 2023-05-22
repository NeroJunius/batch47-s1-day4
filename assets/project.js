let blogs = []

function getBlog(event){
    event.preventDefault()

    let title = document.getElementById("title").value
    let startDate = document.getElementById("startDate").value
    let endDate = document.getElementById("endDate").value
    let projectDescription = document.getElementById("projectDescription").value
    let nodeCheck = document.getElementById("nodeCheck").checked
    let nextCheck = document.getElementById("nextCheck").checked
    let typeCheck = document.getElementById("typeCheck").checked
    let reactCheck = document.getElementById("reactCheck").checked
    let imageProject = document.getElementById("imageProject").files
    console.log(imageProject)
    imageProject = URL.createObjectURL(imageProject[0])

    let blog = {
        title,
        startDate,
        endDate,
        projectDescription,
        nodeCheck,
        nextCheck,
        typeCheck,
        reactCheck,
        imageProject,
        author: "Nafiisan N. Achmad",
        postedAt: new Date()
    }

    blogs.push(blog)    
    console.log(blogs)
    renderBlog()
}

function renderBlog(){
  for(let i = 0; i < blogs.length; i++) {
    document.getElementById("project").innerHTML += `
    <div class="listProject">
        <div class="itemProject">
          <div class="header">
            <img src="images/assasin.png" alt="assasin" class="imageP"/>
            <div class="titleP">
              <b>
              <a href="project-detail.html" target="_blank"
              >Ameno ameno latire Latiremo Dori me</a>
            </b>
            </div>
            <div class="detailP">
              12 Jul 2021 22:30 WIB | Nafiisan N. Achmad
            </div>
            <div style="float:right; margin: 10px">
              <p style="font-size: 15px; color:rgb(75, 70, 70)">1 minutes ago</p>
            </div>
          </div>
          <div class="projectContent">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis risus ut mi euismod sodales. Mauris id quam ut massa sodales faucibus consectetur sit amet dolor. Fusce lobortis velit lectus, et consequat arcu convallis at. Maecenas ac interdum tortor. 
              Sed rhoncus elementum magna non mollis. Fusce pellentesque ligula eu purus dignissim, in placerat tortor lacinia. Sed at luctus diam. Duis pulvinar quam sem, quis tempus felis euismod id.
            </p>
          </div>
          <div class="btnGroups">
              <button class="btn">Edit</button>
              <button class="btn">Delete</button>
          </div>
        </div>
      </div> 
    `
  }
    
}
  
    