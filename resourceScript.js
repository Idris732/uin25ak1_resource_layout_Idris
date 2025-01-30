  function showResource(category) {
    let resourceContent = "";
    const requestedResource = resources.filter(
      resource => resource.category === category
    );
  
    requestedResource.map(resource => {
    resourceContent += `
    <article id="resource-article">
        <h1>${resource.category}</h1>
        <p> ${resource.text}</p>
        <ul>${
        resource.sources.map(source => `
        <li><a target="_blank" href=${source.url}>${source.title}</a></li>
        `).join('')
     } </ul>
  
    </article>
    `;
    const main = document.getElementsByTagName("main");
    main[0].innerHTML = resourceContent;
    }
)}

showResource("HTML");