---
title: Projects
subtitle: Check out our research projects
layout: page
show_sidebar: false
# sort: price
permalink: /projects/
--- 

<div class="projects">

{% if site.projects != blank %}

<!-- Current Projects -->
{% assign current = site.projects | where: "status", "current" %}
{% if current.size > 0 %}
<h2>Current Projects</h2>
<div class="columns is-multiline">
{% for product in current %}
  <div class="column is-4-desktop is-6-tablet">

    <a href="{{ product.url | relative_url }}">

      <div class="card">

        {% if product.image %}
        <div class="card-image">
          <figure class="image is-4by3">
            <img src="{{ product.image }}" alt="{{ product.title }}" />
          </figure>
        </div>
        {% endif %}
        <div class="card-content">

          <p class="title is-4">{{ product.title }}</p>
          <p class="subtitle is-4">{{ product.subtitle }}</p>  
          <p class="title is-5 has-text-right">{{ product.price }}</p>

        </div>
      </div>

    </a>

  </div>
{% endfor %}
</div>
{% endif %}

<!-- Past Projects -->
{% assign past = site.projects | where: "status", "past" %}
{% if past.size > 0 %}
<h2>Past Projects</h2>
<div class="columns is-multiline">
{% for product in past %}
  <div class="column is-4-desktop is-6-tablet">

    <a href="{{ product.url | relative_url }}">

      <div class="card">

        {% if product.image %}
        <div class="card-image">
          <figure class="image is-4by3">
            <img src="{{ product.image }}" alt="{{ product.title }}" />
          </figure>
        </div>
        {% endif %}
        <div class="card-content">

          <p class="title is-4">{{ product.title }}</p>
          <p class="subtitle is-4">{{ product.subtitle }}</p>  
          <p class="title is-5 has-text-right">{{ product.price }}</p>

        </div>
      </div>

    </a>

  </div>
{% endfor %}
</div>
{% endif %}
{% endif %}

</div>
