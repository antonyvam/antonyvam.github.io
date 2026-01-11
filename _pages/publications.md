---
layout: page
title: publications
permalink: /publications/
description: Publications by categories in reversed chronological order
nav: true
nav_order: 3
---

## Preprints

<div class="publications">
{% bibliography -f papers -q @*[pubtype =preprints] %}
</div>

## Journal papers

<div class="publications">
{% bibliography -f papers -q @*[pubtype =papers] %}
</div>

### Book chapters
<div class="publications">
{% bibliography -f papers -q @*[pubtype =books] %}
</div>

<div style="text-align: left">
  <nobr>(AO): </nobr> Alphabetical order.<br>
  <nobr>(CO): </nobr> Contribution order.<br>
  <nobr>(LAPIO): </nobr> Lead author, Alphabetical order, Principal Investigator as last author.<br>
</div>