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

  <h1 class="display-4 font-weight-bold">Computational Work</h1>
  <p class="lead">Advancing chemical imaging through algorithms and machine learning approaches.</p>

  <h2 class="category mt-4">Software</h2>
  {% assign software = site.projects | where: "category", "Software" | sort: "importance" %}
  <div class="row row-cols-1 row-cols-md-2">
    {% for project in software %}{% include projects.liquid %}{% endfor %}
  </div>

  <h2 class="category mt-4">Code</h2>
  {% assign code = site.projects | where: "category", "Code" | sort: "importance" %}
  <div class="row row-cols-1 row-cols-md-2">
    {% for project in code %}{% include projects.liquid %}{% endfor %}
  </div>

  <h2 class="category mt-4">Data</h2>
  {% assign data = site.projects | where: "category", "Data" | sort: "importance" %}
  <div class="row row-cols-1 row-cols-md-2">
    {% for project in data %}{% include projects.liquid %}{% endfor %}
  </div>

  <hr class="mt-5 mb-5" style="border-top: 3px solid #eee;">

  <h1 class="display-4 font-weight-bold">Experimental Work</h1>
  <p class="lead">Multi-scale characterisation of functional materials and devices.</p>

  <h2 class="category mt-4">Li-ion batteries</h2>
  {% assign batteries = site.projects | where: "category", "Li-ion batteries" | sort: "importance" %}
  <div class="row row-cols-1 row-cols-md-2">
    {% for project in batteries %}{% include projects.liquid %}{% endfor %}
  </div>

  <h2 class="category mt-4">Heterogeneous Catalysis</h2>
  {% assign catalysis = site.projects | where: "category", "Heterogeneous Catalysis" | sort: "importance" %}
  <div class="row row-cols-1 row-cols-md-2">
    {% for project in catalysis %}{% include projects.liquid %}{% endfor %}
  </div>

  <h2 class="category mt-4">Fuel Cells and Membrane Reactors</h2>
  {% assign fuelcells = site.projects | where: "category", "Fuel Cells and membrane reactors" | sort: "importance" %}
  <div class="row row-cols-1 row-cols-md-2">
    {% for project in fuelcells %}{% include projects.liquid %}{% endfor %}
  </div>

</div>
