---
layout: page
title: projects
permalink: /projects/
description: Selected software, code and open-access data projects.
nav: true
nav_order: 2
horizontal: false
---

To make those category headings black and ensure they stand out, you can apply inline CSS directly to the <h2> tags. In the al-folio theme, these headings often inherit a theme color (like blue or grey), so forcing color: black !important; will ensure they stay dark regardless of the site's color scheme.

Here is the updated code for your projects.md page. I have applied the styling to all the category headers for consistency.

Markdown
---
layout: page
title: projects
permalink: /projects/
description: Selected software, code and open-access data projects.
nav: true
nav_order: 2
horizontal: false
---

<div class="projects">

  <h1 class="display-4 font-weight-bold" style="color: black;">Computational Work</h1>
  <p class="lead">Advancing chemical imaging through algorithms and open-source tools.</p>

  <h2 class="category mt-4" style="color: black !important; border-bottom: 1px solid #333; padding-bottom: 5px;">Software</h2>
  {% assign software = site.projects | where: "category", "Software" | sort: "importance" %}
  <div class="row row-cols-1 row-cols-md-2">
    {% for project in software %}{% include projects.liquid %}{% endfor %}
  </div>

  <h2 class="category mt-4" style="color: black !important; border-bottom: 1px solid #333; padding-bottom: 5px;">Code</h2>
  {% assign code = site.projects | where: "category", "Code" | sort: "importance" %}
  <div class="row row-cols-1 row-cols-md-2">
    {% for project in code %}{% include projects.liquid %}{% endfor %}
  </div>

  <h2 class="category mt-4" style="color: black !important; border-bottom: 1px solid #333; padding-bottom: 5px;">Data</h2>
  {% assign data = site.projects | where: "category", "Data" | sort: "importance" %}
  <div class="row row-cols-1 row-cols-md-2">
    {% for project in data %}{% include projects.liquid %}{% endfor %}
  </div>

  <hr class="mt-5 mb-5" style="border-top: 3px solid #000;">

  <h1 class="display-4 font-weight-bold" style="color: black;">Experimental Work</h1>
  <p class="lead">Multi-scale characterisation of functional materials and devices.</p>

  <h2 class="category mt-4" style="color: black !important; border-bottom: 1px solid #333; padding-bottom: 5px;">Li-ion batteries</h2>
  {% assign batteries = site.projects | where: "category", "Li-ion batteries" | sort: "importance" %}
  <div class="row row-cols-1 row-cols-md-2">
    {% for project in batteries %}{% include projects.liquid %}{% endfor %}
  </div>

  <h2 class="category mt-4" style="color: black !important; border-bottom: 1px solid #333; padding-bottom: 5px;">Heterogeneous Catalysis</h2>
  {% assign catalysis = site.projects | where: "category", "Heterogeneous Catalysis" | sort: "importance" %}
  <div class="row row-cols-1 row-cols-md-2">
    {% for project in catalysis %}{% include projects.liquid %}{% endfor %}
  </div>

  <h2 class="category mt-4" style="color: black !important; border-bottom: 1px solid #333; padding-bottom: 5px;">Fuel Cells and Membrane Reactors</h2>
  {% assign fuelcells = site.projects | where: "category", "Fuel Cells and membrane reactors" | sort: "importance" %}
  <div class="row row-cols-1 row-cols-md-2">
    {% for project in fuelcells %}{% include projects.liquid %}{% endfor %}
  </div>

</div>

