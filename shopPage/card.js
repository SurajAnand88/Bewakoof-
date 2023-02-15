function card(element, index) {
  if (element.rating == undefined) {
    element.rating = "4.5";
  }

  var s = `
  <div class="col-6 col-md-4 mb-4 position-relative p-0" >
      <div class="mx-2 position-relative">
          <span id="tag" class="position-absolute top-0 opacity-75  text-white px-2" style="background-color:${element.tagColor};font-size:9px;left:0;">${element.tag}</span>
          <img src="${element.image}" class="image-fluid w-100" id="product${index}">
          <span class="position-absolute opacity-75 bg-white" style="bottom:20px;left:0">${element.rating}<i class="fa-solid fa-star ms-1" style="color:#bfb11e;"></i></span>
  
      </div>
      <div class="ps-2">
          <div class="row">
              <div class="col-10 mt-2">
                  <p class="fw-bold mt-0 mb-1" style="opacity:0.9;">${element.brand}</p>
                  <p class="text-truncate mt-0 mb-1">${element.title}</p>
              </div>
              <div class="col-2 ps-0 pt-4">
                  <p><i class="fa-regular fa-2x fa-heart "></i></p>
              </div>
              
          </div>
          <p class="mb-2">
              <span class="" style="font-size:1.5rem; font-weight:600">${element.price}</span>
              <span class="text-decoration-line-through" style="font-size:12px;">${element.orignal_price}</span>
          </p>
          <p class="ms-0 mt-0 ps-3 py-1"  style="font-size:11px; width:70%;background-color:#F7F7F7; font-weight:600">${element.tribe}</p>
      </div>
    </div>  
  `;
  var f = function (element) {
    return element;
  };
  return [s, f];
}

export default card;
